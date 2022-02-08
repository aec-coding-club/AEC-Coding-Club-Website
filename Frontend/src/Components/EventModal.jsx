import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

import './styles/Event-Modal.css'

const EventModal = (props) => {
  const { modal, modalShow, onHide } = props
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
      <div className={modalClass}>
        <div className='close-btn' onClick={() => onHide()}>
          {<FaTimes />}
        </div>
        <h3 className='modal-header'>{modal.header}</h3>
        <p className='modal-date'>{modal.date}</p>
        <hr />
        <p className='modal-text'>{modal.text}</p>
        <button
          className={`btn modal-btn ${!modal.register && 'btn-disabled'}`}
          disabled={modal.register}
        >
          {modal.register ? 'Register' : 'Already Registered'}
        </button>
      </div>
    </div>
  )
}

export default EventModal
