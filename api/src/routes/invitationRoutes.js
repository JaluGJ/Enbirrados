const { Router } = require('express')
const { getAllInvitations, getInvitationById } = require('../controller/invitation/get-invitation-controller')
const { createNewInvitation } = require('../controller/invitation/post-invitation-controller')
const { updateInvitation, updateInvitationForAll } = require('../controller/invitation/put-invitation-controller')
const {auth} = require('../middlewares/auth')

const router = Router()

router.get('/', auth, getAllInvitations)
router.get('/:id', auth, getInvitationById)
router.put('/updateInv',auth, updateInvitation)
router.put('/updAllInv', auth, updateInvitationForAll)
// router.post('/creteInv',auth, createNewInvitation)

module.exports = router