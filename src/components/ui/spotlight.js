import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({ className }) => {
  return (
    <div>
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[200%] w-[70%] lg:w-[80%] opacity-0",  // Increased height to 400% and reduced width to 90%
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      style={{
        top: '-22%',
        right: '-5%',
        transform: 'rotate(-25deg)',
      }}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="750"
          cy="250"
          rx="1500"
          ry="50"
          transform="matrix(-0.966025 -0.5 -1 0.766025 3631 2291)"
          fill="rgb(100, 180, 255)"
          fillOpacity="0.90"
        ></ellipse>
      </g>

      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2900.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[200%] w-[70%] lg:w-[80%] opacity-0",  // Increased height to 400% and reduced width to 90%
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      style={{
        top: '-250px',
        right: '100px',
        transform: 'rotate(-30deg)',
      }}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="700" //intensity
          cy="290"
          rx="1500"//height 
          ry="45"
          transform="matrix(-0.966025 -0.5 -1 0.766025 3631 2291)"
          fill="rgb(100, 180, 255)"
          fillOpacity="0.90"
        ></ellipse>
      </g>

      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2900.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
    
    </div>
  );
};
