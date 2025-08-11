// src/app/components/Domains.tsx
'use client';

import React, { useState } from 'react';
import DomainModal from './DomainModal';

const domains = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Blockchain',
  'Data Science',
  'Internet of Things (IoT)',
  'Auto-Tech',
  'Agriculture',
  'Waste Management',
  'Open Innovation',
];

const Domains = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center items-end md:items-start ml-4">
      <div className="grid grid-cols-2 gap-4">
        {domains.map((domain, idx) => (
          <button
            key={domain}
            className={`px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200 ${
              idx % 2 === 0 ? 'translate-x-2' : '-translate-x-2'
            }`}
            onClick={() => setSelectedDomain(domain)}
          >
            {domain}
          </button>
        ))}
      </div>

      {selectedDomain && (
        <DomainModal
          domain={selectedDomain}
          onClose={() => setSelectedDomain(null)}
        />
      )}
    </div>
  );
};

export default Domains;
