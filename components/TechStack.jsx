"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const softwareDataTop = [
  {
    id: 1,
    img: "/image 1817.svg",
    title: "AutoCad",
    desc: "Precise, technical, 2D/3D design software.",
  },
  {
    id: 2,
    img: "/image 1787.svg",
    title: "Autodesk Revit",
    desc: "Multidisciplinary BIM industry standard.",
  },
  {
    id: 3,
    img: "/NMAN.svg",
    title: "Autodesk Navisworks Manage ",
    desc: "For large-scale infrastructure projects.",
  },
  {
    id: 4,
    img: "/image 1803.svg",
    title: "Autodesk Construction Cloud (ACC)",
    desc: "Multidisciplinary BIM industry standard.",
  },
];

const softwareDataCenter = [
  {
    id: 5,
    img: "/image 1799.svg",
    title: "BIM 360",
    desc: "Multidisciplinary BIM industry standard.",
  },
  {
    id: 6,
    img: "/SOLIBRI.svg",
    title: "Solibri Office",
    desc: "Detailed structural steel modeling.",
  },
  {
    id: 7,
    img: "/image 1801.svg",
    title: "Synchro 4D",
    desc: "For large-scale infrastructure projects.",
  },
  {
    id: 8,
    img: "/image 1788.svg",
    title: "Graphisoft ArchiCAD",
    desc: "Architectural-focused BIM design.",
  },
];
const softwareDataBottom = [
  {
    id: 9,
    img: "/image 1804.svg",
    title: "ETABS",
    desc: "Architectural-focused BIM design.",
  },
  {
    id: 10,
    img: "/image 1800.svg",
    title: "Tekla Structural Designer",
    desc: "Architectural-focused BIM design.",
  },
  {
    id: 11,
    img: "/image 1802.svg",
    title: "Enscape",
    desc: "Detailed structural steel modeling.",
  },
  {
    id: 12,
    img: "/image 1805.svg",
    title: "Twinmotion",
    desc: "For large-scale infrastructure projects.",
  },
];

