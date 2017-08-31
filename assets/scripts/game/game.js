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

module.exports = {
  createGame
}
