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
  const targetId = elem.attr('id')
  cellIndex = targetId.substring(targetId.length - 1)

  // TODO: would like a better way to do this.
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
      if (game.over) {
        console.log('Game Over!')
      }
    }
    gameObj.togglePlayer()
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
