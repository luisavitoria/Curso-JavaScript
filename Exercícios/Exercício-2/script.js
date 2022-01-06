function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'criança-menino.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }

        } else if (fsex [1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'criança-menina.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}



