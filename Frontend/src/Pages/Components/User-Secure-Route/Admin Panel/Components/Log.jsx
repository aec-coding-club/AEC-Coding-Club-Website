import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

const Log = ({ log }) => {
  const logType = log.Operation.includes('Delete')
    ? 'log-del'
    : log.Operation.includes('Updation')
    ? 'log-upd'
    : log.Operation.includes('Addition')
    ? 'log-add'
    : 'Log'

  return (
    <div className={`log-data ${logType}`}>
      {logType === 'log-del' && <FaTrash fill='#eb4511' />}
      {logType === 'log-upd' && <FaEdit fill='#ffdd00' />}
      {logType === 'log-add' && <FaPlus fill='#5aff15' />}
      <div className='log-data-detail'>
        <div className='log-data-top'>
          <p className='log-user'>{log.userName || 'User Name'}</p>
          <p className='log-type'>{log.Operation}</p>
        </div>
      </div>
    </div>
  )
}

export default Log
