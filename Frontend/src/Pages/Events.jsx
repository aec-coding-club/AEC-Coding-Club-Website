import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./styles/Events.css";
import Navbar from "../Components/Navbar";
import EventModal from "../Components/EventModal";
import EventsContainer from "../Components/EventsContainer";
import UserContext from "./Context/LoggedUserContext";

const Events = ({ tokenChecker }) => {
  const [modalShow, setModalShow] = React.useState(false);

  function onHide() {
    setModalShow(false);
  }

  // card edit data
  const [editEventTitle, setEditEventTitle] = useState("");
  const [editEventTime, setEditEventTime] = useState("");
  const [editEventImage, setEditEventImage] = useState("");
  const [editEventDetails, setEditEventDetails] = useState("");

  // on add event
  const [addEvent, setAddEvent] = useState(false);

  function handleEditClick() {
    setModalShow(true);
    setAddEvent(true);
    setEditEventTitle("");
    setEditEventTime("");
    setEditEventImage("");
    setEditEventDetails("");
  }

  const cardEditData = {
    editEventTitle,
    editEventImage,
    editEventTime,
    editEventDetails,
    addEvent,
    setAddEvent,
    setEditEventTitle,
    setEditEventTime,
    setEditEventImage,
    setEditEventDetails,
  };

  return (
    <>
      <main className='events-main'>
        {tokenChecker && (
          <div className='events-header'>
            <div className='events-header-left'>
              <p>Hi, {tokenChecker[1]}</p>
            </div>
            <div className='events-header-right'>
              <img
                src='../Assets/events/events-header.jpg'
                alt='events'
                className='events-header-img'
              />
            </div>
          </div>
        )}
        <div className='events-section'>
          <div className='header-wrapper'>
            <h3 className='events-section-header'>Upcoming Events</h3>
            {tokenChecker && (
              <button className='event-btn' onClick={handleEditClick}>
                <div>Add Event</div>{" "}
                <div>
                  <FaEdit />
                </div>
              </button>
            )}
          </div>
          <EventModal
            cardEditData={cardEditData}
            addEvent={true}
            modalShow={modalShow}
            onHide={onHide}
          />
        </div>
        <EventsContainer
          setModalShow={setModalShow}
          cardEditData={cardEditData}
        />
      </main>
    </>
  );
};

export default Events;
