import React from 'react'

const PreviewEventCard = ({ cardEditData }) => {
  const { editEventTitle, editEventImage, editEventTime, editEventDetails } =
    cardEditData

  return (
    <>
      <div className={`event-card`}>
        <div className='event-card-img-container'>
          <img
            src={editEventImage || '../Assets/events/demo-event.jpg'}
            alt='event-img'
            className='event-card-img'
          />
        </div>
        <div className='card-text-details'>
          <p className='event-card-title'>
            {editEventTitle || 'Default Description'}
          </p>
          <p className='event-card-date'>
            Date:{' '}
            <span>
              {editEventTime
                ? editEventTime.split('T')[0]
                : new Date('30 July 2022 15:05 UTC')
                    .toISOString()
                    .split('T')[0]}
            </span>
          </p>
          <div className='event-card-desc'>
            <p>{editEventDetails || 'Default Description'}</p>
          </div>
          <div className='event-btn-wrapper'>
            <button className='btn'>Register</button>
            <button className='btn'>Edit</button>
            <button className='btn'>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviewEventCard
