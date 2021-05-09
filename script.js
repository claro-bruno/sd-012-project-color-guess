const allBalls = document.querySelectorAll('.ball');
const colorGuess = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const nextColor = document.querySelector('#reset-game');

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

function changeAnswer(event) {
  if (event.target.style.backgroundColor.substr(3) === colorGuess.innerHTML) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

document.addEventListener('click', (event) => {
  for (let i = 0; i < allBalls.length; i += 1) {
    if (event.target === allBalls[i]) {
      changeAnswer(event);
    }
  }
});

function reset() {
  generateColor();
  generateGuessColor();
  answer.innerHTML = 'Escolha uma cor';
}

nextColor.addEventListener('click', reset);
