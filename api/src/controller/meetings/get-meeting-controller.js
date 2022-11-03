/*
obtener las meetings a las que la persona asistio
es decir, voy a tener que guardar un arreglo con las personas que asistieron efectivamente,
existe un control sobre la fecha en la que se realizó, cuando se detecta que 
la fecha en la que se realizó 
*/
const { Meeting, User, Invitation } = require('../../db.js')

module.exports = {
  meetings: async (req, res) => {
    const user = req.user
    if (user.isAdmin) {//admin have access to all the meetings that exists
      try {
        const allMeetings = await Meeting.findAll({ include: [{ model: User }, { model: Invitation, include: User }] })
        return res.json({message:'Everything ok',data:allMeetings})
      } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server error', error })
      }
    }
    try {
      const usuario = await User.findByPk(user.id, { include: [{ model: Meeting, include:{model: User}}, { model: Invitation }] })
      res.json({ message: 'Your meetings', data:{meetings: usuario.meetings, invitations: usuario.invitations} })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error', error })
    }
  },

  meetingDetail: async (req, res) => {
    const id = req.params.id
    try {
      const meetings = await Meeting.findByPk(id,
        {
          include:
          {
            model: Invitation,
            include: [{ model: Meeting }, { model: User }]
          }
        })
      if (!meetings) return res.status(404).json({ message: `The meeting doesn't exist` })
      const host = User.findByPk(meetings.hostId)
      return res.json({ message: 'Meeting detail', data:{meetings, host} })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Server error', error })
    }

  }
}