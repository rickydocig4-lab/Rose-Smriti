import React from 'react';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

export const IntroSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <SlideTransition>
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 -z-10 animate-pulse" />

        <div className="mb-10 relative animate-bloom">
          <div className="text-[14rem] md:text-[18rem] leading-none glow-red select-none animate-float">
            🌹
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-light tracking-widest uppercase mb-2">
            A Rose for
          </h1>
          <h1 className="text-red-500 text-7xl md:text-9xl font-romantic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            Smriti
          </h1>
        </div>

        <div className="mt-8 text-white/60 space-y-2 max-w-md text-center italic font-light">
          <p className="text-lg">"In a garden full of flowers, my eyes only find you."</p>
        </div>

        <button
          onClick={onNext}
          className="mt-12 px-10 py-4 bg-red-700/80 backdrop-blur-md rounded-full text-white font-medium text-lg tracking-widest uppercase shadow-2xl border border-red-500/30 transition-all hover:scale-105 active:scale-95"
        >
          Open Your Heart
        </button>
      </div>
    </SlideTransition>
  );
};