const TechStack = () => {
  return (
    <div className="h-full w-full pb-12 md:pb-20 ">
      {/* Header */}
      <div className="pt-20 md:pt-40 pb-12 md:pb-20 px-4 md:px-[22%] flex flex-col items-center justify-center">
        <div
          className="border-[3px] md:border-[4px] rounded-[18px] md:rounded-[21px] w-[200px] md:w-[236px] text-center py-1 font-semibold border-white"
          style={{
            background:
              "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            boxShadow: "0px 2.96px 5.03px 0px #00000040",
          }}
        >
          <p className="gradient-text-about text-[15px] md:text-[18.49px]">
            Our Technical Expertise
          </p>
        </div>
        <span className="gradient-text font-bold text-[32px] md:text-[48.08px] text-center">
          Tech Stack
        </span>
        <p className="gradient-text text-[16px] md:text-[22.19px] leading-tight text-center px-4 md:px-0">
          Software for AEC Professionals: From Design to Business Growth{" "}
        </p>
      </div>

      <div className="bg-[url('/ts2.svg')] bg-cover pb-12 md:pb-[20%]">
        <div className="flex justify-center items-center">
          <div
            className="text-[16px] md:text-[20px] text-white px-6 md:px-10 py-2 md:py-3 border-[1px] border-white rounded-[50px] bg-[#7595FF]"
            style={{
              boxShadow: "0px 4px 14.7px 0px #00000040",
            }}
          >
            BIM & Drafting
          </div>
        </div>

        <div className="relative pt-8 md:pt-16 px-4">
          {/* Top Row */}
          <div className="flex justify-center gap-3 md:gap-14 ">
            <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-3 relative z-10 max-w-[340px] md:max-w-none">
              {softwareDataTop.map((software) => (
                <div
                  key={software.id}
                  className="group w-[160px] h-[170px] md:w-[188px] md:h-[198px] rounded-[22px] md:rounded-[29px] text-center pt-2 md:pt-3 px-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background:
                      "radial-gradient(64.61% 64.61% at 59.41% 35.39%, #DAE3FF 0%, #FFFFFF 100%)",
                    boxShadow: "0px 8px 4px 0px #00000040",
                  }}
                >
                  <div className="flex justify-center items-center mb-2 md:mb-3">
                    <Image
                      src={software.img}
                      alt={software.title}
                      width={1000}
                      height={1000}
                      className="w-[60px] h-[60px] md:w-[77px] md:h-[77px] transition-all duration-300 group-hover:brightness-200"
                    />
                  </div>
                  <p className="text-[12px] md:text-[14px] text-[#4B336D] font-bold transition-all duration-300 group-hover:text-[#E1E8FF] leading-tight">
                    {software.title}
                  </p>
                  <p className="text-[11px] md:text-[14px] text-[#4B336D] transition-all duration-300 group-hover:text-[#E1E8FF] leading-tight mt-1">
                    {software.desc}
                  </p>

                  <style jsx>{`
                    .group:hover {
                      background-color: #8392c4 !important;
                      background-image: none !important;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>

          {/* Plus Icon with Animated Rotation */}
          <div className="flex justify-center items-center relative my-1 md:my-1 z-10">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 720 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="relative z-10 rounded-full"
            >
              <Image
                src="/plus.svg"
                alt="plus"
                width={1000}
                height={1000}
                className="w-[60px] h-[100px] md:w-[85px] md:h-[130px]"
              />
            </motion.div>
          </div>

          {/* center Row */}
          <div className="flex justify-center gap-3 md:gap-14">
            <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-3 relative z-10 max-w-[340px] md:max-w-none">
              {softwareDataCenter.map((software) => (
                <div
                  key={software.id}
                  className="group w-[160px] h-[170px] md:w-[188px] md:h-[198px] rounded-[22px] md:rounded-[29px] text-center pt-2 md:pt-3 px-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background:
                      "radial-gradient(64.61% 64.61% at 59.41% 35.39%, #DAE3FF 0%, #FFFFFF 100%)",
                    boxShadow: "0px 8px 4px 0px #00000040",
                  }}
                >
                  <div className="flex justify-center items-center mb-2 md:mb-3">
                    <Image
                      src={software.img}
                      alt={software.title}
                      width={1000}
                      height={1000}
                      className="w-[60px] h-[60px] md:w-[77px] md:h-[77px] transition-all duration-300 group-hover:brightness-200"
                    />
                  </div>
                  <p className="text-[12px] md:text-[14px] text-[#4B336D] font-bold transition-all duration-300 group-hover:text-[#E1E8FF] leading-tight">
                    {software.title}
                  </p>
                  <p className="text-[11px] md:text-[14px] text-[#4B336D] transition-all duration-300 group-hover:text-[#E1E8FF] leading-tight mt-1">
                    {software.desc}
                  </p>

                  <style jsx>{`
                    .group:hover {
                      background-color: #8392c4 !important;
                      background-image: none !important;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>

          {/* Plus Icon with Animated Rotation */}
          <div className="flex justify-center items-center relative my-1 md:my-1 z-10">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 720 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="relative z-10 rounded-full"
            >
              <Image
                src="/plus.svg"
                alt="plus"
                width={1000}
                height={1000}
                className="w-[60px] h-[100px] md:w-[85px] md:h-[130px]"
              />
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center gap-3 md:gap-14">
            <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-3 relative z-10 max-w-[340px] md:max-w-none">
              {softwareDataBottom.map((software) => (
                <div
                  key={software.id}
                  className="group w-[160px] h-[170px] md:w-[188px] md:h-[198px] rounded-[22px] md:rounded-[29px] text-center pt-2 md:pt-3 px-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background:
                      "radial-gradient(64.61% 64.61% at 59.41% 35.39%, #DAE3FF 0%, #FFFFFF 100%)",
                    boxShadow: "0px 8px 4px 0px #00000040",
                  }}
                >
                  <div className="flex justify-center items-center mb-2 md:mb-3">
                    <Image
                      src={software.img}
                      alt={software.title}
                      width={1000}
                      height={1000}
                      className="w-[60px] h-[60px] md:w-[77px] md:h-[77px] transition-all duration-300 group-hover:brightness-200"
                    />
                  </div>
                  <p className="text-[12px] md:text-[14px] text-[#4B336D] font-bold transition-all duration-300 group-hover:text-[#E1E8FF] leading-tight">
                    {software.title}
                  </p>
                  <p className="text-[11px] md:text-[14px] text-[#4B336D] transition-all duration-300 group-hover:text-[#E1E8FF] leading-tight mt-1">
                    {software.desc}
                  </p>

                  <style jsx>{`
                    .group:hover {
                      background-color: #8392c4 !important;
                      background-image: none !important;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

// bubble animation

// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// const Softwares = () => {
//   const rectWidth = 1200; // rectangle width
//   const rectHeight = 400; // rectangle height
//   const borderWidth = 13; // rectangle border
//   const bubbleSize = 30; // bubble diameter

//   // Calculate offsets so bubble is centered on the border track
//   // The bubble should be positioned such that its center aligns with the center of the border
//   const trackOffset = borderWidth / 2;

//   return (
//     <div className="bg-[url('/software.svg')] bg-cover bg-center h-screen w-full relative overflow-hidden">
//       <div
//         className="absolute border-white border-[13px] z-0"
//         style={{
//           top: "100px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: `${rectWidth}px`,
//           height: `${rectHeight}px`,
//           borderRadius: "10px",
//         }}
//       >
//         <motion.div
//           className="absolute bg-white rounded-full"
//           style={{
//             width: `${bubbleSize}px`,
//             height: `${bubbleSize}px`,
//           }}
//           animate={{
//             x: [
//               -bubbleSize/2, // Start: left edge (centered on border)
//               rectWidth - bubbleSize/2, // Right edge
//               rectWidth - bubbleSize/2, // Right edge
//               -bubbleSize/2, // Left edge
//               -bubbleSize/2, // Left edge (back to start)
//             ],
//             y: [
//               -bubbleSize/2, // Top edge
//               -bubbleSize/2, // Top edge
//               rectHeight - bubbleSize/2, // Bottom edge
//               rectHeight - bubbleSize/2, // Bottom edge
//               -bubbleSize/2, // Top edge (back to start)
//             ],
//           }}
//           transition={{
//             duration: 20,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Softwares;
