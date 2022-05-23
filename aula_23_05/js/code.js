var button = document.getElementById('botao') 
var lamp = document.getElementById('lamp')
var corpo = window.document.body

corpo.style.background = 'rgba(0, 0, 0, 0.9)'

botao.onclick = function(){
    if(botao.value == 'Acender'){
        lamp.src = './img/acesa.png'
        botao.value = 'Apagar'
        botao.innerHTML= 'Apagar'
        corpo.style.background = 'white'
    }
    else{
        lamp.src='./img/apagada.png'
        botao.value = 'Acender'
        botao.innerHTML = 'Acender'
        corpo.style.background = 'rgba(0, 0, 0, 0.9)'
    }

}