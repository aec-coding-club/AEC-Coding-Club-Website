// List all Events
import React from "react";

import "./styles/Events.css";
import Navbar from "../Components/Navbar";
import EventsContainer from "../Components/EventsContainer";

const Events = () => {
  // when user is logged in
  const user = true;

  return (
    <>
      <Navbar />
      <main className="events-main">
        {user && (
          <div className="events-header">
            <div className="events-header-left">
              <p>Hi, Saikat Mukherjee</p>
            </div>
            <div className="events-header-right">
              <img
                src="../Assets/events/events-header.jpg"
                alt="events-image"
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
