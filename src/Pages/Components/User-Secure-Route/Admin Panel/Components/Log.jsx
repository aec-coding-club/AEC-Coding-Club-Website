import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { AiTwotoneNotification } from 'react-icons/ai'

import moment from 'moment'

const Log = ({ log }) => {
  const logType = log.Operation.includes('Delete')
    ? 'log-del'
    : log.Operation.includes('Updation')
    ? 'log-upd'
    : log.Operation.includes('Addition')
    ? 'log-add'
    : log.Operation.includes('Announcement')
    ? 'log-email'
    : 'Log'

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className={`log-data ${logType}`}>
      {logType === 'log-del' && <FaTrash fill='#eb4511' fontSize='1.35rem' />}
      {logType === 'log-upd' && <FaEdit fill='#ffdd00' fontSize='1.35rem' />}
      {logType === 'log-add' && <FaPlus fill='#5aff15' fontSize='1.35rem' />}
      {logType === 'log-email' && (
        <AiTwotoneNotification fill='#FF8E00' fontSize='1.35rem' />
      )}
      <div className='log-wrapper'>
        <div className='log-data-detail'>
          <div className='log-data-top'>
            <p className='log-description'>
              <span className='log-user'>{log.userName || 'User Name'}</span>
              <span className='log-uid'>{log.updatedby}</span>
            </p>
          </div>
          <div className='log-bottom'>
            <span className={`log-type log-type-${logType}`}>
              {(logType === 'log-upd' && 'Updated') ||
                (logType === 'log-add' && 'Added') ||
                (logType === 'log-del' && 'Deleted') ||
                (logType === 'log-email' && 'Notified')}
            </span>
            <span className='log-event-name'>"{log.eventTitle}"</span>
          </div>
        </div>
        <p className='log-date'>{moment(log.updatedAt).format('lll')}</p>
      </div>
    </div>
  )
}

export default Log
