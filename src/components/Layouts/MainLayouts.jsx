import React from "react";
import Dashboard from "../Dashboard";
import { Outlet } from "react-router-dom";
import SidebarData from "../SidebarData";

const MainLayouts = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-auto">
        <SidebarData />
      </div>
      <main className="flex-1 p-4">
        <Dashboard />
      </main>
    </div>
  );
};

export default MainLayouts;
