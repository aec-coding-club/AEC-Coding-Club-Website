import React, { useState, useEffect } from 'react'

import './styles/ConfirmModal.css'

const ConfirmModal = ({
  showConfirm,
  eventTitle,
  handleConfirmModal,
  eventId,
  onDelete,
}) => {
  const [classs, setClasss] = useState('')

  useEffect(() => {
    if (showConfirm) setClasss('show-confirm')
    else setClasss('')
  }, [])

  return (
    <div className={`confirm-wrapper ${classs}`}>
      <div className={`confirm-modal ${classs}`}>
        <h3>
          Delete Event <p className='name-title'>{eventTitle}</p>
        </h3>
        <p className='confirm-message'>
          Are you sure you want to delete this Event? This will remove the Event
          and can't be undone.
        </p>
        <button
          className='btn btn-cancel'
          onClick={() => handleConfirmModal('')}
        >
          No, Cancel
        </button>
        <button className='btn btn-confirm' onClick={() => onDelete(eventId)}>
          Yes, Delete
        </button>
      </div>
    </div>
  )
}

export default ConfirmModal
