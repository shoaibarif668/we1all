import React, {useState,useEffect} from 'react';
import { Bar } from 'react-chartjsx';
const WetubeViewsBarGraph = () =>{
  
 // set data
const [barData, setBarData] = useState({
    labels: ["1/1/2021","2/1/2021","3/1/2021","4/1/2021","5/1/2021","6/1/2021","7/1/2021","8/1/2021","9/1/2021"], 
    datasets: [ 
      { 
        label: "Wetube Channel Views", 
        backgroundColor: ["#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181"], 
        data: [1000,1200,2200,900,5000,10000,4500,7000,12000],
        borderColor:["#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181","#1818181"], 
      } 
    ] 
});
const [options, setOptions] = useState("");




useEffect(()=>{
    setOptions({
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        },
        title: {
            display: true,
            text: 'Total Subscribers Registered In Last 7 Days',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'top'
        }
      });
},[])
    return(
        <>
        <div className="bar_chart">
                <Bar 
                data={barData} 
                options={options} 
                width={800} 
                height={450} /> 
        </div>
        </>
    )
}
export default WetubeViewsBarGraph;