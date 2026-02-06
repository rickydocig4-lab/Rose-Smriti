
import React from 'react';
import { motion } from 'framer-motion';

export const SlideTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center relative z-10"
    >
      {children}
    </motion.div>
  );
};
