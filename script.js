const rgbText = document.getElementById('rgb-color');

function colorGenerate() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}
rgbText.innerText = colorGenerate();

for (let index = 0; index < 6; index +=1) {
const ballContainer = document.getElementById('ball-container');
const ball = document.createElement('div');
ball.className = 'ball'
ball.style.backgroundColor = ('rgb' + colorGenerate());
ballContainer.appendChild(ball);
}