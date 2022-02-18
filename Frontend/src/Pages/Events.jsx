import React, { useContext, useEffect, useState } from 'react';
import './styles/Events.css';
import Navbar from '../Components/Navbar';
import EventModal from '../Components/EventModal';
import EventsContainer from '../Components/EventsContainer';
import UserContext from './Context/LoggedUserContext';

const Events = ({tokenChecker}) => {

  const [modalShow, setModalShow] = React.useState(false);

  function onHide() {
    setModalShow(false);
  }

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
          <h3 className='events-section-header'>Upcoming Events</h3>
          <button classname='btn' onClick={() => setModalShow(true)}>Add Events</button>
          <EventModal addEvent={true} modalShow={modalShow} onHide={onHide} />
          <EventsContainer />
        </div>
      </main>
    </>
  );
};

export default Events;
