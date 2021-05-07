const ballsEl = document.getElementById('main-ball');

function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16); // https://css-tricks.com/snippets/javascript/random-hex-color/
    const eachBall = document.createElement('div');
    eachBall.className = 'ball';
    eachBall.style.backgroundColor = '#' + randomColor;
    ballsEl.appendChild(eachBall);
  }
}
createBalls();