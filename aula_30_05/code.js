document.getElementById("calcular").onclick = function(){
    var ano = document.getElementById('ano')
    var idade = 2022 - ano.value

    var opcoes = document.getElementsByName("sexo")

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            var sexo = opcoes[i].value
        }
    }

    if (sexo == "Masculino"){
        if(idade <= 5){
            image.src = "./img/m_baby.png"}
        
        if(idade>=6 && idade<=12){
            image.src = "./img/m_kid.png"
        }

        if(idade>=13 && idade<=18){
            image.src = "./img/m_teenager.png"
        }

        if(idade>=19 && idade<=49){
            image.src = "./img/m_adult.png"
        }

        if(idade>=50){
            image.src = "./img/m_old.png"
        }
    }

    else{
        if(idade <= 5){
            image.src = "./img/f_baby.png"}
        
        if(idade>=6 && idade<= 12){
            image.src = "./img/f_kid.png"
        }

        if(idade>=13 && idade<=18){
            image.src = "./img/f_teenager.png"
        }

        if(idade>=19 && idade<=49){
            image.src = "./img/f_adult.png"
        }

        if(idade>=50){
            image.src = "./img/f_old.png"
        }
    }

    txt.innerHTML = `O sistema calculou que você tem ${idade} anos de idade e é do sexo ${sexo}`

}