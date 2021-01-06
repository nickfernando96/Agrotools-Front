class LocalizacaoService {
    retornaGeolocalizacao(){
        navigator.geolocation.getCurrentPosition(this.exibirPosicao)

    }

    exibirPosicao(posicao){
        $('#latitude').html(`
        <span>
            ${posicao.coords.latitude}
        </span>
        `)

        $('#longitude').html(`
        <span>
            ${posicao.coords.longitude}
        </span>
        `)
    }
    

} module.exports = LocalizacaoService