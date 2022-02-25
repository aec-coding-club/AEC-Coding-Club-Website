import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Api } from '../../../backend'
import PreviewEventCard from '../../../Components/PreviewEventCard'

const DashboadComponent = ({ details }) => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const allEvents = details.userInfo.events.map(async (id) => {
      const response = await axios.get(`${Api}${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      return response.data
    })
    setEvents(await Promise.all(allEvents))
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <>
      <div className='home-main'>
        {console.log('Events Array: ', events && events)}
        <h1>You are Verified and Authorized Welcome to Dashboard Route</h1>
        <br />
        <br />
      </div>
      <div>
        {events.length > 0 ? (
          events.map((event) => (
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
          ))
        ) : (
          <h3>You have not registered to any events</h3>
        )}
      </div>
      <br />
    </>
  )
}

export default DashboadComponent
