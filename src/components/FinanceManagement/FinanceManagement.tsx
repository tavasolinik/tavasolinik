import React from 'react';
import { DollarSign, Plus } from 'lucide-react';

const FinanceManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <DollarSign className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Finance & Accounting</h1>
            <p className="text-gray-600">Budget tracking, expense management, and financial reports</p>
          </div>
        </div>
        <button className="btn btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Transaction
        </button>
      </div>

      <div className="card p-6">
        <div className="text-center py-12">
          <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Finance & Accounting Module
          </h3>
          <p className="text-gray-500 mb-6">
            This module will handle budget management, expense tracking, donor contributions,
            financial reporting, and audit trails for complete financial oversight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinanceManagement;