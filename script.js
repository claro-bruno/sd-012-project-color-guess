const bolasCores = document.querySelectorAll('.ball');
function gerarCoresAleatorias() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);

  return `rgb(${red} , ${green} , ${blue})`
}

window.onload = () => {
  for (let index = 0; index < bolasCores.length; index += 1) {
    bolasCores[index].style.backgroundColor = gerarCoresAleatorias();
  }
}