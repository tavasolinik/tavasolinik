import React, { useState } from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, Edit, Trash2, 
  Eye, UserPlus, Download, Upload, Users
} from 'lucide-react';
import { User, UserRole } from '../../types';
import UserList from './UserList';
import UserForm from './UserForm';
import UserDetail from './UserDetail';
import FilterPanel from './FilterPanel';

const UserManagement: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'create' | 'edit' | 'detail'>('list');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    role: '',
    status: '',
    department: ''
  });

  // Mock user data
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      email: 'admin@ngo.org',
      firstName: 'John',
      lastName: 'Doe',
      role: {
        id: 'admin',
        name: 'Admin',
        permissions: [],
        description: 'Full system access'
      },
      status: 'active',
      createdAt: '2023-01-01T00:00:00Z',
      lastLogin: '2024-01-15T10:30:00Z',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      phone: '+1-555-0123',
      department: 'Administration'
    },
    {
      id: '2',
      email: 'sarah.johnson@ngo.org',
      firstName: 'Sarah',
      lastName: 'Johnson',
      role: {
        id: 'project-manager',
        name: 'Project Manager',
        permissions: [],
        description: 'Manage projects and teams'
      },
      status: 'active',
      createdAt: '2023-02-15T00:00:00Z',
      lastLogin: '2024-01-14T16:45:00Z',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b147?w=32&h=32&fit=crop&crop=face',
      phone: '+1-555-0124',
      department: 'Programs'
    },
    {
      id: '3',
      email: 'mike.chen@ngo.org',
      firstName: 'Mike',
      lastName: 'Chen',
      role: {
        id: 'accountant',
        name: 'Accountant',
        permissions: [],
        description: 'Financial management'
      },
      status: 'active',
      createdAt: '2023-03-10T00:00:00Z',
      lastLogin: '2024-01-14T09:15:00Z',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      phone: '+1-555-0125',
      department: 'Finance'
    },
    {
      id: '4',
      email: 'lisa.wang@ngo.org',
      firstName: 'Lisa',
      lastName: 'Wang',
      role: {
        id: 'staff',
        name: 'Staff',
        permissions: [],
        description: 'General staff member'
      },
      status: 'inactive',
      createdAt: '2023-04-20T00:00:00Z',
      lastLogin: '2024-01-10T14:20:00Z',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      phone: '+1-555-0126',
      department: 'Programs'
    },
    {
      id: '5',
      email: 'alex.brown@ngo.org',
      firstName: 'Alex',
      lastName: 'Brown',
      role: {
        id: 'volunteer',
        name: 'Volunteer',
        permissions: [],
        description: 'Volunteer access'
      },
      status: 'pending',
      createdAt: '2024-01-10T00:00:00Z',
      phone: '+1-555-0127',
      department: 'Community'
    }
  ]);

  const handleCreateUser = () => {
    setCurrentView('create');
    setSelectedUser(null);
  };

  const handleEditUser = (user: User) => {
    setCurrentView('edit');
    setSelectedUser(user);
  };

  const handleViewUser = (user: User) => {
    setCurrentView('detail');
    setSelectedUser(user);
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleSaveUser = (userData: Partial<User>) => {
    if (currentView === 'create') {
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email!,
        firstName: userData.firstName!,
        lastName: userData.lastName!,
        role: userData.role!,
        status: userData.status || 'pending',
        createdAt: new Date().toISOString(),
        phone: userData.phone,
        department: userData.department
      };
      setUsers([...users, newUser]);
    } else if (currentView === 'edit' && selectedUser) {
      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, ...userData }
          : user
      ));
    }
    setCurrentView('list');
    setSelectedUser(null);
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = !searchTerm || 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = !selectedFilters.role || user.role.name === selectedFilters.role;
    const matchesStatus = !selectedFilters.status || user.status === selectedFilters.status;
    const matchesDepartment = !selectedFilters.department || user.department === selectedFilters.department;
    
    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  const renderHeader = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage users, roles, and permissions</p>
          </div>
        </div>
        
        {currentView === 'list' && (
          <div className="flex items-center space-x-3">
            <button className="btn btn-secondary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="btn btn-secondary">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </button>
            <button 
              onClick={handleCreateUser}
              className="btn btn-primary"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderSearchAndFilters = () => (
    currentView === 'list' && (
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`btn ${showFilters ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>
        
        {showFilters && (
          <FilterPanel
            filters={selectedFilters}
            onFiltersChange={setSelectedFilters}
          />
        )}
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>{filteredUsers.length} users found</span>
          <span>Total: {users.length} users</span>
        </div>
      </div>
    )
  );

  const renderContent = () => {
    switch (currentView) {
      case 'list':
        return (
          <UserList
            users={filteredUsers}
            onEdit={handleEditUser}
            onView={handleViewUser}
            onDelete={handleDeleteUser}
          />
        );
      case 'create':
      case 'edit':
        return (
          <UserForm
            user={selectedUser}
            onSave={handleSaveUser}
            onCancel={handleBackToList}
            isEdit={currentView === 'edit'}
          />
        );
      case 'detail':
        return (
          <UserDetail
            user={selectedUser!}
            onEdit={handleEditUser}
            onBack={handleBackToList}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {renderSearchAndFilters()}
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserManagement;