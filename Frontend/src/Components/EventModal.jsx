import React, { useState, useEffect } from 'react'
import { FaTimes, FaRegEye } from 'react-icons/fa'
import PreviewEventCard from './PreviewEventCard'
import './styles/Event-Modal.css'

const EventModal = (props) => {
  const { modalShow, onHide, cardEditData } = props
  const [modalContainerClass, setModalContainerClass] = useState(
    'event-modal-container'
  )
  const [modalClass, setModalClass] = useState('event-modal')

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

  useEffect(() => {
    if (modalShow) {
      setModalContainerClass('event-modal-container show')
      setModalClass('event-modal modal-show')
    } else {
      setModalContainerClass('event-modal-container')
      setModalClass('event-modal')
    }
  }, [modalShow])

  return (
    <div className={modalContainerClass}>
      <div className={modalClass}>
        <>
          <div className='close-btn' onClick={() => onHide()}>
            {<FaTimes />}
          </div>
          <h3 className='modal-header' style={{ marginBottom: '1rem' }}>
            Add Event
          </h3>
          <hr />
          <div className='event-wrapper'>
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
                  />
                </label>
              </div>
              <div className='input-wrapper date-time'>
                <div className='date'>
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
                <div className='duration'>
                  <label>
                    <div className='label'>Duration(Hrs):</div>
                    <input
                      type='number'
                      className='modal-inp'
                      placeholder='Event Duration...'
                    />
                  </label>
                </div>
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
                  <div className='label'>Details:</div>

                  <textarea
                    value={editEventDetails}
                    onChange={(e) => setEditEventDetails(e.target.value)}
                    placeholder='Add Event Description...'
                    className='modal-textarea'
                    style={{ resize: 'none' }}
                    maxLength='150'
                  />
                </label>
              </div>
              <button className='btn add-event'>
                {addEvent ? 'Add Event' : 'Edit Event'}
              </button>
            </div>
            <div className='preview'>
              <PreviewEventCard cardEditData={cardEditData} />
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default EventModal
