import React from 'react';
import { BarChart3 } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <BarChart3 className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Performance reports and data analytics</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Reports & Analytics Module</h3>
          <p className="text-gray-500">Generate comprehensive reports and analytics dashboards.</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;