import React from 'react';
import { 
  AlertTriangle, Clock, Users, DollarSign, TrendingUp, 
  Calendar, BookOpen, MapPin, CheckCircle2, FileText 
} from 'lucide-react';
import { User } from '../../types';

interface RoleBasedWidgetsProps {
  currentUser: User;
}

const RoleBasedWidgets: React.FC<RoleBasedWidgetsProps> = ({ currentUser }) => {
  const renderAdminWidgets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* System Overview */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">System Overview</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Active Users</span>
            <span className="font-semibold text-green-600">247</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">System Health</span>
            <span className="flex items-center text-green-600">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Healthy
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Storage Used</span>
            <span className="font-semibold text-yellow-600">68%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Backup Status</span>
            <span className="text-green-600">Up to date</span>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <div>
              <p className="text-sm font-medium text-red-900">High CPU Usage</p>
              <p className="text-xs text-red-600">Server load at 85%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <Clock className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-yellow-900">Backup Pending</p>
              <p className="text-xs text-yellow-600">Scheduled for 2 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectManagerWidgets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Project Status */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">My Projects</h4>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-medium text-gray-900">Education Program</h5>
            <p className="text-sm text-gray-600">85% complete • On track</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-medium text-gray-900">Healthcare Initiative</h5>
            <p className="text-sm text-gray-600">65% complete • Needs attention</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-medium text-gray-900">Clean Water Project</h5>
            <p className="text-sm text-gray-600">40% complete • In progress</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Tasks Completed</span>
            <span className="font-semibold text-green-600">89%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">On-time Delivery</span>
            <span className="font-semibold text-green-600">92%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Team Satisfaction</span>
            <span className="font-semibold text-blue-600">4.2/5</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Budget Utilization</span>
            <span className="font-semibold text-yellow-600">76%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountantWidgets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Financial Summary */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Budget</span>
            <span className="font-semibold text-gray-900">$210,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Spent to Date</span>
            <span className="font-semibold text-red-600">$142,300</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Remaining</span>
            <span className="font-semibold text-green-600">$67,700</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">This Month</span>
            <span className="font-semibold text-blue-600">$18,500</span>
          </div>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Pending Approvals</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">Office Supplies</p>
              <p className="text-xs text-gray-600">$450 • Education Team</p>
            </div>
            <DollarSign className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">Travel Expenses</p>
              <p className="text-xs text-gray-600">$1,200 • Field Team</p>
            </div>
            <DollarSign className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderVolunteerWidgets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* My Assignments */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">My Assignments</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <BookOpen className="w-5 h-5 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Teaching Assignment</p>
              <p className="text-xs text-gray-600">Community Center • 2 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <Users className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Volunteer Orientation</p>
              <p className="text-xs text-gray-600">Tomorrow • 10 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Progress */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Training Progress</h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Child Protection</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>First Aid Certification</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDefaultWidgets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Quick Stats */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">18</p>
            <p className="text-sm text-gray-600">Active Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">1,284</p>
            <p className="text-sm text-gray-600">Beneficiaries</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">89</p>
            <p className="text-sm text-gray-600">Trainings</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">247</p>
            <p className="text-sm text-gray-600">Volunteers</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Team Meeting</p>
              <p className="text-xs text-gray-600">Tomorrow • 10:00 AM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Field Visit</p>
              <p className="text-xs text-gray-600">Friday • 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWidgetsByRole = () => {
    switch (currentUser.role.name) {
      case 'Admin':
      case 'IT Manager':
        return renderAdminWidgets();
      case 'Project Manager':
        return renderProjectManagerWidgets();
      case 'Accountant':
        return renderAccountantWidgets();
      case 'Volunteer':
        return renderVolunteerWidgets();
      default:
        return renderDefaultWidgets();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {currentUser.role.name} Dashboard
        </h3>
        <span className="text-sm text-gray-500">
          Personalized for your role
        </span>
      </div>
      {renderWidgetsByRole()}
    </div>
  );
};

export default RoleBasedWidgets;