function createRandomColor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
}

function colorRamdom() {
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerHTML = createRandomColor();
}
colorRamdom();
