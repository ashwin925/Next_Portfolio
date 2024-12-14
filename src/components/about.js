import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import me from '@/image/me.jpg';
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Skills from '@/components/skills';
import Navbar from '@/components/ui/navbar';
//import ContentLoader from 'react-content-loader';

function About() {
  
  const [scrambledText, setScrambledText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);
  const [scrambleComplete, setScrambleComplete] = useState(false);  // New state to track completion
  const intervalRef = useRef(null);
  const TARGET_TEXT = "A passionate creator driven by the dreams that great things start with a simple idea. With every line of code and the structure, I strive to turn visions into reality. I’m constantly evolving, learning, and pushing limits to create creative and wonderful websites with cool and elegant effects.";
  const CYCLES_PER_LETTER = 3;  // Number of cycles each letter will scramble through
  const TARGET_TIME = 2000; // 4 seconds to complete the effect
  const SHUFFLE_TIME = TARGET_TIME / (TARGET_TEXT.length * CYCLES_PER_LETTER); // Calculate interval time for each shuffle
  const CHARS = "!#$%^&*():l10o;|,.<>/?";
  // Function to start the scrambling effect
  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");
      setScrambledText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();  // Stop the scrambling effect when it's complete
      }
    }, SHUFFLE_TIME);
  };
  // Function to stop the scrambling effect and set the final text
  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setScrambledText(TARGET_TEXT);  // Finalize the text
    setIsScrambling(false);  // Stop the scrambling
  };
  // Start scrambling the text when the component is mounted
  useEffect(() => {
    scramble();
    // Stop scrambling after 4 seconds (TARGET_TIME)
    const timeoutId = setTimeout(() => {
      stopScramble();
    }, TARGET_TIME);
    return () => clearTimeout(timeoutId);  // Clean up the timeout
  }, []);
  // Handler when the framer-motion animation is complete
  const handleAnimationComplete = () => {
    setScrambleComplete(true);  // Set scrambling completion state to true
  };
  // Styles for the page
  const styles = {
    backgroundColor: '#000b1e', // Dark navy background
    backgroundImage: `
      radial-gradient(circle at top right, rgba(50, 150, 255, 0.3), transparent 23%),
      radial-gradient(circle at bottom right, rgba(50, 150, 255, 0.3), transparent 23%)`,
    height: '410vh',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  };
  const gradientWords = ["passionate","dreams","code"]; // Words that should have the live gradient effect
  return (
    <div style={styles} className='main rounded-lg'>
      <div className=' absolute'>
      <Navbar />
      </div>
      <Spotlight className="spotlight-1" />
      <div className="con_1 border-[3px] border-white h-[400px] w-[600px] mt-[130px] ml-[-320px] rounded-lg relative bg-[rgba(0,0,0,0.3)]">
        <div className="cobg flex justify-center items-center min-h-screen bg-gray-900">
          <div 
            className=" w-[200px] h-[45px] mt-[-523px] ml-[-330px] overflow-hidden z-0"
            style={{
              background: 'linear-gradient(60deg, rgba(0, 162, 255, 0.7), rgba(255, 255, 255, 0.7), rgba(0, 162, 255, 0.7))',
              clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
              boxShadow: '0 0 20px rgba(0, 162, 255, 0.5), inset 0 0 20px rgba(0, 162, 255, 0.3)',
              backdropFilter: 'blur(5px)',
              border: '3px solid white',
              filter: 'drop-shadow(0 0 5px #00a2ff)',
              transform: 'rotate(180deg)', 
            }}
          ></div>
        </div>
        <h2 className="abf font-semibold mt-[-568px] ml-[75px] relative">About Me</h2>
        <div className="intro text-white">
          <span className="greeting text-5xl mt-[-30px] ml-[65px] block relative">Hi! I&apos;m</span>
          <span className="name">Ashwin</span>
        </div>
        <motion.p
          className="text-white text-[17px] mt-[130px] first-letter:ml-[40px] ml-[15px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrambling ? 0.5 : 1 }}
          transition={{ duration: TARGET_TIME / 1000 }}  
          onAnimationComplete={handleAnimationComplete}>  
          {/* Render scrambled text initially */}
          {scrambledText.split(" ").map((word, index) => {
            // Check if the word should have the gradient effect
            const isGradient = gradientWords.includes(word.toLowerCase());
            return (
              <span 
                key={index} 
                className={isGradient && scrambleComplete ? "gradient-text" : ""}  // Apply the gradient class
              >
                {word}{" "}
              </span>
            );
          })}
        </motion.p>
      </div>
      <div className="con_2 border-[3px] border-cyan-400 h-[320px] w-[225px] mt-[170px] ml-[630px] rounded-xl absolute overflow-hidden">
        <Image src={me} alt="MY PIC" className="me object-contain mt-[-15px] h-[325px] rounded-lg" priority />
      </div>
      {/* Main */}
      
      

      <div className=' m-[600px] w-[1200px] absolute'>
      <Skills />
      </div>
    </div>

  );
}
export default About;
