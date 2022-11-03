/*Obtener mi usuario con toda la info. Es decir, traer al usuario con todas las invitaciones que tiene
 y sumarle la reuniones a las que fue invitado y las reuniones en las que asistió o no asistió.
 El administrador tiene que poder ver a todos los usuarios y las reuniones a las que fueron invitados.
 tambien debería ver si asistieron o no, para corroborar el consumo de birras. 
 La pregunta del millon, eso lo tendrpia que ver en las meetups ya finalizadas, el cuantas birras
 se consumieron, o debería verlo en los usuarios. Creo que esa info, el cantidad de asistentes
 se debería guardar en el meetup*/
const { User, Meeting, Invitation } = require('../../db.js')

module.exports = {
  getUser: async (req, res, next) => {
    const id = req.params.id
    try {
      if(id){
        const user = await User.findByPk(id, {include:[{model: Meeting, include:{model: User}},{model: Invitation, include:{model: User}}]})
        if (!user) return res.status(404).json({message: 'There is no user'})
        return res.json({message: 'Here is your user', data:user})
      }
      const user = await User.findByPk(req.user.id, {include:[{model: Meeting, include:{model: User}},{model: Invitation, include:{model: User}}]})
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