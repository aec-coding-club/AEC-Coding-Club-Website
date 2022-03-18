const marked = require('marked')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)


const otpTemplate = (user, otp) => {
  return `<body>
<div>
    <div style="background-color:rgb(238,238,238)">
        <div style="margin:0px auto;font-family:arial;padding-bottom:30px;padding-top:45px;max-width:520px">
            <div style="border:1px solid rgb(204,204,204)">
                <div
                    style="text-align:center;min-height:115px;background-image:url(https://storage.googleapis.com/vedantu-fos-qa/email-marketing/common/email-template-pattern.png);color:rgb(255,255,255);font-size:40px;line-height:10=0px;background-color:#EAE2B7">
                    <img alt="AEC Coding Club"
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
                                    <div style="margin-top:16px">Your UID is: <b>${user}</b> <br> The
                                        OTP for your Email Verification is <b>${otp}</b>. This OTP is valid for 30
                                        minutes.<br><b>Not Verifying the Account within 24 hours of Registration can lead to Permanent deletion of Account.</b></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>`;
};

// const announceall = (event, date, image, description, url) => {
//   return ` <body> 
//               <div>
//               Dear student,
//              AECCC is going to host <b>${event}</b> on ${date}.
//               <img src=${image} alt="Event Image">
//               <br>
//               ${description}
//               <br>
//               Please check it on official site here ${url}
//               </div>
//         </body>`;
// };
const announceall = (event, date, image, description, url) => {
    description = dompurify.sanitize(marked.parse(description))
  return ` <body> 
              <div>
              Dear student, AECCC is going to host <b>${event}</b> on ${date}.
              <img src=${image} alt="Event Image">
              ${description}
              Please check it on official site here ${url}
              </div>
        </body>`;
};

const notifyall = (event, date, url) => {
  return `Dear participant ${event} is going to start from ${date} link of the event ${url}`;
};

const custom = (msg) => {};

module.exports = { otpTemplate, announceall, notifyall, custom };
