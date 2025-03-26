import React, { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaHeadset, FaClock, FaCheckCircle 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setIsSubmitting(false);
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <FaHeadset className="text-blue-500" />,
      title: "Call Us",
      info: "(+91) 1234509876",
      subInfo: "Mon-Fri 9am-6pm",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: <FaEnvelope className="text-green-500" />,
      title: "Email Us",
      info: "info@excellenceacademy.com",
      subInfo: "24/7 Online Support",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      title: "Visit Us",
      info: "123 Education Street",
      subInfo: "City, State 12345",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100"
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FaClock className="text-5xl text-white/90 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className={`${item.bgColor} rounded-xl p-8 text-center shadow-lg
              transform hover:-translate-y-1 transition-all duration-300 ${item.hoverColor}`}
            >
              <div className="text-4xl mb-4 inline-block p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">
                {item.info}
              </p>
              <p className="text-gray-600 text-sm">
                {item.subInfo}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-20">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg
              font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : submitStatus === 'success' ? (
                <>
                  <FaCheckCircle className="mr-2" /> Message Sent Successfully
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact; 