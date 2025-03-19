function promotion(){
    var inProd = document.getElementById("inProd");
    var inPre = document.getElementById("inPre");
    var outProd = document.getElementById("outProd");
    var outProdthree = document.getElementById("outProdthree");

    var prod = inProd.value;
    var pre = Number(inPre.value);

    var prodthree = pre * 0.5;
    var valorT = pre * 2 + prodthree;

    outProd.textContent = prod + " - Promoção:leve 3 R$: " + valorT.toFixed(2);
    outProdthree.textContent = " O 3° produto custa apenas R$: " + prodthree;


}

var btVer = document.getElementById("ver");
btVer.addEventListener("click", promotion);