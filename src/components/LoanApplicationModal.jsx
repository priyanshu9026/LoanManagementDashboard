// LoanApplicationModal.jsx
import React from 'react';

const LoanApplicationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-4xl p-10 rounded-lg relative shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">APPLY FOR A LOAN</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name as it appears on bank account
            </label>
            <input placeholder="Full name as it appears on bank account" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How much do you need?
            </label>
            <input placeholder="How much do you need?" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan tenure (in months)
            </label>
            <input placeholder="Loan tenure (in months)" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment status
            </label>
            <input placeholder="Employment status" className="border p-2 rounded w-full" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for loan
            </label>
            <textarea placeholder="Reason for loan" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment address
            </label>
            <input placeholder="Employment address" className="border p-2 rounded w-full" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employment address
            </label>
            <input placeholder="Employment address" className="border p-2 rounded w-full" />
          </div>
        </div>

        {/* Dummy Chart Placeholder */}
        <div className="my-6">
          <p className="text-gray-600 text-sm mb-2">Chart</p>
          <div className="w-full h-32 bg-gray-100 flex items-center justify-center text-gray-400">
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
          <button className="bg-green-700 text-white px-6 py-2 rounded">Submit</button>
          <button onClick={onClose} className="ml-4 text-red-500 font-semibold">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationModal;
