require('dotenv').config();
const jwt = require('jsonwebtoken')
const { AUTH_SECRET } = process.env
const { User } = require('../db.js')

module.exports = {
  auth: (req, res, next) => {
    try {
      if (!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized access' })

      let token = req.headers.authorization.split(" ")[1]

      jwt.verify(token, AUTH_SECRET, (error, decode) => {
        
        if (error) return res.status(500).json({ message: "Error on decode", error })

        User.findByPk(decode.user.id).then((user) => {
          req.user = user
          next()
        })
      })
    } catch (error) {
      res.status(500).json({message:'Sever error', error})
      throw new Error(error)
    }
  }
}