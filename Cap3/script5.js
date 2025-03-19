function parq(){
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    outTempo.textContent = "";
    outTroco.textContent = "";
    var valor = inValor.value;

    if(valor == 0 || isNaN(valor)){
        alert("Digite um valor válido...")
        inValor.focus();
        return;
    }

    if(valor < 1){
        alert("Valor insuficiente")
        return;
    }
    var tempo = 60;
    

    var troco;
    

    if(tempo == 30){
        outTempo.textContent = "Tempo: " +tempo + " min"
        if(valor > 1){
            troco = valor - 1;
            outTroco.textContent = "Troco R$: " + troco;
        }
    }

    if(tempo == 60){
        outTempo.textContent = "Tempo: " +tempo+ " min"
        if(valor > 1.75){
            troco = valor - 1.75
            outTroco.textContent = "Troco R$: " + troco;
        }
    }

    if(tempo == 120){
        outTempo.textContent = "Tempo: " +tempo+ " min"
        if(valor > 3){
            troco = valor - 3
            outTroco.textContent = "Troco R$: " + troco;
        }
    }


}
var btConfirmar = document.getElementById("confirmar");
btConfirmar.addEventListener("click", parq)