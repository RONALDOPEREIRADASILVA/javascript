function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','crianca.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulto.png')
            }else { 
                //Idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
               //Criança
               img.setAttribute('src','bebe.png')
            }else if (idade < 21){
              //Jovem
              img.setAttribute('src','jovem2.png')
            }else if(idade < 50){
              //Adulto
              img.setAttribute('src','adulta.png')
            }else { 
              //Idosa
              img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamo ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}