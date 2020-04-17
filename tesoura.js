result=0

function play(){
    var CHOOSE = [Math.floor(Math.random()*3)]
    if (CHOOSE==0){result="pedra"}
    if (CHOOSE==1){result="papel"}
    if (CHOOSE==2){result="tesoura"}
    frase.innerHTML="O Computador escolheu..."
    resultado.innerHTML=result
}