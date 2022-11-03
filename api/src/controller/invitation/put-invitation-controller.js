const { Meeting, User, Invitation } = require('../../db.js')
const { sendEmail } = require('../../middlewares/nodemailer.js')
const { invitationModificationsTemp } = require('../../utils/mailTemplates.js')

//'Rejected','Accepted','Waiting','Caduced','Canceled','Attended'

module.exports = {
  updateInvitation: async (req, res) => { //update status
    const { id, status } = req.body
    try {
      const invitation = await Invitation.findByPk(id)
      if (invitation.userId !== req.user.id) return res.status(401).json({ message: 'Unathorized access' })
      invitation.status = status
      invitation.save()
      if (status === 'Accepted'){

        const meeting = await Meeting.findByPk(invitation.meetingId)
        const user = await User.findByPk(invitation.userId)

        user.addMeeting(meeting)
      } 

      return res.json({ message: 'Everything ok', data: invitation })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error', error })
    }

  }, 
  updateInvitationForAll: async (req, res) => { //this update must also change due to state of the meeting 
    try {
      const admin = req.user
      if(!admin.isAdmin) return res.status(401).json({message:'Unathorized access'})
      const {info, status, date, name, is_deleted} = req.body
      if (!name) return res.status(400).json({message:'Name needed'})
      const invitations = await Invitation.findAll({where: {name: name}})
      invitations.forEach(async (inv)=>{
        if (status) inv.status = status
        if (date) inv.date = date
        if (info) inv.info = info
        if (is_deleted) inv.is_deleted = is_deleted
        let user = await User.findByPk(inv.userId)
        sendEmail(user.email, 'There were changes on the invitation. Check yours', invitationModificationsTemp(user.name,{name:inv.name}))
        await inv.save()
      })

      return res.json({ message: 'Everything ok' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error', error })
    }
  } //update time, hour, etc. Just Admin Can
}