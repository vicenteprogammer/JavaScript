function decrescer(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Digite um numero valido");
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";

    for(var i = numero; i > 0; i-- ){
        resposta = resposta + i + " , ";
    }

    outResposta.textContent = resposta;


}
var btDecrescer = document.getElementById("decrescer");
btDecrescer.addEventListener("click", decrescer)