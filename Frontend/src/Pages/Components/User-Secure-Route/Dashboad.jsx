import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../../../backend";
import PreviewEventCard from "../../../Components/PreviewEventCard";
import "../../../Components/styles/EventsContainer.css";

const DashboadComponent = ({ details }) => {
  const [events, setEvents] = useState([]);
  const [userRole, setUserRole] = useState(0);

  const fetchEvents = async () => {
    const allEvents = details.userInfo.events.map(async (id) => {
      const response = await axios.get(`${Api}${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    });
    setEvents(await Promise.all(allEvents));

    // TODO: Set the Role of the user
    const authToken = localStorage.getItem("token");
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    setUserRole(parseddata.data.user_data.role);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className='home-main'>
        {console.log("Events Array: ", events && events)}

        <br />
        <br />
      </div>
      <main className='events-main'>
        <div className='events-container'>
          {events.length > 0 && userRole <= 2 ? (
            events.reverse().map((event) => (
              <>
                <PreviewEventCard
                  key={event._id}
                  cardEditData={{
                    editEventTitle: event.eventTitle,
                    editEventImage: event.eventImage,
                    editEventTime: event.eventTime,
                    editEventDetails: event.eventDetails,
                    dashboardEvents: true,
                  }}
                />
              </>
            ))
          ) : (
            <>
              {userRole >= 3 ? (
                <>
                  <h2>Welcome to the Admin Panel</h2>
                  {/* TODO: Admin Panel Here */}
                </>
              ) : (
                <h2>You Have Not Registered To Any Events</h2>
              )}
            </>
          )}
        </div>
      </main>
      <br />
    </>
  );
};

export default DashboadComponent;
