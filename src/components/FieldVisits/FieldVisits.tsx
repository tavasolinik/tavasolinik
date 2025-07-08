import React from 'react';
import { MapPin } from 'lucide-react';

const FieldVisits: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <MapPin className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Field Visits</h1>
          <p className="text-gray-600">Log and track field visit activities</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Field Visits Module</h3>
          <p className="text-gray-500">Track field visits and document findings.</p>
        </div>
      </div>
    </div>
  );
};

export default FieldVisits;