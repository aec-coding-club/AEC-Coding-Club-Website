import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./styles/Events.css";
import Navbar from "../Components/Navbar";
import EventModal from "../Components/EventModal";
import EventsContainer from "../Components/EventsContainer";
import UserContext from "./Context/LoggedUserContext";
import { Api } from "../backend";
import axios from "axios";

const Events = ({ tokenChecker }) => {
  const [modalShow, setModalShow] = useState(false);
  const [userRole, setUserRole] = useState(0);

  const fetchUserData = async () => {
    const authToken = localStorage.getItem("token");
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("User data :- ", parseddata);
    console.log("User Role :- ", parseddata.data.user_data.role);
    setUserRole(parseddata.data.user_data.role);
  };

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

  useEffect(() => {
    fetchUserData();
  }, []);

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
          tokenChecker={tokenChecker}
          userRole={userRole}
        />
      </main>
    </>
  );
};

export default Events;
