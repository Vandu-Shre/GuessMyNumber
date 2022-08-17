'use strict'

let num = Math.floor(Math.random() * 20) + 1

const handleCheck = function () {
  const guess = Number(document.querySelector('.guess').value)
  let score = Number(document.querySelector('.score').textContent)
  let message

  if (num - guess > 0) message = 'Wrong! Try going higher.'
  if (num - guess < 0) message = 'Wrong! Try going lower.'
  if (num - guess === 1 || num - guess === -1) message = 'You are very close'
  if (!guess || guess < 1 || guess > 20) message = 'Enter a valid number'
  console.log(num, guess)

  if (num === guess) {
    document.querySelector('.message').textContent = 'You got it!!'
    if (score > document.querySelector('.highscore').textContent)
      document.querySelector('.highscore').textContent = score
  } else {
    document.querySelector('.score').textContent = score - 1
    document.querySelector('.message').textContent = message
  }
}

const handleAgain = function () {
  num = Math.floor(Math.random() * 20) + 1
  document.querySelector('.guess').value = null
  document.querySelector('.score').textContent = 20
}

document.querySelector('.check').addEventListener('click', handleCheck)
document.querySelector('.again').addEventListener('click', handleAgain)
