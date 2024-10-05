const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse')


exports.signup = async (req, res, next) => {
    const {email} = req.body;
    const userExist = await User.findOne({email})
    if (userExist){
        return next(new ErrorResponse('E-mail já existe', 400))
    }
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}
exports.signin = async (req, res, next) => {

    try {
        const {email, password} = req.body;
        // validation
        if (!email){
            return next(new ErrorResponse('Entre um email', 403))
        }
        if (!password){
            return next(new ErrorResponse('Entre uma senha', 403))
        }

        //check user email
        const user = await User.findOne({email})
        // se não for achado o email do usuário na base de dados será produzido um erro
        if (!user){
            return next(new ErrorResponse('Credenciais inválidas', 400))
        }
        // check password

        /*
            Nessa fase o programa já tem a password que foi tirada o body, depois será comparado com a função comparepassword que está no arquivo userModel. Lá ela usa uma função do bycript para comparar a password do database com a colocada pela pessoa que está fazendo login
        */

        const isMatched = await user.comparePassword(password)
        if (!isMatched){
            return next(new ErrorResponse('Credenciais inválidas', 400))
        }

        sendTokenResponse(user, 200, res)

    } catch (error) {
        next(error);
    }
}

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res.status(codeStatus)
    .cookie('token', token, {maxAge: 60*60*1000, httpOnly: true} ).json({success: true, token, user})
    // o cookie vai expirar em uma hora
}

// logout
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: 'logged out'
    })
}

// user profile
exports.userProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('-password')
    res.status(200).json({
        success: true,
        user
    })
}