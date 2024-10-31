/*
Models é para criar os schemas do banco de dados

Um schema é basciamente uma regra no banco de dados, no primeiro caso vamos fazer uma regra para o usuário, então ele terá o primeiro nome obrigatório e assim vai.
*/
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: [true, 'O título é obrigatório'],
        maxlenght: 70,
    },
    description: {
        type: String,
        trim: true,
        require: [true, 'A descrição é obrigatória'],
    },
}, {timestamps:true}) // timestamp é basicamente guardar a hora e o dia que o usuário foi criado


module.exports = mongoose.model("Job", jobSchema);