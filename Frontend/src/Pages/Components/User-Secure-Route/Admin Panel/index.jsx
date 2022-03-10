import React, { useEffect } from "react";
import axios from "axios";
import { Api } from "../../../../backend";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const Index = () => {
  const linedata = [
    {
      name: "Java",
      students: 15,
      fees: 10,
    },
    {
      name: "Python",
      students: 26,
      fees: 35,
    },
    {
      name: "C++",
      students: 11,
      fees: 6,
    },
    {
      name: "Javascript",
      students: 41,
      fees: 25,
    },
    {
      name: "C",
      students: 18,
      fees: 10,
    },
    {
      name: "GoLang",
      students: 14,
      fees: 10,
    },
  ];

  const fetchLogs = async () => {
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(`${Api}logger`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("Fethcing the event Logs - ", data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <>
      <h2>Admin Panel</h2>
      <br />
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={linedata}
          width={100}
          height={100}
          margin={{ top: 10, left: 10, bottom: 0, right: 50 }}
        >
          <CartesianGrid strokeDasharray="3 15" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "black" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="students"
            stroke="#EAE2B7"
            legendType="wye"
            activeDot={{ stroke: "red", strokeWidth: 2, r: 7 }}
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="#D93E39"
            activeDot={{ r: 7 }}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Index;
