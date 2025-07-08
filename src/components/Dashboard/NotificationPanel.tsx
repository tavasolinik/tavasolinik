import React, { useState } from 'react';
import { Bell, AlertCircle, CheckCircle, Info, X, Clock } from 'lucide-react';
import { User, Notification } from '../../types';

interface NotificationPanelProps {
  currentUser: User;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ currentUser }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Project Approval Required',
      message: 'Education Program needs your approval to proceed to next phase.',
      type: 'warning',
      read: false,
      createdAt: '2024-01-15T10:30:00Z',
      userId: currentUser.id
    },
    {
      id: '2',
      title: 'Budget Report Submitted',
      message: 'Q4 budget report has been submitted for review.',
      type: 'success',
      read: false,
      createdAt: '2024-01-15T09:45:00Z',
      userId: currentUser.id
    },
    {
      id: '3',
      title: 'Meeting Reminder',
      message: 'Team standup meeting scheduled for tomorrow at 10:00 AM.',
      type: 'info',
      read: true,
      createdAt: '2024-01-14T16:20:00Z',
      userId: currentUser.id
    },
    {
      id: '4',
      title: 'New Volunteer Application',
      message: 'Sarah Johnson has applied to join the healthcare program.',
      type: 'info',
      read: false,
      createdAt: '2024-01-14T14:15:00Z',
      userId: currentUser.id
    },
    {
      id: '5',
      title: 'Low Budget Alert',
      message: 'Clean Water Project has only 15% budget remaining.',
      type: 'error',
      read: true,
      createdAt: '2024-01-14T11:30:00Z',
      userId: currentUser.id
    }
  ]);

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const removeNotification = (notificationId: string) => {
    setNotifications(prev => 
      prev.filter(notif => notif.id !== notificationId)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const formatTime = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Mark all read
          </button>
        )}
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
        {notifications.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No notifications</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                notification.read 
                  ? 'bg-white border-gray-200' 
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${
                    notification.read ? 'text-gray-900' : 'text-gray-900'
                  }`}>
                    {notification.title}
                  </p>
                  <p className={`text-sm ${
                    notification.read ? 'text-gray-600' : 'text-gray-700'
                  } mt-1`}>
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatTime(notification.createdAt)}
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Mark read
                      </button>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {notifications.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;