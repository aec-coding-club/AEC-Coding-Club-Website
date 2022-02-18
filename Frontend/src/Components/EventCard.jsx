import React from "react";

import "./styles/EventCard.css";
import EventModal from "./EventModal";

export const EventCard = ({ cardData }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { eventImage, eventTitle } = cardData;

  function onHide() {
    setModalShow(false);
  }

  return (
    <>
      <div className='event-card' onClick={() => setModalShow(true)}>
        <div className='event-card-img-container'>
          <img src={eventImage} alt='card-img' className='event-card-img' />
        </div>
        <p className='event-card-title'>{eventTitle}</p>
      </div>
      <EventModal modal={cardData} modalShow={modalShow} onHide={onHide} />
    </>
  );
};
