import React, { useContext, useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import UserContext from "./Context/LoggedUserContext";
import "./styles/Home.css";

import HomeCard from "./Components/HomeCard";
import Winners from "../data/homeCard";
import Slider from "./Components/Slider";

import SvgComponent from "./Components/Hexagon";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className='home-main'>
        <div className='home-pic'>
          <Slider />
        </div>

        <div className='content'>
          <button
            onClick={() => setShow(!show)}
            id='btntogglediv'
            className='btn'
          >
            Coding Club Objective
          </button>

          {show ? (
            <section>
              {/* <div className='grid'> */}
              <div className='objective'>
                <span>Coding Club </span>
                <p>
                  The AEC Coding Club started its journey on 11 April 2021. Its major objective is to motivate students' interest in learning various technologies and to obtain information about how technology will be used to project work. The club’s goal is to encourage students to solve various challenging problems using demanding technologies which include Python, Java, C, C++, etc. Our approach will help students to become Industry Ready. This will boost them to get Job. The AEC Coding Club actively organizes various activities like Online Coding Contest, Online Quiz Contest, etc. Other events like Expert's Talk, Alumni Talk, and Hands-on practical workshops for various programming basics are planned for the future..
                </p>
              </div>

              {/* <div className='event-img'>
              <img src='https://res.cloudinary.com/sahebcloud/image/upload/v1645215868/AIML_zwljm7.png'></img>
            </div> */}
              {/* </div> */}
            </section>
          ) : null}

          <div className='winners'>
            <h2>Last Event Winners</h2>
            <div className='winner-cards'>
              {Winners.map((props) => {
                return <HomeCard key={props.id} data={props} />;
              })}
            </div>
          </div>

          <div>
            <SvgComponent />
            <SvgComponent />
            <SvgComponent />
            <SvgComponent />
          </div>
        </div>

        <footer style={{ textAlign: "center" }}>
          <span>Copyright @AEC Coding Club</span>
        </footer>
      </div>
    </>
  );
};

export default Home;
