import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const areaChartData = {
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2023-10-01T00:00:00.000Z',
          '2023-10-02T01:30:00.000Z',
          '2023-10-03T02:30:00.000Z',
          '2023-10-04T03:30:00.000Z',
          '2023-10-05T04:30:00.000Z',
          '2023-10-06T05:30:00.000Z',
          '2023-10-07T06:30:00.000Z',
          '2023-10-08T07:30:00.000Z',
          '2023-10-09T08:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  };

  return (
    <div className="upparwala">
      
      <ReactApexChart
        options={areaChartData.options}
        series={areaChartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
