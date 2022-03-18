import { useState } from 'react'
import { EventInfoModal } from './EventInfoModal'

const EventBlock = ({ eventdetails }) => {
  function handleEventClick() {
    setModalShow(true)
  }

  const [modalShow, setModalShow] = useState(false)
  function onHide() {
    setModalShow(false)
  }

  return (
    <>
      <div className='event-block' onClick={handleEventClick}>
        <img className='event-profile' src={eventdetails.eventImage} />
        <p>{eventdetails.eventTitle}</p>
        <div className='user-aeccc-info'>
          <p className='user-id'>
            <b>Event Date :</b>{' '}
            <span className='user-uid'>
              {eventdetails.eventTime.split('T')[0]}
            </span>
          </p>
          <p className='user-role'>
            <b>Participants :</b> {eventdetails.userId.length}
          </p>
        </div>
      </div>
      <EventInfoModal
        modalShow={modalShow}
        onHide={onHide}
        event={eventdetails}
      />
    </>
  )
}

export default EventBlock
