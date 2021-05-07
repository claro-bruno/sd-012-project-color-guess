const bolasCores = document.querySelectorAll('.ball');
const corDaResposta = document.querySelector('#rgb-color');

function gerarCoresAleatorias() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);

  return `rgb(${red} , ${green} , ${blue})`
}

function escolherResposta() {
  const teste = Math.ceil(Math.random() * 5);
  let corSemRGB = `${bolasCores[teste].style.backgroundColor}`;
  corSemRGB = corSemRGB.replace('rgb','');
  corDaResposta.innerText= `${corSemRGB}`;
}



window.onload = () => {
  for (let index = 0; index < bolasCores.length; index += 1) {
    bolasCores[index].style.backgroundColor = gerarCoresAleatorias();
  }
  escolherResposta();
}