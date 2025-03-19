function verificaVelocidade(){
    var inVelocidade = document.getElementById("inVelocidade");
    var veloCondutor = document.getElementById("veloCondutor");
    var out = document.getElementById("resposta")
    out.textContent = "";

    var veloP = Number(inVelocidade.value);
    var veloC = Number(veloCondutor.value);
    
    var velMax = veloP + (veloP * 0.2)

    if(veloC < veloP){
        out.textContent = "Situação: Sem Multa";
    }
    if(veloC <= velMax ){
        out.textContent = "Situção: Multa Leve";
    }
    if(veloC > velMax){
        out.textContent = "Situação: Multa Grave"
    }

}
var btVerificar = document.getElementById("verificar");
btVerificar.addEventListener("click", verificaVelocidade)