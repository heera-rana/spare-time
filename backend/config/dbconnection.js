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
          _db = client.db("events");
          console.log("Successfully connected to MongoDb");
        }
        return callback(err);
      }
    );
  },

  getDb: function () {
    return _db;
  },

  // getObjectId: function () {
  //   return ObjectId;
  // },

  // getDbInstance: async function () {
  //  // const MongoClient = require("mongodb").MongoClient;
  //   //const url = "mongodb://127.0.0.1:27017";

  //   //const client = new MongoClient(url);

  //   //await client.connect();

  //   //console.log("Successfully connected to MongoDB.")

  //   return client.db();
  // },
};
