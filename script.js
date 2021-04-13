'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 30;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
/*
let name = 'Saif Bashar';
console.log(name);
let speed = 50;
let k = 0;

function typeWritter() {
  if (k < name.length) {
    document.getElementById('.demo').innerHTML += name.charAt(i);
    k++;
    setTimeout(typeWritter, speed);
  }
}
typeWritter();
*/
let name = prompt("Enter your name:");
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 100) + 1;
console.log(randomNumber);
let score = 20;
// console.log(randomNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //! when player doesn't input a number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 😴';
  }
  //! when players win the game
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Currect Number😎';
    document.querySelector('.header').textContent = 'Congratulations ' + name;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
  }

  //! when number is too high
  else if (guess > randomNumber) {
    document.querySelector('.message').textContent = 'Too High ☹';
    document.querySelector('.header').textContent = 'Sorry ' + name+'!';
    document.querySelector('body').style.backgroundColor = 'red';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose the Gamne';
      document.querySelector('.score').textContent = 0;
    }
  }
  //! when number is too low
  else if (guess < randomNumber) {
    document.querySelector('.message').textContent = 'Too Low 🦄';
    document.querySelector('.header').textContent = 'Sorry ' + name+'!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loss the game😿';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.header').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  randomNumber = Math.trunc(Math.random() * 100) + 1;
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
});
