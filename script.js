'use script';
// event handling
let SecretNumber = Math.floor(Math.random() * 20);

let scores = 20;
let high_scores = 0;
document.querySelector('.Number').value = SecretNumber;
document.querySelector('.check').addEventListener('click', function() {
  const x = Number(document.querySelector('.guess').value);
  console.log(x);
  if (x == 0) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  else if (x == SecretNumber) {

    document.querySelector('.message').textContent = 'correct Number!';
    high_scores++;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.Number').style.width = "3rem";
    if (scores > high_scores) {
      high_scores = scores;
      document.querySelector('.highscore').textContent = high_scores;
    }

  }
  else if (x > SecretNumber) {
    if (scores > 1) {
      document.querySelector('.message').textContent = 'Too high!'
      scores--;
      document.querySelector('.score').textContent = scores;
    }
    else {
      document.querySelector('.message').textCotent = 'You Loose the Game!'
    }
  }
  else if (x < SecretNumber) {
    if (scores > 1) {
      document.querySelector('.message').textContent = 'Too low!'
      scores--;
      document.querySelector('.score').textContent = scores;
    }
    else {
      document.querySelector('.message').textContent = 'you loose the Game!'
    }
  }
});


document.querySelector('.again').addEventListener('click', function() {
  scores = 20;
  high_scores = 0;
  SecretNumber = Math.floor(Math.random() * 20);
  high_scores = 0;
  document.querySelector('.Number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.check').textContent = 'check';
  document.querySelector('.score').textContent = scores;
  document.querySelector('.highscore').textContent = high_scores;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = 'grey';
  document.querySelector('.Number').style.width = '2rem';
})

