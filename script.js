const allBalls = document.querySelectorAll('.ball');

function generateColor() {
  for (let i = 0; i < allBalls.length; i += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    allBalls[i].style.backgroundColor = `rgb(${red} ${green} ${blue})`;
  }  
}

generateColor();
