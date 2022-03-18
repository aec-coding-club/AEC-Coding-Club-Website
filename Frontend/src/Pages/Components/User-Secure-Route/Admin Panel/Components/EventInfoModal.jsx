import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ExportReactCSV } from './ExportReactCSV'

export const EventInfoModal = ({ modalShow, onHide, event }) => {
  const [modalContainerClass, setModalContainerClass] = useState(
    'event-modal-container'
  )
  const [modalClass, setModalClass] = useState('event-modal')

  let eventData = event.email.map((data, index) => ({
    slNo: index + 1,
    email: data,
    userId: event.userId[index],
    name: event.name[index]
  }))

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

  return (
    <div className={modalContainerClass}>
      <div className={modalClass}>
        <div className='modal-admin-header'>
          <h3>
            Participants List - <span> {event.eventTitle}</span>
          </h3>
          <FaTimes onClick={onHide} fontSize='1.25rem' fill='#d62828' />
        </div>
        <ExportReactCSV csvData={eventData} fileName={event.eventTitle} />
      </div>
      {console.log('Modal Data', eventData)}
    </div>
  )
}
