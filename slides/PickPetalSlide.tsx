import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';
import { PETAL_QUOTES } from '../constants.tsx';

export const PickPetalSlide: React.FC<SlideProps> = ({ onNext }) => {
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  return (
    <SlideTransition>
      <h2 className="text-pink-400 text-4xl font-romantic mb-4">Pick a Petal</h2>
      <p className="text-white/70 mb-12">Each petal hides a feeling I want you to know.</p>

      <div className="grid grid-cols-3 gap-8 md:gap-12 mb-12">
        {PETAL_QUOTES.map((q, i) => (
          <motion.div
            key={q.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedQuote(q.text)}
            className="cursor-pointer text-red-500"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 + Math.random(), ease: "easeInOut" }}
            >
              <svg className="w-16 h-16 drop-shadow-glow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2 C12,2 4,10 4,15 C4,19 7,22 12,22 C17,22 20,19 20,15 C20,10 12,2 12,2 Z" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedQuote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-0 flex items-center justify-center p-6 z-50 pointer-events-none"
          >
            <div className="bg-pink-900/60 backdrop-blur-xl border border-pink-500/30 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl pointer-events-auto">
              <p className="text-white text-2xl font-romantic italic mb-6">"{selectedQuote}"</p>
              <button 
                onClick={() => setSelectedQuote(null)}
                className="px-6 py-2 bg-pink-500/20 hover:bg-pink-500/40 rounded-full text-pink-300 text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onNext}
        className="px-12 py-4 bg-pink-500 rounded-full text-white font-semibold shadow-lg shadow-pink-500/20 transition-all active:scale-95"
      >
        Continue
      </button>
    </SlideTransition>
  );
};