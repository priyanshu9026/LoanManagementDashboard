import React, { useEffect, useState } from 'react'
import { FaHome, FaCreditCard, FaWallet, FaBell, FaComments } from 'react-icons/fa';
import LoanApplicationModal from './LoanApplicationModal';


const UserComponent = () => {
   const [role, setRole] = useState('User');
   const [showLoanForm, setShowLoanForm] = useState(false);
   const [loanData, setLoanData] = useState([]);
   
   const handleRoleChange = (e) => {
     setRole(e.target.value);
   };

   useEffect(() => {
     // Fetch loan data from the API  
     const FetchLoanData = async () => {
       try {
         const response = await fetch('http://localhost:5000/api/loans');
         const data = await response.json();
         setLoanData(data);
       } catch (error) {
         console.error('Error fetching loan data:', error);
       }
     };
      FetchLoanData();
    }, []);
    
   const getStatusColor = (status) => {
     switch (status) {
       case 'PENDING':
         return 'bg-yellow-400';
       case 'VERIFIED':
         return 'bg-green-500';
       case 'REJECTED':
         return 'bg-red-500';
       case 'APPROVED':
         return 'bg-blue-600';
       default:
         return 'bg-gray-300';
     }
   };
     return (
        <div className="min-h-screen bg-gray-100 font-sans">
          {/* Navbar */}
          <nav className="flex justify-between items-center bg-white shadow px-6 py-4">
            <h1 className="text-xl font-bold text-green-800">CREDIT APP</h1>
            <div className="flex gap-6 items-center text-green-800">
              <FaHome className="text-lg" /> Home
              <FaWallet className="text-lg" /> Payments
              <FaCreditCard className="text-lg" /> Budget
              <FaWallet className="text-lg" /> Card
              <FaBell className="text-lg" />
              <FaComments className="text-lg" />
              <select
                value={role}
                onChange={handleRoleChange}
                className="border rounded px-2 py-1 text-black"
              >
                <option>User</option>
                <option>Admin</option>
                <option>Verifier</option>
              </select>
            </div>
          </nav>
    
          {/* Summary Card */}
          <div className="flex justify-between items-center px-6 py-4">
            <div className="bg-white shadow-md rounded p-4 flex items-center gap-4">
              <div className="bg-green-100 text-green-800 p-2 rounded-full text-2xl">
                💸
              </div>
              <div>
                <p className="text-sm text-gray-600">DEFICIT</p>
                <p className="text-xl font-bold">₦ 0.0</p>
              </div>
            </div>
            <button onClick={() => setShowLoanForm(true)} className="bg-gray-300 px-4 py-2 rounded shadow">Get A Loan</button>
          </div>
    
          {/* Action Buttons */}
          <div className="flex justify-center gap-2 py-2">
            <button className="bg-white border px-6 py-2 rounded shadow">Borrow Cash</button>
            <button className="bg-white border px-6 py-2 rounded shadow">Transact</button>
            <button className="bg-white border px-6 py-2 rounded shadow">Deposit Cash</button>
          </div>
    
          {/* Search Bar */}
          <div className="px-6 py-4">
            <input
              type="text"
              placeholder="Search for loans"
              className="w-full p-2 rounded border"
            />
          </div>
    
          {/* Loans Table */}
          <div className="px-6">
            <h2 className="text-xl font-semibold mb-4">Applied Loans</h2>
            <div className="bg-white shadow-md rounded overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-200 text-left">
                  <tr>
                    <th className="px-4 py-2">Loan Officer</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Date Applied</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loanData.map((loan, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 flex items-center gap-3">
                        <img
                          src="https://randomuser.me/api/portraits/men/75.jpg"
                          alt="officer"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{loan.fullName}</p>
                          <p className="text-xs text-gray-500">Updated 1 day ago</p>
                        </div>
                      </td>
                      <td className="px-4 py-2">{loan.amount}</td>
                      <td className="px-4 py-2">
                        {loan.createdAt.split('T')[0]}
                        <br />
                        <span className="text-xs text-gray-500">{loan.createdAt.split('T')[1]}</span>
                      </td>
                      <td className="px-4 py-2">
                        <span className={`text-white text-xs px-3 py-1 rounded-full ${getStatusColor(loan.status)}`}>
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

            {/* Loan Application Modal */}
            {showLoanForm && <LoanApplicationModal onClose={() => setShowLoanForm(false)} />}

        </div>
      );
    };

export default UserComponent