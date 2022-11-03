const express = require('express')
const router = express.Router()
const { registerUser, loginUser} = require('../controller/userController') // this brings in the two fuctions from the controller files


router.post('/register', registerUser) //brings in the registe set fucntion from the controller

router.post('/login', loginUser) //brings in the loginuser fucntion from the controller

module.exports = router