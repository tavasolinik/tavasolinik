import React from 'react';
import { Activity, User as UserIcon, FileText, DollarSign, Calendar, Plus, Edit, Trash2 } from 'lucide-react';
import { User, ActivityLog as ActivityLogType } from '../../types';

interface ActivityLogProps {
  currentUser: User;
}

const ActivityLog: React.FC<ActivityLogProps> = ({ currentUser }) => {
  const activities: ActivityLogType[] = [
    {
      id: '1',
      action: 'Created new project "Clean Water Initiative"',
      module: 'Projects',
      userId: currentUser.id,
      timestamp: '2024-01-15T10:30:00Z',
      details: { projectId: 'proj-123', category: 'Infrastructure' }
    },
    {
      id: '2',
      action: 'Updated budget for Education Program',
      module: 'Finance',
      userId: currentUser.id,
      timestamp: '2024-01-15T09:15:00Z',
      details: { amount: 5000, type: 'increase' }
    },
    {
      id: '3',
      action: 'Scheduled team meeting for project review',
      module: 'Meetings',
      userId: currentUser.id,
      timestamp: '2024-01-15T08:45:00Z',
      details: { meetingId: 'meet-456', date: '2024-01-16' }
    },
    {
      id: '4',
      action: 'Added new beneficiary Sarah Johnson',
      module: 'Stakeholders',
      userId: currentUser.id,
      timestamp: '2024-01-14T16:20:00Z',
      details: { stakeholderId: 'ben-789', type: 'beneficiary' }
    },
    {
      id: '5',
      action: 'Generated monthly financial report',
      module: 'Reports',
      userId: currentUser.id,
      timestamp: '2024-01-14T14:10:00Z',
      details: { reportType: 'financial', period: 'monthly' }
    },
    {
      id: '6',
      action: 'Updated user permissions for John Smith',
      module: 'Users',
      userId: currentUser.id,
      timestamp: '2024-01-14T11:30:00Z',
      details: { targetUserId: 'user-321', role: 'Project Manager' }
    }
  ];

  const getActivityIcon = (module: string) => {
    switch (module) {
      case 'Projects':
        return <FileText className="w-4 h-4 text-purple-500" />;
      case 'Finance':
        return <DollarSign className="w-4 h-4 text-yellow-500" />;
      case 'Meetings':
        return <Calendar className="w-4 h-4 text-blue-500" />;
      case 'Stakeholders':
        return <UserIcon className="w-4 h-4 text-green-500" />;
      case 'Reports':
        return <Activity className="w-4 h-4 text-indigo-500" />;
      case 'Users':
        return <UserIcon className="w-4 h-4 text-pink-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes('Created') || action.includes('Added')) {
      return <Plus className="w-3 h-3 text-green-600" />;
    } else if (action.includes('Updated') || action.includes('Scheduled')) {
      return <Edit className="w-3 h-3 text-blue-600" />;
    } else if (action.includes('Deleted')) {
      return <Trash2 className="w-3 h-3 text-red-600" />;
    }
    return null;
  };

  const formatTime = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const getModuleColor = (module: string) => {
    const colors: Record<string, string> = {
      Projects: 'bg-purple-100 text-purple-800',
      Finance: 'bg-yellow-100 text-yellow-800',
      Meetings: 'bg-blue-100 text-blue-800',
      Stakeholders: 'bg-green-100 text-green-800',
      Reports: 'bg-indigo-100 text-indigo-800',
      Users: 'bg-pink-100 text-pink-800',
    };
    return colors[module] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <span className="text-sm text-gray-500">Last 24 hours</span>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative">
            {/* Timeline line */}
            {index < activities.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-px bg-gray-200"></div>
            )}
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                {getActivityIcon(activity.module)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">
                    {activity.action}
                  </p>
                  {getActionIcon(activity.action)}
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getModuleColor(activity.module)}`}>
                    {activity.module}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatTime(activity.timestamp)}
                  </span>
                </div>
                
                {/* Activity details */}
                {activity.details && (
                  <div className="text-xs text-gray-600 bg-gray-50 rounded p-2 mt-2">
                    {Object.entries(activity.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span className="font-medium">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
          View full activity log
        </button>
      </div>
    </div>
  );
};

export default ActivityLog;