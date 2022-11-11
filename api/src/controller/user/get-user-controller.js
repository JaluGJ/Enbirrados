const { User, Meeting, Invitation } = require('../../db.js')

module.exports = {
  getUser: async (req, res, next) => {
    const id = req.params.id
    try {
      if(id){
        const user = await User.findByPk(id, {include:[{model: Meeting, include:[{model: User},{model: Invitation}]},{model: Invitation, include:{model: User}}]})
        if (!user) return res.status(404).json({message: 'There is no user'})
        return res.json({message: 'Here is your user', data:user})
      }
      const user = await User.findByPk(req.user.id, {include:[{model: Meeting, include:[{model: User},{model: Invitation}]},{model: Invitation, include:{model: User}}]})
      if (!user) return res.status(404).json({message: `You don't exist`})
      return res.json({message:'Here is your user',data:user}) 
    } catch (error) {
      return res.status(500).json({message:'Server error',error})
    }
  },

  getAllUsers: async (req, res, next) => {
    try {
      const { isAdmin } = req.user
      const allUsersInfo = await User.findAll({include:[{model: Meeting},{model: Invitation}]})
      if (!isAdmin) {
  
        const allUsers = allUsersInfo.map((user) => {
          return {
            name: user.name,
            surname: user.surname,
            email: user.email,
            profilePic: user.profilePic
          }
        })
        return res.json({message:'Everything ok',data:allUsers})
      }
      return res.json({message:'Everything ok',data:allUsersInfo})
      
    } catch (error) {
      console.log(error)
      return res.status(500).json({message:'Server error',error})
    }
  }
}