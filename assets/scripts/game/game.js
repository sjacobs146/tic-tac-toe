'use strict'

const Game = function (id, cells, over, player_x, player_o) {
  this.id = id
  this.cells = cells
  this.over = over
  this.player_x = player_x
  this.player_o = player_o
  this.currentPlayer = 'X'
}

Game.prototype.checkForWinner = function () {
  // returns winning player (i.e. X or O) or false if no winner
  const winners = [[0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
  let winner = false
  // loop through winning combos to get string.
  for (let i = 0; i < winners.length; i++) {
    // if string = 'XXX' or 'OOO' then we have a winner
    const coords = winners[i]
    const row = this.cells[coords[0]] + this.cells[coords[1]] + this.cells[coords[2]]
    if (row === 'XXX') {
      winner = 'X'
    } else if (row === 'OOO') {
      winner = 'O'
    }
  }
  return winner
}

Game.prototype.checkForDraw = function () {
  // game is over when all cells are full
  return this.cells.join('').length === 9
}

Game.prototype.togglePlayer = function () {
  this.currentPlayer = (this.currentPlayer === 'X' ? 'O' : 'X')
}

module.exports = Game
