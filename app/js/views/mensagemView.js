class MensagemView {


    exibirMensagem(mensagem, tipo){
        return $('#mesageView').html(`
            <h5 class="alert ${tipo}">${mensagem}</h5>
        `)
    }

    limpaMensagem(){
        return $('#mesageView').html(`
        `)
    }
}

module.exports = MensagemView