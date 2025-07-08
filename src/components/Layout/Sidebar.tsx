import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, UserCheck, FolderOpen, DollarSign, BarChart3, 
  Calendar, MessageSquare, FileText, Folder, TrendingUp, 
  GraduationCap, MapPin, X, ChevronDown, ChevronRight 
} from 'lucide-react';
import { User, MenuItem } from '../../types';

interface SidebarProps {
  currentUser: User;
  onClose: () => void;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'Home', path: '/dashboard', roles: ['Admin', 'IT Manager', 'Project Manager', 'Staff', 'Volunteer', 'Accountant', 'Analyst', 'External Auditor'] },
  { id: 'users', label: 'User Management', icon: 'Users', path: '/users', roles: ['Admin', 'IT Manager'] },
  { id: 'stakeholders', label: 'Stakeholders', icon: 'UserCheck', path: '/stakeholders', roles: ['Admin', 'Project Manager', 'Staff'] },
  { id: 'projects', label: 'Projects & Programs', icon: 'FolderOpen', path: '/projects', roles: ['Admin', 'Project Manager', 'Staff', 'Analyst'] },
  { id: 'finance', label: 'Finance & Accounting', icon: 'DollarSign', path: '/finance', roles: ['Admin', 'Accountant', 'Project Manager', 'Analyst'] },
  { id: 'reports', label: 'Reports & Analytics', icon: 'BarChart3', path: '/reports', roles: ['Admin', 'Project Manager', 'Accountant', 'Analyst', 'External Auditor'] },
  { id: 'meetings', label: 'Meetings & Docs', icon: 'Calendar', path: '/meetings', roles: ['Admin', 'Project Manager', 'Staff'] },
  { id: 'communication', label: 'Communication', icon: 'MessageSquare', path: '/communication', roles: ['Admin', 'Project Manager', 'Staff'] },
  { id: 'forms', label: 'Form Builder', icon: 'FileText', path: '/forms', roles: ['Admin', 'Project Manager', 'Staff'] },
  { id: 'documents', label: 'Document Management', icon: 'Folder', path: '/documents', roles: ['Admin', 'Project Manager', 'Staff', 'Accountant'] },
  { id: 'performance', label: 'Performance KPIs', icon: 'TrendingUp', path: '/performance', roles: ['Admin', 'Project Manager', 'Analyst'] },
  { id: 'training', label: 'Training & Education', icon: 'GraduationCap', path: '/training', roles: ['Admin', 'Project Manager', 'Staff', 'Volunteer'] },
  { id: 'field-visits', label: 'Field Visits', icon: 'MapPin', path: '/field-visits', roles: ['Admin', 'Project Manager', 'Staff'] },
];

const iconMap: Record<string, React.ComponentType<any>> = {
  Home, Users, UserCheck, FolderOpen, DollarSign, BarChart3,
  Calendar, MessageSquare, FileText, Folder, TrendingUp,
  GraduationCap, MapPin
};

const Sidebar: React.FC<SidebarProps> = ({ currentUser, onClose }) => {
  const location = useLocation();

  const hasAccess = (item: MenuItem): boolean => {
    return item.roles.includes(currentUser.role.name);
  };

  const filteredMenuItems = menuItems.filter(hasAccess);

  const renderMenuItem = (item: MenuItem) => {
    const IconComponent = iconMap[item.icon];
    const isActive = location.pathname === item.path;

    return (
      <Link
        key={item.id}
        to={item.path}
        onClick={onClose}
        className={`sidebar-link ${isActive ? 'active' : ''}`}
      >
        <IconComponent className="w-5 h-5 mr-3" />
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NGO</span>
          </div>
          <span className="ml-2 font-semibold text-gray-900">ERP System</span>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto custom-scrollbar py-4">
        <div className="px-2 space-y-1">
          {filteredMenuItems.map(renderMenuItem)}
        </div>
      </nav>

      {/* User Info */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <img
            src={currentUser.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'}
            alt={`${currentUser.firstName} ${currentUser.lastName}`}
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p className="text-xs text-gray-500">{currentUser.role.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;