import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/loans')
      .then(res => setLoans(res.data))
      .catch(err => console.error(err));
  }, []);

  const getStatusBadge = (status) => {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold text-white';
    if (status === 'Approved') return `${base} bg-green-600`;
    if (status === 'Rejected') return `${base} bg-red-500`;
    return `${base} bg-yellow-500`;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <aside className="w-60 bg-green-900 text-white min-h-screen p-4 space-y-6">
        <h1 className="text-2xl font-bold">CREDIT APP</h1>
        <nav className="space-y-2">
          {['Dashboard', 'Borrowers', 'Loans', 'Repayments', 'Loan Parameters', 'Accounting', 'Reports', 'Collateral', 'Savings', 'Settings'].map(item => (
            <div key={item} className="hover:bg-green-800 px-3 py-2 rounded cursor-pointer">{item}</div>
          ))}
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Card title="50" subtitle="Loans" />
          <Card title="100" subtitle="Borrowers" />
          <Card title="550,000" subtitle="Cash Disbursed" />
          <Card title="450,000" subtitle="Savings" />
          <Card title="30" subtitle="Repaid Loans" />
          <Card title="1,000,000" subtitle="Cash Received" />
        </div>

        {/* Loans Table */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Applied Loans</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left text-sm uppercase">
                <th className="p-2">Customer Name</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Tenure</th>
                <th className="p-2">Reason</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan._id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{loan.fullName}</td>
                  <td className="p-2">₹{loan.amountNeeded}</td>
                  <td className="p-2">{loan.loanTenure} months</td>
                  <td className="p-2">{loan.reasonForLoan}</td>
                  <td className="p-2">
                    <span className={getStatusBadge(loan.status)}>{loan.status}</span>
                  </td>
                  <td className="p-2 space-x-2">
                    <button onClick={() => handleAction(loan._id, 'Approved')} className="bg-green-600 text-white px-2 py-1 rounded">Approve</button>
                    <button onClick={() => handleAction(loan._id, 'Rejected')} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
                    <button onClick={() => handleAction(loan._id, 'Pending')} className="bg-yellow-500 text-white px-2 py-1 rounded">Pending</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, subtitle }) => (
  <div className="bg-white shadow p-4 rounded-xl text-center">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
);

export default AdminDashboard;
