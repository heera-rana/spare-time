const mongoose = require('mongoose')

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
    } 
},
{
    timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)