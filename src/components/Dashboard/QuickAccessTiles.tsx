import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, UserCheck, FolderOpen, DollarSign, BarChart3, 
  Calendar, MessageSquare, FileText, Folder, TrendingUp, 
  GraduationCap, MapPin, Plus, ArrowRight 
} from 'lucide-react';
import { User } from '../../types';

interface QuickAccessTilesProps {
  currentUser: User;
}

interface AccessTile {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  path: string;
  color: string;
  bgColor: string;
  roles: string[];
  actionText: string;
}

const QuickAccessTiles: React.FC<QuickAccessTilesProps> = ({ currentUser }) => {
  const tiles: AccessTile[] = [
    {
      id: 'users',
      title: 'User Management',
      description: 'Manage users, roles and permissions',
      icon: Users,
      path: '/users',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      roles: ['Admin', 'IT Manager'],
      actionText: 'Manage Users'
    },
    {
      id: 'stakeholders',
      title: 'Stakeholders',
      description: 'Beneficiaries, volunteers, and donors',
      icon: UserCheck,
      path: '/stakeholders',
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      roles: ['Admin', 'Project Manager', 'Staff'],
      actionText: 'View Stakeholders'
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Create and manage projects & programs',
      icon: FolderOpen,
      path: '/projects',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      roles: ['Admin', 'Project Manager', 'Staff', 'Analyst'],
      actionText: 'Manage Projects'
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Budget tracking and financial reports',
      icon: DollarSign,
      path: '/finance',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 hover:bg-yellow-100',
      roles: ['Admin', 'Accountant', 'Project Manager', 'Analyst'],
      actionText: 'View Finances'
    },
    {
      id: 'reports',
      title: 'Reports',
      description: 'Analytics and performance reports',
      icon: BarChart3,
      path: '/reports',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100',
      roles: ['Admin', 'Project Manager', 'Accountant', 'Analyst', 'External Auditor'],
      actionText: 'View Reports'
    },
    {
      id: 'meetings',
      title: 'Meetings',
      description: 'Schedule meetings and manage docs',
      icon: Calendar,
      path: '/meetings',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      roles: ['Admin', 'Project Manager', 'Staff'],
      actionText: 'Schedule Meeting'
    },
    {
      id: 'communication',
      title: 'Communication',
      description: 'Send SMS and email campaigns',
      icon: MessageSquare,
      path: '/communication',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50 hover:bg-teal-100',
      roles: ['Admin', 'Project Manager', 'Staff'],
      actionText: 'Send Message'
    },
    {
      id: 'forms',
      title: 'Form Builder',
      description: 'Create custom forms and surveys',
      icon: FileText,
      path: '/forms',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      roles: ['Admin', 'Project Manager', 'Staff'],
      actionText: 'Create Form'
    },
    {
      id: 'documents',
      title: 'Documents',
      description: 'File storage and document management',
      icon: Folder,
      path: '/documents',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 hover:bg-gray-100',
      roles: ['Admin', 'Project Manager', 'Staff', 'Accountant'],
      actionText: 'Upload File'
    },
    {
      id: 'training',
      title: 'Training',
      description: 'Education programs and certifications',
      icon: GraduationCap,
      path: '/training',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 hover:bg-emerald-100',
      roles: ['Admin', 'Project Manager', 'Staff', 'Volunteer'],
      actionText: 'View Trainings'
    },
    {
      id: 'field-visits',
      title: 'Field Visits',
      description: 'Log and track field visit activities',
      icon: MapPin,
      path: '/field-visits',
      color: 'text-red-600',
      bgColor: 'bg-red-50 hover:bg-red-100',
      roles: ['Admin', 'Project Manager', 'Staff'],
      actionText: 'Log Visit'
    },
    {
      id: 'performance',
      title: 'Performance',
      description: 'KPIs and performance metrics',
      icon: TrendingUp,
      path: '/performance',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 hover:bg-cyan-100',
      roles: ['Admin', 'Project Manager', 'Analyst'],
      actionText: 'View KPIs'
    }
  ];

  const hasAccess = (tile: AccessTile): boolean => {
    return tile.roles.includes(currentUser.role.name);
  };

  const filteredTiles = tiles.filter(hasAccess);

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Quick Access</h3>
        <span className="text-sm text-gray-500">
          {filteredTiles.length} modules available
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTiles.map((tile) => {
          const IconComponent = tile.icon;
          return (
            <Link
              key={tile.id}
              to={tile.path}
              className={`group p-4 rounded-lg border border-gray-200 transition-all duration-200 ${tile.bgColor}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${tile.color} bg-white`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              <h4 className="font-medium text-gray-900 mb-1">{tile.title}</h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tile.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${tile.color}`}>
                  {tile.actionText}
                </span>
                <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Pending Tasks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">5</p>
            <p className="text-sm text-gray-600">Upcoming Meetings</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-600">New Messages</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600">Active Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessTiles;