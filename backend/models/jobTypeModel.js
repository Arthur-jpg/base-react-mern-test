/*
Models é para criar os schemas do banco de dados

Um schema é basciamente uma regra no banco de dados, no primeiro caso vamos fazer uma regra para o usuário, então ele terá o primeiro nome obrigatório e assim vai.
*/
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const jobTypeSchema = new mongoose.Schema({
    jobTypeName: {
        type: String,
        trim: true,
        require: [true, 'O Nome é obrigatório'],
        maxlenght: 70,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    }

}, {timestamps:true}) // timestamp é basicamente guardar a hora e o dia que o usuário foi criado


module.exports = mongoose.model("JobType", jobTypeSchema);