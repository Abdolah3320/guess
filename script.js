// 'use strict';
// const secretNumber = Math.floor(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = '?';
// let attempts = 20;
// document.querySelector('.score').textContent = attempts;
// let hightScore = 0
// document.querySelector('.highscore').textContent = hightScore;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent = '🤡 Not a number';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too high';
//     attempts = Math.max(attempts - 1, 0);
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too low';
//     attempts = Math.max(attempts - 1, 0);
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct guess!';
//     document.querySelector('body').style.backgroundColor = '#3cb043';
//     document.querySelector('.number').textContent = secretNumber;
//   }
//   if(guess === secretNumber){
//     document.querySelector('.highscore').textContent=secretNumber
//   }else if (secretNumber > hightScore){
//     hightScore =hightScore
//   }else if(secretNumber<hightScore){
//     hightScore=secretNumber
//   }

//   document.querySelector('.score').textContent = attempts;

//   if (attempts === 0) {
//     document.querySelector('.message').textContent = 'Game Over. Try again!';
//   }
// });
'use strict';
let secretNumber, attempts, hightScore;

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  attempts = 20;
  document.querySelector('.score').textContent = attempts;
  document.querySelector('.message').textContent = 'Start guessing...';
}
resetGame();

hightScore = 0;
document.querySelector('.highscore').textContent = hightScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🤡 Not a number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
    attempts = Math.max(attempts - 1, 0);
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
    attempts = Math.max(attempts - 1, 0);
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct guess!';
    document.querySelector('body').style.backgroundColor = '#3cb043';
    document.querySelector('.number').textContent = secretNumber;

    if (attempts > hightScore) {
      hightScore = attempts;
      document.querySelector('.highscore').textContent = hightScore;
    }
  }

  document.querySelector('.score').textContent = attempts;

  if (attempts === 0) {
    document.querySelector('.message').textContent = 'Game Over. Try again!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
