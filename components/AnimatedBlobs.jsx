"use client";
import { motion } from "framer-motion";
import React from "react";

const AnimatedBlobBackground = () => {
  // Faster animations with more dynamic movements
  const blobVariants1 = {
    animate: {
      scale: [1, 1.3, 0.8, 1.2, 1],
      x: ["0%", "15%", "-10%", "12%", "0%"],
      y: ["0%", "-12%", "8%", "-15%", "0%"],
      rotate: [0, 25, -15, 30, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const blobVariants2 = {
    animate: {
      scale: [1.2, 0.7, 1.4, 0.9, 1.2],
      x: ["0%", "-18%", "12%", "-20%", "0%"],
      y: ["0%", "15%", "-10%", "18%", "0%"],
      rotate: [0, -30, 20, -25, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const blobVariants3 = {
    animate: {
      scale: [0.8, 1.5, 0.6, 1.3, 0.8],
      x: ["0%", "20%", "-15%", "25%", "0%"],
      y: ["0%", "-20%", "15%", "-22%", "0%"],
      rotate: [0, 40, -25, 35, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const blobVariants4 = {
    animate: {
      scale: [1.1, 0.9, 1.6, 0.8, 1.1],
      x: ["0%", "-25%", "18%", "-28%", "0%"],
      y: ["0%", "22%", "-18%", "25%", "0%"],
      rotate: [0, -35, 22, -40, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }
    }
  };

  const blobVariants5 = {
    animate: {
      scale: [0.9, 1.2, 0.7, 1.1, 0.9],
      x: ["0%", "12%", "-8%", "15%", "0%"],
      y: ["0%", "-8%", "12%", "-10%", "0%"],
      rotate: [0, 20, -12, 25, 0],
      transition: {
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  // Animated background gradients
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(180deg, #FFE8C8 0%, #DCE1F5 100%)",
        // "linear-gradient(180deg, #CEC8FF 0%, #DCE1F5 100%)", 
        // "linear-gradient(180deg, #C8DDFF 0%, #DCE1F5 100%)",
        // "linear-gradient(180deg, #FFC8E8 0%, #DCE1F5 100%)",
        // "linear-gradient(180deg, #C8FFE8 0%, #DCE1F5 100%)",
        // "linear-gradient(180deg, #FFE8C8 0%, #DCE1F5 100%)",
      ]
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        animate="animate"
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blob 1 - Peach/Orange */}
      <motion.div
        className="absolute top-[15%] left-[5%] z-0 opacity-70"
        variants={blobVariants1}
        animate="animate"
      >
        <svg
          width="350"
          height="350"
          viewBox="0 0 947 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#blob1)">
            <ellipse 
              cx="473.27" 
              cy="503.44" 
              rx="298.113" 
              ry="328.318" 
              fill="url(#gradient1)" 
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <filter 
              id="blob1" 
              x="0.0541534" 
              y="0.0182648" 
              width="946.432" 
              height="1006.84" 
              filterUnits="userSpaceOnUse" 
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient 
              id="gradient1" 
              x1="553.122" 
              y1="503.44" 
              x2="833.657" 
              y2="770.331" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9E7A"/>
              <stop offset="0.5" stopColor="#FFB896"/>
              <stop offset="1" stopColor="#FFD5B5"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blob 2 - Purple/Lavender */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] z-0 opacity-80"
        variants={blobVariants2}
        animate="animate"
      >
        <svg
          width="450"
          height="450"
          viewBox="0 0 947 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#blob2)">
            <ellipse 
              cx="473.27" 
              cy="503.44" 
              rx="298.113" 
              ry="328.318" 
              fill="url(#gradient2)" 
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter 
              id="blob2" 
              x="0.0541534" 
              y="0.0182648" 
              width="946.432" 
              height="1006.84" 
              filterUnits="userSpaceOnUse" 
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient 
              id="gradient2" 
              x1="553.122" 
              y1="503.44" 
              x2="833.657" 
              y2="770.331" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A78BFA"/>
              <stop offset="0.3" stopColor="#C4B5FD"/>
              <stop offset="0.7" stopColor="#DDD6FE"/>
              <stop offset="1" stopColor="#EDE9FE"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blob 3 - Blue/Cyan */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-60"
        variants={blobVariants3}
        animate="animate"
      >
        <svg
          width="550"
          height="550"
          viewBox="0 0 947 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#blob3)">
            <ellipse 
              cx="473.27" 
              cy="503.44" 
              rx="298.113" 
              ry="328.318" 
              fill="url(#gradient3)" 
              fillOpacity="0.6"
            />
          </g>
          <defs>
            <filter 
              id="blob3" 
              x="0.0541534" 
              y="0.0182648" 
              width="946.432" 
              height="1006.84" 
              filterUnits="userSpaceOnUse" 
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient 
              id="gradient3" 
              x1="553.122" 
              y1="503.44" 
              x2="833.657" 
              y2="770.331" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#60A5FA"/>
              <stop offset="0.4" stopColor="#93C5FD"/>
              <stop offset="0.8" stopColor="#BFDBFE"/>
              <stop offset="1" stopColor="#DBEAFE"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blob 4 - Pink/Rose */}
      <motion.div
        className="absolute top-[60%] left-[8%] z-0 opacity-65"
        variants={blobVariants4}
        animate="animate"
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 947 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#blob4)">
            <ellipse 
              cx="473.27" 
              cy="503.44" 
              rx="298.113" 
              ry="328.318" 
              fill="url(#gradient4)" 
              fillOpacity="0.75"
            />
          </g>
          <defs>
            <filter 
              id="blob4" 
              x="0.0541534" 
              y="0.0182648" 
              width="946.432" 
              height="1006.84" 
              filterUnits="userSpaceOnUse" 
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="55" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient 
              id="gradient4" 
              x1="553.122" 
              y1="503.44" 
              x2="833.657" 
              y2="770.331" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F472B6"/>
              <stop offset="0.5" stopColor="#F9A8D4"/>
              <stop offset="1" stopColor="#FBCFE8"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blob 5 - Green/Mint */}
      <motion.div
        className="absolute top-[25%] right-[5%] z-0 opacity-55"
        variants={blobVariants5}
        animate="animate"
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 947 1007"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#blob5)">
            <ellipse 
              cx="473.27" 
              cy="503.44" 
              rx="298.113" 
              ry="328.318" 
              fill="url(#gradient5)" 
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter 
              id="blob5" 
              x="0.0541534" 
              y="0.0182648" 
              width="946.432" 
              height="1006.84" 
              filterUnits="userSpaceOnUse" 
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient 
              id="gradient5" 
              x1="553.122" 
              y1="503.44" 
              x2="833.657" 
              y2="770.331" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34D399"/>
              <stop offset="0.5" stopColor="#6EE7B7"/>
              <stop offset="1" stopColor="#A7F3D0"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Additional Radial Gradient Overlays for Depth */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255, 158, 122, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 70%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(52, 211, 153, 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Moving Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 mix-blend-soft-light"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedBlobBackground;