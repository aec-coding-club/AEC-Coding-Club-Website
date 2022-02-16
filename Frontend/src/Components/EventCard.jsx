import React from 'react';

import './styles/EventCard.css';
import EventModal from './EventModal';

export const EventCard = ({ cardData }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { img, title, modal } = cardData;

  function onHide() {
    setModalShow(false);
  }

  return (
    <>
      <div className='event-card' onClick={() => setModalShow(true)}>
        <div className='event-card-img-container'>
          <img src={img} alt='card-img' className='event-card-img' />
        </div>
        <p className='event-card-title'>{title}</p>
      </div>
      <EventModal modal={modal} modalShow={modalShow} onHide={onHide} />
    </>
  );
};
