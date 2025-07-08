import React from 'react';
import { UserCheck, Plus, Search } from 'lucide-react';

const StakeholderManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <UserCheck className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Stakeholder Management</h1>
            <p className="text-gray-600">Manage beneficiaries, volunteers, and donors</p>
          </div>
        </div>
        <button className="btn btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Stakeholder
        </button>
      </div>

      <div className="card p-6">
        <div className="text-center py-12">
          <UserCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Stakeholder Management Module
          </h3>
          <p className="text-gray-500 mb-6">
            This module will handle beneficiaries, volunteers, and donors management.
            Features will include contact management, categorization, and tracking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakeholderManagement;