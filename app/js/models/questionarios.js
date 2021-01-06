const Questionario = require("./questionario");


class Questionarios{

    constructor(){
        this.questionarios = []
    }

    adiciona(questionario){
        this.questionarios.push(questionario)
    }

    paraArray() {
        return [].concat(this.questionarios);
    }


}

module.exports = Questionarios