var express = require("express");
var router = express.Router();

var eventCtrl = require('../controller/eventController')
var userCtrl = require('../controller/userController')


//event routes
router.get("/events", eventCtrl.allEvents) //http://localhost:5000/api/events to view all events in json
router.post("/add-event", eventCtrl.addEvent) //http://localhost:5000/api/addEvent 


//user routes
router.post("/register", userCtrl.registerUser) //http://localhost:5000/api/register


module.exports = router;