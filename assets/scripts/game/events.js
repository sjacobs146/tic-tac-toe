'use strict'
const api = require('./api')
const ui = require('./ui')
const Game = require('./game')
const store = require('../store')

let game = null

const onClickBox = function (event) {
  event.preventDefault()
  const elem = $(this)
  const targetId = elem.attr('id')
  const cellIndex = targetId.substring(targetId.length - 1)
  let gameOver = false
  if (store.user !== undefined && store.user !== null) {
    if (store.game === undefined || store.game === null || store.game.over) {
      // TODO: Want to be able to start game w/o clicking Start Game button
      $('#message').text('You must click on Start Game button to begin a new game.')
      return
      // async is biting my ass, need to wrap in a promise?
      // createGame()
      // console.log(store.game)
      // game = new Game(store.game.id, store.game.cells, store.game.over, store.game.player_x, store.game.player_o)
    }
    if (!game) {
      game = new Game(store.game.id, store.game.cells, store.game.over, store.game.player_x, store.game.player_o)
    }

    // TODO: would like a better way to do this to support alternate tokens.
    if (elem.text() !== 'X' && elem.text() !== 'O') {
      elem.text(game.currentPlayer)
      game.cells[cellIndex] = game.currentPlayer
      // check for winner
      const winner = game.checkForWinner()
      if (winner) {
        $('#message').text('Game over, Winner, winner, chicken dinner! Winner is player: ' + winner)
        gameOver = true
      } else {
        // check for game over
        if (game.checkForDraw(game.cells)) {
          $('#message').text('It is a draw! Game over, try again')
          gameOver = true
        }
      }
      // store current state of game
      saveGame(cellIndex, game.currentPlayer, gameOver)
      if (gameOver) {
        game = null
      } else {
        game.togglePlayer()
      }
    } else {
      $('#message').text('The box you selected is already taken.')
    }
  } else {
    $('#message').text('You must sign in to play the game.')
  }
}

const saveGame = function (index, value, over) {
  console.log('Save Game')
  const data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }
  api.saveGame(data)
    .then(ui.saveSuccess)
    .catch(ui.saveFailure)
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

const onGetTotalWins = function (event) {
  event.preventDefault()
  api.getCompletedGames()
    .then(ui.completedSuccess)
    .catch(ui.completedFailure)
  console.log('return from getCompletedGames')
  console.log(store.games)
}
const addHandlers = function () {
  $('#game-stats').on('submit', onGetTotalWins)
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
