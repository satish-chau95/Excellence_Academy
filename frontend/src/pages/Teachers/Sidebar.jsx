import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook,
  BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent,
  BsChevronLeft, BsChevronRight
} from 'react-icons/bs';

// Styled Teacher Logo
const TeacherLogo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff; /* Change color as needed */
  border-radius: 50%;
  
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  
  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { title: 'Dashboard', icon: <BsGraphUp />, path: '/teacher/dashboard' },
    { title: 'Classes', icon: <BsPeople />, path: '/teacher/classes' },
    { title: 'Students', icon: <BsPeople />, path: '/teacher/students' },
    { title: 'Teachers', icon: <BsPerson />, path: '/teacher/teachers' },
    { title: 'Assignments', icon: <BsFileText />, path: '/teacher/assignments' },
    { title: 'Exams', icon: <BsBook />, path: '/teacher/exams' },
    { title: 'Performance', icon: <BsGraphDown />, path: '/teacher/performance' },
    { title: 'Attendance', icon: <BsCalendar />, path: '/teacher/attendance' },
    { title: 'Announcement', icon: <BsChatDots />, path: '/teacher/communication' },
    { title: 'Events & Calendar', icon: <BsCalendarEvent />, path: '/teacher/events' },
    { title: 'Settings & Profile', icon: <BsGear />, path: '/teacher/settings' }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-0 h-full bg-slate-800
          transition-all duration-300 ease-in-out z-30
          ${isOpen ? 'w-64' : 'w-20'}
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <div className="flex items-center">
            <TeacherLogo>
              <svg viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 18c0-2.67 5.33-4 6-4s6 1.33 6 4v2H6v-2z"/>
              </svg>
            </TeacherLogo>
            <span className={`
              ml-3 text-white font-semibold text-lg
              transition-opacity duration-200
              ${!isOpen && 'opacity-0 hidden'}
            `}>
              Teacher Portal
            </span>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {isOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="py-4 overflow-y-auto h-[calc(100vh-4rem)]">
          <nav className="px-2 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center px-3 py-3 rounded-lg
                    transition-all duration-200 group relative
                    ${isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-700'
                    }
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`
                    ml-3 whitespace-nowrap
                    transition-all duration-200
                    ${!isOpen && 'opacity-0 hidden'}
                  `}>
                    {item.title}
                  </span>

                  {/* Tooltip for collapsed state */}
                  {!isOpen && (
                    <div className="
                      absolute left-full rounded-md px-2 py-1 ml-6
                      bg-slate-900 text-slate-300 text-sm
                      invisible opacity-0 -translate-x-3
                      transition-all group-hover:visible 
                      group-hover:opacity-100 group-hover:translate-x-0
                      z-50
                    ">
                      {item.title}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Toggle Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 text-slate-400 
              hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          >
            {isOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`
        flex-1 transition-all duration-300
        ${isOpen ? 'ml-64' : 'ml-20'}
      `}>
        {/* Your page content will be rendered here */}
      </div>
    </div>
  );
};

export default Sidebar;
