const express = require('express')
const router = express.Router()
const { newEvent, allEvents, oneEvent, deleteEvent, updateEvent} = require('../controller/eventController') // this brings in the fuctions from the controller files
const {protect} = require('../authorisation/auth')

router.get('/allEvents', allEvents) //
router.post('/newEvent', protect, newEvent) //brings in the registe set fucntion from the controller
router.get('/oneEvent/:id', oneEvent)
router.post('/oneEvent/:id', protect, updateEvent)
router.delete('/oneEvent/:id', protect, deleteEvent)


module.exports = router