// // import Image from "next/image";
// // import React from "react";

// // const HeroContent = () => {
// //   return (
// //     <>
// //       <div>
// //         <div className="flex flex-col items-center justify-center text-center   px-4">
// //           <h1 className="gradient-text-about text-[75px] font-semibold z-40">
// //             Where Every Piece Fits.
// //           </h1>
// //           <div
// //             className="text-[45px] mt-4 leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[63px] px-14 py-3 border-[2px] border-[#FFFFFF]"
// //             style={{
// //               boxShadow: "0px 4px 4px 0px #00000040",

// //               backdropFilter: "blur(11.300000190734863px)",
// //             }}
// //           >
// //             <p>Three specialized services, perfectly</p>
// //             <p className="font-semibold">interlocked to build your success</p>
// //           </div>
// //         </div>

// //         <div>
// //           <div className="flex items-center justify-center mt-10 relative">
// //             <div>

// //             <Image
// //               src="/block1.svg"
// //               alt="block1 Image"
// //               width={1000}
// //               height={1000}
// //               className="w-[534.21px] h-[303.25px] absolute left-[10%] top-10"
// //               />
// //               </div>

// //               <div>

// //             <Image
// //               src="/block2.svg"
// //               alt="block2 Image"
// //               width={1000}
// //               height={1000}
// //               className="w-[303.25px] h-[506px] absolute left-[40%] -top-[54px]"
// //               />
// //               </div>

// //               <div>

// //             <Image
// //               src="/block3.svg"
// //               alt="block3 Image"
// //               width={1000}
// //               height={1000}
// //               className="w-[423.43px] h-[317.48px] absolute right-[14.5%] top-[22px]"
// //               />
// //               </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default HeroContent;

// // "use client"

// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";

// // const HeroContent = () => {
// //   const [isConnected, setIsConnected] = useState(false);

// //   useEffect(() => {
// //     // Start the connection animation after a short delay
// //     const timer = setTimeout(() => {
// //       setIsConnected(true);
// //     }, 800); // 800ms delay before pieces start connecting

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <>
// //       <div>
// //         <div className="flex flex-col items-center justify-center text-center px-4">
// //           <h1 className="gradient-text-about text-[75px] font-semibold z-40">
// //             Where Every Piece Fits.
// //           </h1>
// //           <div
// //             className="text-[45px] mt-4 leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[63px] px-14 py-3 border-[2px] border-[#FFFFFF]"
// //             style={{
// //               boxShadow: "0px 4px 4px 0px #00000040",
// //               backdropFilter: "blur(11.300000190734863px)",
// //             }}
// //           >
// //             <p>Three specialized services, perfectly</p>
// //             <p className="font-semibold">interlocked to build your success</p>
// //           </div>
// //         </div>

// //         <div>
// //           <div className="flex items-center justify-center mt-10 relative puzzle-container">
// //             {/* Block 1 - Left piece */}
// //             <div
// //               className={`puzzle-piece puzzle-piece-1 ${
// //                 isConnected ? "connected" : "disconnected-left"
// //               }`}
// //             >
// //               <Image
// //                 src="/block1.svg"
// //                 alt="block1 Image"
// //                 width={1000}
// //                 height={1000}
// //                 className="w-[534.21px] h-[303.25px]"
// //               />
// //             </div>

// //             {/* Block 2 - Center piece */}
// //             <div
// //               className={`puzzle-piece puzzle-piece-2 ${
// //                 isConnected ? "connected" : "disconnected-center"
// //               }`}
// //             >
// //               <Image
// //                 src="/block2.svg"
// //                 alt="block2 Image"
// //                 width={1000}
// //                 height={1000}
// //                 className="w-[303.25px] h-[506px]"
// //               />
// //             </div>

// //             {/* Block 3 - Right piece */}
// //             <div
// //               className={`puzzle-piece puzzle-piece-3 ${
// //                 isConnected ? "connected" : "disconnected-right"
// //               }`}
// //             >
// //               <Image
// //                 src="/block3.svg"
// //                 alt="block3 Image"
// //                 width={1000}
// //                 height={1000}
// //                 className="w-[423.43px] h-[317.48px]"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .puzzle-container {
// //           position: relative;
// //           min-height: 500px;
// //         }

// //         .puzzle-piece {
// //           position: absolute;
// //           transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         /* Connected positions - final state */
// //         .puzzle-piece-1.connected {
// //           left: 10%;
// //           top: 40px;
// //           animation: float 6s ease-in-out infinite;
// //         }

