import React from 'react';
import { Folder } from 'lucide-react';

const Documents: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Folder className="w-8 h-8 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Document Management</h1>
          <p className="text-gray-600">File storage and document management</p>
        </div>
      </div>
      <div className="card p-6">
        <div className="text-center py-12">
          <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Document Management Module</h3>
          <p className="text-gray-500">Store and organize documents and files.</p>
        </div>
      </div>
    </div>
  );
};

export default Documents;