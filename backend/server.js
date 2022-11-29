const express = require('express')
const connectDB = require('./config/dbconnection')
const dotenv = require('dotenv').config()
const PORT = 5000 || 8000
const cors = require("cors");

// calling connection to mongoDb
connectDB() 

// initialising the server
const app = express () 

app.use(
  cors({
    // the port needs to be changed depending on what port the backend is using
    origin: "http://localhost:3000",
  })
);
app.use(express.json())
app.use(express.urlencoded({ extended: false})) 
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the SpareTime API'})
}) 

// api routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/events', require('./routes/eventRoutes')) 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) 