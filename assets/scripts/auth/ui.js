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

const signOutSuccess = function () {
  console.log('Successful sign out')
  $('#message').text('Successful sign out')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
