import React from "react";
import "./styles/OTP.css"
function Otpverify(){
    return (
        <div className="OTPSection">
          <h2>Verify OTP</h2>
          <input className="Box" maxLength={6}></input>
          <button className="checkotp">Check OTP</button>
        </div>
    );
}

export default Otpverify;