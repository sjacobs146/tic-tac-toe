'use strict'

const createGame = function () {
  const game = {
    id: 0,
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false,
    player_x: '',
    player_o: '',
    currentPlayer: 'X',
    togglePlayer: function () {
      this.currentPlayer = (this.currentPlayer === 'X' ? 'O' : 'X')
    }
  }
  return game
}

const checkForWinner = function (cells) {
  // returns winning player (i.e. X or O) or false if no winner
  const winners = [[0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
  let winner = false
  // loop through winning combos to get string.
  for (let i = 0; i < winners.length; i++) {
    // if string = 'XXX' or 'OOO' then we have a winner
    const coords = winners[i]
    const row = cells[coords[0]] + cells[coords[1]] + cells[coords[2]]
    if (row === 'XXX') {
      winner = 'X'
    } else if (row === 'OOO') {
      winner = 'O'
    }
  }
  return winner
}

const checkForDraw = function (cells) {
  // game is over when all cells are full
  return cells.join('').length === 9
}

module.exports = {
  createGame,
  checkForWinner,
  checkForDraw
}
