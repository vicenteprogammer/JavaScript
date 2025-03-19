function parouimpar(){
    var inNumero = document.getElementById("numero");
    var outResposta = document.getElementById("outResposta");
    outResposta.textContent = "";

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Digite um número válido...");
        return;
    }

    if(numero % 2 == 0){
        outResposta.textContent = "Resposta: " + numero + " é Par";
    }else{
        outResposta.textContent = "Resposta: " + numero + " é Ímpar";
    }
}

var btVerificar = document.getElementById("verificar");
btVerificar.addEventListener("click", parouimpar)