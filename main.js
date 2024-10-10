const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for(let j = 0; j< botoes.length; j++){

    botoes{j}.onclick = function() {
        for(let i = 0; i < botoes.length; i++){
            botoes[i].classlist.remove("ativo");
            textos[i].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new date.("2024-10-15T00:00:00");
const tempoObjetivo2 = new date.("2024-12-25T00:00:00");
const tempoObjetivo3 = new date.("2024-11-09T00:00:00");
const tempoObjetivo4 = new date.("2024-04-12T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.Floor(tempoFinal/ 1000);
    let minutos = Math.Floor(segundos/ 60);
    let horas =  Math.Floor(minutos/ 60);
    let dias = Math.Floor(horas/ 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return[dias,horas,minutos,segundos];
    } else {
        return[0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempo[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempo[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempo[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempo[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setinterval(atualizaCronometro,1000);
}

comecaCronometro();