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

function createColorOptions(numberOfColors) {
  const getColorOptions = document.getElementById('color-options');
  const colors = [];
  for (let index = 0; index < numberOfColors; index += 1) {
    const color = randomColors().color;
    const createColorOption = document.createElement('div');
    createColorOption.className = 'ball';
    createColorOption.style.backgroundColor = color;
    getColorOptions.appendChild(createColorOption);
    colors.push(color);
  }
  return colors
}


const numberOfColors = 6;

const colors = createColorOptions(numberOfColors);
const randomIndex = parseInt(Math.random() * numberOfColors);
const randomColor = colors[randomIndex];
const getCorrectColorP = document.getElementById('rgb-color');
getCorrectColorP.innerHTML = randomColor.replace('rgb',''); 