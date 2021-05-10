const colorTextplace = document.getElementById('rgb-color');
const ballColorsplace = document.getElementById('colorsPlace');
const mensagePlace = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');

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
}

window.onload = startGame;

//
function selectAnswer(event) {
  if (event.target.tagName !== 'SECTION') {
    console.log(event.target.style.backgroundColor, `rgb${colorTextplace.innerText}`);
    if (event.target.style.backgroundColor === `rgb${colorTextplace.innerText}`) {
      mensagePlace.innerText = 'Acertou!';
    } else {
      mensagePlace.innerText = 'Errou! Tente novamente!';
    }
  }
}

ballColorsplace.addEventListener('click', selectAnswer);

// Resetar
resetBtn.addEventListener('click', startGame);
