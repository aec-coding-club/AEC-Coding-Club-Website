import React, { useContext, useEffect, useState } from "react";

import "./styles/Members.css";
import Navbar from "../Components/Navbar";
import MemberFilter from "../Components/MemberFilter";
import MembersContainer from "../Components/MembersContainer";
import UserContext from "./Context/LoggedUserContext";
import Base from "../Base";

const Members = () => {
  const [memberFilter, setMemberFilter] = useState("all");

  function handleMemberFilter(selectedFilter) {
    setMemberFilter(selectedFilter);
  }

  // const details = useContext(UserContext);
  // //// console.log('details', details);
  // const [tokenChecker, setTokenChecker] = useState(false);
  // const checkToken = () => {
  //   const token = localStorage.getItem('token');
  //   //// console.log(token);
  //   if (token) {
  //     setTokenChecker(true);
  //   }
  // };

  // useEffect(() => {
  //   checkToken();
  // }, []);

  return (
    <>
      <Base>
        <main className="members">
          <header className="members-header">
            <h1>The Team</h1>
            <p>
              At AECCC, we truly value what each member brings to the table.
              Among us are mobile-app developers, web developers, system
              administrators, software enthusiasts, algorithmic coders and open
              source software contributors.
            </p>
          </header>
          <hr />
          <h3 className="teacher-header">Teacher Coordinators</h3>
          <div className="teacher-wrapper">
            <div className="teacher-container">
              <div className="teacher-img">
                <img
                  src="https://res.cloudinary.com/sahebcloud/image/upload/v1648147559/AECCC%20Members/PP_Sudip_Kumar_De_pqo4h6.jpg"
                  alt="teacher"
                />
              </div>
              <p className="teacher-name">Sudip Kumar De</p>
              <p className="teacher-designation">Assistant Professor, IT</p>
            </div>
            <div className="teacher-container">
              <div className="teacher-img">
                <img
                  src="https://res.cloudinary.com/sahebcloud/image/upload/v1648147188/AECCC%20Members/PP_Anup_Kumar_M_izylak.jpg"
                  alt="teacher"
                />
              </div>
              <p className="teacher-name">Dr. Anup Mukhopadhyay</p>
              <p className="teacher-designation">HOD, IT</p>
            </div>
            <div className="teacher-container">
              <div className="teacher-img">
                <img
                  src="https://res.cloudinary.com/sahebcloud/image/upload/v1648148328/AECCC%20Members/biplab_sir_fxijyl.png"
                  alt="teacher"
                />
              </div>
              <p className="teacher-name">Biplab Mondal</p>
              <p className="teacher-designation">Assistant Professor, IT</p>
            </div>
          </div>
          <MemberFilter
            memberFilter={memberFilter}
            handleMemberFilter={handleMemberFilter}
          />
          <MembersContainer memberFilter={memberFilter} />
        </main>
      </Base>
    </>
  );
};

export default Members;
