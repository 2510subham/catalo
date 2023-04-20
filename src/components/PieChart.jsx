import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = ({ label, data1 }) => {
  const data = {
    labels: label,
    datasets: [
      {
        data: [data1 / label.length, data1 / label.length, data1 / label.length, data1 / label.length],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return <Pie data={data} />;
};

export default PieChart;