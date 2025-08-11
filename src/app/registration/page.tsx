'use client';

import React from 'react';
import RegistrationInstructions from '@/app/components/RegistrationInstructions';
import Link from 'next/link';

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <Link 
            href="/" 
            className="text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <RegistrationInstructions className="w-full" />
      </div>
    </main>
  );
}
