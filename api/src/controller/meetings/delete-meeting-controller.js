const {User, Meeting, Invitation} = require('../../db')

module.exports={
  deleteMeeting: async(req, res) => {
    try {
      const admin = req.user
      if (!admin.isAdmin) return res.status(401).json({message:'Unauthorized access'})
      const meetingId = req.params.id
      const meeting = await Meeting.findByPk(meetingId, {include: {model: Invitation, inlcude: User}})
      const invitations = meeting.invitations
      invitations.forEach(async (inv) => {
        const invitation = await Invitation.findByPk(inv.id)
        invitation.is_deleted = true
        await invitation.save()
      })
      meeting.is_deleted = true 
      await meeting.save()
      return res.json({message: 'meeting deleted'})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Server error', error})
    }

  }
}