import React from 'react';
import { FaCalendarAlt, FaBullhorn, FaTrophy, FaGraduationCap, FaHistory, FaMedal } from 'react-icons/fa';

const AboutUs = () => {
  const notices = [
    {
      title: "Annual Sports Day",
      date: "2024-03-15",
      icon: <FaTrophy className="text-yellow-500" />,
      content: "Join us for our annual sports day celebration featuring various athletic events and competitions."
    },
    {
      title: "Parent-Teacher Meeting",
      date: "2024-03-20",
      icon: <FaCalendarAlt className="text-blue-500" />,
      content: "Important meeting to discuss student progress and upcoming academic plans."
    },
    {
      title: "Science Fair",
      date: "2024-03-25",
      icon: <FaBullhorn className="text-green-500" />,
      content: "Students will showcase their innovative science projects and experiments."
    }
  ];

  const milestones = [
    { year: "1995", title: "Founded", description: "Established with a vision of excellence" },
    { year: "2005", title: "Expansion", description: "Added new facilities and programs" },
    { year: "2015", title: "Recognition", description: "Received national education award" },
    { year: "2024", title: "Innovation", description: "Launched digital learning platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FaGraduationCap className="text-5xl text-white/90 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              About Excellence Academy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Excellence Academy has been a pioneer in education since its establishment. 
              We strive to provide quality education and shape the future leaders of tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 transform translate-x-1/2">
                    <div className="absolute top-1/2 right-0 w-3 h-3 bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notice Board Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Notice Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {notices.map((notice, index) => (
            <div key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300
              border border-gray-100 group"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform">
                {notice.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {notice.title}
              </h3>
              <p className="text-blue-600 text-sm mb-3 font-medium">
                {notice.date}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {notice.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* School Activities */}
      <div className="bg-blue-50/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            School Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <FaMedal className="text-3xl text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Academic Activities
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Regular assessments and evaluations",
                  "Interactive learning sessions",
                  "Special workshops and seminars",
                  "Project-based learning"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="flex items-center mb-6">
                <FaHistory className="text-3xl text-green-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Extra-Curricular Activities
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Sports and athletics programs",
                  "Art and craft workshops",
                  "Music and dance classes",
                  "Cultural events and festivals"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 group">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 