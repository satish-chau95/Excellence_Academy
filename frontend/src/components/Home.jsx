// Home.js
import ChatBotComponent from "../components/Chatbot"; // Import chatbot
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaGraduationCap, FaUsers, FaBook, FaCalendarAlt,
  FaChalkboardTeacher, FaLaptop, FaChartLine, FaAward
} from 'react-icons/fa';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  const features = [
    {
      icon: <FaGraduationCap className="text-blue-500" />,
      title: "Smart Learning",
      description: "Interactive digital classrooms with modern teaching methods"
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500" />,
      title: "Expert Teachers",
      description: "Highly qualified faculty with years of experience"
    },
    {
      icon: <FaLaptop className="text-purple-500" />,
      title: "Online Portal",
      description: "24/7 access to learning resources and materials"
    },
    {
      icon: <FaChartLine className="text-red-500" />,
      title: "Performance Tracking",
      description: "Real-time monitoring of academic progress"
    }
  ];

  const stats = [
    { count: "1000+", label: "Students", icon: <FaUsers /> },
    { count: "100+", label: "Teachers", icon: <FaChalkboardTeacher /> },
    { count: "50+", label: "Courses", icon: <FaBook /> },
    { count: "95%", label: "Success Rate", icon: <FaAward /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={bg1} alt="School Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold text-gray-800">Excellence Academy</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About Us</Link>
              <Link to="/features" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Features</Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact Us</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleLoginClick}
                className="bg-blue-600 cursor-pointer text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all"
              >
                Sign In
              </button>
              <button 
                onClick={handleLoginClick}
                className="border-2 cursor-pointer border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-all"
              >
                Guest Mode
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Transform Your School with Modern Management
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience seamless education management with our comprehensive system. 
                Streamline administration, enhance learning, and focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={handleLoginClick}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                  px-8 py-4 rounded-lg font-semibold cursor-pointer hover:shadow-xl transition-all 
                  hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 "
                >
                  Get Started Today
                </button>
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-lg 
                  font-semibold hover:bg-blue-50 cursor-pointer hover:shadow-lg transition-all 
                  border-2 border-blue-600 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex-1 relative">
              <img 
                src={bg} 
                alt="School Management" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto
                transform hover:-translate-y-2 transition-transform duration-300
                border-8 border-white"
              />
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <FaChartLine className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Updated */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} 
                className="bg-white rounded-xl p-6 text-center shadow-lg
                hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                border border-gray-100"
              >
                <div className="text-3xl mb-2 text-blue-500">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1 text-gray-800">{stat.count}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - Updated */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our System?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 
                transition-all duration-300 border border-gray-100 hover:shadow-xl
                group"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Updated */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your School Management?
          </h2>
          <button
            onClick={handleLoginClick}
            className="bg-white text-blue-600 cursor-pointer px-8 py-4 rounded-lg font-semibold 
            hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50"
          >
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Features</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">Student Management</li>
                <li className="text-gray-300">Teacher Portal</li>
                <li className="text-gray-300">Online Learning</li>
                <li className="text-gray-300">Performance Analytics</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">123 Education Street</li>
                <li className="text-gray-300">City, State 12345</li>
                <li className="text-gray-300">Phone: (+91) 1234509876</li>
                <li className="text-gray-300">Email: info@excellenceacademy.com</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
  <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
  <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and news.</p>

  <form className="space-y-3">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                 focus:ring-primary focus:border-primary"
    />
    
    <button
      type="submit"
      className="w-full px-4 py-3 font-medium text-white bg-gradient-to-r 
                 from-primary to-primary/90 rounded-lg transition-all 
                 duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer
                 hover:-translate-y-0.5 hover:from-primary/90 hover:to-primary"
    >
      🚀 Subscribe Now
    </button>
  </form>
</div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl transition-colors"><FaFacebook /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl transition-colors"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl transition-colors"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl transition-colors"><FaLinkedin /></a>
            </div>
            <p className="text-gray-500">© 2025 Excellence Academy. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm">Terms of Use</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    <ChatBotComponent />
    </div>
);
};

export default Home;
