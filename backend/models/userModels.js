const mongoose = require('mongoose')

// schema for the user data to follow
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        match: [/^[\w'\-,.][^0-9_!,.§±¡?÷?¿/\\+=@#$£€›%&^*(){}"|~<>;:[\]]{2,49}$/, 'Please only use non-special character values'],
    }, 

    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address'],
    }, 

    password: {
        type: String,
        required: [true, 'Please add an password'],
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, 'At least 1 Uppercase, At least 1 Lowercase, At least 1 Number, Min 5 chars']
    }, 
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,

    }, 


},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)