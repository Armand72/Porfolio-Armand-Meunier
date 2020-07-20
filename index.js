const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const api = require("./routes/sendMail");

var path = require("path");
require("dotenv").config();
const SERVER_ADDRESS = process.env.SERVER_ADDRESS;

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api", api);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || SERVER_ADDRESS;

const server = app.listen(parseInt(port), () => {
  console.log(`server is listening on port ${port}`);
});
module.exports = server;
