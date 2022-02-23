import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../../backend";
import { EventCard } from "../../../Components/EventCard";

const DashboadComponent = ({ details }) => {
  const events = details.userInfo.events;
  console.log(events);

  const [eventArray, setEventArray] = useState([]);

  const fetchevents = async () => {
    const authToken = localStorage.getItem("token");
    let temp = [];
    events.map(async (ele) => {
      const data = await axios.get(`${Api}${ele}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${authToken}` },
      });
      temp.push(data.data.eventTitle);
    });
    console.log("Temp :", temp);
    setEventArray([...eventArray, temp]);
  };

  useEffect(() => {
    fetchevents();
    console.log(eventArray);
  }, []);

  return (
    <>
      <div className='home-main'>
        <h1>
          You are Verified and Authorized Welcome to Dashboard Route
          {eventArray[0]?.eventTitle}
        </h1>
        <br />
        <br />
      </div>
      <div>
        <ol>
          {events.map((value) => (
            <li key={value?._id}>{value}</li>
          ))}
        </ol>
      </div>
      <br />
    </>
  );
};

export default DashboadComponent;
