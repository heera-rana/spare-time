const express = require("express")
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");

const app = express()

app.use(
    cors({
    origin: "http://localhost:3000/",
}))

app.use(bodyParser.json());

const port = 3000;

app.listen(port,() => console.log(`Listening on port ${port}`))


// connect database 

app.get('/events', (req, res) => {
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(
//     url,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     },
//     (err, client) => {
//       if (err) {
//         return console.log(err)
//       }
    
//     const db = client.db('events')
  
//     console.log(`MongoDB Connected: ${url}`)

//     const events = db.collection('eventsCollection')

//     db.collectionName.find(eventsCollection)

    res.send("hello world")
      
    }
  )

    // db.collectionName.find()

    //format the data as you want it

    // res.send(data)
// })


