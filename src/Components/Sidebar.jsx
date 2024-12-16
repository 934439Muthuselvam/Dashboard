import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaFileAlt, FaUserFriends } from 'react-icons/fa';
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="h-screen py-5 w-20 bg-blue-500  gap-10 text-white">
      {/* Sidebar Top Image */}
      <div className="flex justify-center">
        <img 
          src="images\Screenshot_2024-12-15_031221-removebg-preview.png" 
          alt="Logo" 
          className="rounded-full w-12 h-12 mb-10"
        />
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col items-center gap-6 mt-10">
        <Link to="/" className="flex items-center hover:bg-white hover:text-black p-4 rounded-full">
          <MdDashboard size={30} /> {/* Icon size increased */}
        </Link>

        <Link to="" className="flex items-center hover:bg-white hover:text-black p-4 rounded-full">
          <FaUserFriends size={30} /> {/* Icon size increased */}
        </Link>

        <Link to="" className="flex items-center hover:bg-white hover:text-black p-4 rounded-full">
          <FaFileAlt size={30} /> {/* Icon size increased */}
        </Link>

        <Link to="" className="flex items-center hover:bg-white hover:text-black p-4 rounded-full">
          <RiMessage2Line size={30} /> {/* Icon size increased */}
        </Link>

        <hr className="w-full border-gray-300 my-6" /> {/* Divider Line */}

        <Link to="" className="flex items-center hover:bg-white hover:text-black p-4 rounded-full">
          <IoSettingsOutline size={30} /> {/* Icon size increased */}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
