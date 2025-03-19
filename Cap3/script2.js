function sacar() {
    var inSaque = document.getElementById("inSaque");
    var outNotascem = document.getElementById("outNotascem");
    var outNotascinquenta = document.getElementById("outNotascinquenta");
    var outNotasdez = document.getElementById("outNotasdez");
    
    outNotascem.textContent = "";
    outNotascinquenta.textContent = "";
    outNotasdez.textContent = "";

    var saque = Number(inSaque.value);


    if (saque == 0 || isNaN(saque)) {
        alert("Digite um valor para o saque");
        inSaque.focus();
        return;
    }

    if (saque % 10 != 0) {
        alert("Valor invalido para as notas disponiveis: [10, 50, 100]");
        inSaque.focus();
        return;
    }

    

    var notascem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notascinquenta = Math.floor(resto / 50)
    resto = resto % 50;
    var notasdez = Math.floor(resto / 10);

    if (notascem > 0) {
        outNotascem.textContent = "Número de notas 100: " + notascem;
    }

    if (notascinquenta > 0) {
        outNotascinquenta.textContent = "Número de notas 50: " + notascinquenta;
    }

    if (notasdez > 0) {
        outNotasdez.textContent = "O número de notas 10: " + notasdez;
    }
}

var btNotas = document.getElementById("exibir");
btNotas.addEventListener("click", sacar)