import React from 'react';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

export const FinalSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <SlideTransition>
      <div className="flex flex-col items-center animate-bloom">
        <div className="relative mb-12">
          <div className="text-9xl md:text-[12rem] glow-red animate-float">
            🌹
          </div>
          
          {/* Decorative bits */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-600/20 blur-[60px] rounded-full animate-pulse" />
        </div>

        <div className="bg-black/60 backdrop-blur-lg border border-pink-500/30 p-10 rounded-[2.5rem] shadow-2xl shadow-pink-500/20 text-center fade-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-pink-500 text-5xl md:text-7xl font-romantic mb-4">Happy Rose Day ❤️</h1>
          <p className="text-white/90 text-2xl font-light italic">This Rose is for my Rose, Smriti</p>
        </div>

        <button
          onClick={onNext}
          className="mt-12 text-white/30 text-sm hover:text-white/60 transition-colors"
        >
          Start Over
        </button>
      </div>
    </SlideTransition>
  );
};