const rgbColor = document.querySelector('#rgb-color');
const circleContainer = document.querySelector('#circle-container');
const answer = document.querySelector('#answer');
const reset = document.querySelector('#reset-game');
const placar = document.querySelector('#score');
let cont = 0;

function iniciarJogo() {
  const r = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  const g = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  const b = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  const corASerAdivinhada = '(' + r + ', ' + g + ', ' + b + ')';
  const corCorreta = 'rgb' + corASerAdivinhada;
  rgbColor.innerText = corASerAdivinhada;
  const numeroResposta = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);

  for (let index = 1; index <= 6; index += 1) {
    const option = document.createElement('div');
    const red = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    const green = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    const blue = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    const corOption = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    option.style.display = 'inline-block';
    option.className = 'ball';
    option.style.height = '50px';
    option.style.width = '50px';
    option.style.borderRadius = '50%';
    option.style.border = '1px solid black';
    option.style.margin = '10px';
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
  const options = document.querySelectorAll('.ball');
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
  const corCorreta = 'rgb' + rgbColor.innerText;
  if (event.target.style.backgroundColor === corCorreta) {
    answer.innerText = 'Acertou!';
    cont += 3;
    placar.innerText = 'Placar: ' + cont.toString();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

circleContainer.addEventListener('click', resposta);
