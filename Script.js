resultado=0

function play(){
    var CHOOSE = [Math.floor(Math.random()*3)]
    if (CHOOSE==0){
        resultado="pedra",
        document.getElementById( "img1" ).style.display = "none",
        document.getElementById( "img2" ).style.display = "flex",
        document.getElementById( "img3" ).style.display = "none"
    }
    if (CHOOSE==1){
        resultado="papel",
        document.getElementById( "img1" ).style.display = "none",
        document.getElementById( "img2" ).style.display = "none",
        document.getElementById( "img3" ).style.display = "flex"
    }
    if (CHOOSE==2){
        resultado="tesoura",
        document.getElementById( "img1" ).style.display = "flex",
        document.getElementById( "img2" ).style.display = "none",
        document.getElementById( "img3" ).style.display = "none"
    }
    frase.innerHTML="O Computador escolheu..."
    result.innerHTML=resultado
}