import React, { useEffect, useState } from "react";
import axios from "axios";
import { Api } from "../../../../backend";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Base from "../../../../Base";

import "./Styles/admin-index.css";

const Admin = ({ userImage, userNameText }) => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const fetchLogs = async () => {
    // Check Role for redirects
    const token = localStorage.getItem("token");
    if (!token) window.location = "/";
    const parseddata = await axios.get(`${Api}dashboard`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!parseddata) navigate("/");
    setUserId(parseddata.data.user_data.uid);
    if (parseddata.data.user_data.role <= 2) navigate("/dashboard");
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <>
      <Base>
        <div className="admin-details">
          <div className="left">
            <img
              src={userImage}
              alt="user-image"
              className="admin-user-img logged-user-image"
            />
            <div className="user-details">
              <p className="logged-user logged-user-text">
                {/* <span>Name: </span> */}
                {userNameText}
              </p>
              <p className="logged-user logged-user-id">
                {/* <span>UID: </span> */}
                <span className="admin-uid">
                  {userId ? userId : "Loading..."}
                </span>
              </p>
            </div>
          </div>
          <h2>Welcome to Admin Panel</h2>
        </div>

        <div className="admin-nav">
          <NavLink to="/admin/overview" className="admin-nav-link">
            Overview
          </NavLink>
          <NavLink to="/admin/admin-users" className="admin-nav-link">
            Users
          </NavLink>
          <NavLink to="/admin/admin-events" className="admin-nav-link">
            Events
          </NavLink>
          <NavLink to="/admin/admin-logs" className="admin-nav-link">
            Logs
          </NavLink>
          <NavLink to="/admin/admin-stats" className="admin-nav-link">
            Stats
          </NavLink>
        </div>
        <Outlet />
      </Base>
    </>
  );
};

export default Admin;
