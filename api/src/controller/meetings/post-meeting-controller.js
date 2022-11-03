const {Meeting, Invitation, User} = require('../../db.js')
const { sendEmail } = require('../../middlewares/nodemailer.js')
const { invitationTemp } = require('../../utils/mailTemplates.js')

module.exports={
  newMeeting: async(req, res) => {
    const user = req.user
    if(!user.isAdmin) return res.status(401).json({message:'You are not allowed to create a new meeting'})
    const {name, date, beer, temperature, status, detail, invitedList} = req.body
    if(!name) return res.status(404).json({message:'Missing name'})
    if(!date) return res.status(404).json({message:'Missing date'})
    if(!beer) return res.status(404).json({message:'Missing beer'})
    if(!temperature) return res.status(404).json({message:'Missing temperature'})
    if(!status) return res.status(404).json({message:'Missing status'})
    if(!detail) return res.status(404).json({message:'Missing detail'})

    try {
      const newMeeting = await Meeting.create({
        name,
        date,
        beer,
        temperature,
        status,
        detail: detail ? detail : null,
        hostId: user.id,
        hostPic: user.profilePic,
        hostName: user.name,
        is_deleted:false
      })
      const admin = await User.findByPk(user.id)
      const invitationAdmin = await Invitation.create({
        name,
        date,
        status: 'Accepted',
        info: detail ? detail : null,
        is_deleted:false
      })
      admin.addInvitation(invitationAdmin)
      newMeeting.addInvitation(invitationAdmin)
      admin.addMeeting(newMeeting)
      

      invitedList?.forEach(async (user) => { //invitedList, array of id
      const users = await User.findByPk(user.id)  
      const invitation = await Invitation.create({
        name,
        date,
        status: 'Waiting',
        info: detail ? detail : null,
        is_deleted:false
      })
      sendEmail(users.email, 'We want you with us', invitationTemp(users.name, {name:name,date:date}))
      newMeeting.addInvitation(invitation) //si la acepta, se añade la meeting al usuario
      users.addInvitation(invitation)
      });

      return res.json({message:'Meeting created succefully', data: newMeeting})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message:'Server error', error})
    }
  }
}