import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, FaUsers, FaBook, FaCalendarAlt, 
  FaCog, FaBell, FaUserCircle, FaBars, FaTimes 
} from 'react-icons/fa';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    { icon: <FaHome />, title: 'Dashboard', path: '/dashboard' },
    { icon: <FaUsers />, title: 'Users', path: '/dashboard/users' },
    { icon: <FaBook />, title: 'Courses', path: '/dashboard/courses' },
    { icon: <FaCalendarAlt />, title: 'Schedule', path: '/dashboard/schedule' },
    { icon: <FaCog />, title: 'Settings', path: '/dashboard/settings' },
  ];

  const notifications = [
    { title: 'New student registration', time: '2 minutes ago' },
    { title: 'Fee payment received', time: '1 hour ago' },
    { title: 'New course added', time: '3 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r">
          <div className="flex items-center mb-5 p-2">
            <img src="/logo.png" alt="Logo" className="h-8 mr-3" />
            <span className="text-xl font-semibold">Admin Panel</span>
          </div>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-3 text-gray-600 rounded-lg hover:bg-gray-100"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaBell />
                </button>
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                      <div className="space-y-4">
                        {notifications.map((notification, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-grow">
                              <p className="text-gray-800">{notification.title}</p>
                              <p className="text-sm text-gray-500">{notification.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <FaUserCircle className="text-2xl" />
                  <span>Admin</span>
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                    <div className="py-2">
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                        Profile
                      </Link>
                      <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                      </Link>
                      <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 