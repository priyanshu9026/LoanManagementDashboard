// Navbar imports
import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaEnvelope } from "react-icons/fa";

const Navbar = ({ role, handleRoleChange }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          Loan Management System
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-4 items-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/apply" className="text-white hover:text-gray-400">
              Apply for Loan
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="text-white hover:text-gray-400">
              <FaBell className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="/messages" className="text-white hover:text-gray-400">
              <FaEnvelope className="text-xl" />
            </Link>
          </li>
          <li>
            <div>
              <select
                value={role}
                onChange={handleRoleChange}
                className="bg-gray-700 text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Verifier">Verifier</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>

      {/* Welcome Message */}
      <div className="text-white text-sm mt-2 text-center">
        Welcome to the Loan Management System
      </div>
    </div>
  );
};

export default Navbar;
