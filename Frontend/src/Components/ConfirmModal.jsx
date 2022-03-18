import React, { useState, useEffect } from 'react'

import './styles/ConfirmModal.css'

const ConfirmModal = ({
  showConfirm,
  eventTitle,
  handleConfirmModal,
  eventId,
  func,
  type,
  message,
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
          {type === 'Delete'
            ? 'Delete Event'
            : (type = 'Notify' ? 'Notify Users' : '')}{' '}
          <p className='name-title'>{eventTitle}</p>
        </h3>
        <p className='confirm-message'>{message}</p>
        <button
          className='btn btn-cancel'
          onClick={() => handleConfirmModal('')}
        >
          No, Cancel
        </button>
        <button className='btn btn-confirm' onClick={() => func(eventId)}>
          Yes, {type}
        </button>
      </div>
    </div>
  )
}

export default ConfirmModal
