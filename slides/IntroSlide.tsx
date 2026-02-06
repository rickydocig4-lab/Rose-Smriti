
import React from 'react';
import { motion } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition';
import { SlideProps } from '../types';

export const IntroSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <SlideTransition>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-pink-500 text-5xl md:text-7xl font-romantic mb-8 drop-shadow-lg"
      >
        A Rose, Just for You Smriti 🌹
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="text-white/80 space-y-4 max-w-lg text-lg italic font-light mb-12"
      >
        <p>Some feelings are quiet.</p>
        <p>They don’t rush. They don’t shout.</p>
        <p>They wait for the right moment.</p>
        <p className="font-semibold text-white">This is one of those moments.</p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-10 py-4 bg-pink-500 rounded-full text-white font-semibold text-xl shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all animate-glow"
      >
        Tap to Begin
      </motion.button>
    </SlideTransition>
  );
};
