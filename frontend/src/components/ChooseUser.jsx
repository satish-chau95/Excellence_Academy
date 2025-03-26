import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const UserCard = ({ title, icon, description, path }) => (
  <div className="group relative w-full max-w-sm mx-auto">
    <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1">
      <div className="text-center">
        <div className="mb-3 inline-block p-3 rounded-full bg-gray-50 
          transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Link
          to={path}
          className="inline-block w-3/4 py-2 px-4 rounded-lg text-white text-sm font-medium
            bg-blue-600 hover:bg-blue-700
            transition-all duration-300 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login as {title}
        </Link>
      </div>
    </div>
    {/* Decorative gradient blur effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 
      rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
  </div>
);

const ChooseUser = () => {
  const users = [
    {
      title: 'Admin',
      icon: <FaUserShield className="w-6 h-6 text-blue-500" />,
      description: 'Manage school operations and administrative tasks',
      path: '/admin-signIn',
    },
    {
      title: 'Student',
      icon: <FaUserGraduate className="w-6 h-6 text-green-500" />,
      description: 'Access your courses and learning materials',
      path: '/student-signIn',
    },
    {
      title: 'Teacher',
      icon: <FaChalkboardTeacher className="w-6 h-6 text-red-400" />,
      description: 'Manage classes and student progress',
      path: '/teacher-signIn',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob1 absolute -top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="animate-blob2 absolute top-40 -right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="animate-blob3 absolute -bottom-20 left-1/2 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Role
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your role to access the appropriate portal and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>

        {/* Back to home button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 
              transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;