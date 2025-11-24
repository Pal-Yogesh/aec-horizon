"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Small delay before starting animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative w-full">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="typing-heading gradient-text-about mt-1 text-[29px] font-semibold z-40">
          Integrated Solutions for AEC Success
          </h1>
          <div
            className="text-[19px] mt-3 mb-20 w-[830px] leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[55px] px-14 py-3 border-[2px] border-[#FFFFFF]"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
              backdropFilter: "blur(11.300000190734863px)",
            }}
          >
             

            <p className="font-semibold">BIM & Drafting Services, Technical Business Development, and Digital Marketing</p>
            <p >& Branding are perfectly interlocked to build your AEC success.</p>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto  puzzle-container">
          {/* Block 1 - Left piece */}
          <div className={`puzzle-piece block1 ${isLoaded ? "connected" : ""}`}>
            <Link href="/services/bim-drafting">
            <div
              className="border-[1px] cursor-pointer hover:bg-gray-100 transition-all duration-300 border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-6 left-[48%] transform -translate-x-1/2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
              >
              BIM & Drafting Services
            </div>
              </Link>
            <Image
              src="/block1.svg"
              alt="block1 Image"
              width={1000}
              height={1000}
              className="w-full max-w-[534.21px] h-auto"
            />
          </div>

          {/* Block 2 - Center piece */}
          <div className={`puzzle-piece block2 ${isLoaded ? "connected" : ""}`}>
            <Image
              src="/block2.svg"
              alt="block2 Image"
              width={1000}
              height={1000}
              className="w-full max-w-[303.25px] h-auto"
            />
            <Link href="/services/technical-development">
            <div
              className="border-[1px] cursor-pointer border-[#FFFFFF] hover:bg-purple-200 transition-all  rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-[60%] left-1/2 transform -translate-x-1/2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
              >
              Technical Business Development
            </div>
              </Link>
          </div>

          {/* Block 3 - Right piece */}
          <div className={`puzzle-piece block3 ${isLoaded ? "connected" : ""}`}>
            <Link href="/services/digital-marketing">
            <div
              className="border-[1px] border-[#FFFFFF] rounded-[25.5px]  hover:bg-orange-200 transition-all  bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-6 left-[62%] transform -translate-x-1/2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              Digital Marketing &<br />
              Branding Services
            </div>
            </Link>
            <Image
              src="/block3.svg"
              alt="block3 Image"
              width={1000}
              height={1000}
              className="w-full max-w-[423.43px] h-auto"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .puzzle-container {
          perspective: 1000px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .puzzle-piece {
          position: absolute;
          opacity: 0;
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: float 6s ease-in-out infinite;
        }

        /* Initial disconnected positions */
        .block1 {
          left: -20%;
          top: 10vh;
          transform: translateX(-20vw) translateY(5vh) rotate(-15deg);
          animation-delay: 0s;
        }

        .block2 {
          left: 40%;
          top: -15vh;
          transform: translateY(-15vh) rotate(10deg);
          animation-delay: 0.5s;
        }

        .block3 {
          right: -10%;
          top: 12vh;
          transform: translateX(20vw) translateY(-3vh) rotate(20deg);
          animation-delay: 1s;
        }

        /* Connected positions */
        .block1.connected {
          opacity: 1;
          left: 4%;
          top: 6vh;
          transform: translateX(0) translateY(0) rotate(0deg);
        }

        .block2.connected {
          opacity: 1;
          left: 38%;
          top: -5vh;
          transform: translateY(0) rotate(0deg);
        }

        .block3.connected {
          opacity: 1;
          right: 10.75%;
          top: 3.95vh;
          transform: translateX(0) translateY(0) rotate(0deg);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .block1.connected {
            left: 2%;
            top: 5vh;
          }
          .block2.connected {
            left: 35%;
            top: -5vh;
          }
          .block3.connected {
            right: 5%;
            top: 3vh;
          }
        }

        @media (max-width: 768px) {
          .block1.connected {
            left: 0%;
            top: 10vh;
          }
          .block2.connected {
            left: 30%;
            top: 0;
          }
          .block3.connected {
            right: 0%;
            top: 10vh;
          }
          .puzzle-piece img {
            max-width: 100% !important;
            height: auto;
          }
          .block1 img {
            max-width: 400px;
          }
          .block2 img {
            max-width: 250px;
          }
          .block3 img {
            max-width: 350px;
          }
        }

        /* Floating animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-2vh) rotate(0.5deg);
          }
          50% {
            transform: translateY(-1.5vh) rotate(0deg);
          }
          75% {
            transform: translateY(-2.5vh) rotate(-0.5deg);
          }
        }

        /* Fade in animation with stagger */
        .puzzle-piece {
          animation-fill-mode: both;
        }

        .block1 {
          animation: fadeInSlide 1.2s ease-out 0.3s both,
            float 6s ease-in-out 2s infinite;
        }

        .block2 {
          animation: fadeInSlide 1.2s ease-out 0.6s both,
            float 6s ease-in-out 2.3s infinite;
        }

        .block3 {
          animation: fadeInSlide 1.2s ease-out 0.9s both,
            float 6s ease-in-out 2.6s infinite;
        }

        @keyframes fadeInSlide {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Enhanced floating for connected state */
        .connected.block1 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 0s;
        }

        .connected.block2 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .connected.block3 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </>
  );
};

export default HeroContent;
