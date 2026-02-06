
import React from 'react';
import { motion } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition';
import { SlideProps } from '../types';

export const FinalSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <SlideTransition>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-12">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-9xl md:text-[12rem] drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]"
          >
            🌹
          </motion.div>
          
          {/* Sparkles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0.5],
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2 + Math.random() * 2,
                delay: i * 0.4
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-200 rounded-full blur-[1px]"
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-black/60 backdrop-blur-lg border border-pink-500/30 p-10 rounded-[2.5rem] shadow-2xl shadow-pink-500/20 text-center"
        >
          <h1 className="text-pink-500 text-5xl md:text-7xl font-romantic mb-4">Happy Rose Day ❤️</h1>
          <p className="text-white/90 text-2xl font-light italic">This Rose is for my Rose, Smriti</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={onNext}
          className="mt-12 text-white/30 text-sm hover:text-white/60 transition-colors"
        >
          Start Over
        </motion.button>
      </motion.div>
    </SlideTransition>
  );
};
