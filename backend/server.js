const express = require('express')
const connectDB = require('./config/dbconnection')
const dotenv = require('dotenv').config()
const PORT = 5000 || 8000//use port 500, if unavalible it will use 80000
const cors = require("cors");



connectDB() // calls the fucnction from db connection to conenct to the db 


const app = express () //sets 'app' to the const varible type and to use express

app.use(
  cors({
    // the port needs to be changed depending on what port the backend is using
    origin: "http://localhost:3000",
  })
);
app.use(express.json())
app.use(express.urlencoded({ extended: false})) // thee encode the data sent from the register user controller


app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the SpareTime API'})
}) //app.get is a express fuction that displays a message  localhost:5000/ 


//Routes 
app.use('/api/users', require('./routes/userRoutes')) //this allows you to go to http://localhost:5000/api/users to access the userroutes.js file
app.use('/api/events', require('./routes/eventRoutes')) 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) //after 'npm run server' it will display which port in the console