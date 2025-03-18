function promocao(){
    var inMed = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMed = document.getElementById("outMed")
    var outPreco = document.getElementById("outPreco")

    var preco = Number(inPreco.value);
    var med = inMed.value;

    var pDesc = 2 * Math.floor(preco);

    outMed.textContent = "Promoção de  " +med;
    outPreco.textContent = "Leve 2 por apenas R$: " +pDesc.toFixed(2);
}
var btDesconto = document.getElementById("mostrar")
btDesconto.addEventListener("click",promocao)