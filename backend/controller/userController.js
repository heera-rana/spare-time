const dbconnect = require("../config/dbconnection")
const express = require("express");


module.exports.registerUser = async function (req, res) {
    const db = dbconnect.getDb();
  
    var addedUser = req.body;
  
    db.collection("users").insertOne(addedUser, function (err, info) {
      if (err) {
        console.error(err);
      } else if (info.acknowledged === true) {
        res.json(info);
      } else {
        console.log("error");
      }
    });
  };