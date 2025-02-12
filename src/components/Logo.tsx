import React from 'react';
import { motion } from 'framer-motion';

function Logo() {
  return (
    <motion.div
      className="relative w-10 h-10"
      whileHover={{ scale: 1.1 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, -5, 5, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Main Robot Body */}
      <div className="w-10 h-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative overflow-hidden border-2 border-white shadow-lg">
        {/* Face */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Eyes */}
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
        {/* Smile */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-white rounded-full border-t-0" />
      </div>

      {/* Antenna */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
        <div className="w-1.5 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-blue-300 rounded-full -mt-1 animate-pulse" />
      </div>

      {/* Small Decorative Circles */}
      <div className="absolute top-1/2 -left-1 w-2 h-2 bg-blue-300 rounded-full border border-white" />
      <div className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-300 rounded-full border border-white" />
    </motion.div>
  );
}

export default Logo;