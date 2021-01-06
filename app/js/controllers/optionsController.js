const QuestionarioControl = require('./questionarioController');
const questionarioControl = new QuestionarioControl();
const LocalizacaoService = require('../services/localizacaoService');
const localService = new LocalizacaoService();
const HttpRequestsService = require('../services/httpRequestsService');
const requestService = new HttpRequestsService();


$(document).ready(()=>{
  $('#novo-quest').click(()=>{
    $('.op_name').html('<h1 class="op_name">Novo Questionário</h1>')
    questionarioControl.gerarFormParaQuestionario()
  })
})

$(document).ready(()=>{
  $('#questionarios-disponiveis').click(()=>{
    $('.op_name').html('<h1 class="op_name">Questionários</h1>')
    questionarioControl.listaQuestionarios()
  })
})


$(document).ready(()=>{
  $('#questionarios-respondidos').click(()=>{
    $('.op_name').html('<h1 class="op_name">Questionários Respondidos</h1>')
    questionarioControl.listaQuestionariosRespondidos()
  })
})


$(document).on('submit', '#quest-form', () => {
  questionarioControl.submterForm()
})


$(document).ready(()=>{
  $(document).on('click', '#viewQuestionario', (e) => {
    $('.op_name').html('<h1 class="op_name">Questionário n.'+e.target.id+'</h1>')
    e.preventDefault()
    questionarioControl.verQuestionario(e.target.id)
  })})

  $(document).ready(()=>{
    $(document).on('click', '#viewQuestionarioRespondido', (e) => {
      $('.op_name').html('<h1 class="op_name">Questionário Respondido n.'+e.target.id+'</h1>')
      e.preventDefault()
      questionarioControl.verQuestionarioRespondido(e.target.id)
    })})

$(document).ready((e) => {
  $(document).on('click', '#responderQuestionario', (e) =>{
    e.preventDefault()
    questionarioControl.responderQuestionario(e.target.id)
  })})



$(document).on('click', '#btn-geolocalizacao', (e) => {
   e.preventDefault()
   localService.retornaGeolocalizacao()
})

$(document).on('click', '#btn-pergunta', (e) =>{
      e.preventDefault()
      $('div[name="nova-pergunta[]"]').append(`
      <h5>Pergunta</h5>
      <input name="perguntas[]" type="pergunta" class="form-control required>
      `)
})






