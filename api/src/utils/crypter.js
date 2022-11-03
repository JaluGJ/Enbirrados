require('dotenv').config();
const { compareSync, hashSync } = require('bcrypt')
const { AUTH_ROUNDS } = process.env

module.exports = {
  encryptPass: (password) => {
    const hashedPass = hashSync(password, Number(AUTH_ROUNDS))
    return hashedPass
  },
  comparePass: (password, user) => {
    const compare = compareSync(password, user.password)
    return compare
  }
}