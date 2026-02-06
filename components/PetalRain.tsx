import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Petal: React.FC<{ delay: number }> = ({ delay }) => {
  const startX = useMemo(() => Math.random() * 100, []);
  const size = useMemo(() => 12 + Math.random() * 20, []);
  const duration = useMemo(() => 10 + Math.random() * 10, []);
  const rotation = useMemo(() => Math.random() * 360, []);
  const swingRange = useMemo(() => 10 + Math.random() * 20, []);
  const opacity = useMemo(() => 0.4 + Math.random() * 0.4, []);

  return (
    <motion.div
      initial={{ y: -50, x: `${startX}vw`, opacity: 0, rotate: rotation, scale: 0.5 }}
      animate={{
        y: '110vh',
        opacity: [0, opacity, opacity, 0],
        rotate: rotation + (Math.random() > 0.5 ? 360 : -360),
        x: [
          `${startX}vw`, 
          `${startX + swingRange}vw`, 
          `${startX - swingRange}vw`, 
          `${startX + (swingRange / 2)}vw`
        ],
        scale: [0.5, 1, 1, 0.7]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className="fixed pointer-events-none text-red-600"
      style={{ fontSize: size }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" style={{ transform: 'scale(1.2) rotate(15deg)' }} />
        <path d="M12,2 C12,2 4,10 4,15 C4,19 7,22 12,22 C17,22 20,19 20,15 C20,10 12,2 12,2 Z" fillOpacity="0.8" />
      </svg>
    </motion.div>
  );
};

export const PetalRain: React.FC = () => {
  const petals = useMemo(() => Array.from({ length: 50 }).map((_, i) => i), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((i) => (
        <Petal key={i} delay={i * 0.3} />
      ))}
    </div>
  );
};