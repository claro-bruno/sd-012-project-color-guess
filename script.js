const balls = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
let points = 0;

function random255() {
  const rng = Math.floor(Math.random() * 255);
  return rng;
}

function generateBalls() {
  const winner = Math.floor(Math.random() * 6);
  answer.innerHTML = 'Escolha uma cor';
  for (let index = 0; index < balls.length; index += 1) {
    const randomColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
    const ball = balls[index];
    ball.style.backgroundColor = randomColor;
    if (index === winner) {
      document.querySelector('#rgb-color').innerHTML = `Qual dessas cores é: ${randomColor}?`;
      ball.classList.add('winner');
    } else {
      ball.className = ('ball');
    }
  }
}

function updateScore() {
  document.querySelector('#score').innerHTML = (`'Placar: ${points}`);
}

function clicker(eventObject) {
  const targetElement = eventObject.target;
  if (targetElement.classList.contains('winner')) {
    answer.innerHTML = 'Acertou!';
    points += 3;
  } else if (targetElement.classList.contains('ball')) {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
  updateScore();
}

document.addEventListener('click', clicker);
updateScore();
generateBalls();
