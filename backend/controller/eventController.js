const asyncHandler = require('express-async-handler')
const { ObjectId } = require('mongodb')
const mongoose = require("mongoose")
const Event = require('../models/eventModels')

// allEvents pulls through all the current event data uses - http://localhost:5000/api/events
const allEvents =  asyncHandler(async (req, res) => {
    const allEvents = await Event.find({})
    res.status(201)
    res.send(allEvents)
}) 

// oneEvent finds the event with id passed trough in the parameter
const oneEvent = asyncHandler(async(req, res)=>{
    let id = req.params.id
    const o_id = new ObjectId(id)
    const oneEvent = await Event.findOne({_id: `${o_id}`})
    res.status(201)
    res.send(oneEvent)
})

// deleteEvent deletes the event with id passed trough in the parameter
const deleteEvent = asyncHandler(async(req, res)=>{ 
    let id = req.params.id
    const o_id = new ObjectId(id)
    const deleteEvent = await Event.deleteOne({_id: `${o_id}`})
    res.status(201)
    res.send(deleteEvent)
})

// updateEvent finds an event and updates it with the data passed on the body
const updateEvent = asyncHandler(async(req,res)=>{
    const {_id, title, categories, provider, date, time, duration, price, description, availability } = req.body
    const updateEvent = await Event.findOneAndUpdate(
        {_id: _id},
        {   title: title,
            categories: categories,
            provider: provider,
            date: date,
            time: time,
            duration: duration,
            price: price,
            description: description,
            availability: availability,
        },
        {new: true},
        )
    res.status(201)
    res.send(updateEvent)
})

// newEvent creates a new event from the data in the body
const newEvent =  asyncHandler(async (req, res) => {
    const {title, categories, provider, date, time, duration, price, description, availability, creator} = req.body

    if(!title || !categories || !provider || !date || !duration || !price || !description || !availability) {
        res.status(400)
        throw new Error ('Please include all of the fields')
    }

    // eventExists checks that the event sent is not a duplicate
    const eventExists = await Event.findOne({
        title: `${title}`,
        categories: `${categories}`,
        provide: `${provider}`,
        data: `${date}`,
        time: `${time}`,
        duration: `${duration}`,
        price: `${price}`,
        description: `${description}`,
        availability: `${availability}`,
        creator: `${creator}`
    })
    if (eventExists) {
        res.status(400)
        throw new Error('Event already exists')
    }

    //event creates a new event instance
    const event = await Event.create({
        title,
        categories,
        provider,
        date,
        time,
        duration,
        price,
        description,
        availability,
        creator
    })
    if (event) {
        res.status(201).json({
            _id: event._id,
            title: event.title,
            categories: event.categories,
            provider: event.provider,
            date: event.date,  
            time: event.time,
            price: event.price,
            description: event.description,
            availability: event.availability,
            creator: event.creator
        }) 
    }   else {
            res.status(400)
            throw new error('Invalid event data')
    }
})

module.exports = {
    newEvent,
    allEvents,
    oneEvent,
    deleteEvent,
    updateEvent
}