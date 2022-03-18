import React from 'react'
import './styles/EventCard.css'
import ConfirmModal from './ConfirmModal'
import { Link, useNavigate } from 'react-router-dom'
import { Api } from '../backend'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

export const EventCard = ({
  cardData,
  setModalShow,
  cardEditData,
  tokenChecker,
  userRole,
  setEditEventID,
}) => {
  const { eventImage, eventTitle, eventDetails, eventTime, _id } = cardData
  // console.log("Card data :- ", cardData);
  let navigate = useNavigate()

  const [showConfirm, setShowConfirm] = useState(false)
  const [showNotifyConfirm, setShowNotifyConfirm] = useState(false)
  const [confirmId, setConfirmId] = useState('')

  const {
    setEditEventTitle,
    setEditEventTime,
    setEditEventImage,
    setEditEventDetails,
    setAddEvent,
  } = cardEditData || {}

  function onEdit(id) {
    console.log(id)
    setEditEventID(id)
    setModalShow(true)
    setAddEvent(false)
    setEditEventTitle(eventTitle)
    setEditEventTime(eventTime)
    setEditEventImage(eventImage)
    setEditEventDetails(eventDetails)
  }

  // this will notify all the users
  async function notify(id) {
    const mailData = {
      eventTitle,
      eventImage,
      eventDetails,
      eventTime: moment(eventTime).format('lll'),
    }
    setConfirmId('')
    setShowNotifyConfirm(false)
    try {
      const authToken = localStorage.getItem('token')
      let parseddata = await axios.post(`${Api}announceall`, mailData, {
        withCredentials: true,
        crossorigin: true,
        headers: { Authorization: `Bearer ${authToken}` },
      })
      console.log('MAIL SEND ........', parseddata)
      console.log('MAIL DATA: ', mailData)
      toast.success('Users Notified', {
        theme: 'dark',
      })
    } catch {
      toast.error('Failed To Notify Users')
    }
  }

  const signInFirst = () => {
    console.log('Log In to your account to Register in this event')
    toast.error('Sign In To Register To The Event', {
      theme: 'dark',
      onClick: () => navigate('/signin'),
    })
  }

  // This will register the user for the event
  const registerToEvent = async (id) => {
    try {
      console.log(`Events added to the user page ${id}`)
      const authToken = localStorage.getItem('token')
      console.log('AuthToken :- ', authToken)
      let parseddata = await axios.post(`${Api}registerevent/${id}`, '', {
        withCredentials: true,
        crossorigin: true,
        headers: { Authorization: `Bearer ${authToken}` },
      })
      console.log('User data :- ', parseddata)
      navigate('/dashboard')
      toast.success('You have successfully registered', {
        theme: 'dark',
      })
    } catch {
      toast.error('You are already Registered', {
        theme: 'dark',
      })
    }
  }

  const onDelete = async (id) => {
    console.log(`Deleting the event with id ${id}`)
    const authToken = localStorage.getItem('token')
    console.log('AuthToken :- ', authToken)
    let { data } = await axios.delete(`${Api}delete/${id}`, {
      withCredentials: true,
      crossorigin: true,
      headers: { Authorization: `Bearer ${authToken}` },
    })
    console.log('User data :- ', data)
    if (data.success) {
      window.location.reload()
    }
  }

  function handleConfirmModal(id) {
    setConfirmId(id)
    setShowConfirm((prev) => !prev)
  }

  function handleConfirmNotifyModal(id) {
    setConfirmId(id)
    setShowNotifyConfirm((prev) => !prev)
  }

  return (
    <>
      <div className={`event-card`}>
        <div className='event-card-img-container'>
          <img src={eventImage} alt='event-img' className='event-card-img' />
        </div>
        <div className='card-text-details'>
          <p className='event-card-title'>{eventTitle}</p>
          <p className='event-card-date'>
            Date: <span>{eventTime.split('T')[0]}</span>
          </p>
          <div className='event-card-desc'>
            <ReactMarkdown>{eventDetails}</ReactMarkdown>
          </div>
          <div className='event-btn-wrapper'>
            {tokenChecker ? (
              userRole >= 3 ? (
                <></>
              ) : (
                <>
                  <button
                    className='btn event-card-btn'
                    onClick={() => registerToEvent(_id)}
                  >
                    Register
                  </button>
                </>
              )
            ) : (
              <button
                className='btn event-card-btn'
                style={{ display: 'block', alignItems: 'center' }}
                onClick={signInFirst}
              >
                Register
              </button>
            )}

            {tokenChecker && (
              <>
                {userRole >= 2 ? (
                  <>
                    <button
                      className='btn event-card-btn'
                      onClick={() => onEdit(_id)}
                    >
                      Edit
                    </button>

                    {userRole == 3 ? (
                      <>
                        <button
                          className='btn event-card-btn'
                          onClick={() => handleConfirmNotifyModal(_id)}
                        >
                          Notify
                        </button>
                        {confirmId && confirmId === _id && (
                          <ConfirmModal
                            showConfirm={showNotifyConfirm}
                            eventTitle={eventTitle}
                            handleConfirmModal={handleConfirmNotifyModal}
                            eventId={_id}
                            func={notify}
                            type='Notify'
                            message='Are you sure you want to Notify the Users ? This will send email to all the registered users and this can not be undone, make sure the details are correct..'
                          />
                        )}
                      </>
                    ) : (
                      ''
                    )}
                    <button
                      className='btn event-card-btn'
                      onClick={() => handleConfirmModal(_id)}
                    >
                      Delete
                    </button>
                    {confirmId && confirmId === _id && (
                      <ConfirmModal
                        showConfirm={showConfirm}
                        eventTitle={eventTitle}
                        handleConfirmModal={handleConfirmModal}
                        eventId={_id}
                        func={onDelete}
                        type='Delete'
                        message='Are you sure you want to delete this Event? This will remove the Event
                        and can not be undone'
                      />
                    )}
                  </>
                ) : (
                  ''
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
