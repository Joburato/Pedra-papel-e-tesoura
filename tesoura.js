const OPTIONS = ["pedra", "papel", "tesoura"]
result=0

function play(){
    var CHOOSE = [Math.floor(Math.random()*OPTIONS.length)]
    if (CHOOSE==0){result="pedra"}
    if (CHOOSE==1){result="papel"}
    if (CHOOSE==2){result="tesoura"}
    resultado.innerHTML=result
}