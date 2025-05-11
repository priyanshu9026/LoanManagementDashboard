// LoanApplicationModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoanApplicationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    tenure: '',
    employmentStatus: '',
    reason: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/loans/apply', formData);
      alert('✅ Loan Applied Successfully!');
      console.log(res.data);
    } catch (error) {
      alert('❌ Failed to Apply');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-4xl p-6 sm:p-10 rounded-lg relative shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">APPLY FOR A LOAN</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name as it appears on bank account
              </label>
              <input onChange={handleChange} name="fullName" placeholder="Full name as it appears on bank account" className="border p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How much do you need?
              </label>
              <input onChange={handleChange} name="amount" placeholder="How much do you need?" className="border p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan tenure (in months)
              </label>
              <input onChange={handleChange} name="tenure" placeholder="Loan tenure (in months)" className="border p-2 rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employment status
              </label>
              <input onChange={handleChange} name="employmentStatus" placeholder="Employment status" className="border p-2 rounded w-full" />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for loan
              </label>
              <textarea onChange={handleChange} name="reason" placeholder="Reason for loan" className="border p-2 rounded w-full" />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employment address
              </label>
              <input onChange={handleChange} name="address" placeholder="Employment address" className="border p-2 rounded w-full" />
            </div>
          </div>

          {/* Dummy Chart Placeholder */}
          <div className="my-4 sm:my-6">
            <p className="text-gray-600 text-sm mb-2">Chart</p>
            <div className="w-full h-24 sm:h-32 bg-gray-100 flex items-center justify-center text-gray-400">
              (Chart Placeholder)
            </div>
          </div>

          {/* Consent and Submit */}
          <div className="flex items-center gap-2 my-4">
            <input type="checkbox" />
            <p className="text-sm">
              I have read the important information and accept that by completing the application I will be bound by the terms.
            </p>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-green-700 text-white px-4 sm:px-6 py-2 rounded">Submit</button>
            <button onClick={onClose} className="ml-4 text-red-500 font-semibold">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoanApplicationModal;
