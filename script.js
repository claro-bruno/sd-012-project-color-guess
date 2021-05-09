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

setRgbToGuess();
