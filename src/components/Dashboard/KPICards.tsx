import React from 'react';
import { Users, FolderOpen, DollarSign, GraduationCap, TrendingUp, TrendingDown } from 'lucide-react';
import { User } from '../../types';

interface KPICardsProps {
  currentUser: User;
}

interface KPICard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<any>;
  color: string;
  roles: string[];
}

const KPICards: React.FC<KPICardsProps> = ({ currentUser }) => {
  const kpiData: KPICard[] = [
    {
      title: 'Total Users',
      value: '247',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500',
      roles: ['Admin', 'IT Manager', 'Project Manager']
    },
    {
      title: 'Active Projects',
      value: '18',
      change: '+3',
      changeType: 'positive',
      icon: FolderOpen,
      color: 'bg-green-500',
      roles: ['Admin', 'Project Manager', 'Staff', 'Analyst']
    },
    {
      title: 'Budget Used',
      value: '$142,300',
      change: '68%',
      changeType: 'neutral',
      icon: DollarSign,
      color: 'bg-yellow-500',
      roles: ['Admin', 'Accountant', 'Project Manager', 'Analyst']
    },
    {
      title: 'Completed Trainings',
      value: '89',
      change: '+15%',
      changeType: 'positive',
      icon: GraduationCap,
      color: 'bg-purple-500',
      roles: ['Admin', 'Project Manager', 'Staff', 'Volunteer']
    },
    {
      title: 'Beneficiaries Served',
      value: '1,284',
      change: '+8%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-indigo-500',
      roles: ['Admin', 'Project Manager', 'Staff', 'Analyst']
    },
    {
      title: 'Donations This Month',
      value: '$45,200',
      change: '-5%',
      changeType: 'negative',
      icon: DollarSign,
      color: 'bg-pink-500',
      roles: ['Admin', 'Accountant', 'Project Manager']
    }
  ];

  const hasAccess = (card: KPICard): boolean => {
    return card.roles.includes(currentUser.role.name);
  };

  const filteredKPIs = kpiData.filter(hasAccess);

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredKPIs.map((kpi, index) => {
        const IconComponent = kpi.icon;
        return (
          <div key={index} className="card p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</p>
                <div className="flex items-center space-x-2">
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  {kpi.change && (
                    <div className={`flex items-center space-x-1 ${getChangeColor(kpi.changeType)}`}>
                      {getChangeIcon(kpi.changeType)}
                      <span className="text-sm font-medium">{kpi.change}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`p-3 rounded-lg ${kpi.color}`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Progress bar for budget */}
            {kpi.title === 'Budget Used' && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Used</span>
                  <span>$210,000 Total</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;