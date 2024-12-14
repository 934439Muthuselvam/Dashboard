import React from 'react';

import { MdAccessTime } from "react-icons/md";
import { FaMoneyCheckAlt, FaNotesMedical, FaUserFriends, FaUsers } from 'react-icons/fa';
import Card from './CountUp';

const DashboardCards = () => {
  const cards = [
    { title: "Total Patients", value: "50001", Icon: FaUserFriends   },
    { title: "Total Patients Admitted", value: "34863", Icon:FaNotesMedical  },
    { title: "Avg Treat. Costs", value: "$8742", Icon:FaMoneyCheckAlt  },
    { title: "Avg ER Waiting Time", value: "53 min", Icon:MdAccessTime },
    { title: "Available Staff", value: "596", Icon:FaUsers   },
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
