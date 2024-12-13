import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white  py-4 px-10 top-0 ">
      {/* Left section (Logo and branding) */}

      {/* Center section (Search bar) */}
      <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-1/3">
        <FaSearch className="text-gray-700" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none px-3 w-full"
        />
      </div>

      {/* Right section (Notifications and User profile) */}
      <div className="flex items-center gap-6 ">
        <div className="bg-blue-700 p-2 rounded-full">
        <FaBell className="text-white cursor-pointer  rounded-md " size={24}  />
        </div>
     

        {/* User profile section */}
        <div className="flex items-center space-x-2  cursor-pointer">
          <FaUserCircle className="text-gray-500" size={36} />
          <span className="text-gray-600">Henry Roberts</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
