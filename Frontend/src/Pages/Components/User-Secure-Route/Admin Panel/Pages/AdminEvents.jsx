import React, { useEffect, useState } from "react";
import { Api } from "../../../../../backend";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'
import EventBlock from '../Components/EventBlock'

const AdminEvents = () => {
  const [eventData, seteventdata] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    const authToken = localStorage.getItem("token");

    const { data } = await axios.get(`${Api}eventsdata`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("Event data ", data.eventdata);
    seteventdata(await data.eventdata);
    setDisplayData(data.eventdata);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <ol>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            displayData.map((event) => <EventBlock key={uuidv4()} eventdetails={event} />)
          )}
        </div>
      </ol>
    </>
  );
};

export default AdminEvents;
