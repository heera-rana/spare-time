const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// protect is the function that verifies the user's token
const protect = asyncHandler(async (req, res, next) => {
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1] //this get the token from the header ansd then splits the string the space is important
            const user = jwt.verify(token, process.env.JWT_SECRET)
            req.user = user
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

// isAdmin protects the routes against not admin/creator users
const isAdmin = (req, res, next ) => {
    protect(req, res, ()=> {
        if(req.user.isAdmin){
            next()
        } else if (req.user.id === req.body.creator){
            next()
        } else {
            res.status(403).send("Access denied. You must be an Administrator to perform this action")
        }
    }
    )

}

module.exports = { protect, isAdmin}