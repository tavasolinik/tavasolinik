import React from 'react';
import { User } from '../../types';
import KPICards from './KPICards';
import DashboardCharts from './DashboardCharts';
import QuickAccessTiles from './QuickAccessTiles';
import NotificationPanel from './NotificationPanel';
import ActivityLog from './ActivityLog';
import RoleBasedWidgets from './RoleBasedWidgets';

interface DashboardProps {
  currentUser: User;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {currentUser.firstName}!
        </h1>
        <p className="text-primary-100">
          Here's what's happening with your NGO today.
        </p>
      </div>

      {/* KPI Summary Cards */}
      <KPICards currentUser={currentUser} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Charts Section */}
          <DashboardCharts />
          
          {/* Quick Access Tiles */}
          <QuickAccessTiles currentUser={currentUser} />
          
          {/* Role-based Widgets */}
          <RoleBasedWidgets currentUser={currentUser} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notifications */}
          <NotificationPanel currentUser={currentUser} />
          
          {/* Activity Log */}
          <ActivityLog currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;