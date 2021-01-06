const QuestionarioController = require('../controllers/questionarioController')
const Usuario = require('./usuario')

class Questionario {

    constructor(user, titulo, perguntas){
        this.user = user
        this.titulo = titulo
        this.perguntas = perguntas
        this.respostas = []
        this.respondido = false
        this.id = 0
    }



    




    
    
}

module.exports = Questionario