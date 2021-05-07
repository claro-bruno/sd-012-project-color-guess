const ballsEl = document.getElementById('main-ball');
const colorRgb = document.getElementById('rgb-color');

function createBalls() {
  let res = [];
  for (let index = 0; index < 6; index += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // https://css-tricks.com/snippets/javascript/random-hex-color/
    const eachBall = document.createElement('div');
    eachBall.className = 'ball';
    eachBall.style.backgroundColor = '#' + randomColor;
    res.push(eachBall.style.backgroundColor);
    ballsEl.appendChild(eachBall);
    colorRgb.textContent = res[Math.floor(Math.random() * res.length)];
  }
}

createBalls();

function getColorValue() {
  const colorVal = document.querySelectorAll('.ball');
  const asnwer = document.getElementById('answer');
  colorVal.forEach((color) => {
    color.addEventListener('click', () => {
      const att = color.style.backgroundColor;
      console.log(att);
      if (colorRgb.textContent === att) {
        asnwer.textContent = 'Acertou!';
      } else {
        asnwer.textContent = 'Errou! Tente novamente!';
      };
    })
  })
}

getColorValue();

function resetGame() {
  const resetBtn = document.getElementById('reset-game');
  resetBtn.addEventListener('click', () => {
    window.location.reload();
  });
}

resetGame();
