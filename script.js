const inputNode = document.querySelector(".input");
const btnNode = document.querySelector(".btn");
const answerNode = document.querySelector(".answer");
const counterNode = document.querySelector(".counter");
const playNode = document.querySelector(".play");
const playAgainNode = document.querySelector(".repeatGameBtn");

let number = Math.ceil(Math.random() * 100);
console.log(number);
let win = 0;
let tries = 1;

let game = () => {
  if (inputNode.value === '') {
    answerNode.textContent = "Введите число!!!!";
  } else {
    let guess = +(inputNode.value).trim();
    if (isNaN(guess)) { 
      answerNode.textContent = "Введите число";
      inputNode.value = "";
    } else if (guess > number) {
      answerNode.textContent = "Меньше";
      inputNode.value = "";
    } else if (guess < number) {
      answerNode.textContent = "Больше";
      inputNode.value = "";
    } else {
      win += 1;
      counterNode.textContent = win;
      answerNode.textContent = `Угадал за ${tries} ходов`;
      playNode.classList.add("d-none");
      playAgainNode.classList.remove("d-none");
    }
    tries += 1;
   }
};

let gameAgain = () => {
  playAgainNode.classList.add("d-none");
  playNode.classList.remove("d-none");
  inputNode.value = "";
  answerNode.textContent = "—";
  number = Math.ceil(Math.random() * 100);
  console.log(number);
  tries = 1;
};

btnNode.addEventListener("click", game);

playAgainNode.addEventListener("click", gameAgain);
