const rgbText = document.getElementById('rgb-color');

function colorGenerate() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}
rgbText.innerText = colorGenerate();