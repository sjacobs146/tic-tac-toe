'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successful signup')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
}

const signInSuccess = function (data) {
  $('#message').text('Successful sign in!')
  store.user = data.user
  $('#signIn').collapse('hide')
  $('#signInMenuItem').addClass('hidden')
  $('.signedIn').removeClass('hidden')
  $('#game-board').collapse('show')
}

const signInFailure = function (error) {
  $('#message').text('Invalid email address or password, please try again')
}

const signOutSuccess = function () {
  store.user = null
  $('#message').text('Successful sign out')
  $('.signedIn').addClass('hidden')
  $('#signInMenuItem').removeClass('hidden')
  $('#signInMenuItem').addClass('active')
  $('#signIn').collapse('show')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
}

const changePasswordSuccess = function () {
  $('#message').text('Successful password change')
}

const changePasswordFailure = function (error) {
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
