import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaMoneyCheckAlt, FaBars } from 'react-icons/fa';

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-3 rounded hover:bg-blue-700 cursor-pointer transition-all duration-200">
    <div className="text-lg">{icon}</div>
    <span>{label}</span>
  </div>
);

const SidebarData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        className="md:hidden p-4 text-white bg-blue-900"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-blue-900 text-white flex flex-col shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        } md:translate-x-0`}
      >
        <div className="p-6 text-2xl font-bold tracking-wider border-b border-blue-800">
          💳 Credit Panel
        </div>
        <nav className="flex flex-col p-4 gap-4 text-base">
          <SidebarItem icon={<FaHome />} label="Dashboard" />
          <SidebarItem icon={<FaUser />} label="Users" />
          <SidebarItem icon={<FaMoneyCheckAlt />} label="Loans" />
          <SidebarItem icon={<FaCog />} label="Settings" />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" />
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SidebarData;
