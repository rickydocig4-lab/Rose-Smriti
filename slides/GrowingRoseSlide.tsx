
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition';
import { SlideProps } from '../types';

export const GrowingRoseSlide: React.FC<SlideProps> = ({ onNext }) => {
  const [taps, setTaps] = useState(0);

  useEffect(() => {
    if (taps === 3) {
      const timer = setTimeout(onNext, 2500);
      return () => clearTimeout(timer);
    }
  }, [taps, onNext]);

  return (
    <SlideTransition>
      <div className="relative w-full max-w-xs flex flex-col items-center">
        <div className="h-64 flex items-end justify-center mb-12">
          {taps === 0 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-4xl">🌱</motion.div>
          )}
          {taps === 1 && (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-6xl">🌷</motion.div>
          )}
          {taps >= 2 && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-9xl drop-shadow-glow"
            >
              🌹
            </motion.div>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => taps < 3 && setTaps(taps + 1)}
          className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/40 shadow-xl"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-4xl"
          >
            ❤️
          </motion.span>
        </motion.button>
        
        <p className="mt-8 text-white/80 animate-pulse">
          {taps === 3 ? "It's beautiful, just like you..." : "Tap the heart to bloom ❤️"}
        </p>
      </div>
    </SlideTransition>
  );
};
