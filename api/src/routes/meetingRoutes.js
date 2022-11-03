const { Router } = require('express')
const { meetings, meetingDetail } = require('../controller/meetings/get-meeting-controller')
const { newMeeting } = require('../controller/meetings/post-meeting-controller')
const { updateMeeting } = require('../controller/meetings/put-meeting-controller')
const { auth } = require('../middlewares/auth')

const router = Router()

/*
getAll meetings
create meeting
update meeting
 */

router.get('/',auth , meetings)
router.get('/:id',auth , meetingDetail)

router.put('/update', auth, updateMeeting)

router.post('/newMeeting', auth, newMeeting)

module.exports = router