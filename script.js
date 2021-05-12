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

for (let i = 0; i < 6; i += 1){
  document.getElementsByClassName('ball')[i].style.backgroundColor = `rgb${gerarCor()}`;;
}

function cor(){
  const rgb = document.getElementById('rgb-color')
  const num = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[num].style.backgroundColor.replace('rgb', '')
  console.log(num)

}
cor()

function select(event) {
  event.target.classList.add('selected');
}

for (let i = 0; i < 6; i += 1){
  document.getElementsByClassName('ball')[i].addEventListener('click', select);
}


function guess() {

  if (document.getElementsByClassName('selected').length > 1){
    const selectedColor = document.getElementsByClassName('selected').style.backgroundColor
    if (selectedColor.replace('rgb', '') = document.getElementById('rgb-color').innerHTML){
      document.getElementById('answer').innerHTML = 'Acertou'
    } {
      document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
    }
  } {
    document.getElementById('answer').innerHTML = 'Escolha uma cor'
  }
}

guess()
