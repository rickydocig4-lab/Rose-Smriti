import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Petal: React.FC<{ delay: number }> = ({ delay }) => {
  const startX = useMemo(() => Math.random() * 100, []);
  const size = useMemo(() => 15 + Math.random() * 25, []);
  const duration = useMemo(() => 12 + Math.random() * 15, []);
  const rotation = useMemo(() => Math.random() * 360, []);
  const swingRange = useMemo(() => 5 + Math.random() * 15, []);

  return (
    <motion.div
      initial={{ y: -50, x: `${startX}vw`, opacity: 0, rotate: rotation, scale: 0.8 }}
      animate={{
        y: '110vh',
        opacity: [0, 0.7, 0.7, 0],
        rotate: rotation + 720,
        x: [`${startX}vw`, `${startX + swingRange}vw`, `${startX - swingRange}vw`, `${startX}vw`],
        scale: [0.8, 1, 1, 0.8]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
      className="fixed pointer-events-none text-red-700/40"
      style={{ fontSize: size }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        {/* Softer, more organic petal shape */}
        <path d="M12,2 C12,2 4,10 4,15 C4,19 7,22 12,22 C17,22 20,19 20,15 C20,10 12,2 12,2 Z" />
      </svg>
    </motion.div>
  );
};

export const PetalRain: React.FC = () => {
  const petals = useMemo(() => Array.from({ length: 40 }).map((_, i) => i), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((i) => (
        <Petal key={i} delay={i * 0.4} />
      ))}
    </div>
  );
};