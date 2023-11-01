'use strict';

console.log(document.querySelector('.message').textContent);

//DOM Manipulation - In full it's a Document Object Model. This is a Structured Representation of HTML Documents.
//This means that it allows JavaScript to access HTML elements and styles to manipulate them(Change Text, HTML attributes, and even CSS styles).

/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 0;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔ No Number!'); // document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number!'); // document.querySelector('.message').textContent = '🏆 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    //Inline Styles - This is a Style that is directly applied in the HTML using the Style Attribute.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore); // document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⚡ Too High!' : '🙄 Too Low!'); // document.querySelector('.message').textContent = guess > secretNumber ? '⚡ Too High!' : '🙄 Too Low!';
      score--; // score = score - 1;
      displayScore(score); // document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You have lost the Game!'); // document.querySelector('.message').textContent = '💣 You have lost the Game!';
      displayScore(0); // document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('😵 Unknown Error ${guess}!'); // document.querySelector('.message').textContent = '😵 Unknown Error ${guess}!';
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⚡ Too High!';
  //       score--; // score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '💣 You have lost the Game!';
  //       document.querySelector('.score').textCotent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🙄 Too Low!';
  //       score--; //score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '💣 You have lost the Game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber('?'); // document.querySelector('.number').textContent = '?';
  displayGuess(''); // document.querySelector('.guess').value = '';
  displayMessage('Start Guessing..'); // document.querySelector('.message').textContent = 'Start Guessing..';
  displayScore(score); // document.querySelector('.score').value = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
