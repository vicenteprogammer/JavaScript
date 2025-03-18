function viewPromotion(){
    var inCarro = document.getElementById("veiculo");
    var inPreco = document.getElementById("preco");

    var outCarro = document.getElementById("outCarro")
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    var carro = inCarro.value;
    var preco = Number(inPreco.value);

    var entrada = preco - (preco * 0.5)
    var parcela = entrada / 12

    outCarro.textContent = "Promoção: " +carro;
    outEntrada.textContent = "Entrada: " +entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " +parcela.toFixed(2);
}

var btVer = document.getElementById("ver")
btVer.addEventListener("click", viewPromotion)