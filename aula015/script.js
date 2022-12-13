function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length ==0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'um machão pra encher o saco...'
        if(idade >=0 && idade <10) {
            img.setAttribute('src', 'bebe-m.png')
        } else if(idade< 21) {
            img.setAttribute('src', 'jovem-m.jpg')
        } else if (idade<50) {
            img.setAttribute('src', 'adulto-m.jpg')
        } else {
            img.setAttribute('src', 'idoso-m.jpg')
        }
    }else if (fsex[1].checked) {
        genero = 'gostosa'
        if(idade >=0 && idade <10) {
            //bb
            img.setAttribute('src', 'bb-m.jpg')
        } else if(idade< 21) {
            img.setAttribute('src', 'jovem-f.jpg')
        } else if (idade<60) {
            //Adulto
            img.setAttribute('src', 'adulto-f.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-f.jpg')
        }
    }else if (fsex[2].checked){
        genero = 'uma LGBTQueria+, gente! E ela está com'
        if(idade >=0 && idade <10) {
            //CRIANÇA
            img.setAttribute('src', 'bb-y.jpg')
        } else if(idade< 21) {
            //Jovem
            img.setAttribute('src', 'jovem-y.png')
        } else if (idade<60) {
            //Adulto
            img.setAttribute('src', 'adulto-y.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-y.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos você, ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}