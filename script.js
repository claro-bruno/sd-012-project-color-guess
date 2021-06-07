const colorPalette = document.getElementById('color-palette');

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `(${r},${g},${b})`;
}

function gerarPaleta() {
  for (let i = 0; i < 6; i += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    colorPalette.appendChild(div);
  }
}

gerarPaleta();

for (let i = 0; i <= 6; i += 1) {
  document.getElementsByClassName('ball')[i].style.backgroundColor = `rgb${gerarCor()}`;
}

function cor() {
  const rgb = document.getElementById('rgb-color');
  const n = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[n].style
    .backgroundColor.replace('rgb', '');
  console.log(n);
}
cor();

/* function guess(event) {
  event.target.classList.add('selected');
} */
