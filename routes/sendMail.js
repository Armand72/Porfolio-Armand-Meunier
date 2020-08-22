const express = require("express");
const router = express.Router({ mergeParams: true });
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const EMAIL = process.env.EMAIL;

const CLIENTID = process.env.CLIENTID;
const SECRET = process.env.SECRET;
const REFRESH = process.env.REFRESH;

const myOAuth2Client = new OAuth2(CLIENTID, SECRET);

myOAuth2Client.setCredentials({
  refresh_token:
    "1//04evVwqKrCA-gCgYIARAAGAQSNwF-L9IrxS_dJASZGZdzaNQkVBY6cdaOBK7n3j3nfnvQh4dQWKlPF3IzuIOeJLmR-_oV-wP7lcE",
});

const myAccessToken = myOAuth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "armandmeunierdeveloper@gmail.com", //your gmail account you used to set the project up in google cloud console"
    clientId: CLIENTID,
    clientSecret: SECRET,
    refreshToken: REFRESH,
    accessToken: myAccessToken,
  },
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
