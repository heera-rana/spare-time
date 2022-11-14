const express = require('express')
const router = express.Router()
const { newEvent, allEvents } = require('../controller/eventController') // this brings in the fuctions from the controller files

const {protect} = require('../authorisation/auth')

router.get('/allEvents', allEvents) //
router.post('/newEvent', protect, newEvent) //brings in the registe set fucntion from the controller
// router.post('/newEvent', newEvent)


module.exports = router