function tabuada(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");   

    var numero = Number(inNumero.value);

    if(numero == 0 || isNaN(numero)){
        alert("Digite um número válido...")
        inNumero.focus()
        return;
    }

    var resposta = "";
    for(var i = 1; i<=10; i++ ){
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }
    outResposta.textContent = resposta;
}

var btMostrar = document.getElementById("mostrar");
btMostrar.addEventListener("click", tabuada);