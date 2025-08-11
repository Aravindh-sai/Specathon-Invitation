'use client';

import React from 'react';
import FuturisticButton from '@/app/components/FuturisticButton';

const FuturisticDemoPage: React.FC = () => {
  const handleClick = (domain: string) => {
    alert(`Selected domain: ${domain}`);
  };

  const domains = [
    'Artificial Intelligence',
    'Cybersecurity',
    'Blockchain',
    'Data Science',
    'IoT',
    'Auto-Tech',
    'Agriculture',
    'Waste Management',
    'Open Innovation'
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="space-y-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Futuristic Button Component Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <FuturisticButton
              key={index}
              text={domain}
              onClick={() => handleClick(domain)}
            />
          ))}
        </div>
        
        <div className="text-center text-gray-400 mt-8">
          <p>Hover over the buttons to see the neon glow effect and scaling animation</p>
        </div>
      </div>
    </div>
  );
};

export default FuturisticDemoPage;
