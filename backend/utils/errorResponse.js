class ErrorResponse extends Error{
    constructor(message, codeStatus){
        super(message);
        // vamos customizar os erros e ter o status deles
        // vamos usar essa classe para simplificar na hora de handle o error de outros lugares no código
        this.codeStatus = codeStatus;
    }
}

module.exports = ErrorResponse;