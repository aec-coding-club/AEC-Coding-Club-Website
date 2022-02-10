import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Api } from "../backend";

function Dashboard() {
  async function fetchdata() {
    const parseddata = await axios.get(`${Api}dashboardtry`, {
      withCredentials: true,
    });
    console.log(Api);
    console.log(parseddata);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return <>Hi Dashboard</>;
}

export default Dashboard;
