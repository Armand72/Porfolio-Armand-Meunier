const express = require("express");
const router = express.Router({ mergeParams: true });
const nodemailer = require("nodemailer");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const myOAuth2Client = new OAuth2(
  "1042211473852-g1ejd8ecl2bj26gs2b6ldiau4usj7moc.apps.googleusercontent.com",
  "ec7y4jSkXXzFDtfDFIrne1vg"
);

myOAuth2Client.setCredentials({
  refresh_token:
    "1//04evVwqKrCA-gCgYIARAAGAQSNwF-L9IrxS_dJASZGZdzaNQkVBY6cdaOBK7n3j3nfnvQh4dQWKlPF3IzuIOeJLmR-_oV-wP7lcE",
});

const myAccessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: EMAIL, //your gmail account you used to set the project up in google cloud console"
    clientId:
      "1042211473852-g1ejd8ecl2bj26gs2b6ldiau4usj7moc.apps.googleusercontent.com",
    clientSecret: "ec7y4jSkXXzFDtfDFIrne1vg",
    refreshToken:
      "1//04evVwqKrCA-gCgYIARAAGAQSNwF-L9IrxS_dJASZGZdzaNQkVBY6cdaOBK7n3j3nfnvQh4dQWKlPF3IzuIOeJLmR-_oV-wP7lcE",
    accessToken:
      "ya29.a0AfH6SMAxuNL75ykPXSCJD2x8e8Wh_qkjFQq-xrbAC48yn12eZv1QM4kcM2tvUb5k_LeDzI1tW5VHmlsG0iQSdUBo96ZF1G42fQnaOxVAQDMu2cX1zINk4Xs_OhNY0HkFpsmjRsvbZS3elbRANrH_ra9NQzTVthkDFAc",
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
