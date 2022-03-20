import { useState } from 'react'
import { FaUserEdit, FaBan } from 'react-icons/fa'

import AdminUserUpdate from '../Components/AdminUserUpdate'

const AdminUser = ({ user }) => {
  function handleUserEditClick() {
    setModalShow(true)
  }

  const [modalShow, setModalShow] = useState(false)
  function onHide() {
    setModalShow(false)
  }

  return (
    <>
      <div className='admin-user'>
        <div className='user-image'>
          <img
            src={user.profilePicture}
            alt='profilePicture'
            className='user-profile'
          />
          <div className='admin-user-icons'>
            <FaUserEdit
              fontSize='1.15rem'
              title='Edit User'
              className='icon-edit'
              onClick={handleUserEditClick}
            />
            <FaBan fontSize='1.15rem' title='Ban User' className='icon-ban' />
          </div>
        </div>
        <div className='user-specific-info'>
          <p className='user-name'>{`${user.firstName} ${user.lastName}`}</p>
          <p className='user-email'>{user.email}</p>
        </div>
        <div className='user-college-info'>
          <p>{`${user.branch}, ${user.batch}`}</p>
        </div>
        <div className='user-aeccc-info'>
          <p className='user-id'>
            <b>UID:</b> <span className='user-uid'>{user.uid}</span>
          </p>
          <p className='user-role'>
            <b>Role:</b> {user.role}
          </p>
        </div>
      </div>
      <AdminUserUpdate modalShow={modalShow} onHide={onHide} user={user} />
    </>
  )
}

export default AdminUser
