import React, { useState, useEffect } from 'react';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

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
            <div className="text-4xl fade-in">🌱</div>
          )}
          {taps === 1 && (
            <div className="text-6xl fade-in">🌷</div>
          )}
          {taps >= 2 && (
            <div className="text-9xl glow-red animate-bloom">🌹</div>
          )}
        </div>

        <button
          onClick={() => taps < 3 && setTaps(taps + 1)}
          className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/40 shadow-xl transition-transform hover:scale-110 active:scale-90"
        >
          <span className="text-4xl animate-pulse-custom">
            ❤️
          </span>
        </button>
        
        <p className="mt-8 text-white/80 animate-pulse">
          {taps === 3 ? "It's beautiful, just like you..." : "Tap the heart to bloom ❤️"}
        </p>
      </div>
    </SlideTransition>
  );
};