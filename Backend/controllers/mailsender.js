"use strict";
const nodemailer = require("nodemailer");

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
    subject: "OTP for AEC Coding Club Registration", // Subject line
    html: `<body>
    <div>
        <div style="background-color:rgb(238,238,238)">
            <div style="margin:0px auto;font-family:arial;padding-bottom:30px;padding-top:45px;max-width:520px">
                <div style="border:1px solid rgb(204,204,204)">
                    <div
                        style="text-align:center;min-height:115px;background-image:url(https://storage.googleapis.com/vedantu-fos-qa/email-marketing/common/email-template-pattern.png);color:rgb(255,255,255);font-size:40px;line-height:10=0px;background-color:#EAE2B7">
                        <img alt="vedantu"
                            src="https://user-images.githubusercontent.com/64855541/157268119-9f091622-b07b-42b8-b7c7-715359cd9f68.png"
                            style="margin-top:10px;width:280px">
                    </div>
                    <div style="font-size:14px;background-color:rgb(255,255,255);color:rgb(68,68,68)">
                        <div style="padding:40px 8% 25px;min-height:300px;line-height:1.5em">
                            <div style="background-color:#eeeeee;text-align:center;margin:0 au=to;padding:0 0 2%">
                                <div style="max-width:600px;font-size:14px;color:#5f5f5f;line-height:1.75em;font-family:Arial;margin:0
                                auto;background-color:#ffffff;text-align:left">
                                    <div style="padding:40px 8% 5px">
                                        <div style="font-weight:bold">Dear User,</div>
                                        <div style="margin-top:16px">Your UID is: <b>AECCC/XX/XXXX/XXXX</b> <br> The
                                            OTP for your Email Verification is <b>${otp}</b>. This OTP is valid for 30
                                            minutes.</div>
                                        <div style="margin-top:24px">Happy Coding!
                                            <br>AECCC
                                        </div>
                                        <div style="text-align:center;color:#999999;font-size:10px;margin-top:60px">If
                                            you did not make this request, please write to us at: <a
                                                href="mailto:aecincodingclub@gmail.com"
                                                target="_blank">aecincodingclub@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div style="text-align:center;border-top:1px solid #eee;padding:2=5px 0px 32px">
                                    <div style="color:#aaaaaa;font-size:11px;margin:10px 0px">This
                                        is a system generated email. Please do not reply.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>`, // html body
  });

  return info;
}

module.exports = sendOTP;
