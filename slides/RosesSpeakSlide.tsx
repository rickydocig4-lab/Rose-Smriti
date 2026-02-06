
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition';
import { SlideProps, RoseType } from '../types';
import { ROSE_TYPES } from '../constants';

export const RosesSpeakSlide: React.FC<SlideProps> = ({ onNext }) => {
  const [activeRose, setActiveRose] = useState<RoseType | null>(null);

  return (
    <SlideTransition>
      <h2 className="text-pink-400 text-4xl font-romantic mb-2">Those Roses Speak of Us ❤️</h2>
      <p className="text-white/60 mb-12">Every rose tells a part of my story with you.</p>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {ROSE_TYPES.map((rose) => (
          <motion.button
            key={rose.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveRose(rose)}
            className={`w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl transition-all hover:bg-white/10 hover:border-pink-500/50 shadow-lg ${rose.color}`}
          >
            {rose.emoji}
          </motion.button>
        ))}
      </div>

      <div className="h-32 flex items-center justify-center max-w-md">
        <AnimatePresence mode="wait">
          {activeRose ? (
            <motion.div
              key={activeRose.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <h3 className={`text-xl font-bold mb-2 ${activeRose.color}`}>{activeRose.name} – {activeRose.meaning}</h3>
              <p className="italic text-white/90">"{activeRose.quote}"</p>
            </motion.div>
          ) : (
            <p className="text-white/30 italic">Tap a rose to hear its whisper...</p>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={onNext}
        className="mt-12 px-12 py-4 bg-pink-500 rounded-full text-white font-semibold animate-pulse shadow-lg shadow-pink-500/40"
      >
        Continue
      </button>
    </SlideTransition>
  );
};
