const MongoClient = require("mongodb").MongoClient;
const Db = "mongodb://localhost:27017";

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var dbConnection;
// alternative export option - methods as objects

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        dbConnection = db.db("data");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },
  getDb: function () {
    return dbConnection;
  },
  getObjectId: function () {
    var ObjectId = require("mongodb").ObjectId;
    return ObjectId;
  },
  getDbInstance: async function (databaseName) {
    const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb://127.0.0.1:27017";

    const client = new MongoClient(url);

    await client.connect();

    return client.db(databaseName);
  },
};

// const getDbInstance = async (databaseName) => {
//   const MongoClient = require("mongodb").MongoClient;
//   const url = "mongodb://127.0.0.1:27017";

//   const client = new MongoClient(url);

//   await client.connect();

//   const collection = await client
//     .db(databaseName)
//     .collection("eventsCollection")
//     .find()
//     .toArray();
//   console.log(collection);
// };
