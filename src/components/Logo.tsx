import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex gap-1">
        {['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#D2691E', '#8B4513', '#A0522D'].map((color, index) => (
          <div
            key={index}
            className="w-8 h-8"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <h1 className="mt-2 text-2xl font-semibold text-[#8B4513]">
        trueskin.app
      </h1>
      <p className="mt-1 text-neutral-600">AI-Powered Skincare Analysis</p>
    </div>
  );
};