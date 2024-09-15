const express = require("express");
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error")

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

//MIDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
//para auth
app.use(cookieParser());
//Fazer requests para o backend
app.use(cors());

//error middleware
app.use(errorHandler);

// port
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})