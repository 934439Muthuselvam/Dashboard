import React from 'react';


import { FaUserFriends } from 'react-icons/fa';
import Card from './CountUp';

const DashboardCards = () => {
  const cards = [
    { title: "Total Patients", value: "50001", Icon: FaUserFriends   },
    { title: "Total Patients Admitted", value: "34863", Icon:FaUserFriends   },
    { title: "Avg Treat. Costs", value: "$8742", Icon:FaUserFriends  },
    { title: "Avg ER Waiting Time", value: "53 min", Icon:FaUserFriends },
    { title: "Available Staff", value: "596", Icon:FaUserFriends   },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default DashboardCards;
