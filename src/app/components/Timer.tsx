// src/app/components/Timer.tsx
'use client';

import React, { useEffect, useState } from 'react';

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-09-19T09:00:00+05:30'); // IST timezone
    const now = new Date();
    const difference = +targetDate - +now;

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div 
        className="text-white text-sm md:text-base lg:text-lg font-mono font-bold text-center"
        style={{
          textShadow: '0 0 10px rgba(0, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5)'
        }}
      >
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>
    </div>
  );
};

export default Timer;
