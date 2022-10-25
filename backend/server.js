const express = require("express");
const app = express();
const port = 5000 || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnect = require("./config/dbconnection")

var routesApi = require("../backend/routes/routes");
const router = require("../backend/routes/routes");

app.use(bodyParser.json());

app.use(
  cors({
    // the port needs to be changed depending on what port the backend is using
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

//routes
app.use(router);
app.use("/api", routesApi);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("Welcome to spare time api");
});

dbconnect.connectToServer(function (err, client) {
  if (err) console.log(err);
});