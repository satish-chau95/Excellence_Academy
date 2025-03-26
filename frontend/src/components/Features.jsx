import React from 'react';
import { 
  FaUserGraduate, FaChalkboardTeacher, FaUserShield,
  FaBook, FaCalendarAlt, FaChartBar, FaUsers,
  FaClipboardList, FaFileAlt, FaCog, FaBell,
  FaGraduationCap, FaLaptop, FaMobile
} from 'react-icons/fa';

const Features = () => {
  const sections = [
    {
      title: "Admin Dashboard",
      icon: <FaUserShield className="text-blue-500" />,
      description: "Powerful tools for efficient school management",
      features: [
        { icon: <FaUsers className="text-blue-400" />, text: "Complete Student & Staff Management" },
        { icon: <FaChartBar className="text-blue-400" />, text: "Advanced Performance Analytics" },
        { icon: <FaCalendarAlt className="text-blue-400" />, text: "Smart Schedule Management" },
        { icon: <FaBell className="text-blue-400" />, text: "Instant Notifications" }
      ]
    },
    {
      title: "Student Portal",
      icon: <FaUserGraduate className="text-green-500" />,
      description: "Enhanced learning experience for students",
      features: [
        { icon: <FaBook className="text-green-400" />, text: "Digital Study Materials" },
        { icon: <FaFileAlt className="text-green-400" />, text: "Assignment Management" },
        { icon: <FaChartBar className="text-green-400" />, text: "Progress Tracking" },
        { icon: <FaLaptop className="text-green-400" />, text: "Online Learning Tools" }
      ]
    },
    {
      title: "Teacher Portal",
      icon: <FaChalkboardTeacher className="text-purple-500" />,
      description: "Streamlined teaching tools and resources",
      features: [
        { icon: <FaClipboardList className="text-purple-400" />, text: "Digital Attendance System" },
        { icon: <FaFileAlt className="text-purple-400" />, text: "Course Content Management" },
        { icon: <FaChartBar className="text-purple-400" />, text: "Student Performance Tracking" },
        { icon: <FaCog className="text-purple-400" />, text: "Customizable Dashboard" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FaGraduationCap className="text-5xl text-white/90 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Education
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive school management system provides all the tools you need
              to streamline administration, enhance learning, and track progress.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-4xl mb-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600">
                  {section.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-8 bg-white">
                {section.features.map((feature, idx) => (
                  <div key={idx} 
                    className="flex items-center mb-6 last:mb-0 group hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <p className="text-gray-700 font-medium">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaMobile className="text-5xl text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Access Anywhere, Anytime
            </h2>
            <p className="text-gray-600 mb-8">
              Get all these features and more on our mobile app. Stay connected with your school community on the go.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold 
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Try Demo Version
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your School Management?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Now
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold 
              border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your CSS/Tailwind config
const style = {
  '.animate-blob': {
    animation: 'blob 7s infinite',
  },
  '.animation-delay-2000': {
    animationDelay: '2s',
  },
  '.animation-delay-4000': {
    animationDelay: '4s',
  },
  '@keyframes blob': {
    '0%': {
      transform: 'translate(0px, 0px) scale(1)',
    },
    '33%': {
      transform: 'translate(30px, -50px) scale(1.1)',
    },
    '66%': {
      transform: 'translate(-20px, 20px) scale(0.9)',
    },
    '100%': {
      transform: 'translate(0px, 0px) scale(1)',
    },
  },
};

export default Features;