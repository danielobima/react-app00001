import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const example = {
//     labels: data.data.map((crypto) => crypto.name),
//     datasets: [
//       {
//         label: "Price in USD",
//         data: data.data.map((crypto) => crypto.priceUsd),
//         backgroundColor: [
//           "#ffbb11",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0"
//         ]
//       }

//     ]};
export const BarChart = ({ chartData,classNames,options }) => {

  return (
    <Bar options={options} data={chartData} className={classNames}/>
  );
};