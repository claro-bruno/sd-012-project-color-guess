function randomColors() {
  const colorRed = parseInt((Math.random() * 255 + 1), 10);
  const colorGreen = parseInt((Math.random() * 255 + 1), 10);
  const colorBlue = parseInt((Math.random() * 255 + 1), 10);
  const colorNumbers = `(${colorRed}, ${colorGreen}, ${colorBlue})`;
  const color = `rgb${colorNumbers}`;
  return {
    colorNumbers,
    color,
  };
}

function createColorOptions(numberOfColors) {
  const getColorOptions = document.getElementById('color-options');
  const colors = [];
  for (let index = 0; index < numberOfColors; index += 1) {
    const color = randomColors().color;
    const createColorOption = document.createElement('div');
    createColorOption.className = 'ball';
    createColorOption.style.backgroundColor = color;
    getColorOptions.appendChild(createColorOption);
    colors.push(color);
  }
  return colors;
}

function addListenerColorBalls() {
  for (let index = 0; index < numberOfColors; index += 1) {
    const getColorBall = document.getElementsByClassName('ball');
    getColorBall[index].addEventListener('click', (event) => {
      const eventTarget = event.target;
      if (getAnswerBall === null) {
        eventTarget.classList.add('answer-ball');
      } else {
        getAnswerBall.classList.remove('answer-ball'); 
        eventTarget.classList.add('answer-ball');
      }
      returnText();
    })
  }
}

function resetGame() {
  removeDivs();
  colors = createColorOptions(numberOfColors);
  randomIndex = parseInt(Math.random() * numberOfColors);
  randomColor = colors[randomIndex];
  getCorrectColorP = document.getElementById('rgb-color');
  getCorrectColorP.innerHTML = randomColor.replace('rgb','');
  const getReturnText = document.getElementById('answer');
  getReturnText.innerHTML = 'Escolha uma cor';
  addListenerColorBalls()
}

function removeDivs() {
  const getColorOptions = document.querySelector('#color-options');
  for (let index = 0; index < numberOfColors; index += 1) {
    getColorOptions.removeChild(getColorOptions.firstElementChild);
  }
}

function returnText() {
  getAnswerBall = document.querySelector('.answer-ball');
  const getReturnText = document.getElementById('answer');
  const answerColor = getAnswerBall.style.backgroundColor;
  const score = document.getElementById('score');
  if (answerColor === randomColor) {
    getReturnText.innerHTML = 'Acertou!';
    score.innerHTML = `${parseInt(score.innerHTML) + 3}`;
  } else {
    getReturnText.innerHTML = 'Errou! Tente novamente!';
  }
}

const numberOfColors = 6;
let colors = createColorOptions(numberOfColors);
let randomIndex = parseInt(Math.random() * numberOfColors);
let randomColor = colors[randomIndex];
let getCorrectColorP = document.getElementById('rgb-color');
getCorrectColorP.innerHTML = randomColor.replace('rgb','');
let getAnswerBall = document.querySelector('.answer-ball');

const getResetButton = document.getElementById('reset-game');
getResetButton.addEventListener('click', (event) => {
  resetGame();
})

addListenerColorBalls();