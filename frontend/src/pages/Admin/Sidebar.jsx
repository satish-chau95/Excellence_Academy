import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BsGraphUp, BsPeople, BsPerson, BsFileText, 
  BsBook, BsGraphDown, BsCalendar, BsGear, 
  BsChatDots, BsCalendarEvent, BsChevronLeft, 
  BsChevronRight 
} from 'react-icons/bs';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { icon: <BsGraphUp />, text: 'Dashboard', path: '/admin/dashboard' },
    { icon: <BsPeople />, text: 'Classes', path: '/admin/classes' },
    { icon: <BsPerson />, text: 'Teachers', path: '/admin/teachers' },
    { icon: <BsPerson />, text: 'Students', path: '/admin/students' },
    { icon: <BsFileText />, text: 'Assignments', path: '/admin/assignments' },
    { icon: <BsBook />, text: 'Exams', path: '/admin/exams' },
    { icon: <BsGraphDown />, text: 'Performance', path: '/admin/performance' },
    { icon: <BsCalendar />, text: 'Attendance', path: '/admin/attendance' },
    { icon: <BsChatDots />, text: 'Announcements', path: '/admin/communication' },
    { icon: <BsChatDots />, text: 'Library', path: '/admin/library' },
    { icon: <BsCalendarEvent />, text: 'Events & Calendar', path: '/admin/events' },
    { icon: <BsGear />, text: 'Settings & Profile', path: '/admin/settings' }
  ];

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
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-slate-800
          transition-all duration-300 ease-in-out z-30
          ${isOpen ? 'w-64' : 'w-20'}
          ${isMobile && !isOpen && '-translate-x-full'}
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
              <BsGraphUp className="w-6 h-6 text-white" />
            </div>
            <span className={`
              ml-3 font-semibold text-white text-lg
              transition-opacity duration-200
              ${!isOpen && 'opacity-0 hidden'}
            `}>
              Admin Panel
            </span>
          </div>

          {/* Desktop Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:block text-slate-400 hover:text-white transition-colors"
          >
            {isOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-2 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
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
                  {item.text}
                </span>

                {/* Tooltip for collapsed state */}
                {!isOpen && (
                  <div className="
                    absolute left-full rounded-md px-2 py-1 ml-6
                    bg-slate-900 text-slate-300 text-sm
                    invisible opacity-0 -translate-x-3
                    transition-all group-hover:visible 
                    group-hover:opacity-100 group-hover:translate-x-0
                  ">
                    {item.text}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          lg:hidden fixed bottom-4 right-4 z-40
          w-12 h-12 rounded-full bg-blue-600 text-white
          flex items-center justify-center shadow-lg
          hover:bg-blue-700 transition-colors duration-200
          ${isMobile && !isOpen ? 'translate-x-0' : 'translate-x-64'}
        `}
      >
        {isOpen ? <BsChevronLeft size={20} /> : <BsChevronRight size={20} />}
      </button>

      {/* Main Content Wrapper */}
      <div className={`
        min-h-screen transition-all duration-300
        ${isOpen ? 'lg:ml-64' : 'lg:ml-20'}
        ${isMobile ? 'ml-0' : ''}
      `}>
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default Sidebar;
