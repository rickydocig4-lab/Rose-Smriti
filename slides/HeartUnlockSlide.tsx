import React, { useState, useEffect } from 'react';
import { SlideTransition } from '../components/SlideTransition.tsx';
import { SlideProps } from '../types.ts';

export const HeartUnlockSlide: React.FC<SlideProps> = ({ onNext }) => {
  const [taps, setTaps] = useState(0);

  useEffect(() => {
    if (taps === 4) {
      const timer = setTimeout(onNext, 1000);
      return () => clearTimeout(timer);
    }
  }, [taps, onNext]);

  return (
    <SlideTransition>
      <div className="absolute top-12 text-center">
        <h2 className="text-3xl text-pink-400 font-romantic mb-2">A Little Surprise for You</h2>
        <p className="text-white/60">Just a small gesture, made with love 🌹</p>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeDasharray="753.98"
            strokeDashoffset={753.98 - (753.98 * taps) / 4}
            style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
            strokeLinecap="round"
          />
        </svg>

        <button
          onClick={() => taps < 4 && setTaps(taps + 1)}
          className="z-10 text-pink-500 text-8xl focus:outline-none transition-transform hover:scale-110 active:scale-90 animate-pulse-custom"
        >
          ❤️
        </button>
      </div>

      <div className="absolute bottom-12 text-center">
        <p className="text-white/80 animate-bounce">Tap the heart to unlock ✨</p>
        <p className="text-pink-500/50 text-sm mt-2">{taps}/4</p>
      </div>
    </SlideTransition>
  );
};