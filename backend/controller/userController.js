const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModels')
const jwt = require('jsonwebtoken')




//Register a new user
// using the route /api/users
const registerUser =  asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    //form validation this is too ensure all data is forms are filled out
    if(!name || !email || !password) {
        res.status(400)
        throw new Error ('Please include all of the fields')
    }

//duplicate user check then returns error message if duplicated
const userExists = await User.findOne({email: `${email}`})

if (userExists) {
    res.status(400)
    throw new Error('User already exists')
}

//password encrytion
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

//create a user
const user = await User.create({
    name,
    email,
    password: hashedPassword
})


//this comes from the user above and then sends the data back
if (user) {
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email:user.email,
        token: generateToken(user.id),
    }) 
}   else {
        res.status(400).json('Invalid user data')
    }
})


//user login 
// using the route /api/users/login
const loginUser =  asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

//checks if the user name and password match. password from the login request agaainst the user password from database
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        }) 
    } else {
        res.status(401).json('Invalid Credentials')
    }

})


//generate webtoken function 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}



module.exports = {
    registerUser,
    loginUser,
}