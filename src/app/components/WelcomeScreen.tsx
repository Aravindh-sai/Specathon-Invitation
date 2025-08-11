'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import '@fontsource/orbitron/700.css'; // You can also try 400, 600, 900 weights


export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Welcome to Specathon 2025!";

  useEffect(() => {
    // Typewriter animation
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // Wait a bit after typing completes before transitioning
        setTimeout(() => {
          setShowWelcome(false);
          onComplete();
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showWelcome && (
        <>
          {/* <audio src="/audio/bgm.mp3" autoPlay loop style={{ display: 'none' }} /> */}
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold"
              style={{
                fontFamily: 'Orbitron, monospace',
                color: '#ffffff',
                textShadow: `
                  0 0 5px #fff,
                  0 0 10px rgba(66, 157, 194, 1),
                  0 0 15px rgba(66, 157, 194, 1),
                  0 0 20px rgba(66, 157, 194, 1),
                  0 0 25px rgba(66, 157, 194, 1),
                  0 0 30px rgba(66, 157, 194, 1),
                  0 0 35px rgba(66, 157, 194, 1)
                `,
                animation: 'glow 4s ease-in-out infinite alternate'
              }}
            >
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
