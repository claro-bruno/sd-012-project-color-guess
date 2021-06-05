const rgbColor = () => {
  const color = Math.round(Math.random() * 255);
  const color2 = Math.round(Math.random() * 255);
  const color3 = Math.round(Math.random() * 255);
  const spanRgb = document.querySelector('#rgb-color');
  spanRgb.innerHTML = `rgb( ${color}, ${color2}, ${color3})`;
};

rgbColor();

const colors = () => {
  const divColor = document.querySelectorAll('.ball');;
  const randomColor = document.querySelector('#rgb-color').innerHTML;
  divColor.forEach((cor) => {
  const color = Math.round(Math.random() * 255);
  const color2 = Math.round(Math.random() * 255);
  const color3 = Math.round(Math.random() * 255);
   console.log(cor.style.backgroundColor = `rgb( ${color}, ${color2}, ${color3})`);
  })
}

colors();