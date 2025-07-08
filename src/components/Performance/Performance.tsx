import React from 'react';
import { TrendingUp } from 'lucide-react';

const Performance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <TrendingUp className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance KPIs</h1>
          <p className="text-gray-600">Track key performance indicators</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Performance Module</h3>
          <p className="text-gray-500">Monitor and track organizational KPIs.</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;