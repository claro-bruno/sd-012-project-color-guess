let r = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
let g = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
let b = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();

let rgbColor = document.querySelector('#rgb-color');

let corASerAdivinhada = '(' + r + ', ' + g + ', ' + b + ')';

rgbColor.innerText = corASerAdivinhada;