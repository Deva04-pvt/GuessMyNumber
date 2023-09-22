'use strict';

let secretNumber;
let score;
let highscore = 0;

const initialize = function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};

initialize();
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.score').textContent = score;
  if (score > 0) {
    const guessedNumber = Number(document.querySelector('.guess').value);
    if (!guessedNumber) {
      document.querySelector('.message').textContent = 'No Number';
    } else if (guessedNumber === secretNumber) {
      displayMessage('✅ Correct Guess');
      document.querySelector('body').style.backgroundColor = 'rgb(42, 181, 0)';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      guessedNumber > secretNumber
        ? displayMessage('📈 Too High')
        : displayMessage('📉 Too Low');
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
  if (score === 0) {
    displayMessage('Game Over');
  }
});

document.querySelector('.again').addEventListener('click', initialize);
