const express = require("express");
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

// connection to the database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));
/*
Explicação: conexão do banco de dados. Esse comando aceita dois parametros. O primeiro sendo o link do database que foi dado pelo mongodb e o segundo são consifurações que a gnt aproveita e já coloca um status de erro e sucesso com console.log

*/


// port
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})