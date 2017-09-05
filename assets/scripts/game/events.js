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
  console.log('onClickStart')
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onGetTotalWins = function (event) {
  event.preventDefault()
  api.getCompletedGames()
    .then(ui.completedSuccess)
    .catch(ui.completedFailure)
}

const onShowCollapsed = function () {
  // when a collapsed div is shown hide all other collapsible divs that are visible
  $('.main-container.collapse').not($(this)).collapse('hide')
  $('#message').text('')
}

const addHandlers = function () {
  $('.main-container.collapse').on('shown.bs.collapse', onShowCollapsed)
  $('#game-stats').on('submit', onGetTotalWins)
  $('#start-btn').on('click', onClickStart)
  $('.box').on('click', onClickBox)
}

module.exports = {
  addHandlers
}