// //         .puzzle-piece-2.connected {
// //           left: 40%;
// //           top: -54px;
// //           animation: float 6s ease-in-out infinite 0.5s;
// //         }

// //         .puzzle-piece-3.connected {
// //           right: 14.5%;
// //           top: 22px;
// //           animation: float 6s ease-in-out infinite 1s;
// //         }

// //         /* Disconnected positions - initial state */
// //         .puzzle-piece-1.disconnected-left {
// //           left: -5%;
// //           top: 80px;
// //           transform: rotate(-15deg);
// //         }

// //         .puzzle-piece-2.disconnected-center {
// //           left: 40%;
// //           top: -150px;
// //           transform: rotate(10deg);
// //         }

// //         .puzzle-piece-3.disconnected-right {
// //           right: -8%;
// //           top: 60px;
// //           transform: rotate(12deg);
// //         }

// //         /* Floating animation */
// //         @keyframes float {
// //           0%, 100% {
// //             transform: translateY(0px) rotate(0deg);
// //           }
// //           33% {
// //             transform: translateY(-8px) rotate(0.5deg);
// //           }
// //           66% {
// //             transform: translateY(4px) rotate(-0.5deg);
// //           }
// //         }

// //         /* Add some subtle glow effect when pieces connect */
// //         .puzzle-piece.connected {
// //           filter: drop-shadow(0 0 10px rgba(139, 69, 19, 0.3));
// //         }

// //         /* Responsive adjustments */
// //         @media (max-width: 768px) {
// //           .puzzle-piece-1.connected {
// //             left: 5%;
// //             top: 60px;
// //           }

// //           .puzzle-piece-2.connected {
// //             left: 35%;
// //             top: -30px;
// //           }

// //           .puzzle-piece-3.connected {
// //             right: 10%;
// //             top: 40px;
// //           }

// //           .puzzle-piece-1.disconnected-left {
// //             left: -15%;
// //             top: 100px;
// //           }

// //           .puzzle-piece-2.disconnected-center {
// //             left: 35%;
// //             top: -200px;
// //           }

// //           .puzzle-piece-3.disconnected-right {
// //             right: -18%;
// //             top: 80px;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default HeroContent;

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const HeroContent = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300); // Small delay before starting animation

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className="">
//         <div className="flex flex-col items-center justify-center text-center px-4">
//           <h1 className="gradient-text-about text-[75px] font-semibold z-40">
//             Where Every Piece Fits.
//           </h1>
//           <div
//             className="text-[45px] mt-4 mb-10 leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[63px] px-14 py-3 border-[2px] border-[#FFFFFF]"
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//               backdropFilter: "blur(11.300000190734863px)",
//             }}
//           >
//             <p>Three specialized services, perfectly</p>
//             <p className="font-semibold">interlocked to build your success</p>
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center justify-center mt-10 relative puzzle-container ">
//             {/* Block 1 - Left piece */}
//             <div
//               className={`puzzle-piece block1 ${isLoaded ? "connected" : ""}`}
//             >
//               <div
//                 className=" border-[1px] border-[#FFFFFF] rounded-[25.5px]  bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 BIM & Drafting Services
//               </div>
//               <Image
//                 src="/block1.svg"
//                 alt="block1 Image"
//                 width={1000}
//                 height={1000}
//                 className="w-[534.21px] h-[303.25px]"
//               />
//             </div>

//             {/* Block 2 - Center piece */}
//             <div
//               className={`puzzle-piece block2 ${isLoaded ? "connected" : ""}`}
//             >
//               <Image
//                 src="/block2.svg"
//                 alt="block2 Image"
//                 width={1000}
//                 height={1000}
//                 className="w-[303.25px] h-[506px]"
//               />
//               <div
//                 className=" border-[1px] border-[#FFFFFF] rounded-[25.5px]  bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 Technical Business Development
//               </div>
//             </div>

//             {/* Block 3 - Right piece */}
//             <div
//               className={`puzzle-piece block3 ${isLoaded ? "connected" : ""}`}
//             >
//               <div
//                 className=" border-[1px] border-[#FFFFFF] rounded-[25.5px]  bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 Digital Marketing & Branding Services
//               </div>
//               <Image
//                 src="/block3.svg"
//                 alt="block3 Image"
//                 width={1000}
//                 height={1000}
//                 className="w-[423.43px] h-[317.48px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .puzzle-container {
//           perspective: 1000px;
//         }

