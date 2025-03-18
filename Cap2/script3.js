function calcularPreco(){
    var inPreco = document.getElementById("inPreco");
    var inConsumo = document.getElementById("inConsumo");
    var outPreco = document.getElementById("outPreco");

    var precoQ = Number(inPreco.value);
    var consumoC = Number(inConsumo.value);

    var precoFinal = precoQ * (consumoC / 1000);

    outPreco.textContent = "Valor a pagar R$: " +precoFinal.toFixed(2);
}
var btCalcular = document.getElementById("calcular");
btCalcular.addEventListener("click", calcularPreco);