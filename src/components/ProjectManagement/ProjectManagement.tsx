import React from 'react';
import { FolderOpen, Plus } from 'lucide-react';

const ProjectManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FolderOpen className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects & Programs</h1>
            <p className="text-gray-600">Manage projects, milestones, and team assignments</p>
          </div>
        </div>
        <button className="btn btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </button>
      </div>

      <div className="card p-6">
        <div className="text-center py-12">
          <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Project Management Module
          </h3>
          <p className="text-gray-500 mb-6">
            This module will handle project creation, milestone tracking, team assignments,
            and progress monitoring with Gantt charts and task management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;