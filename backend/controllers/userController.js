const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

// carregar todos os usuarios
exports.allUsers = async (req, res, next) => {
    //permitir pagination
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
    const count = await User.find({}).estimatedDocumentCount();

    try {
        const users = await User.find().sort({createAt: -1}).select('-password')
        .skip(pageSize * (page-1))
        .limit(pageSize)
        res.status(200).json({
            sucess: true,
            users,
            page,
            ppages: Math.ceil(count/pageSize),
            count
        })
        next();
    } catch (error) {
        return next(error);
    }
}

// carregar usuário único
exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            sucess: true,
            user
        })
        next();
    } catch (error) {
        return next(error);
    }
}
// editar usuário
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json({
            sucess: true,
            user
        })
        next();
    } catch (error) {
        return next(error);
    }
}

// delete usuário
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        res.status(200).json({
            sucess: true,
            message: "Usuário foi deletado"
        })
        next();
    } catch (error) {
        return next(error);
    }
}