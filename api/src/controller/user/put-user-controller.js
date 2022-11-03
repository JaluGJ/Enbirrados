const { User } = require('../../db')
const { sendEmail } = require('../../middlewares/nodemailer')
const { comparePass, encryptPass } = require('../../utils/crypter')
const { successfulChangesTemp, adminTemp } = require('../../utils/mailTemplates')

module.exports = {
  updateUserStatus: async (req, res) => {
    try {
      if (!req.user.isAdmin) return res.status(401).json({ message: 'Unathorized access' })

      const { banned, isAdmin } = req.body
      const { id } = req.params
      const user = await User.findByPk(id)

      if (!user) return res.status(404).json({ message: 'Cannot find this user' })

      let notification = {}

      if (banned !== undefined) {
        user.banned = banned
        sendEmail(user.email, banned ? 'What have you done!':'Welcome back!', adminTemp(user.name, banned))
        notification.banned = `The user ${user.name} was ${banned ? 'banned':'unbanned'} succesfully`
      }
      if (isAdmin !== undefined) {
        user.isAdmin = isAdmin
        sendEmail(user.email, isAdmin ? 'Congratulations new Admin!':'Oh no. I am sorry', adminTemp(user.name, isAdmin))
        notification.isAdmin = `The user ${user.name} was ${isAdmin ? 'upgraded' : 'downgraded'} to admin successfully`
      }
      await user.save()
      res.json({ message: 'Changed succefully', data: user })

    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error', error })
    }
  },

  changePassword: async (req, res) => {
    const { oldpass, newpass } = req.body.data
    const { dataValue } = req.user
    try {
      if (!comparePass(oldpass, dataValue.password)) return res.status(401).json({ message: 'Wrong pass' })
      const user = await User.findByPk(dataValue.id)
      let password = encryptPass(newpass)
      user.password = password
      await user.save()
      sendEmail(user.email, 'Your password was changed succesfully', changePasswordTemp(user.name))
      return res.json({ message: 'Password Changed Succesfully' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error', error })
    }
  },

  changeInfo: async (req, res) => {
    const { profilePic, name, surname } = req.body
    const user = req.user
    try {
      const usuario = await User.findByPk(user.id)
      if (profilePic) usuario.profilePic = profilePic
      if (name) usuario.name = name
      if (surname) usuario.surname = surname
      usuario.save()
      sendEmail(user.email, 'Changes succesfully made', successfulChangesTemp(user.name))
      return res.json({ message: 'Changed succesfully', data: usuario })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error', error })
    }
  }
}