//         .puzzle-piece {
//           position: absolute;
//           opacity: 0;
//           transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           animation: float 6s ease-in-out infinite;
//         }

//         /* Initial disconnected positions */
//         .block1 {
//           left: -20%;
//           top: 100px;
//           transform: translateX(-100px) translateY(50px) rotate(-15deg);
//           animation-delay: 0s;
//         }

//         .block2 {
//           left: 40%;
//           top: -150px;
//           transform: translateY(-150px) rotate(10deg);
//           animation-delay: 0.5s;
//         }

//         .block3 {
//           right: -10%;
//           top: 120px;
//           transform: translateX(100px) translateY(-30px) rotate(20deg);
//           animation-delay: 1s;
//         }

//         /* Connected positions */
//         .block1.connected {
//           opacity: 1;
//           left: 10%;
//           top: 40px;
//           transform: translateX(0) translateY(0) rotate(0deg);
//         }

//         .block2.connected {
//           opacity: 1;
//           left: 40%;
//           top: -54px;
//           transform: translateY(0) rotate(0deg);
//         }

//         .block3.connected {
//           opacity: 1;
//           right: 14.5%;
//           top: 22px;
//           transform: translateX(0) translateY(0) rotate(0deg);
//         }

//         /* Floating animation */
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-8px) rotate(0.5deg);
//           }
//           50% {
//             transform: translateY(-5px) rotate(0deg);
//           }
//           75% {
//             transform: translateY(-10px) rotate(-0.5deg);
//           }
//         }

//         /* Fade in animation with stagger */
//         .puzzle-piece {
//           animation-fill-mode: both;
//         }

//         .block1 {
//           animation: fadeInSlide 1.2s ease-out 0.3s both,
//             float 6s ease-in-out 2s infinite;
//         }

//         .block2 {
//           animation: fadeInSlide 1.2s ease-out 0.6s both,
//             float 6s ease-in-out 2.3s infinite;
//         }

//         .block3 {
//           animation: fadeInSlide 1.2s ease-out 0.9s both,
//             float 6s ease-in-out 2.6s infinite;
//         }

//         @keyframes fadeInSlide {
//           0% {
//             opacity: 0;
//             transform: translateY(30px) scale(0.8);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         /* Enhanced floating for connected state */
//         .connected.block1 {
//           animation: float 6s ease-in-out infinite;
//           animation-delay: 0s;
//         }

//         .connected.block2 {
//           animation: float 6s ease-in-out infinite;
//           animation-delay: 0.3s;
//         }

//         .connected.block3 {
//           animation: float 6s ease-in-out infinite;
//           animation-delay: 0.6s;
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroContent;

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const HeroContent = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 300); // Small delay before starting animation

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className="">
//         <div className="flex flex-col items-center justify-center text-center px-4">
//           <h1 className="typing-heading gradient-text-about text-[75px] font-semibold z-40">
//             Where Every Piece Fits.
//           </h1>

//           <div
//             className="text-[45px] mt-4 mb-10 leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[63px] px-14 py-3 border-[2px] border-[#FFFFFF]"
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//               backdropFilter: "blur(11.300000190734863px)",
//             }}
//           >
//             <p>Three specialized services, perfectly</p>
//             <p className="font-semibold">interlocked to build your success</p>
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center justify-center mt-20 relative puzzle-container ">
//             {/* Block 1 - Left piece */}
//             <div
//               className={`puzzle-piece block1 ${isLoaded ? "connected" : ""}`}
//             >
//               <div
//                 className="border-[1px] border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-[20px] left-1/2 transform -translate-x-1/2"
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 BIM & Drafting Services
//               </div>
//               <Image
//                 src="/block1.svg"
//                 alt="block1 Image"
//                 width={1000}
//                 height={1000}
//                 className="w-[534.21px] h-[303.25px]"
//               />
//             </div>

//             {/* Block 2 - Center piece */}
//             <div
//               className={`puzzle-piece block2 ${isLoaded ? "connected" : ""}`}
//             >
//               <Image
//                 src="/block2.svg"
//                 alt="block2 Image"
//                 width={1000}
//                 height={1000}
//                 className="w-[303.25px] h-[506px]"
//               />
//               <div
//                 className="border-[1px] border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-[300px] left-1/2 transform -translate-x-1/2"
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 Technical Business Development
//               </div>
//             </div>

