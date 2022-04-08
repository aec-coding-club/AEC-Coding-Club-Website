import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './styles/EventsContainer.css'
import { EventCard } from './EventCard'
import eventData from '../data/eventData.json'
import axios from 'axios'
import { Api } from '../backend'

const EventsContainer = ({
  setModalShow,
  cardEditData,
  tokenChecker,
  userRole,
  setEditEventID,
  array,
  loder,
  arrName
}) => {
  // const [allEvents, setEvents] = useState([])
  // const [loading, setLoading] = useState(false)
  // async function fetchdata() {
  //   setLoading(true)
  //   const parseddata = await axios.get(`${Api}events`, {
  //     withCredentials: true,
  //   })
  //   setLoading(false)
  //   setEvents(parseddata.data.upcomingEvent)
  //   // console.log(allEvents)
  // }

  // useEffect(() => {
  //   fetchdata()
  // }, [])

  return (
    <>
      {!loder ? (
        <div className='events-container'>
          {array.map((data) => (
            <EventCard
              key={data._id}
              cardData={data}
              cardEditData={cardEditData}
              setModalShow={setModalShow}
              tokenChecker={tokenChecker}
              userRole={userRole}
              setEditEventID={setEditEventID}
              decisionArray={array}
              name={arrName}
            />
          ))}
        </div>
      ) : (
        <img
          id='event-loading-img'
          src='../Assets/loader.gif'
          alt='loading...'
        />
      )}
    </>
  )
}

export default EventsContainer
