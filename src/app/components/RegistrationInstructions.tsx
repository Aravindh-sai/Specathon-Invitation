'use client';

import React from 'react';

interface RegistrationInstructionsProps {
  className?: string;
}

export default function RegistrationInstructions({ className = '' }: RegistrationInstructionsProps) {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/xR19Js1WV2ktsk8t5', '_blank');
  };

  return (
    <section className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative">
        {/* Holographic Board Container */}
      <div className="relative bg-black/60 backdrop-blur-md border border-cyan-400/50 rounded-2xl p-6 md:p-8 lg:p-12 shadow-[0_0_30px_rgba(0,255,255,0.3),0_0_60px_rgba(0,255,255,0.1)]">

        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/20"></div>
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(0,255,255,0.1)]"></div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-center mb-6 md:mb-8 text-cyan-300 
                         [text-shadow:0_0_10px_rgba(0,255,255,0.8),0_0_20px_rgba(0,255,255,0.4)]">
            📢 Registration Instructions
          </h2>

          {/* Registration Steps */}
          <ol className="space-y-4 md:space-y-6 text-gray-200 font-mono text-sm md:text-base">
            <li className="flex items-start space-x-3 md:space-x-4">
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-cyan-500/20 border border-cyan-400 rounded-full 
                               flex items-center justify-center text-cyan-300 font-bold text-xs md:text-sm">1</span>
              <div className="flex-1">
                <span className="text-cyan-300 font-semibold">Click the "Register Now" button</span> below and complete the Google Form.
              </div>
            </li>

            <li className="flex items-start space-x-3 md:space-x-4">
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-cyan-500/20 border border-cyan-400 rounded-full 
                               flex items-center justify-center text-cyan-300 font-bold text-xs md:text-sm">2</span>
              <div className="flex-1">
                <span className="text-cyan-300 font-semibold">Prepare your abstract</span> following the template provided in the form.
              </div>
            </li>

            <li className="flex items-start space-x-3 md:space-x-4">
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-cyan-500/20 border border-cyan-400 rounded-full 
                               flex items-center justify-center text-cyan-300 font-bold text-xs md:text-sm">3</span>
              <div className="flex-1">
                <span className="text-cyan-300 font-semibold">Shortlisting</span> – If your abstract is selected, our volunteer team will contact you.
              </div>
            </li>

            <li className="flex items-start space-x-3 md:space-x-4">
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-cyan-500/20 border border-cyan-400 rounded-full 
                               flex items-center justify-center text-cyan-300 font-bold text-xs md:text-sm">4</span>
              <div className="flex-1">
                <span className="text-cyan-300 font-semibold">Complete payment</span> of the registration fee to confirm your participation.
              </div>
            </li>

            <li className="flex items-start space-x-3 md:space-x-4">
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-cyan-500/20 border border-cyan-400 rounded-full 
                               flex items-center justify-center text-cyan-300 font-bold text-xs md:text-sm">5</span>
              <div className="flex-1">
                <span className="text-cyan-300 font-semibold">Team support</span> – Your team will be assigned a dedicated volunteer for updates and queries.
              </div>
            </li>
          </ol>

          {/* Register Button */}
          <div className="mt-8 md:mt-10 flex justify-center">
            <button
              onClick={handleRegisterClick}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 
                       text-white font-bold text-base md:text-lg rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.5)]
                       hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] hover:scale-105 
                       transform transition-all duration-300 ease-out"
            >
              <span className="relative z-10">🚀 Register Now</span>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
          </div>
        </div>

        {/* Background grid effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 rounded-2xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                        from-cyan-900/20 via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
