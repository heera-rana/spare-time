const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require ('../models/userModels')


const protect = asyncHandler(async (req, res, next) => {
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1] //this get the token from the header ansd then splits the string the space is important
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('No access granted')
        }
    }
    if(!token) {
        console.log(error)
        res.status(401)
        throw new Error ('No access granted')
    }
})

module.exports = { protect }