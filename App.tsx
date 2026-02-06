
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PetalRain } from './components/PetalRain';
import { IntroSlide } from './slides/IntroSlide';
import { PickPetalSlide } from './slides/PickPetalSlide';
import { RosesSpeakSlide } from './slides/RosesSpeakSlide';
import { HeartUnlockSlide } from './slides/HeartUnlockSlide';
import { GiftBoxSlide } from './slides/GiftBoxSlide';
import { GrowingRoseSlide } from './slides/GrowingRoseSlide';
import { FinalSlide } from './slides/FinalSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <IntroSlide onNext={nextSlide} />;
      case 1: return <PickPetalSlide onNext={nextSlide} />;
      case 2: return <RosesSpeakSlide onNext={nextSlide} />;
      case 3: return <HeartUnlockSlide onNext={nextSlide} />;
      case 4: return <GiftBoxSlide onNext={nextSlide} />;
      case 5: return <GrowingRoseSlide onNext={nextSlide} />;
      case 6: return <FinalSlide onNext={() => setCurrentSlide(0)} />;
      default: return null;
    }
  };

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      <PetalRain />
      <AnimatePresence mode="wait">
        <div key={currentSlide}>
          {renderSlide()}
        </div>
      </AnimatePresence>
    </main>
  );
};

export default App;
