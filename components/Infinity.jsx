// "use client"
// import React from 'react';

// const AnimatedInfinityLoop = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
//       <div className="relative">
//         <div className="infinity-container">
//           <svg
//             width="800"
//             height="300"
//             viewBox="0 0 800 300"
//             className="infinity-svg"
//           >
//             <defs>
//               {/* Moving gradient that flows around the shape */}
//               <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#83A1FF">
//                   <animate
//                     attributeName="offset"
//                     values="0%;1%;0%"
//                     dur="4s"
//                     repeatCount="indefinite"
//                   />
//                 </stop>
//                 <stop offset="33%" stopColor="#674CD5">
//                   <animate
//                     attributeName="offset"
//                     values="0.33%;1.33%;0.33%"
//                     dur="4s"
//                     repeatCount="indefinite"
//                   />
//                 </stop>
//                 <stop offset="66%" stopColor="#FFAD12">
//                   <animate
//                     attributeName="offset"
//                     values="0.66%;1.66%;0.66%"
//                     dur="4s"
//                     repeatCount="indefinite"
//                   />
//                 </stop>
//                 <stop offset="100%" stopColor="#83A1FF">
//                   <animate
//                     attributeName="offset"
//                     values="1%;2%;1%"
//                     dur="4s"
//                     repeatCount="indefinite"
//                   />
//                 </stop>
//                 <animateTransform
//                   attributeName="gradientTransform"
//                   type="rotate"
//                   values="0 400 150;360 400 150"
//                   dur="3s"
//                   repeatCount="indefinite"
//                 />
//               </linearGradient>

//             </defs>

//             {/* Complete three-loop infinity shape as one continuous path */}
//             <path
//               d="M 120,150
//                  C 120,100 160,80 200,100
//                  C 240,120 260,140 280,150
//                  C 300,160 320,180 360,180
//                  C 400,180 420,160 440,150
//                  C 460,140 480,120 520,100
//                  C 560,80 600,100 600,150
//                  C 600,200 560,220 520,200
//                  C 480,180 460,160 440,150
//                  C 420,140 400,120 360,120
//                  C 320,120 300,140 280,150
//                  C 260,160 240,180 200,200
//                  C 160,220 120,200 120,150 Z"
//               fill="none"
//               stroke="url(#flowingGradient)"
//               strokeWidth="25"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               filter="url(#glow)"
//               className="animate-pulse-subtle"
//             />

//             {/* Additional overlapping paths for the three-loop effect */}

//           </svg>

//         </div>
//       </div>

//       <style jsx>{`
//         .infinity-container {
//           position: relative;
//           width: 800px;
//           height: 300px;
//         }

//         .infinity-svg {
//           width: 100%;
//           height: 100%;
//         }

//         .animate-pulse-subtle {
//           animation: subtlePulse 2s ease-in-out infinite;
//         }

//         @keyframes subtlePulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.9;
//           }
//         }

//         /* Hover effects for content circles */
//         .infinity-container:hover .absolute > div {
//           animation: floatUp 2s ease-in-out infinite;
//         }

//         @keyframes floatUp {
//           0%, 100% {
//             transform: translateY(-50%) scale(1);
//           }
//           50% {
//             transform: translateY(-55%) scale(1.02);
//           }
//         }

//         .infinity-container:hover .absolute > div:nth-child(1) {
//           animation-delay: 0s;
//         }

//         .infinity-container:hover .absolute > div:nth-child(2) {
//           animation-delay: 0.2s;
//         }

//         .infinity-container:hover .absolute > div:nth-child(3) {
//           animation-delay: 0.4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AnimatedInfinityLoop;

"use client";

import { useEffect, useRef, useState } from "react";


const SnakeAnimation = () => {
  const [speed, setSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const particlesRef = useRef(null);
  const snakePathRef = useRef(null);

  // Create background particles
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const colors = ["#83A1FF20", "#674CD550", "#FFAD1299"];

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full";

      const size = Math.random() * 20 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;

      // Animate the particle
      particle.animate(
        [
          {
            transform: "translateY(0px) rotate(0deg)",
            opacity: particle.style.opacity,
          },
          {
            transform: `translateY(${Math.random() * 100 - 50}px) rotate(${
              Math.random() * 360
            }deg)`,
            opacity: "0",
          },
        ],
        {
          duration: Math.random() * 10000 + 5000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );

      particlesContainer.appendChild(particle);
    }
  }, []);

  // Change animation speed
  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    if (snakePathRef.current) {
      snakePathRef.current.style.animationDuration = `${8 / newSpeed}s`;
    }
  };

  // Restart animation
  const restartAnimation = () => {
    const snakePath = snakePathRef.current;
    if (!snakePath) return;

    snakePath.style.animation = "none";
    void snakePath.offsetWidth; // Trigger reflow
    snakePath.style.animation = `snakeMove ${8 / speed}s linear infinite`;
  };

  // Toggle animation play state
  const toggleAnimation = () => {
    const snakePath = snakePathRef.current;
    if (!snakePath) return;

    if (snakePath.style.animationPlayState === "paused") {
      snakePath.style.animationPlayState = "running";
      setIsPaused(false);
    } else {
      snakePath.style.animationPlayState = "paused";
      setIsPaused(true);
    }
  };

  return (
    <div className=" text-white overflow-hidden relative p-4">
      {/* Particles container */}
     

   

      {/* Infinity symbol container */}
      <div className="w-full max-w-7xl h-full relative z-10">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <defs>
            {/* Glow effect filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
                result="glow"
              />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>

            {/* Snake gradient */}
            <linearGradient
              id="snakeGradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="800"
              y2="400"
            >
              <stop offset="0%" stopColor="#83A1FF" />
              <stop offset="50%" stopColor="#674CD5" />
              <stop offset="100%" stopColor="#FFAD12" />
            </linearGradient>
          </defs>

          {/* Background infinity symbol */}
          <path
            className="fill-none stroke-white/10 stroke-[20px]"
            d="M 120,200 
               C 120,150 160,130 200,150 
               C 240,170 260,190 280,200
               C 300,210 320,230 360,230
               C 400,230 420,210 440,200
               C 460,190 480,170 520,150
               C 560,130 600,150 600,200
               C 600,250 560,270 520,250
               C 480,230 460,210 440,200
               C 420,190 400,170 360,170
               C 320,170 300,190 280,200
               C 260,210 240,230 200,250
               C 160,270 120,250 120,200 Z"
          />

          {/* Snake animation path */}
          <path
            ref={snakePathRef}
            className="fill-none stroke-[url(#snakeGradient)] stroke-[20px] stroke-linecap-round animate-snakeMove"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
              filter: "url(#glow)",
              animationDuration: `${8 / speed}s`,
            }}
            d="M 120,200 
               C 120,150 160,130 200,150 
               C 240,170 260,190 280,200
               C 300,210 320,230 360,230
               C 400,230 420,210 440,200
               C 460,190 480,170 520,150
               C 560,130 600,150 600,200
               C 600,250 560,270 520,250
               C 480,230 460,210 440,200
               C 420,190 400,170 360,170
               C 320,170 300,190 280,200
               C 260,210 240,230 200,250
               C 160,270 120,250 120,200 Z"
          />
        </svg>
      </div>

      
      {/* Styles */}
      <style jsx>{`
        @keyframes snakeMove {
          0% {
            stroke-dashoffset: 2000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-snakeMove {
          animation: snakeMove 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SnakeAnimation;
