import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
  


function PieChart() {
  const [data, setdata] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        
      },    
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return <div>
    <ReactApexChart options={data.options} series={data.series} type="pie" width={380} />
  </div>;
}

export default PieChart;