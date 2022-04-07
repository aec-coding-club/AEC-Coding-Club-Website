import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../../backend'
import PreviewEventCard from '../../../Components/PreviewEventCard'
import '../../../Components/styles/EventsContainer.css'

const DashboadComponent = ({ details, tokenChecker }) => {
  const [events, setEvents] = useState([])
  const [userId, setUserId] = useState(null)
  const [zone, setZone] = useState('white')
  const [role, setRole] = useState(0)

  const navigate = useNavigate()

  const fetchEvents = async () => {
    // Check Role for redirects
    const token = localStorage.getItem('token')
    //console.log(token)
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    })
    if (parseddata.data.user_data.role > 2) navigate('/admin/overview')
    setUserId(parseddata.data.user_data.uid)
    setZone(parseddata.data.user_data.zone)
    setRole(parseddata.data.user_data.role)
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
      {/* <div className='home-main'>
        {//console.log('Events Array: ', events && events)}

        <br />
        <br />
      </div> */}
      <div className='admin-details'>
        <div className='left'>
          <img
            src={tokenChecker && tokenChecker[2]}
            alt='user-image'
            className='admin-user-img logged-user-image'
          />
          <div className='user-details'>
            <p className='logged-user logged-user-text'>
              {tokenChecker && tokenChecker[1]}
              {role > 0 && role < 3 && (
                <div
                  className='zone-light'
                  title={
                    zone === 'Red'
                      ? 'Inactive'
                      : zone === 'Yellow'
                      ? 'Active'
                      : zone === 'Green'
                      ? 'Good'
                      : ''
                  }
                  style={
                    zone === 'Red'
                      ? {
                          backgroundColor: '#eb4511',
                          boxShadow: '0px 0px 5px 3px #eb4511',
                        }
                      : zone === 'Yellow'
                      ? {
                          backgroundColor: '#ffdd00',
                          boxShadow: '0px 0px 5px 3px #ffdd00',
                        }
                      : zone === 'Green'
                      ? {
                          backgroundColor: '#5aff15',
                          boxShadow: '0px 0px 5px 3px #5aff15',
                        }
                      : {}
                  }
                ></div>
              )}
            </p>
            <p className='logged-user logged-user-id'>
              <span className='admin-uid'>
                {userId ? userId : 'Loading...'}
              </span>
            </p>
          </div>
        </div>
        <h2>Welcome to Dashboard</h2>
      </div>
      <main className='events-main'>
        {/* {tokenChecker && (
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
        )} */}

        {events.length > 0 ? (
          <>
            <h3 className='dashboard-events-header'>
              Events You Have Registered In
            </h3>
            <div className='events-container'>
              {events.reverse().map((event) => (
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
              ))}
            </div>
          </>
        ) : (
          <h2>You have not Participated in Any Events</h2>
        )}
      </main>
      <br />
    </>
  )
}

export default DashboadComponent
