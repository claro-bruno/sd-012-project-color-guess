const rgbText = document.getElementById('rgb-color');
const ballContainer = document.getElementById('ball-container');
const balls = document.querySelectorAll('.ball');
const score = document.getElementById('score');
const textAnswer = document.getElementById('answer');
let count = 0;
score.innerHTML = 'Placar: ' + count;

function colorGenerate() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}
rgbText.innerHTML = colorGenerate();

function createBall() {
  for (let index = 0; index < 6; index += 1) {
    const ballCreate = document.createElement('div');
    ballCreate.className = 'ball';
    ballContainer.appendChild(ballCreate);
  }
}
createBall();

function colorize() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
  balls[index].style.backgroundColor = ('rgb' + colorGenerate());
  }
}
colorize();

function insertRightColor() {
  const balls = document.querySelectorAll('.ball');
  balls[Math.ceil(Math.random() * 5)].style.backgroundColor = ('rgb' + rgbText.innerHTML);
}
insertRightColor();

function answerClass() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    if (balls[index].style.backgroundColor === ('rgb' + rgbText.innerHTML)) {
      balls[index].className = 'ball answer';
    } else {
      balls[index].className = 'ball';
    }
  }
}
answerClass();

function answerVerify() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', () => {
      if (balls[index].classList.contains('answer')) {
        textAnswer.innerHTML = 'Acertou!';
        count += 3;
      } else {
        textAnswer.innerHTML = 'Errou! Tente novamente!';
        count -= 1;
      }
      score.innerHTML = 'Placar: ' + count;
    });
  }
}
answerVerify();

function resetColors() {
const reset = document.getElementById('reset-game');
reset.addEventListener('click', () => {
  colorize();
  insertRightColor();
  answerClass();
  textAnswer.innerHTML = 'Escolha uma cor'
  rgbText.innerHTML = colorGenerate();
  });
}

resetColors();
