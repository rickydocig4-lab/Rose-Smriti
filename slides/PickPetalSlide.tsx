import React, { useState } from 'react';
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
          <div
            key={q.id}
            onClick={() => setSelectedQuote(q.text)}
            className="cursor-pointer text-red-500 hover:scale-110 active:scale-90 transition-transform"
          >
            <div className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
              <svg className="w-16 h-16 glow-red" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2 C12,2 4,10 4,15 C4,19 7,22 12,22 C17,22 20,19 20,15 C20,10 12,2 12,2 Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selectedQuote && (
        <div className="fixed inset-0 flex items-center justify-center p-6 z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-pink-900/80 border border-pink-500/30 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl fade-in">
            <p className="text-white text-2xl font-romantic italic mb-6">"{selectedQuote}"</p>
            <button 
              onClick={() => setSelectedQuote(null)}
              className="px-6 py-2 bg-pink-500/20 hover:bg-pink-500/40 rounded-full text-pink-300 text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button
        onClick={onNext}
        className="px-12 py-4 bg-pink-500 rounded-full text-white font-semibold shadow-lg shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
      >
        Continue
      </button>
    </SlideTransition>
  );
};