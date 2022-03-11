import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../../backend'
import PreviewEventCard from '../../../Components/PreviewEventCard'
import '../../../Components/styles/EventsContainer.css'

const DashboadComponent = ({ details, tokenChecker }) => {
  const [events, setEvents] = useState([])

  const navigate = useNavigate()

  const fetchEvents = async () => {
    // Check Role for redirects
    const token = localStorage.getItem('token')
    console.log(token)
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    })
    if (parseddata.data.user_data.role > 2) navigate('/admin/overview')

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

        <br />
        <br />
      </div>
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
        <div className='events-container'>
          {events.length > 0 ? (
            events.reverse().map((event) => (
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
            <h2>You have not Participated in Any Events</h2>
          )}
        </div>
      </main>
      <br />
    </>
  )
}

export default DashboadComponent
