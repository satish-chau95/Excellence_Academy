import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BsGraphUp, BsPeople, BsPerson, BsFileText, 
  BsBook, BsGraphDown, BsCalendar, BsGear, 
  BsChatDots, BsCalendarEvent, BsChevronLeft,
  BsChevronRight, BsBoxArrowRight, BsHouseDoor
} from 'react-icons/bs';

const Sidebar = ({ userType = 'admin' }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = {
    admin: [
      { path: '/admin/dashboard', icon: <BsHouseDoor />, label: 'Dashboard' },
      { path: '/admin/classes', icon: <BsPeople />, label: 'Classes' },
      { path: '/admin/students', icon: <BsPeople />, label: 'Students' },
      { path: '/admin/teachers', icon: <BsPerson />, label: 'Teachers' },
      { path: '/admin/assignments', icon: <BsFileText />, label: 'Assignments' },
      { path: '/admin/exams', icon: <BsBook />, label: 'Exams' },
      { path: '/admin/performance', icon: <BsGraphUp />, label: 'Performance' },
      { path: '/admin/attendance', icon: <BsCalendar />, label: 'Attendance' },
      { path: '/admin/library', icon: <BsBook />, label: 'Library' },
      { path: '/admin/communication', icon: <BsChatDots />, label: 'Announcements' },
      { path: '/admin/events', icon: <BsCalendarEvent />, label: 'Events' },
      { path: '/admin/settings', icon: <BsGear />, label: 'Settings' },
    ],
    student: [
      { path: '/student/dashboard', icon: <BsHouseDoor />, label: 'Dashboard' },
      { path: '/student/assignments', icon: <BsFileText />, label: 'Assignments' },
      { path: '/student/exams', icon: <BsBook />, label: 'Exams' },
      { path: '/student/performance', icon: <BsGraphUp />, label: 'Performance' },
      { path: '/student/attendance', icon: <BsCalendar />, label: 'Attendance' },
      { path: '/student/library', icon: <BsBook />, label: 'Library' },
      { path: '/student/communication', icon: <BsChatDots />, label: 'Announcements' },
      { path: '/student/settings', icon: <BsGear />, label: 'Profile' },
    ],
    teacher: [
      { path: '/teacher/dashboard', icon: <BsHouseDoor />, label: 'Dashboard' },
      { path: '/teacher/classes', icon: <BsPeople />, label: 'Classes' },
      { path: '/teacher/students', icon: <BsPeople />, label: 'Students' },
      { path: '/teacher/assignments', icon: <BsFileText />, label: 'Assignments' },
      { path: '/teacher/exams', icon: <BsBook />, label: 'Exams' },
      { path: '/teacher/performance', icon: <BsGraphUp />, label: 'Performance' },
      { path: '/teacher/attendance', icon: <BsCalendar />, label: 'Attendance' },
      { path: '/teacher/communication', icon: <BsChatDots />, label: 'Announcements' },
      { path: '/teacher/events', icon: <BsCalendarEvent />, label: 'Events' },
      { path: '/teacher/settings', icon: <BsGear />, label: 'Settings' },
    ],
  };

  const colorSchemes = {
    admin: 'from-blue-800 to-blue-900',
    student: 'from-green-800 to-green-900',
    teacher: 'from-purple-800 to-purple-900'
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full z-30
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-20'}
        bg-gradient-to-b ${colorSchemes[userType]}
        text-white shadow-xl
        ${isMobile && !isOpen && 'transform -translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/logo.png" 
                alt="Logo" 
                className={`w-10 h-10 rounded-full transition-all duration-300
                  ${!isOpen && 'w-8 h-8'}`}
              />
              {isOpen && (
                <span className="font-bold text-xl capitalize">
                  {userType} Portal
                </span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navigationItems[userType].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center space-x-3 px-3 py-3 rounded-lg
                      transition-all duration-200
                      ${location.pathname === item.path 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:bg-white/10 hover:text-white'}
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {isOpen && <span className="font-medium">{item.label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <Link
              to="/logout"
              className={`
                flex items-center space-x-3 px-3 py-3 rounded-lg
                text-white/80 hover:bg-white/10 hover:text-white
                transition-all duration-200
              `}
            >
              <BsBoxArrowRight className="text-xl" />
              {isOpen && <span className="font-medium">Logout</span>}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 