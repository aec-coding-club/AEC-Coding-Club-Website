import React from "react";
import "../Components/styles/OTP.css"
function OTP(){
    return (
        <div className="OTPSection">
          <h2>Verify OTP</h2>
          <input className="Box" maxLength={5}></input>
          <button className="checkotp">Check OTP</button>
        </div>
    );
}

export default OTP;