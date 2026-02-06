import React, { useState } from 'react';
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

      <div
        onClick={handleOpen}
        className={`cursor-pointer relative transition-all duration-1000 ${isOpening ? 'scale-[3] opacity-0 rotate-180' : 'hover:scale-105 active:scale-95 animate-float'}`}
      >
        <div className="text-9xl drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
          🎁
        </div>
        
        {isOpening && (
          <div className="absolute inset-0 bg-pink-500 rounded-full blur-3xl -z-10 animate-pulse" />
        )}
      </div>
    </SlideTransition>
  );
};