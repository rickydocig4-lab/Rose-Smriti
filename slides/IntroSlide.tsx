import React from 'react';
import { motion } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

export const IntroSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <SlideTransition>
      <div className="flex flex-col items-center justify-center">
        {/* Blooming Rose Animation */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: [0.3, 0.6, 1], opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="text-[12rem] md:text-[16rem] leading-none drop-shadow-glow select-none"
          >
            {/* Transitioning from bud to full rose */}
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              🌷
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              🌹
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-pink-500 text-5xl md:text-7xl font-romantic mb-6 drop-shadow-lg"
        >
          A Rose, Just for You, Smriti 🌹
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="text-white/80 space-y-4 max-w-lg text-lg italic font-light mb-12"
        >
          <p>Some feelings are quiet.</p>
          <p>They don’t rush. They don’t shout.</p>
          <p>They wait for the right moment.</p>
          <p className="font-semibold text-white">This is one of those moments.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-12 py-5 bg-pink-600 rounded-full text-white font-semibold text-xl shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 transition-all animate-glow"
        >
          Tap to Begin
        </motion.button>
      </div>
    </SlideTransition>
  );
};