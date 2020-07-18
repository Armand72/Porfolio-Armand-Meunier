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

app.use("", api);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const server = app.listen(parseInt(SERVER_ADDRESS), () => {
  console.log(`server is listening on port ${SERVER_ADDRESS}`);
});
module.exports = server;
