// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import me from '@/image/me.jpg';
// import { Spotlight } from "@/components/ui/spotlight";
// import { FiLock } from "react-icons/fi";
// import { motion } from "framer-motion";

// function Homepage() {
//   const styles = {
//     backgroundColor: '#000b1e', // Dark navy background
//     backgroundImage: `
//       radial-gradient(circle at top right, rgba(50, 150, 255, 0.3), transparent 23%),
//       radial-gradient(circle at bottom right, rgba(50, 150, 255, 0.3), transparent 23%)
//     `,
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     position: 'relative',
//   };

//   return (
//     <div style={styles} className='main rounded-lg relative'>
//       <Spotlight className="spotlight-1" />
//       <div className="con_1 border-[3px] border-white h-[400px] w-[600px] mt-[65px] ml-[-430px] rounded-lg absolute bg-[rgba(0,0,0,0.3)]">
//         <div className="cobg flex justify-center items-center min-h-screen bg-gray-900">
//           <div 
//             className=" w-[200px] h-[45px] mt-[-523px] ml-[-330px] overflow-hidden z-0"
//             style={{
//               background: 'linear-gradient(60deg, rgba(0, 162, 255, 0.7), rgba(255, 255, 255, 0.7), rgba(0, 162, 255, 0.7))',
//               clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
//               boxShadow: '0 0 20px rgba(0, 162, 255, 0.5), inset 0 0 20px rgba(0, 162, 255, 0.3)',
//               backdropFilter: 'blur(5px)',
//               border: '3px solid white',
//               filter: 'drop-shadow(0 0 5px #00a2ff)',
//               transform: 'rotate(180deg)', // 180-degree rotation
//             }}
//           />
//         </div>
//         <h2 className="abf font-semibold mt-[-568px] ml-[75px] relative">About Me</h2>
//         <div className="intro text-white">
//           <span className="greeting text-5xl mt-[-30px] ml-[65px] block relative">Hi! I am</span>
//           <span className="name">Ashwin</span>
//         </div>
//         <motion.p
//           className="text-white text-[17px] mt-[130px] first-letter:ml-[40px] ml-[15px] leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           A passionate creator driven by the dreams that <span className="gradient-text">great things</span> start with a simple idea. With every line of code and the structure, I strive to turn <span className="gradient-text">visions</span> into reality. I’m constantly evolving, learning, and pushing limits to create <span className="gradient-text">creative</span> and wonderful websites with cool and elegant <span className="gradient-text">effects</span>.
//         </motion.p>
//       </div>
//       <div className="con_2 border-[3px] border-blue-800 h-[320px] w-[225px] mt-[70px] ml-[600px] rounded-xl absolute overflow-hidden">
//         <Image src={me} alt="MY PIC" className="me object-contain mt-[-15px] h-[325px] rounded-lg" priority />
//       </div>

//       {/* New shape at the top center */}
//       <div
//         className=" w-[500px] h-[45px] mt-[-515px] ml-[10px] overflow-hidden absolute"
//         style={{
//           background: 'linear-gradient(60deg, rgba(0, 162, 255, 0.7), rgba(255, 255, 255, 0.7), rgba(0, 162, 255, 0.7))',
//           clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
//           boxShadow: '0 0 20px rgba(0, 162, 255, 0.5), inset 0 0 20px rgba(0, 162, 255, 0.3)',
//           backdropFilter: 'blur(5px)',
//           border: '3px solid blue',
//           filter: 'drop-shadow(0 0 5px #00a2ff)',
//           transform: 'rotate(180deg)', // 180-degree rotation
//         }}
//       />
//       <button className='but_1 z-50 text-[20px] mt-[-516px] px-[8px] py-[2px] ml-[-260px] rounded-xl absolute'>About</button>
//       <button className='but_1 z-50 text-[20px] mt-[-516px] px-[8px] py-[2px] ml-[-100px] rounded-xl absolute'>Skills</button>
//       <button className='but_1 z-50 text-[20px] mt-[-516px] px-[8px] py-[2px] ml-[80px] rounded-xl absolute'>Projects</button>
//       <button className='but_1 z-50 text-[20px] mt-[-516px] px-[8px] py-[2px] ml-[280px] rounded-xl absolute'>Contact</button>
//     </div>
//   );
// }

// export default Homepage;
