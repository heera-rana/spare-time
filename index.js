const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const dbo = require("./db/connection");
app.use(require("./routes/router"));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/events", async (req, res) => {
  const dbInstance = await dbo.getDbInstance("events");

  const collection = await dbInstance
    .collection("eventsCollection")
    .find()
    .toArray();

  console.log(collection);

  res.send(collection);
});

app.post("/register", (req, response) => {
  console.log("hi");
  let db_connect = dbo.getDb();
  let newUser = req.body;
  db_connect.collection("users").insertOne(newUser, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

/*
const db=client.db('school')
const coursers = db.collection('courses')
courses.insertOne({name: "Web security"},{err,result)=>{}})
*/
