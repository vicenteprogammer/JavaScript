function numPerfeito(){
    var inNumero = document.getElementById("inNumero");
    var outDiv = document.getElementById("outDiv");
    var outResult = document.getElementById("outResult");

    var num = Number(inNumero.value);

    var resposta = "";
    var soma = 0;

    for(var i = 1; i < num;i++){
        if(num % i == 0){
            soma += i;
            resposta += i + " ";
        }
    }

    outDiv.textContent = "Divisores do " + num + " : " + resposta + " Soma: " + soma;

    if(soma == num){
        outResult.textContent = num + " é um número perfeito";
    }else{
        outResult.textContent = num + " não é um número perfeitp"
    }
}
var btVerificar = document.getElementById("verificar");
btVerificar.addEventListener("click", numPerfeito)