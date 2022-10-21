const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const dbo = require("./db/connection");
//app.use(require("./routes/router"));

app.use(bodyParser.json());

app.use(
  cors({
    // the port needs to be changed depending on what port the backend is using
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("hi");
});

dbo.connectToServer(function(err,client){
  if (err)
     console.long(err)
  
})

app.get("/events", async (req, res) => {
  
  const collection = await dbo.getDb()
  .collection("events")
  .find()
  .toArray()
  
  res.send(collection);
});

app.post('/register', async function (req, res) {
  const db = dbo.getDb()

  var addedUser = req.body

  db.collection('users').insertOne(addedUser, function (err, info) {
    if (err){
        console.error(err)
    } else if (info.acknowledged === true) {
        res.json(info)
    } else{
        console.log("error")
    }
    })
})

app.post('/add-event', function (req, res) {
  const db = dbo.getDb()
  console.log("connected in index")

  var addedEvent = req.body

  db.collection('events').insertOne(addedEvent, function (err, info) {
    if (err){
        console.error(err)
    } else if (info.acknowledged === true) {
        res.json(info)
    } else{
        console.log("error")
    }
    })
})

// module.exports = app
