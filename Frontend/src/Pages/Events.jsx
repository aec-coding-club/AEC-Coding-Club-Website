// List all Events
import React, { useContext, useEffect, useState } from "react";

import "./styles/Events.css";
import Navbar from "../Components/Navbar";
import EventsContainer from "../Components/EventsContainer";
import UserContext from './Context/LoggedUserContext'

const Events = () => {
  // when user is logged in
  const user = false;

  const details = useContext(UserContext)
  console.log("details", details);
  const [tokenChecker, setTokenChecker] = useState(false);
  const checkToken = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setTokenChecker(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {tokenChecker ? <Navbar userImage={details.userInfo.pimage} userNameText={details.userInfo.name}/> : <Navbar/>}
      <main className="events-main">
        {user && (
          <div className="events-header">
            <div className="events-header-left">
              <p>Hi, Saikat Mukherjee</p>
            </div>
            <div className="events-header-right">
              <img
                src="../Assets/events/events-header.jpg"
                alt="events"
                className="events-header-img"
              />
            </div>
          </div>
        )}
        <div className="events-section">
          <h3 className="events-section-header">Upcoming Events</h3>
          <EventsContainer />
        </div>
      </main>
    </>
  );
};

export default Events;
