'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successful signup')
  $('.navbar-text').text('Signed in as: ' + store.user.id)
}

const signUpFailure = function (error) {
  $('#message').text('Successful sign up failed!')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Successful sign in!')
  store.user = data.user
  $('#signIn').collapse('hide')
  $('#signInMenuItem').addClass('hidden')
  $('.signedIn').removeClass('hidden')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Invalid email address or password, please try again')
}

const signOutSuccess = function () {
  store.user = null
  console.log('signOutSuccess')
  $('#message').text('Successful sign out')
  $('.signedIn').addClass('hidden')
  $('#signInMenuItem').removeClass('hidden')
  $('#sign-in').show()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign out')
}

const changePasswordSuccess = function () {
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
