require('dotenv').config();
const { db, User } = require('./src/db');
const app = require('./src/app');

const { encryptPass } = require('./src/utils/crypter');

const { PORT } = process.env

const usersTest = [
  {
    name: "admin",
    surname: "admin",
    email: "admin@admin.com",
    password: "1234ABcd",
    profilePic: 'https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png',
    isAdmin: true
  },
  {
    name: "Matias",
    surname: "Cunnington",
    email: "mati@abc.com",
    password: "1234ABcd",
    profilePic: 'https://res.cloudinary.com/dvzgzgzln/image/upload/v1667465816/Embirrados/avatar2_mszxl1.png'
  },
  {
    name: "Laura",
    surname: "Azabache",
    email: "lau@abc.com",
    password: "1234ABcd",
    profilePic: 'https://res.cloudinary.com/dvzgzgzln/image/upload/v1667465806/Embirrados/img_avatar2_qlr4xa.png'
  },
  {
    name: "Darío",
    surname: "Durango",
    email: "dario@abc.com",
    password: "1234ABcd",
    profilePic: 'https://res.cloudinary.com/dvzgzgzln/image/upload/v1667465799/Embirrados/img_avatar_ub5twt.png'
  },
]

async function exampleUserCreator(users) {
  users.forEach(async user => {
    try {
      const hashPassword = encryptPass(user.password)

      const [newUser, isCreated] = await User.findOrCreate({
        where: { email: user.email },
        defaults: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          password: hashPassword,
          isAdmin: user.isAdmin ? true : false,
          profilePic: user.profilePic
        }
      })
      if (isCreated) {
        console.log('users created')
        return
      }
      console.log('users where created already')
      return
    } catch (error) {
      console.log('oh oh', error)
    }
  })
}

const force = false

db.sync({ force: force }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    exampleUserCreator(usersTest)
  })
}).catch((error) => {
  console.log('error', error)
})
