import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import UserContext from './Context/LoggedUserContext'
import './styles/Home.css'

const Home = () => {
  const details = useContext(UserContext)
  console.log("details", details);
  return (
    <>
      <Navbar userImage={details.userInfo.pimage} userNameText={details.userInfo.name}/>
      <main className="home-main">
        <h1>Home Page</h1>
      </main>
    </>
  )
}

export default Home
