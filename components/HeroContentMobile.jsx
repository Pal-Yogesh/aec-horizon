"use client";

import React, { useEffect, useState } from "react";

const HeroContentMobile = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative w-full">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="typing-heading gradient-text-about mt-1 text-[20px] sm:text-[24px] md:text-[26px] lg:text-[29px] font-semibold z-40">
            Where Every Piece Fits.
          </h1>
          <div
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] mt-3 mb-12 sm:mb-16 md:mb-20 w-full max-w-[90%] sm:max-w-[420px] md:max-w-[480px] lg:w-[530px] leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[35px] sm:rounded-[45px] lg:rounded-[55px] px-8 sm:px-10 md:px-12 lg:px-14 py-2.5 sm:py-3 border-[2px] border-[#FFFFFF]"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
              backdropFilter: "blur(11.300000190734863px)",
            }}
          >
            <p>Three specialized services, perfectly</p>
            <p className="font-semibold">interlocked to build your success.</p>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto puzzle-container">
          {/* Block 1 - Left piece */}
          <div className={`puzzle-piece block1 ${isLoaded ? "connected" : ""}`}>
            <a href="/services/bim-drafting">
              <div
                className="border-[1px] cursor-pointer hover:bg-gray-100 transition-all duration-300 border-[#FFFFFF] rounded-[15px] sm:rounded-[20px] lg:rounded-[25.5px] bg-[#FFFFFF94] w-[96px]  p-1 text-center absolute top-1 sm:top-4 md:top-5 lg:top-6 left-[48%] transform -translate-x-1/2 text-[6px]"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                BIM & Drafting Services
              </div>
            </a>
            <img
              src="/block1.svg"
              alt="block1 Image"
              className="w-full max-w-[180px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[534.21px] h-"
            />
          </div>

          {/* Block 2 - Center piece */}
          <div className={`puzzle-piece block2 ${isLoaded ? "connected" : ""}`}>
            <img
              src="/block2.svg"
              alt="block2 Image"
              className="w-full max-w-[115px]  h-auto"
            />
            <a href="/services/technical-development">
              <div
                className="border-[1px] cursor-pointer border-[#FFFFFF] hover:bg-purple-200 transition-all rounded-[15px] sm:rounded-[20px] lg:rounded-[25.5px] bg-[#FFFFFF94] w-[100px] px-1 sm:px-4 lg:px-5 py-1 sm:py-2.5 lg:py-3 text-center absolute top-[60%] left-1/2 transform -translate-x-1/2 text-[7px] sm:text-[12px] md:text-[14px] lg:text-[16px]"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                Technical Business Development
              </div>
            </a>
          </div>

          {/* Block 3 - Right piece */}
          <div className={`puzzle-piece block3 ${isLoaded ? "connected" : ""}`}>
            <a href="/services/digital-marketing">
              <div
                className="border-[1px] border-[#FFFFFF] rounded-[15px] sm:rounded-[20px] lg:rounded-[25.5px] hover:bg-orange-200 transition-all bg-[#FFFFFF94] w-[100px] sm:w-[180px] md:w-[220px] lg:w-[250px] px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 text-center absolute top-3 sm:top-4 md:top-5 lg:top-6 left-[62%] transform -translate-x-1/2 text-[7px] sm:text-[12px] md:text-[14px] lg:text-[16px]"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                Digital Marketing &<br />
                Branding Services
              </div>
            </a>
            <img
              src="/block3.svg"
              alt="block3 Image"
              className="w-full max-w-[150px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[423.43px] h-auto"
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
          min-height: 250px;
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

        /* Connected positions for Large screens and above */
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

        /* Tablet adjustments (md: 768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .puzzle-container {
            min-height: 220px;
          }

          .block1.connected {
            left: 2%;
            top: 5vh;
          }

          .block2.connected {
            left: 36%;
            top: -4vh;
          }

          .block3.connected {
            right: 6%;
            top: 3.5vh;
          }
        }

        /* Small tablet (sm: 640px - 767px) */
        @media (max-width: 767px) and (min-width: 640px) {
          .puzzle-container {
            min-height: 180px;
          }

          .block1.connected {
            left: 1%;
            top: 4vh;
          }

          .block2.connected {
            left: 34%;
            top: -3vh;
          }

          .block3.connected {
            right: 3%;
            top: 3vh;
          }
        }

        /* Mobile (< 640px) */
        @media (max-width: 639px) {
          .puzzle-container {
            min-height: 150px;
          }

          .block1.connected {
            left: -2%;
            top: 3vh;
          }

          .block2.connected {
            left: 32%;
            top: -2vh;
          }

          .block3.connected {
            right: 0%;
            top: 2.5vh;
          }
        }

        /* Extra small mobile (< 480px) */
        @media (max-width: 479px) {
          .puzzle-container {
            min-height: 130px;
          }

          .block1.connected {
            left: -11%;
            top: 4.5vh;
          }

          .block2.connected {
            left: 30%;
            top: -1.5vh;
          }

          .block3.connected {
            right: -1%;
            top: 3vh;
          }
        }

        /* Floating animation - Same for all screens */
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

        /* Fade in animation with stagger - Same for all screens */
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

        /* Enhanced floating for connected state - Same for all screens */
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

export default HeroContentMobile;
