require('dotenv').config();
const { User } = require('../../db.js')
const jwt = require('jsonwebtoken')
const { AUTH_SECRET, AUTH_EXPIRES } = process.env
const { encryptPass, comparePass } = require('../../utils/crypter.js');
const { sendEmail } = require('../../middlewares/nodemailer.js');
const { otherMail, registerSuccesTemp } = require('../../utils/mailTemplates.js');

module.exports = {
  createUser: async (req, res, next) => {
    const { email, name, surname, password, isAdmin } = req.body
    try {
      if (!email) return res.status(404).json({ message: 'email is needed' })
      if (!name) return res.status(404).json({ message: 'name is needed' })
      if (!surname) return res.status(404).json({ message: 'surname is needed' })
      if (!password) return res.status(404).json({ message: 'password is needed' })

      const hashPassword = encryptPass(password)

      const [newUser, isCreated] = await User.findOrCreate({
        where: { email },
        defaults: {
          name,
          surname,
          email,
          password: hashPassword,
          isAdmin: isAdmin ? true : false,
          profilePic: 'https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png'
        }
      })

      if (!isCreated) {
        sendEmail(email, 'Watch out', otherMail(name))
        return res.status(400).json({ message: 'this mail is already in use' })
      }
      sendEmail(email, 'Welcome to Embirrados', registerSuccesTemp(name))
      let user = {
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        profilePic: newUser.profilePic
      }
      return res.json({ message: 'new user created', data:user })
    } catch (error) {
      console.log(error, "createUser")
      return res.status(500).json({message:'Server error',error})
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body

      const user = await User.findOne({
        where: {
          email
        }
      })
      if (!user) return res.status(404).json({ message: `This user it doesn't exists` })
      if (user.banned) return res.status(401).json({ message: 'User banned' })
      const correct = comparePass(password, user)
      if (!correct) return res.status(401).json({ message: 'Wrong user or password' })
      token = jwt.sign({ user: user }, AUTH_SECRET, {
        expiresIn: AUTH_EXPIRES
      })
      return res.json({message:'Everything is ok', data:{user: user, token: token} })

    } catch (error) {
      console.log(error, "login")
      return res.status(500).json({message:'Server error',error})
    }
  }
}