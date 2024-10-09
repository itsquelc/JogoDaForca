const palavras = ["zootecnia", "carambola", "jornada", "paralelepipedo", "fogazza", "alaranjado", "careca", "bolacha", "logaritmo", "oculista"];
let tentativasUsadas = 0;
let botoes = document.getElementById('botoes');
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let palavraSecreta, palavraOculta, jogando

iniciarJogo();

function iniciarJogo() {
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id='btn-${value}' class= 'btn btn-light me-1 mb-1' onclick='checarLetra("${value}")'>${value}</button>`;
    });

    jogando = true;
    tentativasUsadas= 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++){
        palavraOculta += '_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    document.getElementById('btnReiniciar').classList.add('d-none');
    desenharForca(0)
}



function desenharForca(tentativasErradas) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidht = 6;

    //base da forca
    ctx.beginPath();
    ctx.strokeStyle = "#006700";
    ctx.moveTo(20, canvas.height-10);
    ctx.lineTo(180, canvas.height-10)
    ctx.stroke();

    //poste da forca
    ctx.beginPath();
    ctx.strokeStyle = "#4e2708";
    ctx.moveTo(60, canvas.height-10);
    ctx.lineTo(60, 20)
    ctx.stroke();
}