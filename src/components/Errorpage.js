'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import skullz from '../image/skullz.jpg';

const ErrorPage = () => {
  const [countdown, setCountdown] = useState(404);
  const [randomID, setRandomID] = useState('b04ln:95nf83bv83rbf9h38h8vh');
  const [isEffectsActive, setIsEffectsActive] = useState(false);
  const [notFoundText, setNotFoundText] = useState('NOT_FOUND');
  const [containerColor, setContainerColor] = useState('white');

  const generateRandomID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 25 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  };

  useEffect(() => {
    const startEffects = setTimeout(() => {
      setIsEffectsActive(true);

      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 202) {
            setRandomID(generateRandomID());
            return prev - 1;
          } else {
            clearInterval(countdownInterval);
            setNotFoundText('FOUND');
            setIsEffectsActive(false); // Stop effects when countdown ends
            return 202;
          }
        });
      }, 20);

      const colorChangeInterval = setInterval(() => {
        setContainerColor((prev) => (prev === 'white' ? 'black' : 'white'));
      }, 100);

      return () => {
        clearInterval(countdownInterval);
        clearInterval(colorChangeInterval);
      };
    }, 3000);

    return () => clearTimeout(startEffects);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen relative ${isEffectsActive ? 'multi-directional-movement' : ''}`}>
      {/* 404 Error Container */}
      <div
        className={`py-12 pt-[40px] pb-[40px] pl-[60px] pr-[55px] rounded-lg shadow-md z-10 transition-colors duration-100`}
        style={{
          backgroundColor: containerColor,
          color: containerColor === 'white' ? 'black' : 'white',
        }}
      >
        <h1 className={`text-4xl font-bold ${isEffectsActive ? 'glitch-text' : ''}`}>
          {countdown}: {notFoundText}
        </h1>
        <p className="mt-4">Code: `NOT_FOUND`</p>
        <p className="mt-2">ID: `{randomID}`</p>
        <button
          className={`mt-8 px-4 py-2 rounded-md font-medium transition-colors duration-100 ${
            containerColor === 'white' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
          }`}
        >
          Click here to learn more about this error.
        </button>
      </div>

      {/* Image component wrapper */}
      {isEffectsActive && (
        <div
          className={`absolute inset-0 z-0 ${isEffectsActive ? 'skull-flicker' : ''}`}
          style={{
            opacity: 0.8,
            transition: 'opacity 0.15s ease',
          }}
        >
          <Image src={skullz} alt="skull-bg" className="object-cover w-full h-full" priority fill />
        </div>
      )}

      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(5px, -5px); }
          60% { transform: translate(-5px, -5px); }
          80% { transform: translate(5px, 5px); }
          100% { transform: translate(0); }
        }

        @keyframes rgbShift {
          0% { text-shadow: -2px 0 red, 2px 0 cyan; }
          33% { text-shadow: 2px 0 red, -2px 0 blue; }
          66% { text-shadow: -2px 0 green, 2px 0 yellow; }
          100% { text-shadow: 2px 0 blue, -2px 0 green; }
        }

        .glitch-text {
          animation: glitch 0.05s infinite, rgbShift 0.01s infinite;
        }

        @keyframes multiDirectionalMovement {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-20px, 15px); }
          50% { transform: translate(20px, -15px); }
          75% { transform: translate(-20px, -15px); }
          100% { transform: translate(20px, 15px); }
        }

        @keyframes flickerOpacity {
          0% { opacity: 1; }
          25% { opacity: 0.8; }
          50% { opacity: 0.9; }
          75% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        .multi-directional-movement {
          animation: multiDirectionalMovement 0.2s infinite, flickerOpacity 0.1s infinite;
        }

        @keyframes skullFlicker {
          0% { opacity: 0.8; }
          25% { opacity: 0.6; }
          50% { opacity: 0.9; }
          75% { opacity: 0.7; }
          100% { opacity: 0.8; }
        }

        .skull-flicker {
          animation: skullFlicker 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
