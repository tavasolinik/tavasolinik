import React from 'react';
import { MessageSquare } from 'lucide-react';

const Communication: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <MessageSquare className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Communication</h1>
          <p className="text-gray-600">SMS and email campaigns</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Communication Module</h3>
          <p className="text-gray-500">Send SMS and email campaigns to stakeholders.</p>
        </div>
      </div>
    </div>
  );
};

export default Communication;