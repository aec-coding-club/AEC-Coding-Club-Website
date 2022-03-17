const otpTemplate = (user, otp) => {
  return `<body>
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
  return `
  <body>
  <style>
  .event-card {
    width: 90%;
    max-width: 350px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    border-radius: 1rem;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      hsla(240, 30%, 28%, 0.25) 0px 50px 100px -20px,
      hsla(0, 0%, 0%, 0.7) 0px 30px 60px -30px;
    overflow: hidden;
    transition: all 300ms ease;
    background-color: var(--nav-body);
    padding: 0.75rem;
    color: #111;
  }
  
  .preview .event-card {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  
  .event-card-img-container {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    display: grid;
    place-items: center;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
  }
  
  .event-card-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
    transition: all 300ms ease;
  }
  
  .card-text-details {
    width: 100%;
  }
  
  .event-card-title {
    font-weight: 600;
    min-height: 45px;
    font-size: 1.5rem;
    line-height: 1.45rem;
    margin-top: 1rem;
    align-self: flex-start;
  }
  
  .event-card-desc {
    height: 100px;
    overflow-y: scroll;
    margin-block: 0.5rem;
  }
  
  .event-card-desc p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    text-align: justify;
  }
  
  .event-card-desc::-webkit-scrollbar {
    display: none;
  }
  
  .event-card-date {
    font-weight: 600;
    margin-top: 0.5rem;
  }
  .event-card-date span {
    font-weight: 400;
    border-radius: 0.25rem;
    padding: 0.1rem 0.45rem;
    background-color: #111;
    color: #fff;
    font-size: 0.85rem;
  }
  .event-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  /*  Mobile View ---> */
  @media (min-width: 425px) {
    .event-card-btn {
      padding: 0.5rem 1.5rem !important;
    }
  }
  
  @media (max-width: 354px) {
    .event-card-btn {
      padding: 0.3rem 0.9rem !important;
    }
  }
  </style>
  
  <div class="event-card">
  <div class ="event-card-img-container">
  <img src=${image} alt="event-img" className="event-card-img" />
  </div>
  <div class="card-text-details">
  <p class="event-card-title">${event}</p>
  <p class="event-card-date">
  Date: <span>${date}</span>
  </p>
  <div class="event-card-desc">
  ${description}
  </div>
  </div>
  </div>
  </body>
`;
};

const notifyall = (event, date, url) => {
  return `Dear participant ${event} is going to start from ${date} link of the event ${url}`;
};

const custom = (msg) => {};

module.exports = { otpTemplate, announceall, notifyall, custom };
