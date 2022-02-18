import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/EventsContainer.css";
import { EventCard } from "./EventCard";
import eventData from "../data/eventData.json";
import axios from "axios";
import { Api } from "../backend";

const EventsContainer = () => {
  const [allEvents, setEvents] = useState([]);
  async function fetchdata() {
    const parseddata = await axios.get(`${Api}events`, {
      withCredentials: true,
    });
    setEvents(parseddata.data.events);
    console.log(allEvents);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className='events-container'>
        {allEvents.map((data) => (
          <EventCard key={data._id} cardData={data} />
        ))}
      </div>
    </>
  );
};

export default EventsContainer;
