let link = 'http://localhost:1000/'

class HttpRequestsService {
    constructor(){
        this.res
    }

    async getQuestionarios(){
        $.get(link+'questionarios').done((res, status) => {
            console.log(res, status)
        }).fail(err => console.error(err))
    }

    async postQuestionario(questionario){
        return $.post(link+'questionario', questionario)
                .done((res, status)=> console.log(res, status))
                .fail((err) => {
                    console.log()
                })
    }

    async patchResposta(questionario){
        return $.ajax({
            url: link+'questionario/'+questionario.id,
            type : 'PATCH',
            dataType : 'json',
            data: questionario,
            crossDomain: true
        }).done((res, status) => {
            console.log(res, status)
        }).fail(err => console.error(err))
    }
}

module.exports = HttpRequestsService