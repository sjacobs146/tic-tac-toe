'use strict'

const store = require('../store')
const Game = require('./game')

const createSuccess = function (data) {
  store.game = data.game
  // clear game board
  $('.box').text('')
  $('#message').text('Game created')
  $('#start-btn').text('Reset Game')
}

const createFailure = function (error) {
  console.error(error)
}

const saveSuccess = function (data) {
  store.game = data.game
}

const saveFailure = function (error) {
  console.error(error)
}

const completedSuccess = function (data) {
  store.games = data.games
  const totalX = store.games.reduce(function (accumulator, currentValue) {
    const game = new Game(currentValue.id, currentValue.cells, currentValue.over, currentValue.player_x, currentValue.player_o)
    if (game.checkForWinner() === 'X') {
      accumulator++
    }
    return accumulator
  }, 0)
  $('#games-won').text('Total wins for player X: ' + totalX)
}

const completedFailure = function (error) {
  console.error(error)
}

module.exports = {
  createSuccess,
  createFailure,
  saveSuccess,
  saveFailure,
  completedSuccess,
  completedFailure
}
