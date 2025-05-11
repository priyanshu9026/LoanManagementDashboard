import React from 'react'
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaMoneyCheckAlt } from 'react-icons/fa';

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-3 rounded hover:bg-blue-700 cursor-pointer transition-all duration-200">
    <div className="text-lg">{icon}</div>
    <span>{label}</span>
  </div>
);
const SidebarData = () => {
  return (
    <div>
    <div className="h-screen w-64 bg-blue-900 text-white flex flex-col shadow-lg">
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

export default Sidebar;

    </div>
  )
}

export default SidebarData
