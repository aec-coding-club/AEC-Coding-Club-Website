import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/EventsContainer.css';
import { EventCard } from './EventCard';
import eventData from '../data/eventData.json';

const EventsContainer = () => {
  const eventCardEl = eventData.map((data) => (
    <EventCard key={uuidv4()} cardData={data} />
  ));

  return <div className='events-container'>{eventCardEl}</div>;
};

export default EventsContainer;
