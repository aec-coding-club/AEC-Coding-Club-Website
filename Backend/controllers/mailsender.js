"use strict";
const nodemailer = require("nodemailer");

async function sendOTP(email, otp) {


        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host:  process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        // send mail with defined transport object

        let info = await transporter.sendMail({
            from: `"AECCCCC" <${process.env.MAIL_USER}>`, // sender address
            to: `${email}`, // list of receivers
            subject: "no-reply", // Subject line
            html: `<h4> your OTP is ${otp} </h4> <div style="orange: yellow"> note: this OTP is only valid for 2 hours </div>`, // html body
        })

        return info;
  

}


module.exports = sendOTP;