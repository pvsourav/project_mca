import React from 'react';
import { Check } from 'lucide-react';

const Modal = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">User Added Successfully</h2>
        
        <div className="w-full bg-blue-100 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full p-1 mr-3">
              <Check className="text-white" size={20} />
            </div>
            <div>
              <p className="text-blue-500 font-semibold text-lg">Success</p>
              <p className="text-blue-500">User added successfully</p>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;