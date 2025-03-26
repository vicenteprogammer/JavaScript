function repetir(){
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    
    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if(fruta == "" || numero == 0 || isNaN(numero)){
        alert("Digite coisas válidas nos campos");
        inFruta.focus()
        return;
    }

    var repete = "";

    for(var i = 1; i <= numero; i++){
        if(i < numero){
            repete = repete + fruta + "*";
        }else{
            repete = repete + fruta;
        }
    }

    outResposta.textContent = repete;
}
var btRepetir = document.getElementById("repetir");
btRepetir.addEventListener("click", repetir);