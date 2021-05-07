const bolasCores = document.querySelectorAll('.ball');
const corDaResposta = document.querySelector('#rgb-color');
const paragrafoResposta = document.querySelector('#answer');
const paragrafoPlacar = document.querySelector('#score');
const botaoReset = document.querySelector('#reset-game');

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
    if (event.target.style.backgroundColor === ('rgb' + corDaResposta.innerText)) {
      paragrafoResposta.innerText = 'Acertou!';
      let sum=0;
      if (localStorage.getItem('placar')!== null) sum = parseInt(localStorage.getItem('placar'));
      gerarPlacar(sum);
      paragrafoPlacar.innerText = localStorage.getItem('placar');
    } else paragrafoResposta.innerText = 'Errou! Tente novamente!';
  });
}

function recarregarPagina() {
  botaoReset.addEventListener('click', () => {
    location.reload();
  });
}

recarregarPagina();

function gerarPlacar(placar) {
  placar += 3;
  localStorage.setItem('placar', placar);
}

window.onload = () => {
  for (let index = 0; index < bolasCores.length; index += 1) {
    bolasCores[index].style.backgroundColor = gerarCoresAleatorias();
    clicarNaResposta(bolasCores[index]);
  }
  escolherResposta();

  paragrafoPlacar.innerText = 0;
  if (localStorage.getItem('placar')!== null) paragrafoPlacar.innerText = localStorage.getItem('placar');
  
}