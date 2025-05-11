import React, { useState } from 'react';


const RoleSwitcher = ({role,handleRoleChange}) => {

  return (
    <div className="p-4">
      <select value={role} onChange={handleRoleChange} className="border p-2 rounded">
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Verifier">Verifier</option>
      </select>
      </div>
  );
};

export default RoleSwitcher;
