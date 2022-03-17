import { FaUserEdit, FaBan } from 'react-icons/fa'

const AdminUser = ({ user }) => {
  return (
    <div className='admin-user'>
      <div className='user-image'>
        <img
          src={user.profilePicture}
          alt='profilePicture'
          className='user-profile'
        />
        <div className='admin-user-icons'>
          <FaUserEdit fontSize='1.15rem' title='Edit User' />
          <FaBan fontSize='1.15rem' title='Ban User' />
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
  )
}

export default AdminUser
