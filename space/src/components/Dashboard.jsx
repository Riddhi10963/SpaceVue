import React from "react";
import { useState, useEffect } from "react";

const Dashboard = ({ onLogout }) => {
  const [spaceData, setSpaceData] = useState();

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSpaceData(data);
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h2>Space Mission Dashboard</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="ag-grid-container">
        <div>
          {spaceData &&
            spaceData.map((item, index) => (
              <div key={index}>
                <h1>{item.company}</h1>
                <h2>{item.date}</h2>
              </div>
            ))}
        </div>
      </div>
      <div className="chart-container">
        <h3>Mission Success Proportion</h3>
      </div>
    </div>
  );
};

export default Dashboard;
