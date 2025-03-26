function preencher(){
    var inSimbo = document.getElementById("inSimbo");
    var outSimbolos = document.getElementById("outSimbolos");

    var valor = Number(inSimbo.value);
    if(valor == 0 || isNaN(valor)){
        alert("Digite um valor válido...");
        inSimbo.focus();
        return;
    }
    var estrelas = "";
    for(var i = 1; i <= valor; i++){
        if(i % 2 == 1){
            estrelas = estrelas + "*";
        }else{
            estrelas = estrelas + "-"
        }
    }
    outSimbolos.textContent = estrelas;

    
}
var btPreencher = document.getElementById("preencher");
btPreencher.addEventListener("click", preencher)