const allBalls = document.querySelectorAll('.ball');
const colorGuess = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const nextColor = document.querySelector('#reset-game');
const score = document.querySelector('#score');

function generateColor() {
  for (let i = 0; i < allBalls.length; i += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    allBalls[i].style.backgroundColor = `rgb(${red} ${green} ${blue})`;
  }
}

generateColor();

function generateGuessColor() {
  const randomCircle = Math.floor(Math.random() * 6);
  colorGuess.innerHTML = allBalls[randomCircle].style.backgroundColor.substr(3);
}

generateGuessColor();

function reset() {
  generateColor();
  generateGuessColor();
  answer.innerHTML = 'Escolha uma cor';
}

function changeAnswer(event) {
  if (event.target.style.backgroundColor.substr(3) === colorGuess.innerHTML) {
    answer.innerHTML = 'Acertou!';
    score.innerHTML = parseInt(score.innerHTML, 10) + 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    score.innerHTML = parseInt(score.innerHTML, 10) - 1;
  }
}

document.addEventListener('click', (event) => {
  for (let i = 0; i < allBalls.length; i += 1) {
    if (event.target === allBalls[i]) {
      changeAnswer(event);
    }
  }
});

nextColor.addEventListener('click', reset);
