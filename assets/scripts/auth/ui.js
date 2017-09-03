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
  $('#sign-out').show()
  $('#sign-in').hide()
}

const signInFailure = function (error) {
  console.error(error)
}

const signOutSuccess = function () {
  console.log('Successful sign out')
  store.user = null
  $('#message').text('Successful sign out')
  $('#sign-in').show()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign out')
}

const changePasswordSuccess = function () {
  console.log('Successful password change')
  $('#message').text('Successful password change')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on change password')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
