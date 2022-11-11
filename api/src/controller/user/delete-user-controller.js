const { sendEmail } = require("../../middlewares/nodemailer")
const {User} = require('../../db.js')
const { deletedUser } = require("../../utils/mailTemplates")

module.exports={
  deleteUser: async(req,res) => {
    try {
      const userId = req.params.id
      const user = await User.findByPk(userId)
      user.is_deleted = true
      await user.save()
      await sendEmail(user.email, 'Your account was deleted', deletedUser('Juan'))
      return res.json({message:'Email deleted succesfully'})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message:'Server error', error})
    }
  }
}