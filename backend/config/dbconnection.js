const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

let _db;

const ObjectId = require("mongodb").ObjectId;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err, client) {
        if (client) {
          _db = client.db("SHU");
          console.log("Successfully connected to MongoDb");
        }
        return callback(err);
      }
    );
  },

  getDb: function () {
    return _db;
  },

};
