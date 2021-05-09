const rgbText = document.getElementById('rgb-color');
const ballContainer = document.getElementById('ball-container');
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
