
var resposta = "";
var linha = "";
function criar(){
    var inLinhas = document.getElementById("inLinhas");
    var out = document.getElementById("out");

    var linhas = Number(inLinhas.value);

    if(linhas == 0 ||isNaN(linhas)){
        alert("Digite um valor válido...")
        inLinhas.focus();
        return;
    }
    for(var i = 1; i <= linhas; i++){
        linha += "*";
        resposta += linha + "\n";

    }

    

    out.textContent = resposta;

}
var btCriar = document.getElementById("criar");
btCriar.addEventListener("click", criar);