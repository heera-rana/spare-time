const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// todo: refactor mongoClient.connect into its own function to reuse across other routes

app.get("/events", (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://127.0.0.1:27017/events";

  MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    async (err, client) => {
      if (err) {
        console.log(err);
        return console.log(err);
      }

      const db = client.db();

      if (db) {
        const collections = await db
          .collection("eventsCollection")
          .find()
          .toArray();
        console.log(collections);
        res.send(collections);
      }
    }
  );
});
