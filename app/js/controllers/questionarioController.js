const HttpRequests = require("../services/httpRequestsService")
const InputService = require("../services/inputService")
const Questionario = require("../models/questionario")
const Questionarios = require('../models/questionarios')
const MensagemView = require("../views/mensagemView")
const QuestionarioView = require("../views/questionariosView")
let index = 0

class QuestionarioController {
    constructor(){
        this.questionarios = new Questionarios()
        this.questionariosView = new QuestionarioView()
        this.httpRequest = new HttpRequests()
        this.mensagemView = new MensagemView()
        this.inputService = new InputService()
    } 



    async criarNovo(){

       
        this.titulo = $('#tittle-input')

        let user = this.inputService.inputUser()

        let perguntas = this.inputService.inputPerguntas()

        const questionario = new Questionario(user, this.titulo.val(), perguntas)

        this.questionarios.adiciona(questionario)

        this.mensagemView.exibirMensagem('Criado com sucesso', 'alert-success')

       
        questionario.id = index

        index++

        this.limpaForm()
        await this.httpRequest.postQuestionario(questionario)

    }

    limpaForm(){
        $('#quest-form').trigger('reset')
    }
    
    resetForm(){
        $('#resposta-form').trigger('reset')
    }

    submterForm(){
        this.criarNovo()
    }

    gerarFormParaQuestionario(){
        this.mensagemView.limpaMensagem()
        this.questionariosView.novoQuestionarioView()
    }


    listaQuestionarios(){
       this.mensagemView.limpaMensagem()
       this.questionariosView.listaQuestionarios(this.questionarios)
    }

    listaQuestionariosRespondidos(){
        this.mensagemView.limpaMensagem()

        let questionariosRespondidos = new Questionarios()

        this.questionarios.questionarios.map( questionario =>{

            if(questionario.respondido == true){
                this.mensagemView.limpaMensagem()
                questionariosRespondidos.adiciona(questionario)
            }
        })

        this.questionariosView.listaQuestionariosRespondidos(questionariosRespondidos)
        return questionariosRespondidos
     }

    async listaQuestionariosHttp(){
        this.mensagemView.limpaMensagem()
        await this.httpRequest.getQuestionarios()
    }

    buscaQuestionarioPor(id){
        return this.questionarios.questionarios[id]
    }

    verQuestionario(id){
        let questionario = this.buscaQuestionarioPor(id)
        this.questionariosView.exibirQuestionario(questionario)
    }

    verQuestionarioRespondido(id){
        let questionario = this.buscaQuestionarioPor(id)

        let respostas = []

        questionario.respostas.map(resposta => respostas.push(resposta))

        this.questionariosView.exibirQuestionarioRespondido(questionario, respostas)
    
    }

    async responderQuestionario(id){
        let respostas = this.inputService.inputRespostas()

        let questionarioRespondido = this.buscaQuestionarioPor(id)

        questionarioRespondido.respostas.push(respostas)

        questionarioRespondido.respondido = true

        this.mensagemView.exibirMensagem('Respondido com sucesso', 'alert-success')

        this.resetForm()

    }


}   
      

module.exports = QuestionarioController






