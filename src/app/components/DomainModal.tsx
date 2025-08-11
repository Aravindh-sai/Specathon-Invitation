// src/app/components/DomainModal.tsx
import React from 'react';

interface DomainModalProps {
  domain: string;
  onClose: () => void;
}

const domainDescriptions: Record<string, string> = {
  'Artificial Intelligence': 'AI is the simulation of human intelligence in machines.',
  'Cybersecurity': 'Cybersecurity protects systems from digital attacks.',
  'Blockchain': 'Blockchain is a decentralized digital ledger for recording transactions.',
  'Data Science': 'Data Science involves extracting insights from data.',
  'Internet of Things (IoT)': 'IoT connects physical devices to the internet for data exchange.',
  'Auto-Tech': 'Auto-Tech includes technologies that power modern vehicles.',
  'Agriculture': 'Tech in agriculture enhances productivity and sustainability.',
  'Waste Management': 'Waste Management focuses on efficient disposal and recycling.',
  'Open Innovation': 'Open Innovation leverages external and internal ideas to advance tech.',
};

const DomainModal: React.FC<DomainModalProps> = ({ domain, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md text-black shadow-lg">
        <h2 className="text-xl font-bold mb-4">{domain}</h2>
        <p className="mb-6 font-mono">{domainDescriptions[domain]}</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DomainModal;
    