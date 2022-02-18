'use strict';
const nodemailer = require('nodemailer');

async function sendOTP(email, otp) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail with defined transport object

  let info = await transporter.sendMail({
    from: `"AEC Coding Club" <${process.env.MAIL_USER}>`, // sender address
    to: `${email}`, // list of receivers
    subject: 'OTP for AEC Coding Club Registration', // Subject line
    html: `<a href=http://localhost:4000/api/v1/verify/${otp}> <div style="height:5ch; background-color:aqua; text-align: center; margin: 0 10%; justify-content: center; text-decoration: none;">Click here to get verified </div> </a> <h4> Or manually put: ${otp} </h4> <div style="color: yellow"> note: this OTP is only valid for 2 hours </div>`, // html body
  });

  return info;
}

module.exports = sendOTP;
