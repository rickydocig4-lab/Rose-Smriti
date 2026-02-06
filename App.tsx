import React, { useState, useEffect } from 'react';
import { PetalRain } from './components/PetalRain.tsx';
import { IntroSlide } from './slides/IntroSlide.tsx';
import { PickPetalSlide } from './slides/PickPetalSlide.tsx';
import { RosesSpeakSlide } from './slides/RosesSpeakSlide.tsx';
import { HeartUnlockSlide } from './slides/HeartUnlockSlide.tsx';
import { GiftBoxSlide } from './slides/GiftBoxSlide.tsx';
import { GrowingRoseSlide } from './slides/GrowingRoseSlide.tsx';
import { FinalSlide } from './slides/FinalSlide.tsx';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => prev + 1);
      setIsVisible(true);
    }, 500);
  };

  const reset = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(0);
      setIsVisible(true);
    }, 500);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <IntroSlide onNext={nextSlide} />;
      case 1: return <PickPetalSlide onNext={nextSlide} />;
      case 2: return <RosesSpeakSlide onNext={nextSlide} />;
      case 3: return <HeartUnlockSlide onNext={nextSlide} />;
      case 4: return <GiftBoxSlide onNext={nextSlide} />;
      case 5: return <GrowingRoseSlide onNext={nextSlide} />;
      case 6: return <FinalSlide onNext={reset} />;
      default: return null;
    }
  };

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      <PetalRain />
      <div 
        className={`transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {renderSlide()}
      </div>
    </main>
  );
};

export default App;