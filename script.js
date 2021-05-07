const bolasCores = document.querySelectorAll('.ball');
const corDaResposta = document.querySelector('#rgb-color');
const paragrafoResposta = document.querySelector('#answer');

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

function clicarNaResposta(element) {
  element.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === ('rgb' + corDaResposta.innerText)) paragrafoResposta.innerText = 'Acertou!';
    else paragrafoResposta.innerText = 'Errou! Tente novamente!';
  });
}

function recarregarPagina() {

}

window.onload = () => {
  for (let index = 0; index < bolasCores.length; index += 1) {
    bolasCores[index].style.backgroundColor = gerarCoresAleatorias();
    clicarNaResposta(bolasCores[index]);
  }
  escolherResposta();
}