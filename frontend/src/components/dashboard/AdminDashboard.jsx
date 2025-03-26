import React from 'react';
import { 
  FaUsers, FaChalkboardTeacher, FaBook, 
  FaCalendarAlt, FaBell, FaChartLine 
} from 'react-icons/fa';
import DashboardLayout from './DashboardLayout';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', count: '1,234', icon: <FaUsers />, color: 'bg-blue-500' },
    { title: 'Total Teachers', count: '89', icon: <FaChalkboardTeacher />, color: 'bg-green-500' },
    { title: 'Total Courses', count: '45', icon: <FaBook />, color: 'bg-purple-500' },
    { title: 'Events', count: '12', icon: <FaCalendarAlt />, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { title: 'New student registration', time: '2 minutes ago', type: 'registration' },
    { title: 'Fee payment received', time: '1 hour ago', type: 'payment' },
    { title: 'New course added', time: '3 hours ago', type: 'course' },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className={`${stat.color} text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaChartLine className="mr-2" />
              Student Enrollment Trends
            </h2>
            {/* Add Chart Component Here */}
            <div className="h-64 bg-gray-100 rounded-lg">
              {/* Chart will be added later */}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaBell className="mr-2" />
              Recent Activities
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex-grow">
                    <p className="text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard; 