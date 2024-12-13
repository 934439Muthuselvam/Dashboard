import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaFileAlt, FaUserFriends } from 'react-icons/fa';
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";



const Sidebar = () => {
  return (
    <div className="h-screen py-5 w-20 bg-blue-700 gap-10 text-white">
     
      
      <div className="flex flex-col items-center gap-6 mt-20">
        {/* Sidebar Links */}
        <Link to="/" className="flex items-center  hover:bg-white hover:text-black p-4  rounded-full">
        <MdDashboard/>
        </Link>

        <Link to="" className="flex items-center  hover:bg-white hover:text-black p-4 rounded-full">
        <FaUserFriends />
        </Link>

        <Link to="" className="flex items-center  hover:bg-white hover:text-black p-4 rounded-full">
        <FaFileAlt />
        </Link>

        <Link to="" className="flex items-center  hover:bg-white hover:text-black p-4 rounded-full">
        <RiMessage2Line/>
        </Link>

        _______

        <Link to="" className="flex items-center  hover:bg-white hover:text-black p-4 rounded-full">
        <IoSettingsOutline/>
        </Link>
       
       
       
      </div>
    </div>
  );
};

export default Sidebar;
