const { sendEmail } = require("../../middlewares/nodemailer")
const { changePasswordTemp, invitationTemp } = require("../../utils/mailTemplates")

module.exports={
  deleteUser: async(req,res) => {
    try {
      const envio = {
        email:'gabyjalu@gmail.com',
        subject: 'Marcos Birthday',
        html:'<p> jaja </p>'
      }
      await sendEmail(envio.email, envio.subject, invitationTemp('Juan', {name: "Birthday", date:'27/11/2022'}))
      return res.send('test')
    } catch (error) {
      return res.status(500).json({message:'Server error', error})
    }
  }
}