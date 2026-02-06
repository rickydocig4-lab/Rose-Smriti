import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

export const GiftBoxSlide: React.FC<SlideProps> = ({ onNext }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onNext, 1200);
  };

  return (
    <SlideTransition>
      <div className="text-center mb-16">
        <h2 className="text-3xl text-pink-400 font-romantic mb-2">Something is waiting for you</h2>
        <p className="text-white/60">Tap the gift to open 🎁</p>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9, rotate: [0, -5, 5, -5, 0] }}
        onClick={handleOpen}
        className="cursor-pointer relative"
      >
        <motion.div
          animate={isOpening ? {
            scale: [1, 1.5, 2],
            opacity: [1, 1, 0],
            rotate: 360
          } : {
            y: [0, -10, 0]
          }}
          transition={{ duration: 1.2 }}
          className="text-9xl drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]"
        >
          🎁
        </motion.div>
        
        {isOpening && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: [0, 1, 0] }}
            className="absolute inset-0 bg-pink-500 rounded-full blur-3xl -z-10"
          />
        )}
      </motion.div>
    </SlideTransition>
  );
};