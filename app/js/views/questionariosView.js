const MensagemView = require("./mensagemView");

class QuestionarioView {
 
    constructor(){
        this.mensagemView = new MensagemView()

    }


  novoQuestionarioView(){

    return   $('#option_selected').html(
    `
        <form id="quest-form">
            <div class="row ml-1 mt-1">
                <div class="col-6">
                    <h6>Titulo</h6>
                    <input type="tittle" class="form-control" id="tittle-input" required>  
                </div>

                <div class="col-6">
                    <h6>Usuario</h6>
                    <input type="user" class="form-control" id="user-input" required>
                </div>

                <div class="col-6">
                    <h6>Data</h6>
                    <input type="date" class="form-control" id="date-input" required>
                </div>

                <div class="col-6">
                    <h6>Geolocalização</h6>
                    <span>Latitude: </span><span id="latitude"></span>
                    <br><span>Longitude: </span> <span id="longitude"></span>                   
                    <br><button id="btn-geolocalizacao" class="btn btn-primary" type="button" required>Definir</button>
                </div>
                
                <div class="col-6">
                    <h6>Pergunta</h6>
                    <input name="perguntas[]" type="pergunta" class="form-control" required>
                </div>
            </div>

            
            <div class="d-flex justify-content-end mr-2 mb-2">
                <button id="btn-submit" class="btn btn-primary mr-3" type="submit">Salvar</button>
            </div>
            
        </form>   
    `)
  }

  exibirQuestionarioRespondido(questionario, respostas){
    return $('#option_selected').html(
    `
        <div class="card d-flex">
            <div class="card-header d-flex ml-2">
                <p class="questionario-info flex-column">Usuário: ${questionario.user.user}<p/>
                <p class="questionario-info flex-column">Titulo: ${questionario.titulo}<p>
                <p class="questionario-info flex-column">Latitude:${questionario.user.latitude}</p>
                <p class="questionario-info flex-column">Longitude:${questionario.user.longitude}</p>
                <p class="questionario-info flex-column">Data de cadastro: ${questionario.user.data}</p>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    ${questionario.perguntas.enunciados.map( (enunciado, index) => 
                    `
                        <li class="list-group-item">n.${index}) ${enunciado}</li>
                    `)}
                </ul>
            </div> 
        </div>

        <div class="d-flex justify-content-center">
            <h3 class="ml-2">Respostas Questionário</h3><br>
        </div>

        ${respostas.map((resposta) => 
        `
            <div class="card info-usuario d-flex">
                <div class="card-header d-flex ml-2">
                    <p class="questionario-info flex-column">Usuario: ${resposta.user.user}</p>
                    <p class="questionario-info flex-column">Data: ${resposta.user.data}</p>
                    <p class="questionario-info flex-column">Latitude:${resposta.user.latitude}</p>
                    <p class="questionario-info flex-column">Longitude:${resposta.user.longitude}</p>
                </div>
            
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        ${resposta.respostas.map((textoResposta, index) => 
                        `
                            <li class="list-group-item">n.${index}) ${textoResposta}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `)}
    `)
}



exibirQuestionario(questionario){
  
  return $('#option_selected').html(
    `
        <div class="card d-flex flex-row">
            <div class="card-header d-flex ml-2">
                <p class="questionario-info flex-row">Usuário: ${questionario.user.user}<p/>
                <p class="questionario-info flex-row">Titulo: ${questionario.titulo}<p>
                <p class="questionario-info flex-row">Latitude: ${questionario.user.latitude}</p>
                <p class="questionario-info flex-row">Longitude: ${questionario.user.longitude}</p>
                <p class="questionario-info flex-row">Data de cadastro: ${questionario.user.data}</p>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <h3>Responder Questionário</h3><br>
        </div>
        
        <form id="resposta-form">
            <div class="row ml-1 mt-1">
                <div class="col-6">
                    <h5>Usuario</h5>
                    <input type="user" class="form-control" id="user-input" required>
                </div>
                <div class="col-6">
                    <h5>Geolocalização</h5>
                    <span>Latitude: </span><span id="latitude"></span>
                    <br><span>Longitude: </span> <span id="longitude"></span>                   
                    <br><button id="btn-geolocalizacao" class="btn btn-primary" type="button" required>Definir</button>
                </div>
                <div class="col-6">
                    <h5>Data</h5>
                    <input type="date" class="form-control" id="date-input" required>
                </div>
                ${questionario.perguntas.enunciados.map( (enunciado) =>   
                `
                    <div class="col-6" name="respostas[]">
                        <h5 class="enunciado">${enunciado}</h5>
                        <input class="form-control" type="text" name="respostas[]"></input>
                    </div>
                `)}  
                <br>
            </div>
            
            <div class="d-flex justify-content-end mr-2 mb-2">
                <a class="btn btn-primary" id="responderQuestionario"><span id="${questionario.id}">Responder</span></a>
            </div>
        
        </form>
  
    `)
}



listaQuestionarios(questionarios){
    if(questionarios.questionarios == 0){
        this.mensagemView.exibirMensagem('Não há questionários registrados', 'alert-warning')
    }
    return $('#option_selected').html( 
        `
            ${questionarios.questionarios.map( (questionario) =>
            `
                <div id="body-box" class="card">
                    <div class="card-header">
                        <h5 clas="flex-column ml-2" name=titulo[]>Titulo: ${questionario.titulo}</h5>
                        <h6  class="flex-column ml-2" name=usuario[]>Usuário: ${questionario.user.user}</h6>
                        <h6  class="flex-column ml-2" name="id">ID: ${questionario.id}</h6>
                    </div>
                    <div class="card-body">
                        <a class="expand_questionario flex-column ml-2"  href="#" name="questionario-${questionario.id}" id="viewQuestionario">
                            <span id="${questionario.id}">Acessar Questionário N.: ${questionario.id} </span>
                        </a>
                    </div>
                </div>
            `).join('')}
        `);
    }

listaQuestionariosRespondidos(questionarios){
    return $('#option_selected').html( 
        `  
            ${questionarios.questionarios.map( (questionario) =>  
            `
                <div id="body-box" class="card">
                    <div class="card-header">
                        <h5 clas="flex-column ml-2" name=titulo[]>Titulo: ${questionario.titulo}</h5>
                        <h6  class="flex-column ml-2" name=usuario[]>Usuário: ${questionario.user.user}</h6>
                        <h6  class="flex-column ml-2" name="id">ID: ${questionario.id}</h6>
                    </div>
                    <div class="card-body">
                        <a class="expand_questionario flex-row ml-2"  href="#" name="questionario-${questionario.id}" id="viewQuestionarioRespondido">
                            <span id="${questionario.id}">Respostas do Questionário N.: ${questionario.id} </span>
                        </a>
                    </div>
                </div>
            `).join('')}             
       `);  
    }


}

module.exports = QuestionarioView

