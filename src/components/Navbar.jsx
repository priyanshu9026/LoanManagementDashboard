//Navbar imports
import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaEnvelope } from "react-icons/fa";
const Navbar = ({ role, handleRoleChange }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Loan Management System
        </div>
        <ul className="flex space-x-4">
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
          {/* Message Icon */}
          <li>
            <Link to="/messages" className="text-white hover:text-gray-400">
              <FaEnvelope className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="/verifier" className="text-white hover:text-gray-400">
              <div className="">
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="border p-2 rounded"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Verifier">Verifier</option>
                </select>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-white text-sm mt-2">
        Welcome to the Loan Management System
      </div>
    </div>
  );
};

export default Navbar;
