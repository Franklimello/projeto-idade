function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'pinto.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'pinto.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'pinto.png')
            }else {
                //idoso
                img.setAttribute('src', 'pinto.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `detectamos um gay com ${idade} anos.`

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'pia.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'pia.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'pia.png')
            }else {
                //idoso
                img.setAttribute('src', 'pia.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `vai lavar vasilha!  `
        }
        res.appendChild(img)
    }
}