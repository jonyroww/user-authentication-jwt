const validator = require('validator')
const jwt = require('jsonwebtoken')

function checkUserExists(document) {
    if (document !== null) {
      throw new Error('User with such email already exists')
    }   
}

function isValidEmail(email) {
 if (!validator.isEmail(email)) {
   throw new Error('Email is not valid')
 }

}

function isValidName(name) {
 if (!validator.isAlphanumeric(name)) {
   throw new Error('Name is not valid')
 }
}

function isValidPassword(pass) {
 if (!validator.isAscii(pass)) {
   throw new Error('Password is not valid')
 }
}

function isTokenValid(token) {
  const email = jwt.verify(token,'blablabla').email
  if (email === null) {
    throw new Error('Token is not valid')
  } else {
    return email
  }
}

module.exports = {
    checkUserExists:checkUserExists,
    isValidEmail:isValidEmail,
    isValidName:isValidName,
    isValidPassword:isValidPassword,
    isTokenValid

}