import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { Api } from "../../backend";

const EmailForme = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully");
    const { data } = await axios.post(
      `${Api}tokenforreset`,
      {
        email: email,
      },
      {
        withCredentials: true,
        crossorigin: true,
      }
    );
    console.log("Data: ", data);
  };

  // abirpal282002@gmail.com

  function handelChange(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={email}
          onChange={(e) => handelChange(e)}
          type="email"
          placeholder="Enter the email"
        ></input>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default EmailForme;
