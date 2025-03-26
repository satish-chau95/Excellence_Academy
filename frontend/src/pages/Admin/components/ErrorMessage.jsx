import React from 'react';
import { motion } from 'framer-motion';

const ErrorMessage = ({ message }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
  >
    {message}
  </motion.div>
);

export default ErrorMessage; 