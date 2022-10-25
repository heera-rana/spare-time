const dbconnect = require("../config/dbconnection")
const express = require("express");

//get all events
module.exports.allEvents = async (req, res) => {
    const dbInstance = await dbconnect.getDb();
  
    const collection = await dbInstance.collection("events").find().toArray();
  
    res.send(collection);
  };



//add on event 
  module.exports.addEvent =function (req, res) {
    const db = dbconnect.getDb();
  
    var addedEvent = req.body;
  
    db.collection("events").insertOne(addedEvent, function (err, info) {
      if (err) {
        console.error(err);
      } else if (info.acknowledged === true) {
        res.json(info);
      } else {
        console.log("error");
      }
    });
  };
  