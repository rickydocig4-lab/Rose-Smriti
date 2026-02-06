import React, { useState } from 'react';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps, RoseType } from '../types.ts';
import { ROSE_TYPES } from '../constants.tsx';

export const RosesSpeakSlide: React.FC<SlideProps> = ({ onNext }) => {
  const [activeRose, setActiveRose] = useState<RoseType | null>(null);

  return (
    <SlideTransition>
      <h2 className="text-pink-400 text-4xl font-romantic mb-2">Those Roses Speak of Us ❤️</h2>
      <p className="text-white/60 mb-12">Every rose tells a part of my story with you.</p>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {ROSE_TYPES.map((rose) => (
          <button
            key={rose.id}
            onClick={() => setActiveRose(rose)}
            className={`w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl transition-all hover:bg-white/10 hover:scale-110 active:scale-90 shadow-lg ${rose.color} ${activeRose?.id === rose.id ? 'ring-2 ring-pink-500' : ''}`}
          >
            {rose.emoji}
          </button>
        ))}
      </div>

      <div className="h-32 flex items-center justify-center max-w-md w-full">
        {activeRose ? (
          <div className="text-center fade-in">
            <h3 className={`text-xl font-bold mb-2 ${activeRose.color}`}>{activeRose.name} – {activeRose.meaning}</h3>
            <p className="italic text-white/90">"{activeRose.quote}"</p>
          </div>
        ) : (
          <p className="text-white/30 italic">Tap a rose to hear its whisper...</p>
        )}
      </div>

      <button
        onClick={onNext}
        className="mt-12 px-12 py-4 bg-pink-500 rounded-full text-white font-semibold shadow-lg shadow-pink-500/40 transition-all hover:scale-105 active:scale-95"
      >
        Continue
      </button>
    </SlideTransition>
  );
};