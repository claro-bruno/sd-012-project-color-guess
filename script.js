function generateColor() {
  const rgbNumber1 = Math.trunc((Math.random() * 1000));
  const rgbNumber2 = Math.trunc((Math.random() * 100));
  const rgbNumber3 = Math.trunc((Math.random() * 100));
  const colorGenerated = `(${rgbNumber1}, ${rgbNumber2}, ${rgbNumber3})`;
  return colorGenerated;
}

function createColors() {
  const sectionOfColors = document.getElementById('colors');
  for (let index = 0; index < 6; index += 1) {
    const color = document.createElement('div');
    color.className = 'ball';
    sectionOfColors.appendChild(color);
  }
}

function putColors() {
  const colors = document.querySelectorAll('.ball');
  const correctColor = document.querySelector('.correct');
  for (let index = 0; index < 6; index += 1) {
    colors[index].style.backgroundColor = `rgb${generateColor()}`;
  }
  if (correctColor === null) {
    const random = Math.floor(Math.random() * colors.length);
    colors[random].classList.add('correct');
    colors[random].style.backgroundColor = `rgb${generateColor()}`;
  } else {
    correctColor.classList.remove('correct');
    const random = Math.floor(Math.random() * colors.length);
    colors[random].classList.add('correct');
    colors[random].style.backgroundColor = `rgb${generateColor()}`;
  }
}

function sortColor() {
  const rgbColor = document.getElementById('rgb-color');
  const correct = window.getComputedStyle(document.querySelector('.correct'));
  const correctColor = correct.getPropertyValue('background-color');
  rgbColor.innerText = correctColor.substr(3);
}

function verifyGuessClick(element) {
  const answer = document.getElementById('answer');
  if (element.target.classList.contains('correct')) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function verifyGuess() {
  const colors = document.querySelectorAll('.ball');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', verifyGuessClick);
  }
}

function resetGameClick() {
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  putColors();
  sortColor();
  verifyGuess();
}

function resetGame() {
  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', resetGameClick);
}

window.onload = () => {
  createColors();
  putColors();
  sortColor();
  verifyGuess();
  resetGame();
};
