const rgbText = document.getElementById('rgb-color');
const ballContainer = document.getElementById('ball-container');
const score = document.getElementById('score');
function colorGenerate() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}
rgbText.innerHTML = colorGenerate();

function createBall() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball'
    ball.style.backgroundColor = ('rgb' + colorGenerate());
    ballContainer.appendChild(ball);
  }
}
createBall();

const balls = document.querySelectorAll('.ball');
function insertRightColor() {
  balls[Math.ceil(Math.random() * 5)].style.backgroundColor = ('rgb' + rgbText.innerHTML);
}
insertRightColor();

function answerClass() {
  for (let index = 0; index < balls.length; index += 1) {
    if (balls[index].style.backgroundColor === ('rgb' + rgbText.innerHTML)) {
      balls[index].className = 'ball answer';
    }
  }
}
answerClass();

let count = 0;
score.innerHTML = 'Placar: ' + count;
function answerVerify() {
  const textAnswer = document.getElementById('answer');
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
      localStorage.setItem('score', count);
    })
  }
}
answerVerify();

const reset = document.getElementById('reset-game');
reset.addEventListener('click', () => {
  document.location.reload();
})

window.onload = () => {
  score.innerHTML = 'Placar: ' + localStorage.getItem('score');
}
