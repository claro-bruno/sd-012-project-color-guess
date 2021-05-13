let r = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
let g = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
let b = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
let corASerAdivinhada = '(' + r + ', ' + g + ', ' + b + ')';
let rgbColor = document.querySelector('#rgb-color');
let circleContainer = document.querySelector('#circle-container');
let numeroResposta = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
// let options = document.querySelectorAll('.ball');

rgbColor.innerText = corASerAdivinhada;

for (let index = 1; index <= 6; index += 1) {
  let option = document.createElement('div');
  let red = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  let green = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  let blue = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  let corOption = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  option.style.display = 'inline-block';
  option.className = 'ball';
  option.style.height = '50px';
  option.style.width = '50px';
  option.style.borderRadius = '50%';
  option.style.margin = '10px'
  if (index === numeroResposta) {
    option.style.backgroundColor = 'rgb' + corASerAdivinhada;
    // options[index-1].style.backgroundColor = 'rgb' + corASerAdivinhada;
  } else {
    option.style.backgroundColor = corOption;
    // options[index-1].style.backgroundColor = corOption;
  }
  circleContainer.appendChild(option);
}
