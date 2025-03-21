var numContas = 0;
var valTotal = 0;
var reposta = "";
function registrar(){
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal")

    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    if(descricao == "" || valor == 0 || isNaN(valor)){
        alert("Informe os dados corretamente")
        inDescricao.focus();
        return;
    }

    numContas++;
    valTotal = valTotal + valor;

    reposta = reposta + descricao + " - R$ " + valor.toFixed(2) + "\n";

    outListaContas.textContent = reposta + "-----------------------------------------------";

    outTotal.textContent = numContas + " Conta(s) - Total(R$): " +valTotal.toFixed(2);

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}
var btRegistrar = document.getElementById("registrar");
btRegistrar.addEventListener("click", registrar)