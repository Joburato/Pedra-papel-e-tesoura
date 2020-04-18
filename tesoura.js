result=0

function play(){
    var CHOOSE = [Math.floor(Math.random()*3)]
    if (CHOOSE==0){
        result="pedra",
        document.getElementById( "img1" ).style.display = "none",
        document.getElementById( "img2" ).style.display = "inline",
        document.getElementById( "img3" ).style.display = "none"
    }
    if (CHOOSE==1){
        result="papel",
        document.getElementById( "img1" ).style.display = "none",
        document.getElementById( "img2" ).style.display = "none",
        document.getElementById( "img3" ).style.display = "inline"
    }
    if (CHOOSE==2){
        result="tesoura",
        document.getElementById( "img1" ).style.display = "inline",
        document.getElementById( "img2" ).style.display = "none",
        document.getElementById( "img3" ).style.display = "none"
    }
    frase.innerHTML="<br><br><br>O Computador escolheu..."
    resultado.innerHTML=result
}