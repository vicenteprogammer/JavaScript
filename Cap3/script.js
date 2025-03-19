function mostrar(){
    var inSexoM = document.getElementById("masculino");
    var inSexoF = document.getElementById("feminino");
    var inName = document.getElementById("nome");
    var outNome = document.getElementById("outnome");

    var inSexom = inSexoM.checked;
    var inSexof = inSexoF.checked;
    var nome = inName.value;

    if(nome = "" || (inSexom == false && inSexof == false)){
        alert("Digite o seu nome e preenchao sexo");
        inName.focus()
        return;
    } else{
        outNome.textContent = nome;
    }
}

function limpar(){
    location.reload()
    document.getElementById("nome").focus()
}
var btMostrar = document.getElementById("mostrar");
btMostrar.addEventListener("click", mostrar)
var btLimpar = document.getElementById("limpar")
btLimpar.addEventListener("click", limpar)