"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";
import { MovingBorder } from "@/components/ui/moving-border";
import pro1 from '@/image/pro1.png';
import pro2 from '@/image/pro2.png';
import pro3 from '@/image/pro3.png';
import pro4 from '@/image/pro4.png';
import pro5 from '@/image/pro5.png';
import Navbar from '@/components/ui/navbar';

const images = [
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
];

export default function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex mt-[-1080px] items-center justify-center bg-gradient-to-br from-navy-900 to-navy-700">
      <div className='mt-[-630px] absolute'>
      <Navbar />
      </div>
    <div className="relative w-[1100px] h-[470px] bg-navy-800 rounded-3xl shadow-2xl overflow-hidden border-[3px] custom-border">
      <style jsx>{`
       .custom-border {
          border-image: linear-gradient(45deg, #00d4ff, #6a0dad, #ff007a) 1;
         }`}</style>        <Vortex
          backgroundColor="black"
          className="absolute inset-0 flex items-center justify-center"
        />
        <div className="absolute pt-[45px] inset-0 flex items-center justify-center">
          {images.map((src, index) => {
            const position = (index - activeIndex + images.length) % images.length;
            const isActive = position === 1;

            return (
              <div
                key={index}
                className="absolute w-[340px] h-[220px] transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${(position - 1) * 380}px) scale(${isActive ? 1.2 : 0.9}) ${
                    isActive ? "translateY(-20px)" : ""
                  }`,
                  zIndex: isActive ? 10 : 5,
                  opacity: [0, 1, 2].includes(position) ? 0.8 : 0.5,
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 group">
                  {/* First Moving Border (Clockwise) */}
                  <MovingBorder duration={3000} rx="5px" ry="5px" direction="clockwise">
                    <div className="h-20 w-20 opacity-[0.5] bg-[radial-gradient(var(--cyan-500)_40%,transparent_60%)]" />
                  </MovingBorder>

                  {/* Second Moving Border (Counterclockwise) */}
                  <MovingBorder duration={2500} rx="5px" ry="5px" direction="counterclockwise">
                    <div className="h-20 w-20 opacity-[0.5] bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]" />
                  </MovingBorder>

                  <MovingBorder duration={3500} rx="5px" ry="5px" direction="counterclockwise">
                    <div className="h-20 w-20 opacity-[0.5] bg-[radial-gradient(var(--yellow-500)_40%,transparent_60%)]" />
                  </MovingBorder>

                  <MovingBorder duration={2000} rx="5px" ry="5px" direction="counterclockwise">
                    <div className="h-20 w-20 opacity-[0.5] bg-[radial-gradient(var(--lime-500)_40%,transparent_60%)]" />
                  </MovingBorder>

                  <div className="absolute inset-[3px] rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-lg font-bold">Image {index + 1}</h3>
                      <p className="text-sm">Description for Image {index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
