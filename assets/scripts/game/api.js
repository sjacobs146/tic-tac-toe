
const config = require('./../config')
const store = require('../store')

const createGame = function () {
  console.log('createGameAPI')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  createGame
}
