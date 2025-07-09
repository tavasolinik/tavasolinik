import React from 'react';
import {
  Users,
  FolderKanban,
  HeartHandshake,
  FileText,
  TrendingUp,
  UserPlus,
  FileCheck,
  CreditCard,
  Calendar
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User } from '../../types';
import { fa } from '../../translations/fa';

interface DashboardProps {
  currentUser: User;
}

// Dummy data for charts
const monthlyDonationsData = [
  { month: fa.months.jan, amount: 12500000 },
  { month: fa.months.feb, amount: 18200000 },
  { month: fa.months.mar, amount: 15800000 },
  { month: fa.months.apr, amount: 22100000 },
  { month: fa.months.may, amount: 19600000 },
  { month: fa.months.jun, amount: 25300000 },
];

// Dummy activity data
const recentActivities = [
  {
    id: 1,
    type: 'user',
    icon: UserPlus,
    title: 'احمد محمدی',
    action: fa.registered,
    time: '۵ دقیقه پیش',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    id: 2,
    type: 'form',
    icon: FileCheck,
    title: 'فرم ثبت‌نام داوطلبان',
    action: fa.submitted,
    time: '۱۵ دقیقه پیش',
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 3,
    type: 'payment',
    icon: CreditCard,
    title: 'کمک مالی ۵۰۰,۰۰۰ تومان',
    action: fa.made,
    time: '۳۰ دقیقه پیش',
    color: 'text-orange-600 bg-orange-100'
  },
  {
    id: 4,
    type: 'project',
    icon: Calendar,
    title: 'پروژه کمک به سیل‌زدگان',
    action: fa.updated,
    time: '۱ ساعت پیش',
    color: 'text-purple-600 bg-purple-100'
  }
];

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  // Dummy statistics
  const stats = [
    {
      title: fa.totalUsers,
      value: '۱,۲۴۳',
      icon: Users,
      change: '+۸%',
      color: 'bg-blue-500'
    },
    {
      title: fa.activeProjects,
      value: '۴۲',
      icon: FolderKanban,
      change: '+۱۲%',
      color: 'bg-green-500'
    },
    {
      title: fa.totalDonations,
      value: '۴۵۰M تومان',
      icon: HeartHandshake,
      change: '+۱۵%',
      color: 'bg-orange-500'
    },
    {
      title: fa.monthlyReports,
      value: '۲۸',
      icon: FileText,
      change: '+۳%',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto p-6 space-y-6" style={{ fontFamily: 'Vazirmatn, IranYekan, Tahoma, Arial, sans-serif' }}>
        {/* Welcome Section */}
        <div className="bg-gradient-to-l from-primary-600 to-primary-700 rounded-lg p-6 text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-2">
            {fa.welcomeBack}، {currentUser.firstName}!
          </h1>
          <p className="text-primary-100 text-lg">
            {fa.todayActivity}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                    <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charts Section - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly Donations Chart */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">{fa.monthlyDonations}</h2>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  {fa.viewAll}
                </button>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyDonationsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 12, fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                    />
                    <Tooltip
                      formatter={(value: number) => [`${value.toLocaleString('fa-IR')} ${fa.currency}`, fa.donationAmount]}
                      labelStyle={{ fontFamily: 'Vazirmatn, Arial, sans-serif' }}
                      contentStyle={{
                        fontFamily: 'Vazirmatn, Arial, sans-serif',
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar
                      dataKey="amount"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                      name={fa.donationAmount}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Activity Sidebar */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">{fa.recentActivity}</h2>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                {fa.viewAll}
              </button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-reverse space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                  <div className={`${activity.color} p-2 rounded-lg flex-shrink-0`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg ml-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">کاربران آنلاین</p>
                <p className="text-2xl font-bold text-gray-900">۸۷</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg ml-4">
                <HeartHandshake className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">کمک‌های امروز</p>
                <p className="text-2xl font-bold text-gray-900">۱۲</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg ml-4">
                <FolderKanban className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">پروژه‌های در حال انجام</p>
                <p className="text-2xl font-bold text-gray-900">۱۵</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;