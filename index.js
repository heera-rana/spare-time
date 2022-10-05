const express = require("express")
const app = express()
const port = 5000
app.listen(port,() => console.log(`Listening on port ${port}`))

const dbo = require("./connection");
var ObjectId = dbo.getObjectId();

