import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OutpatientsVsInpatientsChart = () => {
  // Data for the chart
  const data = {
    labels: [
      'Week 42', 'Week 43', 'Week 44', 'Week 45', 'Week 46', 
      'Week 47', 'Week 48', 'Week 49', 'Week 50', 'Week 51', 'Week 52', 'Week 53'
    ],
    datasets: [
      {
        label: 'Inpatients',
        data: [2000, 2500, 1500, 1700, 1800, 2000, 2200, 2100, 2600, 2300, 2100, 2200],
        backgroundColor: '#1E88E5', // Blue color
      },
      {
        label: 'Outpatients',
        data: [2200, 2900, 1800, 2000, 1900, 2100, 2400, 2200, 2700, 2500, 2200, 2300],
        backgroundColor: '#26C6DA', // Cyan color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Outpatients vs. Inpatients Trend',
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4  ">
      <Bar data={data} options={options} />
    </div>
  );
};

export default OutpatientsVsInpatientsChart;
