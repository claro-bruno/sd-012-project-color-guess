const colorTextplace = document.getElementById('rgb-color');
const ballColorsplace = document.getElementById('colorsPlace');

function createRandomcolor() {
  const colorNum = [];
  for (let index = 0; index < 3; index += 1) {
    colorNum.push(Math.round(Math.random() * 255));
  }
  return `(${colorNum[0]},${colorNum[1]},${colorNum[2]})`;
}

function randomN(max) {
  return Math.round(Math.random() * max);
}

function startGame() {
  const qtd = 6;
  const colorToguess = createRandomcolor();
  const rightColorposition = randomN(6);
  colorTextplace.innerText = colorToguess;
  for (let index = 0; index < qtd; index += 1) {
    const colorelmnt = document.createElement('div');
    colorelmnt.classList.add('ball');
    if (index === rightColorposition) {
      colorelmnt.style.backgroundColor = `rgb${colorToguess}`;
    } else { colorelmnt.style.backgroundColor = `rgb${createRandomcolor()}`; }
    ballColorsplace.appendChild(colorelmnt);
  }
}

window.onload = startGame;
