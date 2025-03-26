import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from './components/PageLayout';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  return (
    <PageLayout title="Profile Settings">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Profile Header */}
          <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-12 left-6"
            >
              <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                {/* Profile image */}
              </div>
            </motion.div>
          </div>

          {/* Profile Content */}
          <div className="pt-16 p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              {/* Profile form or details */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Profile; 