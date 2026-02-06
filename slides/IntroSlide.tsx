import React from 'react';
import { motion } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

export const IntroSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <SlideTransition>
      <div className="flex flex-col items-center justify-center relative">
        {/* Artistic Glowing Aura behind the rose */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-64 h-64 bg-red-600 rounded-full blur-[100px] -z-10"
        />

        {/* Blooming Rose Animation */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="mb-10 relative"
        >
          <motion.div
            animate={{ 
              rotate: [0, 3, -3, 0],
              y: [0, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="text-[14rem] md:text-[18rem] leading-none drop-shadow-glow select-none"
          >
            <motion.span
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ delay: 1.8, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              🌷
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 2 }}
            >
              🌹
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1.2 }}
          className="text-center"
        >
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-widest uppercase mb-2">
            A Rose for
          </h1>
          <h1 className="text-red-500 text-7xl md:text-9xl font-romantic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            Smriti
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1.5 }}
          className="mt-8 text-white/60 space-y-2 max-w-md text-center italic font-light"
        >
          <p className="text-lg">"In a garden full of flowers, my eyes only find you."</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.5, duration: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 38, 38, 0.9)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="mt-12 px-10 py-4 bg-red-700/80 backdrop-blur-md rounded-full text-white font-medium text-lg tracking-widest uppercase shadow-2xl border border-red-500/30 transition-all hover:shadow-red-600/40"
        >
          Open Your Heart
        </motion.button>
      </div>
    </SlideTransition>
  );
};