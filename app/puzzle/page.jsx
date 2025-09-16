'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PuzzleBlocks = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    // Initial state: blocks are disconnected
    const connectionTimer = setTimeout(() => {
      setIsConnected(true);
      
      // After connection, start floating animation
      const floatingTimer = setTimeout(() => {
        setIsFloating(true);
      }, 1000);
      
      return () => clearTimeout(floatingTimer);
    }, 500);
    
    return () => clearTimeout(connectionTimer);
  }, []);

  // Animation variants for each block
  const block1Variants = {
    disconnected: { 
      x: -100, 
      y: -50,
      rotate: -5,
      transition: { duration: 0.5 }
    },
    connected: { 
      x: 0, 
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const block2Variants = {
    disconnected: { 
      x: 0, 
      y: 100,
      rotate: 3,
      transition: { duration: 0.5 }
    },
    connected: { 
      x: 0, 
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  };

  const block3Variants = {
    disconnected: { 
      x: 100, 
      y: -30,
      rotate: 5,
      transition: { duration: 0.5 }
    },
    connected: { 
      x: 0, 
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10,
        delay: 0.4
      }
    }
  };

  // Floating animation for the entire connected piece
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center pt-[10%] px-4">
      <h1 className="gradient-text-about text-[75px] font-semibold">
        Where Every Piece Fits.
      </h1>
      <div
        className="text-[45px] mt-4 leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[63px] px-14 py-3 border-[2px] border-[#FFFFFF]"
        style={{
          boxShadow: "0px 4px 4px 0px #00000040",
          backdropFilter: "blur(11.300000190734863px)",
        }}
      >
        <p>Three specialized services, perfectly</p>
        <p className="font-semibold">interlocked to build your success</p>
      </div>

      <motion.div 
        className="flex items-center justify-center mt-10 relative"
        animate={isFloating ? floatingAnimation : {}}
      >
        {/* Block 1 */}
        <motion.div
          initial="disconnected"
          animate={isConnected ? "connected" : "disconnected"}
          variants={block1Variants}
          className="relative z-10"
        >
          <Image
            src="/block1.svg"
            alt="block1 Image"
            width={1000}
            height={1000}
            className="w-[534.21px] h-[303.25px]"
          />
        </motion.div>

        {/* Block 2 */}
        <motion.div
          initial="disconnected"
          animate={isConnected ? "connected" : "disconnected"}
          variants={block2Variants}
          className="relative z-20"
        >
          <Image
            src="/block2.svg"
            alt="block2 Image"
            width={1000}
            height={1000}
            className="w-[303.25px] h-[506px]"
          />
        </motion.div>

        {/* Block 3 */}
        <motion.div
          initial="disconnected"
          animate={isConnected ? "connected" : "disconnected"}
          variants={block3Variants}
          className="relative z-10"
        >
          <Image
            src="/block3.svg"
            alt="block3 Image"
            width={1000}
            height={1000}
            className="w-[423.43px] h-[317.48px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PuzzleBlocks;