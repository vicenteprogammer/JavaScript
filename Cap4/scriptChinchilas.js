
var total = 0;
var resposta = "";

function previsao(){
    var inChi = document.getElementById("inChi");
    var inAnos = document.getElementById("inAnos");
    var out = document.getElementById("out");

    var chi = Number(inChi.value);
    var anos = Number(inAnos.value);

    if(chi < 2 || isNaN(anos)){
        alert("Tem que ser um casal...")
        inChi.focus;
        return;
    }
    if(anos <= 0){
        alert("Digite uma quantidade válida");
    }
    
    for(var i = 1; i <= anos; i++){
        total += (chi * 3);
        resposta += i + " ano = " + total + "\n";
       
    }
 
    out.textContent = resposta;

}
var btMostrar = document.getElementById("mostrar");
btMostrar.addEventListener("click", previsao);