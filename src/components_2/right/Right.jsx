import React from "react";
import ReactApexChart from "react-apexcharts";
import AreaChart from "./Area_bottomchart";
const DonutChart = () => {
  const donutChartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["A", "B", "C", "D", "E"],
    },
  };

  //area

  return (
    <div className="rightbar">
      <div >
        <ReactApexChart
        className="upparwala"
          options={donutChartData.options}
          series={donutChartData.series}
          type="donut"
          width="380"
        />
      </div>
      <div className="nechewala">
        <AreaChart />
      </div>
    </div>
  );
};

export default DonutChart;
