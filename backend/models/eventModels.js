const mongoose = require('mongoose')

// schema for the event data to follow
const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    categories: {
        type: String,
        required: true,
    }, 
    provider: {
        type: String,
        required: true,
    }, 
    date: {
        type: String,
        required: true, 
    },
    time: {
        type: String,
        required: true, 
    },
    duration: {
        type: Number,
        required: true,
    }, 
    availability: {
        type: Number,
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    creator: {
        type: String,
    }
    },
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Event', eventSchema)