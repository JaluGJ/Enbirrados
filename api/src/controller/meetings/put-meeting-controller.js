const { Meeting, User, Invitation } = require('../../db.js')

module.exports = {
  updateMeeting: async (req, res) => {
    const { meetingId, name, date, beer, temperature, status, invited, detail } = req.body
    const user = req.user
    try {
      if (!user.isAdmin) return res.status(401).json({ message: 'You are not allowed to update a meeting' })
     
      const meeting = await Meeting.findByPk(meetingId)
      
      if (name) meeting.name = name
      if (date) meeting.date = date
      if (beer) meeting.beer = beer
      if (temperature) meeting.temperature = temperature
      if (status) meeting.status = status
     
      if (detail) meeting.detail = detail

      await meeting.save()
      const meetup = await Meeting.findByPk(meetingId, { include: Invitation })
      //send email about changes. modify all the invitations. ja...
      if (invited?.length) {
        if (invited?.length > meetup.invitation.length) { //if there is more people invited
          let newGuests = []
          invited?.forEach(users => {
            if (!meetup.invitation?.map(el => el.id).includes(users)) newGuests.push(users)
          });
          if (newGuests?.length) {
            newGuests?.forEach(async (guest) => {
              let newInvitation = await Invitation.create({
                name: meetup.name,
                date: meetup.date,
                status: 'Waiting',
                info: detail ? detail : null,
                is_deleted: false
              })
              let newGuest = User.findByPk(guest)

              newGuest.addInvitation(newInvitation)
              meetup.addInvitation(newInvitation)
              //sendMail(newInvitation, newGuest)
            })
          }
        } else if (invited?.length < meetup.invitation.length) {//if there is less people invited
          let kickedGuests = []
          meetup.invitation?.map(el => el.id).forEach(users => {
            if (!invited.includes(users)) newGuests.push(users)
          })
          kickedGuests.forEach(async (guest) => {
            try {
              const kickedGuest = await User.findByPk(guest)
              let invit = meetup.invitation.find((inv) => inv.userId === kickedGuest.id)
              let invitacion = Invitation.findByPk(invit.id)
              invitacion.is_deleted = true
              await invitacion.save()
              kickedGuest.removeInvitation(invitacion)
              meetup.removeInvitation(invitacion)
              //sendEmail(Expulsed, kickedGuest)
            } catch (error) {
              console.log('something went wrong', error)
            }
          })
        }
      }

      res.json({ message: 'All changes have been saved succesfully', data:meetup})
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error', error })
    }
  }
}