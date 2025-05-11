import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminComponent = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/loans/get')
      .then(res => setLoans(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAction = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/loans/${id}`, { status });
      setLoans(loans.map(loan => loan._id === id ? { ...loan, status } : loan));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loans.map((loan) => (
        <div key={loan._id} className="border rounded-xl shadow-md p-4 bg-white">
          <h2 className="text-xl font-semibold">{loan.fullName}</h2>
          <p>💸 Amount: ₹{loan.amountNeeded}</p>
          <p>🕒 Tenure: {loan.loanTenure} months</p>
          <p>📄 Reason: {loan.reasonForLoan}</p>
          <p>Status: 
            <span className={`ml-2 px-2 py-1 rounded text-white 
              ${loan.status === 'Approved' ? 'bg-green-600' : 
                loan.status === 'Rejected' ? 'bg-red-500' : 'bg-yellow-500'}`}>
              {loan.status}
            </span>
          </p>

          <div className="mt-4 flex gap-2">
            <button onClick={() => handleAction(loan._id, 'Approved')} className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
            <button onClick={() => handleAction(loan._id, 'Rejected')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
            <button onClick={() => handleAction(loan._id, 'Pending')} className="bg-yellow-500 text-white px-3 py-1 rounded">Pending</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminComponent;