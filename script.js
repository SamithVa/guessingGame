'use strict';

// random a number from 1 to 20
const getRandom = () => Math.floor(Math.random() * 20) + 1;

let num = getRandom();
let score = 20;
let highScore = 0;

// display a message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// check button event listener
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  score = Number(document.querySelector('.score').textContent);
  // no value input
  if (!guess) {
    displayMessage('⛔ No number!');
  } else {
    if (guess === num) {
      displayMessage('🎉 Correct number!');
      document.querySelector('.number').textContent = num;
      document.body.style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      if (score > 0) {
        if (guess < num) {
          displayMessage('⬆️ Too low!');
        } else {
          displayMessage('⬇️ Too high!');
        }
        score--;
        document.querySelector('.score').textContent = score;
      }
      // when score === 0, gameover
      else {
        displayMessage('🙈 Gameover!');
      }
    }
  }
});

// play again button event listener
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
});
