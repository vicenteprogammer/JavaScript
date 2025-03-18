function convertD() {
    var inTitulo = document.getElementById("titulo");
    var induracao = document.getElementById("duracao")
    
    var outTitulo = document.getElementById("tituloout");
    var outDuracao = document.getElementById("horasout")

    var titulo = inTitulo.value;
    var duracao = Number(induracao.value);

    var horas = Math.floor(duracao / 60);
    var minutos = duracao % 60;

    outTitulo.textContent = titulo;
    outDuracao.textContent = horas + "hora(s) e " + minutos + " minutos(s)";
}

var btConvert = document.getElementById("converter");
btConvert.addEventListener("click", convertD);