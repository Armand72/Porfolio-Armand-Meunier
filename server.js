const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
var path = require("path");
require("dotenv").config();
const SERVER_ADDRESS = process.env.SERVER_ADDRESS;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false,

  port: 587, // port for secure SMTP
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

app.post("/sendmail", (req, res) => {
  const user = req.body;

  const htmlMessage = `<h1>nom:${user.fullname}  </h1>
  <h2>adresse email : ${user.email}</h2>
  <h2>Numéro de téléphone: ${user.phonenumber}</h2>
	<p>${user.message}</p>`;

  let mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: "Message client",
    text: "",
    html: htmlMessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log("here", error, info);
    if (error) {
      return res.status(501).json(error);
    }

    res.sendStatus(200);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const server = app.listen(parseInt(SERVER_ADDRESS), () => {
  console.log(`server is listening on port ${SERVER_ADDRESS}`);
});
module.exports = server;
