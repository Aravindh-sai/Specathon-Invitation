// src/app/components/JarvisBG.tsx
'use client';

import Image from 'next/image';
import React from 'react';

interface JarvisBGProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const JarvisBG = ({ children, size = 'large' }: JarvisBGProps) => {
  const sizeClasses = {
    small: 'w-[20vh] h-[20vh]',
    medium: 'w-[25vh] h-[25vh]',
    large: 'w-[40vh] h-[40vh]'
  };

  return (
    <div className={`relative ${sizeClasses[size]} shrink-0`}>
      <Image
        src="/images/timerbg.png"
        alt="Jarvis Background"
        fill
        className="object-contain pointer-events-none"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default JarvisBG;
