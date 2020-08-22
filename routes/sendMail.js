const express = require("express");
const router = express.Router({ mergeParams: true });
const nodemailer = require("nodemailer");
require("dotenv").config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  name: "smtp.mail.yahoo.com",
  port: 465,
  host: "Yahoo",
  secure: true,
  auth: {
    user: "armandmeunierdev@yahoo.com",
    pass: "fabrilo72",
  },
  debug: false,
  logger: true,
});

router.post("/sendmail", (req, res) => {
  const user = req.body;
  console.log(user);
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
    if (error) {
      return res.status(501).json(error);
    }

    res.sendStatus(200);
  });
});

module.exports = router;
