const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())
app.listen(port,() => console.log(`Listening on port ${port}`))

const dbo = require(".src/db/connection");
var ObjectId = dbo.getObjectId();

