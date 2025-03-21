
function numberPrime(){
    var inNumero = document.getElementById("inNumero");
    var out = document.getElementById("out");

    var numero = Number(inNumero.value);
    
    var numDivisores = 0;

    for(var i = 1; i<= numero;i++){
       if(numero % i == 0){
        numDivisores++;
       }
    }

    if(numDivisores == 2){
        out.textContent = numero + " é primo";
    }else{
        out.textContent = numero + " não é primo";
    }
    
}
var btVerificar = document.getElementById("verificar");
btVerificar.addEventListener("click", numberPrime)