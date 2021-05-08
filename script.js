function createRandomColor() {
  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);
  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
}

function colorRamdomText() {
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerHTML = createRandomColor();
}
colorRamdomText();

function paintRandomColor() {
  const ball = document.querySelectorAll('.ball');
  const rgbColor = document.querySelector('#rgb-color');
  const randomPosition = parseInt(Math.random() * 6, 10);
  for (let index = 0; index < ball.length; index += 1) {
    if (randomPosition === index) {
      ball[index].style.backgroundColor = `rgb${rgbColor.innerHTML}`;
    } else {
      ball[index].style.backgroundColor = `rgb${createRandomColor()}`;
    }
  }
}
paintRandomColor();

function verifyAnswer() {
  const answer = document.querySelector('#answer');
  const rgbColor = document.querySelector('#rgb-color');
  const selectBall = document.querySelector('.selected');
  if (selectBall.style.backgroundColor === `rgb${rgbColor.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function selectedBall() {
  const ball = document.querySelectorAll('.ball');
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].addEventListener('click', (event) => {
      const selectBall = document.querySelector('.selected');
      if (selectBall !== null) {
        selectBall.classList.remove('selected');
      }
      event.target.classList.add('selected');
      verifyAnswer();
    });
  }
}
selectedBall();

function resetGame() {
  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', () => {
    const answer = document.querySelector('#answer');
    const selectBall = document.querySelector('.selected');
    colorRamdomText();
    paintRandomColor();
    answer.innerHTML = 'Escolha uma cor';
    if (selectBall !== null) {
      selectBall.classList.remove('selected');
    }
  });
}
resetGame();
