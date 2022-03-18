import React, { useState, useEffect } from 'react'
import { FaTimes, FaRegEye } from 'react-icons/fa'
import PreviewEventCard from './PreviewEventCard'
import { useNavigate } from 'react-router-dom'
import './styles/Event-Modal.css'
import { Api } from '../backend'
import axios from 'axios'
import { toast } from 'react-toastify'

const EventModal = (props) => {
  const { modalShow, onHide, cardEditData, editEventID } = props
  const [modalContainerClass, setModalContainerClass] = useState(
    'event-modal-container'
  )
  const [modalClass, setModalClass] = useState('event-modal')

  const [imgError, setImgError] = useState(false)

  let navigate = useNavigate()

  const {
    editEventTitle,
    editEventImage,
    editEventTime,
    editEventDetails,
    addEvent,
    setEditEventTitle,
    setEditEventTime,
    setEditEventImage,
    setEditEventDetails,
  } = cardEditData

  const addNewEvent = async () => {
    if (imgError) {
      toast.error('Invalid Image Link!', {
        theme: 'dark',
      })
      return
    }
    console.log('New Event Added')
    const Data = {
      eventTitle: editEventTitle,
      eventTime: editEventTime,
      eventImage: editEventImage,
      eventDetails: editEventDetails,
    }
    console.log('Event Data :- ', Data)

    const authToken = localStorage.getItem('token')
    const { data } = await axios.post(`${Api}add`, Data, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    })

    console.log('DATA :- ', data)
    if (data.success) {
      window.location.reload()
    } else {
      console.log('error data:- ', data)
      toast.error(data.error, {
        theme: 'dark',
      })
    }
  }

  const editExistingEvent = async () => {
    if (imgError) {
      toast.error('Invalid Image Link!', {
        theme: 'dark',
      })
      return
    }
    console.log('Editing Event')
    const Data = {
      eventTitle: editEventTitle,
      eventTime: editEventTime,
      eventImage: editEventImage,
      eventDetails: editEventDetails,
    }
    console.log('Event Data :- ', Data)

    const authToken = localStorage.getItem('token')
    const { data } = await axios.put(`${Api}update/${editEventID}`, Data, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    })

    if (data.success) {
      window.location.reload()
    } else {
      console.log('error data:- ', data)
      toast.error(data.error, {
        theme: 'dark',
      })
    }
    console.log('Data :- ', data)
  }

  useEffect(() => {
    if (modalShow) {
      setModalContainerClass('event-modal-container show')
      setModalClass('event-modal modal-show')
      document.body.classList.add('modal-showed')
    } else {
      setModalContainerClass('event-modal-container')
      setModalClass('event-modal')
      document.body.classList.remove('modal-showed')
    }
  }, [modalShow])

  console.log('edit event id: ', editEventID)

  return (
    <div className={modalContainerClass}>
      <div className={modalClass}>
        <>
          <div className='close-btn' onClick={() => onHide()}>
            {<FaTimes />}
          </div>
          <h3 className='modal-header' style={{ paddingBottom: '0.5rem' }}>
            Add Event
          </h3>
          <div className='event-wrapper'>
            {/* <form style={{all : 'revert'}}> */}
            <div className='event-inputs'>
              <div className='input-wrapper'>
                <label>
                  <div className='label'>Title:</div>
                  <input
                    value={editEventTitle}
                    onChange={(e) => setEditEventTitle(e.target.value)}
                    placeholder='Add Event Title...'
                    type='url'
                    className='modal-inp'
                    maxLength='50'
                    required
                  />
                </label>
              </div>

              <div className='input-wrapper date'>
                <label>
                  <div className='label'>Date & Time:</div>
                  <input
                    value={editEventTime}
                    onChange={(e) => setEditEventTime(e.target.value)}
                    type='datetime-local'
                    className='modal-inp date-inp'
                    placeholder='Event date...'
                  />
                </label>
              </div>

              <div className='input-wrapper'>
                <label>
                  <div className='label'>Image:</div>

                  <input
                    value={editEventImage}
                    onChange={(e) => setEditEventImage(e.target.value)}
                    placeholder='Add Event Image Link...'
                    type='text'
                    className='modal-inp'
                  />
                </label>
              </div>

              <div className='input-wrapper'>
                <label>
                  <div className='label label-details'>
                    Details:{' '}
                    <a
                      href='https://www.markdownguide.org/basic-syntax/'
                      style={{
                        textDecoration: 'none',
                        color: '#D62828',
                        textAlign: 'right',
                        position: 'absolute',
                        right: '0',
                      }}
                      target='_blank'
                    >
                      <b title='Markdown Reference'>ⓘ</b>
                    </a>
                  </div>

                  <textarea
                    value={editEventDetails}
                    onChange={(e) => setEditEventDetails(e.target.value)}
                    placeholder='Add Event Description...'
                    className='modal-textarea'
                    style={{ resize: 'none' }}
                    maxLength='5000'
                  />
                </label>
              </div>
              {addEvent ? (
                <button className='btn add-event' onClick={addNewEvent}>
                  Add Event
                </button>
              ) : (
                <button className='btn add-event' onClick={editExistingEvent}>
                  Edit Event
                </button>
              )}
            </div>
            {/* </form> */}
            <div className='preview'>
              <PreviewEventCard
                cardEditData={cardEditData}
                imgError={imgError}
                setImgError={setImgError}
              />
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default EventModal
