'use strict'

const store = require('../store')

const createSuccess = function (data) {
  console.log('Create game successful')
  console.log(data)
  store.game = data.game
  $('#message').text('Game created')
}

const createFailure = function (error) {
  console.error(error)
}

module.exports = {
  createSuccess,
  createFailure
}
