import React from 'react';

export const SlideTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center relative z-10 fade-in">
      {children}
    </div>
  );
};