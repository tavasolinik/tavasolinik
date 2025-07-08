import React from 'react';
import { FileText } from 'lucide-react';

const FormBuilder: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FileText className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Form Builder</h1>
          <p className="text-gray-600">Create custom forms and surveys</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Form Builder Module</h3>
          <p className="text-gray-500">Create and manage custom forms and surveys.</p>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;