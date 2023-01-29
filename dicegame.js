'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const score = [0, 0];
let currentScore = 0;
let Activeplayer = 0;
let playing = true;

const switchplayer = function() {
  document.getElementById(`current--${Activeplayer}`).textContent = 0;

  Activeplayer = Activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
};
//Rolling dice functionality
btnRoll.addEventListener('click', function() {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3.if rolled dice is one then switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${Activeplayer}`).textContent = currentScore;

    } else {
      switchplayer();

    }
  }
});
btnHold.addEventListener('click', function() {
  score[Activeplayer] += currentScore;
  console.log(score[Activeplayer]);
  document.getElementById(`score--${Activeplayer}`).textContent = score[Activeplayer];
  if (score[Activeplayer] >= 20) {

    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${Activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${Activeplayer}`).classList.remove('player--active');
  }
  else {

    switchplayer();
  }
});
btnNew.addEventListener('click', function() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
});
