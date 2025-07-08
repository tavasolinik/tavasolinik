import React from 'react';
import { Edit, ArrowLeft, Mail, Phone, Calendar, Shield, MapPin, Activity } from 'lucide-react';
import { User } from '../../types';

interface UserDetailProps {
  user: User;
  onEdit: (user: User) => void;
  onBack: () => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ user, onEdit, onBack }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: User['status']) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Users
          </button>
          <button
            onClick={() => onEdit(user)}
            className="btn btn-primary"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit User
          </button>
        </div>

        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=3b82f6&color=fff&size=120`}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {user.firstName} {user.lastName}
              </h1>
              {getStatusBadge(user.status)}
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span className="font-medium">{user.role.name}</span>
                <span className="mx-2">•</span>
                <span>{user.role.description}</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${user.email}`} className="text-primary-600 hover:text-primary-700">
                  {user.email}
                </a>
              </div>
              
              {user.phone && (
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${user.phone}`} className="text-primary-600 hover:text-primary-700">
                    {user.phone}
                  </a>
                </div>
              )}
              
              {user.department && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{user.department}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Information */}
        <div className="lg:col-span-2">
          <div className="card p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">User Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Personal Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-gray-900">{user.firstName} {user.lastName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  {user.phone && (
                    <div>
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <p className="text-gray-900">{user.phone}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Role & Access</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <p className="text-gray-900">{user.role.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Department</label>
                    <p className="text-gray-900">{user.department || 'Not assigned'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <div className="mt-1">
                      {getStatusBadge(user.status)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Permissions */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Permissions</h2>
            <p className="text-gray-600 mb-4">
              Based on the <strong>{user.role.name}</strong> role:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Allowed Actions</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {user.role.name === 'Admin' && (
                    <>
                      <li>• Full system access</li>
                      <li>• User management</li>
                      <li>• All modules access</li>
                      <li>• System configuration</li>
                    </>
                  )}
                  {user.role.name === 'Project Manager' && (
                    <>
                      <li>• Project management</li>
                      <li>• Team management</li>
                      <li>• Budget tracking</li>
                      <li>• Report generation</li>
                    </>
                  )}
                  {user.role.name === 'Staff' && (
                    <>
                      <li>• View assigned projects</li>
                      <li>• Update task status</li>
                      <li>• Access documents</li>
                      <li>• Submit reports</li>
                    </>
                  )}
                  {user.role.name === 'Volunteer' && (
                    <>
                      <li>• View assignments</li>
                      <li>• Access training</li>
                      <li>• Submit forms</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Module Access</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Dashboard</li>
                  {user.role.name === 'Admin' && <li>• User Management</li>}
                  <li>• Stakeholder Management</li>
                  <li>• Projects & Programs</li>
                  {(user.role.name === 'Admin' || user.role.name === 'Accountant') && <li>• Finance & Accounting</li>}
                  <li>• Reports & Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Activity & Stats */}
        <div className="space-y-6">
          {/* Account Status */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Member Since</label>
                <div className="flex items-center mt-1">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-900">{formatDate(user.createdAt).split(' at')[0]}</span>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Last Login</label>
                <div className="flex items-center mt-1">
                  <Activity className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-900">
                    {user.lastLogin ? formatDate(user.lastLogin) : 'Never'}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Account Status</label>
                <div className="mt-1">
                  {getStatusBadge(user.status)}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Projects Assigned</span>
                <span className="font-medium text-gray-900">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tasks Completed</span>
                <span className="font-medium text-gray-900">28</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reports Submitted</span>
                <span className="font-medium text-gray-900">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Training Completed</span>
                <span className="font-medium text-gray-900">6</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-gray-900">Logged in</div>
                <div className="text-gray-500">2 hours ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">Updated profile</div>
                <div className="text-gray-500">1 day ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">Completed training</div>
                <div className="text-gray-500">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;