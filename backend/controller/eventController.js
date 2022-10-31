const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModels')



//pulls through all the current event data uses - http://localhost:5000/api/events
const allEvents =  asyncHandler(async (req, res) => {
    const allEvents = await Event.find({})
    res.status(201)
    res.send(allEvents)
    }) 

//add a new event
// using the route /api/users
const newEvent =  asyncHandler(async (req, res) => {
    const {title, categories, provider, date, duration, price, description } = req.body

    //form validation this is too ensure all data is forms are filled out
    if(!title || !categories || !provider || !date || !duration || !price || !description) {
        res.status(400)
        throw new Error ('Please include all of the fields')
    }

//create a user
const event = await Event.create({
    title,
    categories,
    provider,
    date,
    duration,
    price,
    description,
})

//this comes from the user above and then sends the data back into the database
if (event) {
    res.status(201).json({
        _id: event._id,
        title: event.title,
        categories: event.categories,
        provider: event.provider,
        date: event.date,  
        price: event.price,
        description: event.description,
    }) 
}   else {
        res.status(400)
        throw new error('Invalid event data')
    }
})




module.exports = {
    newEvent,
    allEvents,
}