//             {/* Block 3 - Right piece */}
//             <div
//               className={`puzzle-piece block3 ${isLoaded ? "connected" : ""}`}
//             >
//               <div
//                 className="border-[1px] border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-[20px] left-[62%] transform -translate-x-1/2"
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 Digital Marketing & <br /> Branding Services
//               </div>
//               <Image
//                 src="/block3.svg"
//                 alt="block3 Image"
//                 width={1000}
//                 height={1000}
//                 className="w-[423.43px] h-[317.48px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .puzzle-container {
//           perspective: 1000px;
//         }

//         .puzzle-piece {
//           position: absolute;
//           opacity: 0;
//           transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           animation: float 6s ease-in-out infinite;
//         }

//         /* Initial disconnected positions */
//         .block1 {
//           left: -20%;
//           top: 100px;
//           transform: translateX(-100px) translateY(50px) rotate(-15deg);
//           animation-delay: 0s;
//         }

//         .block2 {
//           left: 40%;
//           top: -150px;
//           transform: translateY(-150px) rotate(10deg);
//           animation-delay: 0.5s;
//         }

//         .block3 {
//           right: -10%;
//           top: 120px;
//           transform: translateX(100px) translateY(-30px) rotate(20deg);
//           animation-delay: 1s;
//         }

//         /* Connected positions */
//         .block1.connected {
//           opacity: 1;
//           left: 10%;
//           top: 40px;
//           transform: translateX(0) translateY(0) rotate(0deg);
//         }

//         .block2.connected {
//           opacity: 1;
//           left: 40%;
//           top: -54px;
//           transform: translateY(0) rotate(0deg);
//         }

//         .block3.connected {
//           opacity: 1;
//           right: 14.5%;
//           top: 22px;
//           transform: translateX(0) translateY(0) rotate(0deg);
//         }

//         /* Floating animation */
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-8px) rotate(0.5deg);
//           }
//           50% {
//             transform: translateY(-5px) rotate(0deg);
//           }
//           75% {
//             transform: translateY(-10px) rotate(-0.5deg);
//           }
//         }

//         /* Fade in animation with stagger */
//         .puzzle-piece {
//           animation-fill-mode: both;
//         }

//         .block1 {
//           animation: fadeInSlide 1.2s ease-out 0.3s both,
//             float 6s ease-in-out 2s infinite;
//         }

//         .block2 {
//           animation: fadeInSlide 1.2s ease-out 0.6s both,
//             float 6s ease-in-out 2.3s infinite;
//         }

//         .block3 {
//           animation: fadeInSlide 1.2s ease-out 0.9s both,
//             float 6s ease-in-out 2.6s infinite;
//         }

//         @keyframes fadeInSlide {
//           0% {
//             opacity: 0;
//             transform: translateY(30px) scale(0.8);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         /* Enhanced floating for connected state */
//         .connected.block1 {
//           animation: float 6s ease-in-out infinite;
//           animation-delay: 0s;
//         }

//         .connected.block2 {
//           animation: float 6s ease-in-out infinite;
//           animation-delay: 0.3s;
//         }

//         .connected.block3 {
//           animation: float 6s ease-in-out infinite;
//           animation-delay: 0.6s;
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroContent;

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
            Where Every Piece Fits.
          </h1>
          <div
            className="text-[19px] mt-3 mb-20 w-[530px] leading-tight text-[#4B336D] bg-[#FFFFFF99] rounded-[55px] px-14 py-3 border-[2px] border-[#FFFFFF]"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
              backdropFilter: "blur(11.300000190734863px)",
            }}
          >
            <p>Three specialized services, perfectly</p>
            <p className="font-semibold">interlocked to build your success.</p>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto  puzzle-container">
          {/* Block 1 - Left piece */}
          <div className={`puzzle-piece block1 ${isLoaded ? "connected" : ""}`}>
            <Link href="/services/bim-drafting">
            <div
              className="border-[1px] cursor-pointer border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-6 left-[48%] transform -translate-x-1/2"
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
              className="border-[1px] cursor-pointer border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-[60%] left-1/2 transform -translate-x-1/2"
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
              className="border-[1px] border-[#FFFFFF] rounded-[25.5px] bg-[#FFFFFF94] w-[250px] px-5 py-3 text-center absolute top-6 left-[62%] transform -translate-x-1/2"
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
