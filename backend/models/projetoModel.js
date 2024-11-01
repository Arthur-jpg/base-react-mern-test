/*
Models é para criar os schemas do banco de dados

Um schema é basciamente uma regra no banco de dados, no primeiro caso vamos fazer uma regra para o usuário, então ele terá o primeiro nome obrigatório e assim vai.
*/
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const projetoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: [true, 'O título é obrigatório'],
        maxlenght: 70,
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'A descrição é obrigatória'],
    },
    tecnologia: {
        type: String,
        trim: true,
        required: [true, 'Tecnologias são necessárias']
    },
    unidade: {
        type: String,
    },
    periodo: {
        type: String,  
    },
    jobType: {
        type: ObjectId,
        ref: "JobType",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    }

}, {timestamps:true}) // timestamp é basicamente guardar a hora e o dia que o usuário foi criado


module.exports = mongoose.model("Job", projetoSchema);