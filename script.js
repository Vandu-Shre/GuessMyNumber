'use strict'

let num = Math.floor(Math.random() * 20) + 1
let score = 20

const handleCheck = function () {
  const guess = Number(document.querySelector('.guess').value)
  const highscore = document.querySelector('.highscore').textContent
  let message

  if (score === 0) {
    message = 'You have exhausted your chances. Play again!'
  } else if (!guess || guess < 1 || guess > 20) {
    message = 'Please enter a valid number'
    score--
  } else if (guess === num) {
    message = 'Yayy! You got it!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('body').style.width = '30rem'
    document.querySelector('.number').textContent = num
    if (score > highscore)
      document.querySelector('.highscore').textContent = score
  } else if (guess - num === 1 || guess - num === -1) {
    score--
    message = 'You are very close'
  } else if (guess < num) {
    score--
    message = 'Wrong! Try going higher'
  } else if (guess > num) {
    score--
    message = 'Wrong! Try going lower'
  }

  document.querySelector('.score').textContent = score
  document.querySelector('.message').textContent = message
}

const handleAgain = function () {
  num = Math.floor(Math.random() * 20) + 1
  document.querySelector('.guess').value = null
  document.querySelector('.score').textContent = 20
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('body').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
}

document.querySelector('.check').addEventListener('click', handleCheck)
document.querySelector('.again').addEventListener('click', handleAgain)
