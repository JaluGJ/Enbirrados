const { Router } = require('express');
const User = require('./userRoutes')
const Meeting = require('./meetingRoutes')
const Invitation = require('./invitationRoutes')

const router = Router()

router.use('/user', User )
router.use('/meeting', Meeting )
router.use('/invitation', Invitation)


module.exports = router