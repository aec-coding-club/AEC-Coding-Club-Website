import React, {useEffect} from "react";
import axios from "axios";
import {Api} from "../../../../backend"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Index = () => {
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4256,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const fetchLogs = async () => {
    const authToken = localStorage.getItem("token");
    const {data} = await axios.get(`${Api}logger`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("Fethcing the event Logs - ", data);
  }

  useEffect(() => {
    
    fetchLogs();
  }, [])
  

  return (
    <>
      <h2>Admin Panel</h2>
      <br />
      <div>
        <PieChart width={730} height={250}>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            label
            fill="#FF6666"
          />
          {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </PieChart>
      </div>
    </>
  );
};

export default Index;
