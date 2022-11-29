const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModels')
const jwt = require('jsonwebtoken')

// registerUser creates a new user  
const registerUser =  asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error ('Please include all of the fields')
    }

    // userExists checks that the data is not duplicate
    const userExists = await User.findOne({email: `${email}`})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // password encrytion
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // user creates a new user instance
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            token: generateToken(user),
            isAdmin: user.isAdmin,
        }) 
    }   else {
            res.status(400).json('Invalid user data')
    }
})

// loginUser logs the user in from the body data
const loginUser =  asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // user finds the user by email and checks that the password match
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user),
            isAdmin: user.isAdmin,
        }) 
    } else {
        res.status(401).json('Invalid Credentials')
    }

})

//generateToken generates a new token to authenticate the user
const generateToken = (user) => {
    return jwt.sign(
    { 
        id: user._id,
        isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET, 
    {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
}