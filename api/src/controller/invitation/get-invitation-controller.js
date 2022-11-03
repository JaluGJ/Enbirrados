const { Meeting, User, Invitation } = require('../../db.js')

module.exports = {
  getAllInvitations: async (req, res) => {
    const user = req.user
    try {
      if (user.isAdmin) {//return res.json({ message: 'Unathorized access' })
        const allInvitations = await Invitation.findAll({ inlcude: [{ model: User }, { model: Meeting }] })
        return res.json({ data: allInvitations, message: 'Everting ok' })
      }
      const usuario = await User.findByPk(user.id, { include: Invitation })
      if (!usuario) res.status(404).json({ message: `Couldn't find user` })
      return res.json({ message: 'Everything ok', data: usuario.invitations })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Sever error', error })
    }
  },
  getInvitationById: async (req, res) => {
    const id = req.params.id
    const user = req.user
    try {
      const invitation = await Invitation.findByPk(id)
      if (!invitation) return res.status(404).json({ message: 'Invitation not found' })
      if (invitation.userId !== user.id && !user.isAdmin) return res.status(401).json({ message: 'Unathorized access' })
      res.json({ message: 'done', data: invitation })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Sever error', error })
    }
  },
}