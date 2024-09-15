class ErrorResponse extends Error{
    constructor(message, codeStatus){
        super(message);
        // vamos customizar os erros e ter o status deles
        this.codeStatus = codeStatus;
    }
}

module.exports = ErrorResponse;