const { Router } = require('express')
const { deleteUser } = require('../controller/user/delete-user-controller')
const { getUser, getAllUsers } = require('../controller/user/get-user-controller')
const { createUser, login } = require('../controller/user/post-user-controller')
const { updateUserStatus, changePassword, changeInfo } = require('../controller/user/put-user-controller')
const { auth } = require('../middlewares/auth')

const router = Router()

router.post('/sign-up', createUser)
router.post('/login', login)

router.get('/allUsers', auth, getAllUsers)
router.get('/', auth, getUser)
router.get('/:id', auth, getUser)

router.put('/password', auth, changePassword)
router.put('/info', auth, changeInfo)
router.put('/statusUpdate/:id', auth, updateUserStatus)

// router.delete('/deleteUser', auth, deleteUser)

module.exports = router