function randomColors() {
  const colorRed = parseInt((Math.random() * 255 + 1),10);
  const colorGreen = parseInt((Math.random() * 255 + 1),10);
  const colorBlue = parseInt((Math.random() * 255 + 1),10);
  const colorNumbers = `(${colorRed}, ${colorGreen}, ${colorBlue})`;
  const color = 'rgb' + colorNumbers;
  return {
    colorNumbers,
    color
  }
}

const randomColor = randomColors();
const getCorrectColorP = document.getElementById('rgb-color');
getCorrectColorP.innerHTML = randomColor.colorNumbers; 
