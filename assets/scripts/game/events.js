'use strict'
const api = require('./api')
const ui = require('./ui')
const Game = require('./game')
const store = require('../store')

let game = null

const onClickBox = function (event) {
  console.log('onClickBox')
  let cellIndex = 0
  if (game === null) {
    console.log('game = null')
    console.log(store.game)
    game = new Game(store.game.id, store.game.cells, store.game.over, store.game.player_x, store.game.player_o)
  }
  console.log(game)
  const elem = $(this)
  const targetId = elem.attr('id')
  cellIndex = targetId.substring(targetId.length - 1)

  // TODO: would like a better way to do this.
  if (elem.text() !== 'X' && elem.text() !== 'O') {
    elem.text(game.currentPlayer)
    game.cells[cellIndex] = game.currentPlayer
    // check for winner
    const winner = game.checkForWinner()
    if (winner) {
      console.log('Winner is player: ' + winner)
      game.over = true
      game = null
    } else {
      // check for game over
      game.over = game.checkForDraw(game.cells)
      if (game.over) {
        console.log('Game Over!')
        game = null
      }
    }
    game.togglePlayer()
  } else {
    console.log('Cell already taken')
  }
}

const onClickStart = function (event) {
  event.preventDefault()
  // clear game board
  $('.box').text('')
  console.log('Start Game')
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const addHandlers = function () {
  $('#start-game').on('submit', onClickStart)
  $('#cell0').on('click', onClickBox)
  $('#cell1').on('click', onClickBox)
  $('#cell2').on('click', onClickBox)
  $('#cell3').on('click', onClickBox)
  $('#cell4').on('click', onClickBox)
  $('#cell5').on('click', onClickBox)
  $('#cell6').on('click', onClickBox)
  $('#cell7').on('click', onClickBox)
  $('#cell8').on('click', onClickBox)
}

module.exports = {
  addHandlers
}
