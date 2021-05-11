const colorPalette = document.getElementById('color-palette');

function gerarCor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
  
    return `rgb(${r},${g},${b})`;
  }

  function gerarPaleta() {
    for (let i = 0; i < 6; i += 1) {
      const div = document.createElement('div');
      div.className = 'color';
      colorPalette.appendChild(div);
    }
  }


gerarPaleta();

document.getElementsByClassName('color')[0].style.backgroundColor = gerarCor();
document.getElementsByClassName('color')[1].style.backgroundColor = gerarCor();
document.getElementsByClassName('color')[2].style.backgroundColor = gerarCor();
document.getElementsByClassName('color')[3].style.backgroundColor = gerarCor();
document.getElementsByClassName('color')[4].style.backgroundColor = gerarCor();
document.getElementsByClassName('color')[5].style.backgroundColor = gerarCor();