import React from 'react';
import { Calendar } from 'lucide-react';

const Meetings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Calendar className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meetings & Documentation</h1>
          <p className="text-gray-600">Schedule meetings and manage documents</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Meetings Module</h3>
          <p className="text-gray-500">Schedule and manage meetings with documentation.</p>
        </div>
      </div>
    </div>
  );
};

export default Meetings;