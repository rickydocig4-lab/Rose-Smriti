import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <IntroSlide key="intro" onNext={nextSlide} />;
      case 1: return <PickPetalSlide key="pick" onNext={nextSlide} />;
      case 2: return <RosesSpeakSlide key="roses" onNext={nextSlide} />;
      case 3: return <HeartUnlockSlide key="heart" onNext={nextSlide} />;
      case 4: return <GiftBoxSlide key="gift" onNext={nextSlide} />;
      case 5: return <GrowingRoseSlide key="growing" onNext={nextSlide} />;
      case 6: return <FinalSlide key="final" onNext={() => setCurrentSlide(0)} />;
      default: return null;
    }
  };

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      <PetalRain />
      <AnimatePresence mode="wait">
        {renderSlide()}
      </AnimatePresence>
    </main>
  );
};

export default App;