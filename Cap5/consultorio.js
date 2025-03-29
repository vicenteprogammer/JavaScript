var pacientes = [];
function adicionar(){
    var inPaciente = document.getElementById("inPaciente");
    var outpacientes = document.getElementById("outPacientes");

    var nome = inPaciente.value;

    if(nome == ""){
        alert("Digite um nome válido...");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);
    var lista = "";

    for(var i = 0; i < pacientes.length;i++){
        lista += (i + 1) + " - " + pacientes[i] + "\n";
    }

    outpacientes.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}
var btAdicionar = document.getElementById("adicionar");
btAdicionar.addEventListener("click", adicionar)

function urgencia(){
    var inPaciente = document.getElementById("inPaciente");
    var outPacientes = document.getElementById("outPacientes");

    var nome = inPaciente.value;

    if(nome == ""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome);
    var lista = "";

    for(var i = 0; i < pacientes.length; i++){
        lista += (i + 1) + " - " + pacientes[i] + "\n";
    }

    outPacientes.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus()
}
var btUrgente = document.getElementById("urgencia");
btUrgente.addEventListener("click", urgencia)

function atender(){
    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outPacientes");

    if( pacientes.length == 0){
        alert("Lista de espera vazia...");
        inPaciente.focus();
        return;
    }

    var atender = pacientes.shift();
    outAtendimento.textContent = "Em atendimento: " + atender;

    var lista = "";

    for(var i = 0; i < pacientes.length; i++){
        lista += (i + 1) + " - " + pacientes[i] + "\n";
    }
    
    outLista.textContent = lista;
}

var btAtender = document.getElementById("atender");
btAtender.addEventListener("click", atender)