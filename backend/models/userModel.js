/*
Models é para criar os schemas do banco de dados

Um schema é basciamente uma regra no banco de dados, no primeiro caso vamos fazer uma regra para o usuário, então ele terá o primeiro nome obrigatório e assim vai.
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        require: [true, 'Obrigatório'],
        maxlenght: 32,
    },
    lastName: {
        type: String,
        trim: true,
        require: [true, 'Obrigatório'],
        maxlenght: 32,
    },
    email: {
        type: String,
        trim: true,
        require: [true, 'Obrigatório'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'       
        ]
    },
    password: {
        type: String,
        trim: true,
        require: [true, 'Obrigatório'],
        minlenght: [6, 'Obrigatório senha ter mais de 6 caracteres'],
        // unique: true,
    },
    role: {
        type: Number,
        default: 0,
        // o role basicamente é para saber qual o papel desse schema no na interação, para nesse caso o 0 é o cliente/usuário
    }
}, {timestamps:true}) // timestamp é basicamente guardar a hora e o dia que o usuário foi criado

// encrypting password before saving

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
    // vamos comparar a senha que foi entrada com a que está salva no database
    return await bcrypt.compare(enteredPassword, this.password)
}

// return a JWT token
userSchema.methods.getJwtToken = function (){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    })
}

module.exports = mongoose.model("User", userSchema);