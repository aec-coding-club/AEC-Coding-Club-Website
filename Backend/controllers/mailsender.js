"use strict";
const nodemailer = require("nodemailer");


async function sendOTP(email, msgbody) {
    // create reusable transporter object using the default SMTP transport

    if (Array.isArray(email)) {
        console.log(email.length);
        for (let i = 0; i < email.length; i++) {
            let emailrspnt = email[i]

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
                to: `${emailrspnt}`, // list of receivers
                subject: "Announcement from AECCC", // Subject line
                html: msgbody, // html body
            });

            console.log(info);
        }
    } else{

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
            subject: "OTP for AEC Coding Club Registration", // Subject line
            html: msgbody, // html body
        });
    
        return info;
    
    }


}

module.exports = sendOTP;
