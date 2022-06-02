'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math.random()-gives no. between 0 and 1
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.message').textContent = 'correct secretNumber !';
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🥱no secretNumber';
    displayMessage('🥱no secretNumber'); // fxn call
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'aqua';
    document.querySelector('.number').style.width = '20rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'To high ' : 'too low';
      score--;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//for reseting everything from again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //reassining the value of secret no.
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
