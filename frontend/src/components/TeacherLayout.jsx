import React from 'react';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

const TeacherLayout = ({ children, title }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <motion.main 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex-1 overflow-y-auto"
      >
        <div className="py-6 px-8">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            {title}
          </motion.h1>
          {children}
        </div>
      </motion.main>
    </div>
  );
};

export default TeacherLayout; 