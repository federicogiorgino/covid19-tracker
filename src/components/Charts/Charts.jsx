import React, { useState, useEffect } from "react";
import { dailyDataFetch } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Charts.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await dailyDataFetch());
    };

    fetchAPI();
  });

  const linedChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: " Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: " Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{linedChart}</div>;
};

export default Charts;
