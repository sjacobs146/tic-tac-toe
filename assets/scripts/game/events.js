'use strict'
const game = require('./game')
let gameObj = null

const onClickBox = function (event) {
  let cellIndex = 0
  if (gameObj === null) {
    console.log('gameObj = null')
    gameObj = game.createGame()
  }
  console.log(gameObj)
  const elem = $(this)
  console.log('id: ' + elem.attr('id'))
  console.log('text: ' + elem.text())

  // determine which cell was Clicked
  // TODO: Would like to use event.currentTarget and put handler on the game-board instead
  switch (elem.attr('id')) {
    case 'cell1':
      cellIndex = 0
      break
    case 'cell2':
      cellIndex = 1
      break
    case 'cell3':
      cellIndex = 2
      break
    case 'cell4':
      cellIndex = 3
      break
    case 'cell5':
      cellIndex = 4
      break
    case 'cell6':
      cellIndex = 5
      break
    case 'cell7':
      cellIndex = 6
      break
    case 'cell8':
      cellIndex = 7
      break
    case 'cell9':
      cellIndex = 8
      break
  }
  // TODO: would like a better way to do this.  What is the value of text if empty?
  if (elem.text() !== 'X' && elem.text() !== 'O') {
    elem.text(gameObj.currentPlayer)
    gameObj.cells[cellIndex] = gameObj.currentPlayer
    // check for winner
    const winner = game.checkForWinner(gameObj.cells)
    if (winner) {
      console.log('Winner is player: ' + winner)
      gameObj.over = true
    } else {
      // check for game over
      game.over = game.checkForDraw(gameObj.cells)
      console.log('Game Over: ' + game.over)
    }
    gameObj.togglePlayer()
    console.log('Current Player: ' + gameObj.currentPlayer)
  } else {
    console.log('Cell already taken')
  }
}
// const onClickStart = function () {
//   // console.log('Start Game')
//   game = game.createGame()
//   // change button text to restart game
// }
const addHandlers = function () {
  // $('#startGame').on('click', console.log('Click Start'))
  $('#cell1').on('click', onClickBox)
  $('#cell2').on('click', onClickBox)
  $('#cell3').on('click', onClickBox)
  $('#cell4').on('click', onClickBox)
  $('#cell5').on('click', onClickBox)
  $('#cell6').on('click', onClickBox)
  $('#cell7').on('click', onClickBox)
  $('#cell8').on('click', onClickBox)
  $('#cell9').on('click', onClickBox)
}

module.exports = {
  addHandlers
}
