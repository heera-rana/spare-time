const express = require('express')
const router = express.Router()
const { newEvent, allEvents } = require('../controller/eventController') // this brings in the fuctions from the controller files


router.get('/allEvents', allEvents) //
router.post('/newEvent', newEvent) //brings in the registe set fucntion from the controller



module.exports = router