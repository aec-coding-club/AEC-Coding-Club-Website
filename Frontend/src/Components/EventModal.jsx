import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import './styles/Event-Modal.css'

const EventModal = (props) => {
  const { modal, modalShow, onHide, addEvent } = props
  const [modalContainerClass, setModalContainerClass] = useState(
    'event-modal-container'
  )
  const [modalClass, setModalClass] = useState('event-modal')

  console.log(modal)

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
      {/* // event title, details, image, time */}
      <div className={modalClass}>
        {addEvent ? (
          <>
            <div className='close-btn' onClick={() => onHide()}>
              {<FaTimes />}
            </div>
            <h3 className='modal-header' style={{ marginBottom: '1rem' }}>
              Add Event
            </h3>
            <hr />
            <div className='input-wrapper'>
              <label>
                <div className='label'>Title:</div>

                <input
                  placeholder='Add Event Title...'
                  type='text'
                  className='modal-inp'
                />
              </label>
            </div>
            <div className='input-wrapper date-time'>
              <div className='date'>
                <label>
                  <div className='label'>Date & Time:</div>
                  <input
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
                  placeholder='Add Event Description...'
                  className='modal-textarea'
                  style={{ resize: 'none' }}
                />
              </label>
            </div>
            <button className='btn add-event'>Add Event</button>
          </>
        ) : (
          <>
            <div className='close-btn' onClick={() => onHide()}>
              {<FaTimes />}
            </div>
            <h3 className='modal-header'>{modal.eventTitle}</h3>
            <p className='modal-date'>{modal.eventTime}</p>
            <hr />
            <p className='modal-text'>{modal.eventDetails}</p>
            <button
              className={`btn modal-btn ${!modal.register && 'btn-disabled'}`}
              disabled={modal.register}
            >
              {modal.register ? 'Register' : 'Already Registered'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default EventModal
