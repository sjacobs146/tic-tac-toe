'use strict'

const createGame = function () {
  const game = {
    id: 0,
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false,
    player_x: '',
    player_o: '',
    currentPlayer: 'X',
    togglePlayer: () => { this.currentPlayer === 'X' ? 'O' : 'X' }
  }
  return game
}

module.exports = {
  createGame
}
