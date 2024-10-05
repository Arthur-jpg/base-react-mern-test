const ErrorResponse = require('../utils/errorResponse')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {
        return next(new ErrorResponse('Não autorizado para acessar essa página', 401))
    }
    try {
        // verificar token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id)
        next()
    } catch (error) {
        return next(new ErrorResponse('Não autorizado para acessar essa página', 401))
    }
}

// middleware para o admin
exports.isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return next(new ErrorResponse('Acesso negado, você deve ser um admin', 401))
    }
    next()
}