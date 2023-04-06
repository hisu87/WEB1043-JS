var box = document.querySelector('.box');
var score = document.querySelector('#score');
var timer = document.querySelector('#timer');
var startButton = document.querySelector('.start');
var intervalId;
var timeLeft = 30;
var currentScore = 0;

function startGame() {
  startButton.disabled = true;
  intervalId = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
  box.addEventListener('click', increaseScore);
}

function endGame() {
  clearInterval(intervalId);
  box.removeEventListener('click', increaseScore);
  startButton.disabled = false;
  alert('Game over! Your score is ' + currentScore + ' and your click duration is ' + (30 - timeLeft) + ' seconds.');
  timeLeft = 30;
  currentScore = 0;
  score.textContent = currentScore;
  timer.textContent = timeLeft;
  box.style.display = 'none';
}

function increaseScore() {
  currentScore++;
  score.textContent = currentScore;
  box.style.backgroundColor = getRandomColor();
  box.style.top = Math.floor(Math.random() * 400) + 'px';
  box.style.left = Math.floor(Math.random() * 400) + 'px';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

startButton.addEventListener('click', startGame);