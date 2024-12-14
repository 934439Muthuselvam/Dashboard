import React, { useState, useEffect } from "react";

const WaitingTime = () => {
  const waitingTimeData = [
    { division: "Cardiology", percentage: 50 },
    { division: "Dermatology", percentage: 37 },
    { division: "Neurology", percentage: 50 },
  ];

  const [animatedData, setAnimatedData] = useState(
    waitingTimeData.map((data) => ({ ...data, animatedPercentage: 0 }))
  );

  useEffect(() => {
    // Start animation after a slight delay
    const interval = setInterval(() => {
      setAnimatedData((prevData) =>
        prevData.map((data, index) => {
          if (data.animatedPercentage < waitingTimeData[index].percentage) {
            return {
              ...data,
              animatedPercentage: data.animatedPercentage + 1, // Increment by 1% at a time
            };
          }
          return data;
        })
      );
    }, 20); // Adjust speed of animation

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Avg Waiting Time By Division</h2>
      {animatedData.map((data, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{data.division}</span>
            <span>{data.animatedPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 transition-all"
              style={{ width: `${data.animatedPercentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaitingTime;
