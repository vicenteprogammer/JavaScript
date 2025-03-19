function calcular(){
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");

    var outValor = document.getElementById("outValor")

    var valor = Number(inValor.value);
    var temp = parseInt(inTempo.value);

    var tempoT = valor * Math.ceil(temp / 15);
    outValor.textContent = "O valor a ser pago é: " +tempoT.toFixed(2)
}

var btCalcular = document.getElementById("calcular");
btCalcular.addEventListener("click", calcular)