const colorTextplace = document.getElementById('rgb-color');
const ballColorsplace = document.getElementById('colorsPlace');
const mensagePlace = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
const scoreText = document.getElementById('score');

function createRandomcolor() {
  const colorNum = [];
  for (let index = 0; index < 3; index += 1) {
    colorNum.push(Math.round(Math.random() * 255));
  }
  return `(${colorNum[0]}, ${colorNum[1]}, ${colorNum[2]})`;
}

function randomN(max) {
  return Math.round(Math.random() * max);
}

function startGame() {
  const qtd = 6;
  const colorToguess = createRandomcolor();
  const rightColorposition = randomN(6);
  ballColorsplace.innerHTML = '';
  colorTextplace.innerText = colorToguess;
  for (let index = 0; index < qtd; index += 1) {
    const colorelmnt = document.createElement('div');
    colorelmnt.classList.add('ball');
    if (index === rightColorposition) {
      colorelmnt.style.backgroundColor = `rgb${colorToguess}`;
    } else { colorelmnt.style.backgroundColor = `rgb${createRandomcolor()}`; }
    ballColorsplace.appendChild(colorelmnt);
  }
  mensagePlace.innerText = 'Escolha uma cor';
  scoreText.innerText = `Placar: ${sessionStorage.getItem('score')}`;
}

window.onload = sessionStorage.setItem('score', 0);
window.onload = startGame;

// Seleção da cor , menssagem de acerto e erro, e placar.
function selectAnswer(event) {
  if (event.target.tagName !== 'SECTION' && mensagePlace.innerText === 'Escolha uma cor') {
    if (event.target.style.backgroundColor === `rgb${colorTextplace.innerText}`) {
      mensagePlace.innerText = 'Acertou!';
      sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score'), 10) + 3);
    } else {
      mensagePlace.innerText = 'Errou! Tente novamente!';
    }
  }
  scoreText.innerText = `Placar: ${sessionStorage.getItem('score')}`;
}

ballColorsplace.addEventListener('click', selectAnswer);

// Resetar
resetBtn.addEventListener('click', startGame);
