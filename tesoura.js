result=0

function play(){
    var CHOOSE = [Math.floor(Math.random()*3)]
    if (CHOOSE==0){
        result="pedra",
        document.getElementById( "img1" ).style.display = "none"
    }
    if (CHOOSE==1){
        result="papel",
        document.getElementById( "img1" ).style.display = "none";
    }
    if (CHOOSE==2){
        result="tesoura",
        document.getElementById( "img1" ).style.display = "inline";
    }
    frase.innerHTML="<br><br><br>O Computador escolheu..."
    resultado.innerHTML=result
}