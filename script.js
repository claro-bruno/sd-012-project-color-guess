function randomRgbCode() {
  const redCode = Math.floor(Math.random() * 255);
  const greenCode = Math.floor(Math.random() * 255);
  const blueCode = Math.floor(Math.random() * 255);

  return `(${redCode}, ${greenCode}, ${blueCode})`;
}

function createColorBalls() {
  const parentElement = document.getElementById('colors-options');

  for (let index = 0; index < 6; index += 1) {
    const colorBall = document.createElement('div');

    colorBall.className = 'ball';
    colorBall.style.backgroundColor = `rgb${randomRgbCode()}`;

    parentElement.appendChild(colorBall);
  }
}

function setRgbToGuess() {
  const colorToGuess = document.getElementById('rgb-color');
  const colorBall = document.querySelectorAll('.ball');
  const colorOptions = [];

  for (let index = 0; index < colorBall.length; index += 1) {
    colorOptions[index] = colorBall[index].style.backgroundColor;
  }

  const randomIndex = Math.floor(Math.random() * 6);
  const rgbCode = colorOptions[randomIndex].substring('rgb'.length);

  colorToGuess.innerHTML = rgbCode;
}

createColorBalls();
setRgbToGuess();
