'use strict'

const store = require('../store')

const createSuccess = function (data) {
  console.log('Create game successful')
  console.log(data)
  store.game = data.game
  console.log(store.game)
  $('#message').text('Game created')
  $('#start-btn').text('Reset Game')
}

const createFailure = function (error) {
  console.error(error)
}

const saveSuccess = function (data) {
  console.log('Save game successful')
  console.log(data)
  store.game = data.game
}

const saveFailure = function (error) {
  console.error(error)
}
module.exports = {
  createSuccess,
  createFailure,
  saveSuccess,
  saveFailure
}
