import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardCharts: React.FC = () => {
  // Mock data for donations over time
  const donationsData = [
    { month: 'Jan', amount: 15000, target: 20000 },
    { month: 'Feb', amount: 22000, target: 20000 },
    { month: 'Mar', amount: 18000, target: 20000 },
    { month: 'Apr', amount: 25000, target: 20000 },
    { month: 'May', amount: 30000, target: 20000 },
    { month: 'Jun', amount: 28000, target: 20000 },
    { month: 'Jul', amount: 35000, target: 20000 },
    { month: 'Aug', amount: 32000, target: 20000 },
  ];

  // Mock data for project progress
  const projectProgressData = [
    { name: 'Education Program', progress: 85, budget: 45000, spent: 38250 },
    { name: 'Healthcare Initiative', progress: 65, budget: 60000, spent: 39000 },
    { name: 'Clean Water Project', progress: 40, budget: 30000, spent: 12000 },
    { name: 'Community Development', progress: 90, budget: 25000, spent: 22500 },
    { name: 'Skills Training', progress: 75, budget: 20000, spent: 15000 },
  ];

  // Mock data for budget allocation
  const budgetData = [
    { name: 'Programs', value: 65, amount: 130000 },
    { name: 'Operations', value: 20, amount: 40000 },
    { name: 'Administration', value: 10, amount: 20000 },
    { name: 'Emergency Fund', value: 5, amount: 10000 },
  ];

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-6">
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donations Over Time */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Donations Over Time</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Received</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-gray-600">Target</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={donationsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
              />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#94a3b8" 
                strokeDasharray="5 5"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Allocation */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget Allocation</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, 'Percentage']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {budgetData.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">${item.amount.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Progress */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectProgressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'progress') return [`${value}%`, 'Progress'];
                return [`$${value.toLocaleString()}`, name === 'budget' ? 'Budget' : 'Spent'];
              }}
            />
            <Bar 
              dataKey="progress" 
              fill="#10b981" 
              radius={[4, 4, 0, 0]}
              name="progress"
            />
          </BarChart>
        </ResponsiveContainer>
        
        {/* Project Details */}
        <div className="mt-6 space-y-4">
          {projectProgressData.map((project, index) => (
            <div key={project.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{project.name}</h4>
                <div className="flex items-center mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
                </div>
              </div>
              <div className="text-right ml-6">
                <p className="text-sm text-gray-600">
                  ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  {Math.round((project.spent / project.budget) * 100)}% of budget
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;