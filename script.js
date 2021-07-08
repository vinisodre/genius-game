let order = [];

let clicedkOrder = [];

let score = 0;

// 0 = azul
// 1 = amarelo
// 2 = vermelho
// 3 = verde

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clicedkOrder = [];

  for (let i in order) {
    let elementColor = createElementColor(color[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('.selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
} 

let checkOrder = () => {
  for (let i in clicedkOrder) {
    if (clicedkOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clicedkOrder.length == order.length) {
    alert(`A pontuação foi ${score}. Continue para o próximo nível!`);
    nextLevel();
  }
}

let click = (color) => {
  clicedkOrder[clicedkOrder.length] = color;
  createElementColor(color).classList.add('selected');

  setTimeout(() => {
    createElementColor(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

let createElementColor = (color) => {
  if (color == 0) {
    return blue;
  } else if (color == 1) {
    return yellow;
  } else if (color == 2) {
    return red;
  } else if (color == 3) {
    return green;
  }
}

let nextLevel = () =>{
  score++;
  shuffleOrder();
}

let gameOver = ()=>{
  alert(`Você perdeu o jogo! \nSua pontuação foi ${score}.`);
  order = [];
  clicedkOrder = [];

  playGame();
}

let playGame = () =>{
  score = [];
  alert(`Bem-vindo ao Jogo! Fique atento e preste atenção!`);
  
  nextLevel();
}

blue.addEventListener('click', click(0));
yellow.addEventListener('click', click(1));
red.addEventListener('click', click(2));
green.addEventListener('click', click(3));

blue.onClick = () => click(0);
yellow.onClick = () => click(1);
red.onClick = () => click(2);
green.onClick = () => click(3);

playGame();