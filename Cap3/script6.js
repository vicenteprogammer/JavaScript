function verTri(){
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoB = document.getElementById("inLadoB");
    var outTri = document.getElementById("outTri");
    var outTipo = document.getElementById("outTipo");

    outTri.textContent = "";
    outTipo.textContent = "";

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    var tipo;

    if((ladoA < ladoB + ladoC) || (ladoB < ladoA + ladoC) || ladoC < ladoA + ladoB){
        outTri.textContent = "Lados podem formar um triângulo";
        if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoB){
            outTipo.textContent = "Tipo: Isosceles"
        }
        if(ladoA == ladoC == ladoB){
            outTipo.textContent = "Tipo: Equilatero"
        }
        if(ladoA != ladoB || ladoB != ladoC || ladoA!= ladoB){
            outTipo.textContent = "Tipo: Escaleno"
        }

    }else{
        alert("Os valores informados não formam um triângulo");
    }

}
var btVerificar = document.getElementById("verificar");
btVerificar.addEventListener("click", verTri)
