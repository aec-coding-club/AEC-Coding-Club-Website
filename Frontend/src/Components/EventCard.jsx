import React from "react";
import "./styles/EventCard.css";
import EventModal from "./EventModal";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../backend";
import axios from "axios";

export const EventCard = ({
  cardData,
  setModalShow,
  cardEditData,
  tokenChecker,
  userRole,
}) => {
  const { eventImage, eventTitle, eventDetails, eventTime, _id } = cardData;
  console.log(cardData);
  let navigate = useNavigate();
  const {
    setEditEventTitle,
    setEditEventTime,
    setEditEventImage,
    setEditEventDetails,
    setAddEvent,
  } = cardEditData || {};

  function onEdit() {
    setModalShow(true);
    setAddEvent(false);
    setEditEventTitle(eventTitle);
    setEditEventTime(eventTime);
    setEditEventImage(eventImage);
    setEditEventDetails(eventDetails);
  }
  const signInFirst = () => {
    console.log("Log In to your account to Register in this event");
  };

  // This will register the user for the event
  const registerToEvent = async (id) => {
    console.log(`Events added to the user page ${id}`);
    const authToken = localStorage.getItem("token");
    console.log("AuthToken :- ", authToken);
    let parseddata = await axios.post(`${Api}registerevent/${id}`, "", {
      withCredentials: true,
      crossorigin: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("User data :- ", parseddata);
    navigate("/dashboard");
  };

  return (
    <>
      <div className={`event-card`}>
        <div className='event-card-img-container'>
          <img src={eventImage} alt='event-img' className='event-card-img' />
        </div>
        <div className='card-text-details'>
          <p className='event-card-title'>{eventTitle}</p>
          <p className='event-card-date'>
            Date: <span>{eventTime.split("T")[0]}</span>
          </p>
          <div className='event-card-desc'>
            <p>{eventDetails}</p>
          </div>
          <div className='event-btn-wrapper'>
            {tokenChecker ? (
              userRole >= 3 ? (
                <></>
              ) : (
                <>
                  <button
                    className='btn event-card-btn'
                    onClick={() => registerToEvent(_id)}
                  >
                    Register
                  </button>
                </>
              )
            ) : (
              <button
                className='btn event-card-btn'
                style={{ display: "block", alignItems: "center" }}
                onClick={signInFirst}
              >
                Register
              </button>
            )}

            {tokenChecker && (
              <>
                {userRole >= 2 ? (
                  <>
                    <button className='btn event-card-btn' onClick={onEdit}>
                      Edit
                    </button>
                    <button className='btn event-card-btn'>Delete</button>
                  </>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
