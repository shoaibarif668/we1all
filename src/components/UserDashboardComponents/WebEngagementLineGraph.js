import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
const WebEngagementLineGraph = () => {
//   const [lineData, setLineData] = useState({
//     labels: ["1/1/2021","2/1/2021","3/1/2021","4/1/2021","5/1/2021","6/1/2021","7/1/2021","8/1/2021","9/1/2021"],
//     datasets: [
//       {
//         label: "Website Engagement",
//         data: [50000,45000,10000,60000,80000,90000,110000,20000,34000],
//         backgroundColor: ["#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181"],
//         borderColor:["#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181"],
//         borderWidth: 1,
//       },
//     ],
//   });
  let lineData = {
    labels: ["1/1/2021","2/1/2021","3/1/2021","4/1/2021","5/1/2021","6/1/2021","7/1/2021","8/1/2021","9/1/2021"],
    datasets: [
      {
        label: "Website Engagement",
        data: [50000,45000,10000,60000,80000,90000,110000,20000,34000],
        backgroundColor: ["#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181"],
        borderColor:["#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181"],
        borderWidth: 1,
      },
    ],
  }
  const [options, setOptions] = useState("");

  useEffect(() => {
    setOptions({
      maintainAspectRatio: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });
  }, []);
  return (
    <>
      <div className="line">
        <Line data={lineData} width={100} height={50} options={options} />
      </div>
    </>
  );
};
export default WebEngagementLineGraph;
