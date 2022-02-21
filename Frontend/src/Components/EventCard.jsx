import React from "react";
import "./styles/EventCard.css";
import EventModal from "./EventModal";

export const EventCard = ({ cardData, setModalShow, cardEditData }) => {
  const { eventImage, eventTitle, eventDetails, eventTime } = cardData;

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
            <button className='btn event-card-btn'>Register</button>
            <button className='btn event-card-btn' onClick={onEdit}>
              Edit
            </button>
            <button className='btn event-card-btn'>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
