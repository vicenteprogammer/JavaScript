
function mostrarOla(){
    var inputName = document.getElementById("nome");
    var nome = inputName.value;
    document.getElementById("resposta").textContent = "Olá " + nome
}
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla)
