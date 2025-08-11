'use client';

import React from 'react';
import FuturisticButton from './FuturisticButton';

const FuturisticButtonDemo: React.FC = () => {
  const handleClick = () => {
    alert('Futuristic button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Futuristic Button Component
        </h1>
        
        <div className="flex flex-col items-center space-y-6">
          <FuturisticButton 
            text="Launch Mission" 
            onClick={handleClick} 
          />
          
          <FuturisticButton 
            text="Activate System" 
            onClick={handleClick} 
          />
          
          <FuturisticButton 
            text="Enter Portal" 
            onClick={handleClick} 
          />
        </div>
        
        <div className="text-center text-gray-400 mt-8">
          <p>Hover over the buttons to see the neon glow effect</p>
        </div>
      </div>
    </div>
  );
};

export default FuturisticButtonDemo;
