
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Use React.FC to properly type the component and include standard React props like 'key'
const Petal: React.FC<{ delay: number }> = ({ delay }) => {
  const startX = useMemo(() => Math.random() * 100, []);
  const size = useMemo(() => 10 + Math.random() * 20, []);
  const duration = useMemo(() => 10 + Math.random() * 10, []);
  const rotation = useMemo(() => Math.random() * 360, []);

  return (
    <motion.div
      initial={{ y: -20, x: `${startX}vw`, opacity: 0, rotate: rotation }}
      animate={{
        y: '110vh',
        opacity: [0, 1, 1, 0],
        rotate: rotation + 360,
        x: [`${startX}vw`, `${startX + (Math.random() * 10 - 5)}vw`]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
      className="fixed pointer-events-none text-red-600/60"
      style={{ fontSize: size }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
};

export const PetalRain: React.FC = () => {
  const petals = useMemo(() => Array.from({ length: 30 }).map((_, i) => i), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((i) => (
        <Petal key={i} delay={i * 0.5} />
      ))}
    </div>
  );
};
