// dashboard imports
import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';
import VerifierComponent from './VerifierComponent';



const Dashboard = () => {
   const [role, setRole] = useState('User');

   const handleRoleChange = (e) => {
     setRole(e.target.value);
   };
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <Navbar role={role} handleRoleChange={handleRoleChange} />
        <div className="p-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {role === 'User' && <UserComponent />}
            {role === 'Admin' && <AdminComponent />}
            {role === 'Verifier' && <VerifierComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
