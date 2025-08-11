'use client';

import React, { useState, useEffect } from 'react';
import WelcomeScreen from '@/app/components/WelcomeScreen';
import ClubLogo from '@/app/components/ClubLogo';
import CollegeLogo from '@/app/components/CollegeLogo';
import Image from 'next/image';
import JarvisBG from '@/app/components/JarvisBG';
import Timer from '@/app/components/Timer';
import { FuturisticButton } from '@/app/components/FuturisticButton';
import RegistrationInstructions from '@/app/components/RegistrationInstructions';
import Footer from '@/app/components/footer';
// Dashboard animations removed for static appearance

const domains = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Blockchain',
  'Data Science',
  'Internet of Things (IoT)',
  'Auto-Tech',
  'Agriculture',
  'Waste Management',
  'Open Innovation'
];

const domainDetails: Record<string, string> = {
  'Artificial Intelligence': `Create smart solutions that automate tasks, predict outcomes, or analyze data using machine learning, natural language processing, or computer vision. Think about building AI-powered assistants, recommendation systems, or intelligent automation tools.`,

  'Cybersecurity': `Design tools or systems to protect digital assets, detect vulnerabilities, or prevent cyber attacks. You can work on secure authentication methods, threat detection algorithms, or privacy-enhancing applications.`,

  'Blockchain': `Develop decentralized applications, smart contracts, or transparent record-keeping systems using blockchain technology. Focus on secure transactions, trustless systems, or innovative ways to use distributed ledgers in finance, supply chain, or identity management.`,

  'Data Science': `Analyze complex datasets to uncover insights and trends that drive decisions. Build predictive models, visual dashboards, or data-driven products that solve real-world problems or optimize processes.`,

  'Internet of Things (IoT)': `Create interconnected devices or systems that monitor and control environments remotely. Build smart home devices, industrial sensors, or IoT-based health trackers that collect and act on real-time data.`,

  'Auto-Tech': `Innovate in automotive tech by developing autonomous vehicle features, connected car systems, or electric vehicle enhancements. Work on safety systems, navigation, or vehicle-to-everything (V2X) communication solutions.`,

  'Agriculture': `Design tech to improve farming efficiency and sustainability. Build precision farming tools, crop monitoring apps, or automated irrigation systems that help farmers save resources and increase yields.`,

  'Waste Management': `Create smart waste sorting, tracking, or recycling solutions to reduce environmental impact. Think of apps or devices that encourage sustainable disposal, optimize collection routes, or promote circular economy practices.`,

  'Open Innovation': `Collaborate openly to ideate and prototype novel solutions beyond traditional boundaries. Use crowdsourcing, APIs, or partnerships to accelerate innovation in any field or combine multiple domains creatively.`
};

export default function Home() {
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  // Animation state removed for static appearance

  return (
    <>
      {!welcomeDone && <WelcomeScreen onComplete={() => setWelcomeDone(true)} />}

      {welcomeDone && (
        <>
          <audio src="/audio/bgm.mp3" autoPlay loop style={{ display: 'none' }} />
          <main className="min-h-screen bg-black text-white flex flex-col items-center p-4 md:p-8">
            <div className={`relative w-full max-w-[1200px] h-auto border-2 border-blue-500 rounded-xl pt-4 pb-6 px-4 md:pt-6 md:pb-10 md:px-8 backdrop-blur-md bg-black/30 shadow-[0_0_30px_#3b82f6] flex flex-col justify-start gap-6 my-8`}>

              {/* Header Row */}
              <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">

                {/* College Logo (Desktop) */}
                <div className="hidden md:flex items-center justify-center w-[15%] max-w-[100px]">
                  <CollegeLogo />
                </div>

                {/* Center Banner (Desktop) */}
                <div className="hidden md:block relative w-[60%] max-w-[500px] aspect-[4/1]">
                  <Image
                    src="/images/specathonlogo.png"
                    alt="Specathon Header"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Club Logo (Desktop) */}
                <div className="hidden md:flex items-center justify-center w-[15%] max-w-[100px]">
                  <ClubLogo />
                </div>

                {/* Mobile Header */}
                <div className="flex md:hidden flex-col gap-4 w-full">
                  <div className="flex justify-between w-full px-4">
                    <div className="w-[24%] max-w-[80px]">
                      <CollegeLogo />
                    </div>
                    <div className="w-[24%] max-w-[80px]">
                      <ClubLogo />
                    </div>
                  </div>
                  <div className="relative w-full h-[12vh] max-w-[90%] mx-auto">
                    <Image
                      src="/images/specathonlogo.png"
                      alt="Specathon Header"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Domains + Timer Row */}
              <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">

                {/* Left: Instruction + Domains */}
                <div className="flex flex-col items-center max-w-[600px] space-y-6 mt-6 w-full">
                  {/* Instruction */}
                  <div className="text-cyan-300 bg-black/30 p-4 font-mono text-sm md:text-base w-full text-center shadow-md animate-pulse">
                    💻 <strong>Access Terminal</strong>:<br />
                    Initiate a domain protocol by pressing the glowing buttons.<br />
                    Your mission data will be deployed.
                  </div>

                  {/* Desktop Domains in Rows */}
                  <div className="hidden md:flex flex-col space-y-6 w-full items-center">
                    <div className="flex flex-row gap-6 flex-wrap justify-center w-full">
                      {domains.slice(0, 3).map((domain, index) => (
                        <FuturisticButton
                          key={index}
                          text={domain}
                          onClick={() => setSelectedDomain(domain)}
                          className="text-sm px-5 py-2"
                        />
                      ))}
                    </div>
                    <div className="flex flex-row gap-6 flex-wrap justify-center w-full">
                      {domains.slice(3, 6).map((domain, index) => (
                        <FuturisticButton
                          key={index + 3}
                          text={domain}
                          onClick={() => setSelectedDomain(domain)}
                          className="text-sm px-5 py-2"
                        />
                      ))}
                    </div>
                    <div className="flex flex-row gap-6 flex-wrap justify-center w-full">
                      {domains.slice(6, 9).map((domain, index) => (
                        <FuturisticButton
                          key={index + 6}
                          text={domain}
                          onClick={() => setSelectedDomain(domain)}
                          className="text-sm px-5 py-2"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mobile Domains in List */}
                  <div className="flex md:hidden flex-col space-y-4 items-center">
                    {domains.map((domain, index) => (
                      <FuturisticButton
                        key={index}
                        text={domain}
                        onClick={() => setSelectedDomain(domain)}
                        className="text-sm px-4 py-2 w-full max-w-[280px] text-center"
                      />
                    ))}
                  </div>
                </div>

              {/* Right: Timer */}
                <div className="flex items-center self-center mx-auto">
                  <JarvisBG size="large">
                    <Timer />
                  </JarvisBG>
                </div>
              </div>

              {/* Modal */}
              {selectedDomain && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                  <div className="bg-gray-900 border border-blue-500 rounded-lg p-6 max-w-md w-full shadow-2xl">
                    <h2 className="text-xl font-bold mb-4 text-blue-400">{selectedDomain}</h2>
                    <p className="text-sm text-gray-300 mb-6 whitespace-pre-line font-mono">
                      {domainDetails[selectedDomain]}
                    </p>
                    <div className="text-right">
                      <button
                        onClick={() => setSelectedDomain(null)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Registration Instructions Section */}
            <div className="w-full max-w-6xl mx-auto mt-16 mb-16 px-4">
              <RegistrationInstructions />
            </div> 
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
