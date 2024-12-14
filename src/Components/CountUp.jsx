import React from 'react';
import { IconContext } from 'react-icons';
import CountUp from 'react-countup'; // Import CountUp

const Card = ({ title, value, Icon }) => {
  return (
    <div className="bg-purple-100 shadow-lg rounded-lg p-4 flex items-center gap-4">
      {Icon && (
        <IconContext.Provider value={{ size: "2em", className: "text-blue-500" }}>
          <div className="bg-white p-3 rounded-full">
            <Icon />
          </div>
        </IconContext.Provider>
      )}
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-xl font-bold">
          <CountUp start={0} end={parseInt(value.replace(/[^\d]/g, ''))} duration={2.5} separator="," />
        </p>
      </div>
    </div>
  );
};

export default Card;
