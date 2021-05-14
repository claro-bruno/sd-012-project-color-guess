let rgbColor = document.querySelector('#rgb-color');
let circleContainer = document.querySelector('#circle-container');
let answer = document.querySelector('#answer');
let reset = document.querySelector('#reset-game');
let placar = document.querySelector('#score');
let cont = 0;

function iniciarJogo() {
  let r = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  let g = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  let b = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  let corASerAdivinhada = '(' + r + ', ' + g + ', ' + b + ')';
  let corCorreta = 'rgb' + corASerAdivinhada;
  rgbColor.innerText = corASerAdivinhada;
  let numeroResposta = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);

  for (let index = 1; index <= 6; index += 1) {
    let option = document.createElement('div');
    let red = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    let green = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    let blue = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    let corOption = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    option.style.display = 'inline-block';
    option.className = 'ball';
    option.style.height = '50px';
    option.style.width = '50px';
    option.style.borderRadius = '50%';
    option.style.border = '1px solid black';
    option.style.margin = '10px'
    if (index === numeroResposta) {
      option.style.backgroundColor = corCorreta;
    } else {
      option.style.backgroundColor = corOption;
    }
    circleContainer.appendChild(option);
  }
}

window.onload = iniciarJogo;

function removeCirculos() {
  let options = document.querySelectorAll('.ball');
  for (let index = 0; index < options.length; index += 1) {
    circleContainer.removeChild(options[index]);
  }
}

function reiniciarJogo() {
  removeCirculos();
  iniciarJogo();
  answer.innerText = 'Escolha uma cor';
}

reset.addEventListener('click', reiniciarJogo);

function resposta(event) {
  let corCorreta = 'rgb' + rgbColor.innerText;
  if (event.target.style.backgroundColor === corCorreta) {
    answer.innerText = 'Acertou!';
    cont = cont + 3;
    placar.innerText = 'Placar: ' + cont.toString();
  } else {
    answer.innerText = 'Errou! Tente novamente!'
  }
}

circleContainer.addEventListener('click', resposta);
