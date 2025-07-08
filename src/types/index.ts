// User and Role Management Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  lastLogin?: string;
  avatar?: string;
  phone?: string;
  department?: string;
}

export interface UserRole {
  id: string;
  name: 'Admin' | 'IT Manager' | 'Project Manager' | 'Staff' | 'Volunteer' | 'Accountant' | 'Analyst' | 'External Auditor';
  permissions: Permission[];
  description: string;
}

export interface Permission {
  module: string;
  actions: ('create' | 'read' | 'update' | 'delete')[];
}

// Stakeholder Management Types
export interface Stakeholder {
  id: string;
  type: 'beneficiary' | 'volunteer' | 'donor';
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: Address;
  status: 'active' | 'inactive';
  notes?: string;
  createdAt: string;
  tags?: string[];
}

export interface Beneficiary extends Stakeholder {
  type: 'beneficiary';
  age?: number;
  gender?: 'male' | 'female' | 'other';
  needs: string[];
  programs: string[];
}

export interface Volunteer extends Stakeholder {
  type: 'volunteer';
  skills: string[];
  availability: string;
  assignments: string[];
}

export interface Donor extends Stakeholder {
  type: 'donor';
  donationType: 'individual' | 'corporate' | 'foundation';
  totalDonated: number;
  lastDonation?: string;
}

// Project and Program Types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold' | 'cancelled';
  startDate: string;
  endDate?: string;
  budget: number;
  spent: number;
  manager: string;
  team: string[];
  beneficiaries: string[];
  progress: number;
  milestones: Milestone[];
  location?: string;
  category: string;
}

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignee?: string;
}

// Finance Types
export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: string;
  projectId?: string;
  attachments?: string[];
  approvedBy?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Budget {
  id: string;
  name: string;
  totalAmount: number;
  spent: number;
  remaining: number;
  categories: BudgetCategory[];
  year: number;
  projectId?: string;
}

export interface BudgetCategory {
  name: string;
  allocated: number;
  spent: number;
}

// Meeting and Documentation Types
export interface Meeting {
  id: string;
  title: string;
  description?: string;
  date: string;
  duration: number;
  attendees: string[];
  location?: string;
  isVirtual: boolean;
  meetingLink?: string;
  agenda: string[];
  minutes?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

// Training Types
export interface Training {
  id: string;
  title: string;
  description: string;
  instructor: string;
  startDate: string;
  endDate: string;
  participants: string[];
  capacity: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  materials: string[];
  certification: boolean;
}

// Field Visit Types
export interface FieldVisit {
  id: string;
  purpose: string;
  location: string;
  date: string;
  visitor: string;
  beneficiaries: string[];
  findings: string;
  recommendations: string[];
  photos?: string[];
  status: 'planned' | 'completed';
}

// Document Types
export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedBy: string;
  uploadedAt: string;
  category: string;
  tags: string[];
  url: string;
  projectId?: string;
}

// KPI Types
export interface KPI {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  category: string;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

// Common Types
export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  userId: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  module: string;
  userId: string;
  timestamp: string;
  details?: Record<string, any>;
}

// Chart Data Types
export interface ChartData {
  name: string;
  value: number;
  date?: string;
}

// Form Types
export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'date' | 'file';
  required: boolean;
  options?: string[];
  validation?: Record<string, any>;
}

export interface Form {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  createdBy: string;
  createdAt: string;
  isActive: boolean;
}

// Navigation Types
export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  children?: MenuItem[];
  roles: string[];
}