import React, { useMemo } from 'react';

const Petal: React.FC<{ index: number }> = ({ index }) => {
  const style = useMemo(() => {
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 15;
    const delay = index * 0.4;
    const size = 10 + Math.random() * 20;
    const opacity = 0.3 + Math.random() * 0.5;
    
    return {
      left: `${left}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: opacity,
    };
  }, [index]);

  return (
    <div 
      className="petal fixed top-[-50px] pointer-events-none text-red-600"
      style={style}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg) translateX(0); opacity: 0; }
          10% { opacity: var(--opacity, 0.8); }
          90% { opacity: var(--opacity, 0.8); }
          100% { transform: translateY(110vh) rotate(720deg) translateX(50px); opacity: 0; }
        }
        .petal {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export const PetalRain: React.FC = () => {
  const petals = useMemo(() => Array.from({ length: 40 }).map((_, i) => i), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
};