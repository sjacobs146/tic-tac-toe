'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Successful signup')
  $('#message').text('Successful signup')
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log('Successful sign-in')
  $('#message').text('Successful sign in!')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
