const content = document.createElement('div');
document.body.appendChild(content);

const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Adivinhe a cor!';
content.appendChild(title);

const textColor = document.createElement('p');
textColor.id = 'rgb-color';
content.appendChild(textColor);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRGB() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `(${red}, ${green}, ${blue})`;
}

const colorContainer = document.createElement('div');
colorContainer.className = 'color-container';
content.appendChild(colorContainer);

const resultContainer = document.createElement('div');
resultContainer.id = 'answer';
resultContainer.innerHTML = 'Escolha uma cor';
content.appendChild(resultContainer);

function checkColor(event) {
  const attempt = event.target.style.backgroundColor;
  const response = `rgb${textColor.innerHTML}`;
  const result = response === attempt ? 'Acertou!' : 'Errou! Tente novamente!';
  resultContainer.innerHTML = result;
}

function generateBallColor() {
  const ballColor = document.createElement('div');
  ballColor.className = 'ball';
  ballColor.style.backgroundColor = `rgb${generateRGB()}`;
  ballColor.addEventListener('click', checkColor);

  return ballColor;
}

function renderBallColors(qtd) {
  const arrayRGB = [];
  const colorIndex = randomNumber(0, qtd);

  for (let index = 0; index < qtd; index += 1) {
    const ballColor = generateBallColor();
    const color = ballColor.style.backgroundColor.replace(/rgb/g, '');
    arrayRGB.push(color);
    colorContainer.appendChild(ballColor);
  }

  textColor.innerHTML = arrayRGB[colorIndex];
}

renderBallColors(6);
