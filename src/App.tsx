import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import UserManagement from './components/UserManagement/UserManagement';
import StakeholderManagement from './components/StakeholderManagement/StakeholderManagement';
import ProjectManagement from './components/ProjectManagement/ProjectManagement';
import FinanceManagement from './components/FinanceManagement/FinanceManagement';
import Reports from './components/Reports/Reports';
import Meetings from './components/Meetings/Meetings';
import Communication from './components/Communication/Communication';
import FormBuilder from './components/FormBuilder/FormBuilder';
import Documents from './components/Documents/Documents';
import Performance from './components/Performance/Performance';
import Training from './components/Training/Training';
import FieldVisits from './components/FieldVisits/FieldVisits';
import { User } from './types';

// Mock current user for demo purposes
const mockCurrentUser: User = {
  id: '1',
  email: 'admin@ngo.org',
  firstName: 'احمد',
  lastName: 'محمدی',
  role: {
    id: 'admin',
    name: 'Admin',
    permissions: [],
    description: 'Full system access'
  },
  status: 'active',
  createdAt: '2023-01-01T00:00:00Z',
  lastLogin: '2024-01-15T10:30:00Z',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
};

function App() {
  const [currentUser] = useState<User>(mockCurrentUser);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout currentUser={currentUser}>
          <Routes>
            <Route path="/" element={<Dashboard currentUser={currentUser} />} />
            <Route path="/dashboard" element={<Dashboard currentUser={currentUser} />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/stakeholders" element={<StakeholderManagement />} />
            <Route path="/projects" element={<ProjectManagement />} />
            <Route path="/finance" element={<FinanceManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/forms" element={<FormBuilder />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/training" element={<Training />} />
            <Route path="/field-visits" element={<FieldVisits />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;