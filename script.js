function randomRgbCode() {
  const redCode = Math.floor(Math.random() * 255);
  const greenCode = Math.floor(Math.random() * 255);
  const blueCode = Math.floor(Math.random() * 255);

  return `(${redCode}, ${greenCode}, ${blueCode})`;
}

function setRgbToGuess() {
  const colorToGuess = document.getElementById('rgb-color');

  colorToGuess.innerHTML = randomRgbCode();
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

setRgbToGuess();
createColorBalls();
