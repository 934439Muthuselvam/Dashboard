import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ExactChart = () => {
  // Donut chart data
  const donutData = [
    { name: "Excellent", value: 42 },
    { name: "Good", value: 30 },
    { name: "Neutral/Negative", value: 20 },
  ];

  // Donut chart colors
  const COLORS = ["#3366FF", "#00C49F", "#DDDDDD"];

  // Bar chart data
  const barData = [
    { name: "Fully Agree", value: 45 },
    { name: "Rather Agree", value: 26 },
    { name: "Rather Disagree", value: 17 },
    { name: "Fully Disagree", value: 7 },
    { name: "Don't know", value: 4 },
  ];

  // Function to render percentage labels inside the donut
  const renderCustomLabel = ({ percent, x, y }) => {
    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12px"
        fontWeight="bold"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    );
  };

  return (
    <div className=" w-[600px] h-[800px] font-sans text-gray-800 shadow-lg rounded-lg p-5 bg-white">
      {/* Header */}
      <h3 className="text-center font-bold mb-5">Patients by Gender</h3>

      {/* Donut Chart with Box Shadow */}
      <div className="relative h-64 shadow-md rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donutData}
              innerRadius={70}
              outerRadius={90}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              paddingAngle={1}
              label={renderCustomLabel} // Custom label for percentages
              labelLine={false} // Hides label lines
            >
              {donutData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold">
          <div className="text-3xl text-blue-600">80%</div>
          <div className="text-sm text-gray-600">Positive</div>
        </div>
      </div>

      {/* Donut Chart Legend */}
      <div className="flex justify-center mt-5 text-xs">
        <div className="mr-5">
          <span className="text-blue-600 font-semibold">42%</span> Excellent
        </div>
        <div className="mr-5">
          <span className="text-green-500 font-semibold">30%</span> Good
        </div>
        <div>
          <span className="text-gray-400 font-semibold">20%</span> Neutral/Negative
        </div>
      </div>

      {/* Bar Chart Header */}
      <h4 className="mt-20 text-center font-bold">The doctor explained the treatment understandably</h4>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barData} layout="vertical" barGap={8}>
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: "12px", fill: "#333" }}
            width={100}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#3366FF" radius={[4, 4, 0, 0]} barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExactChart;
