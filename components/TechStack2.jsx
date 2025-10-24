// "use client";
// import Image from "next/image";
// import React from "react";

// const softwareData = [
//   {
//     id: 1,
//     img: "/image 1787.svg",
//     title: "Autodesk Revit",
//     desc: "Multidisciplinary BIM industry standard.",
//   },
//   {
//     id: 2,
//     img: "/image 1788.svg",
//     title: "Graphisoft ArchiCAD",
//     desc: "Architectural-focused BIM design.",
//   },
//   {
//     id: 3,
//     img: "/image 1789.svg",
//     title: "Bentley OpenBuildings ",
//     desc: "Project review and coordination tool.",
//   },
//   {
//     id: 4,
//     img: "/image 1790.svg",
//     title: "Tekla Structures",
//     desc: "Detailed structural steel modeling.",
//   },
//   {
//     id: 5,
//     img: "/image 1791.svg",
//     title: "HubSpot",
//     desc: "All-in-one CRM and marketing platform.",
//   },
//   {
//     id: 6,
//     img: "/image 1792.svg",
//     title: "LinkedIn Sales Navigator",
//     desc: "Targeted B2B lead generation.",
//   },
//   {
//     id: 7,
//     img: "/image 1793.svg",
//     title: "Mailchimp",
//     desc: "Email marketing and audience engagement.",
//   },
//   {
//     id: 8,
//     img: "/image 1794.svg",
//     title: "RhiHootsuite",
//     desc: "Social media scheduling and management.",
//   },
// ];

// const TechStack = () => {
//   return (
//     <div className="bg-[url('/software.svg')] bg-cover bg-center h-full w-full pb-20">
//       {/* Header Section */}
//   <div className="pt-40 px-32">
//     <div
//       className="border-[4px] rounded-[30px] w-[320px] text-center py-2 font-semibold text-[25px] border-white"
//       style={{
//         background:
//           "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//       }}
//     >
//       <p className="gradient-text-about">Our Software Expertise</p>
//     </div>
//     <span className="gradient-text font-bold text-[65px]">TechStack</span>
//     <p className="gradient-text text-[45px] leading-tight">
//       Software for AEC Professionals: From Design to Business Growth
//     </p>
//   </div>

//       {/* Software Cards Section */}
//       <div className="flex flex-wrap justify-center gap-10 pt-14 px-20">
//         {softwareData.map((software) => (
//           <div
//             key={software.id}
//             className="group w-[255px] h-[268px] rounded-[20px] text-center p-5 transition-all duration-300 hover:scale-105 cursor-pointer"
//             style={{
//               background:
//                 "radial-gradient(64.61% 64.61% at 59.41% 35.39%, #DAE3FF 0%, #FFFFFF 100%)",
//               boxShadow: "0px 8px 4px 0px #00000040",
//             }}
//           >
//             {/* Inner Content */}
//             <div className="flex justify-center items-center mb-3">
//               <Image
//                 src={software.img}
//                 alt={software.title}
//                 width={100}
//                 height={100}
//                 className="w-[105px] h-[105px] transition-all duration-300 group-hover:brightness-150"
//               />
//             </div>
//             <p className="text-[20px] text-[#4B336D] font-bold transition-all duration-300 group-hover:text-[#E1E8FF]">
//               {software.title}
//             </p>
//             <p className="text-[18px] text-[#4B336D] transition-all duration-300 group-hover:text-[#E1E8FF]">
//               {software.desc}
//             </p>

//             {/* Hover background overlay */}
//             <style jsx>{`
//               .group:hover {
//                 background-color: #8392c4 !important;
//                 background-image: none !important;
//               }
//             `}</style>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechStack;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const softwareDataTop = [
  {
    id: 1,
    img: "/image 1791.svg",
    title: "HubSpot CRM",
    desc: "Lead management and deal tracking.",
  },
  {
    id: 2,
    img: "/image 1792.svg",
    title: "LinkedIn Sales Navigator",
    desc: "Targeted B2B prospecting tool.",
  },
  {
    id: 3,
    img: "/apollo.svg",
    title: "Apollo.io",
    desc: "Lead enrichment and outreach automation.",
  },
  {
    id: 4,
    img: "/sense6.svg",
    title: "6sense",
    desc: "Buyer intent and account insights.",
  },
];

const softwareDataCenter = [
  {
    id: 5,
    img: "/image 1795.svg",
    title: "PandaDoc",
    desc: "Proposal and contract automation.",
  },
  {
    id: 6,
    img: "/image 1796.svg",
    title: "Notion",
    desc: "Team collaboration and workflow management.",
  },
  {
    id: 7,
    img: "/image 1797.svg",
    title: "ZoomInfo",
    desc: "Company intelligence and contact discovery.",
  },
  {
    id: 8,
    img: "/image 1798.svg",
    title: "Jira",
    desc: "Technical task tracking and coordination.",
  },
];

const TechStack2 = () => {
  return (
    <div className="-mt-[15%] ">
      <div className="h-full w-full  relative  bg-transparent ">
        <div className="flex justify-center items-center   ">
          <div
            className="bg-[#AA8BFF] text-white -mb-10 text-[20px] px-10 py-3 border-[1px] border-white rounded-[50px]"
            style={{
              boxShadow: "0px 4px 14.7px 0px #00000040",
            }}
          >
            Technical Business Development
          </div>
        </div>
        <div className="bg-[url('/ts1.svg')] bg-cover pb-[20%] ">
          <div className="relative pt-[10%]">
            <div className="flex justify-center gap-14 relative z-20">
              <div className="flex justify-center gap-3 relative z-20">
                {softwareDataTop.map((software) => (
                  <div
                    key={software.id}
                    className="group w-[188px] h-[198px] rounded-[29px] text-center pt-3 px-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(64.61% 64.61% at 59.41% 35.39%, #DAE3FF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 8px 4px 0px #00000040",
                    }}
                  >
                    <div className="flex justify-center items-center mb-3">
                      <Image
                        src={software.img}
                        alt={software.title}
                        width={1000}
                        height={1000}
                        className="w-[77px] h-[77px] transition-all duration-300 group-hover:brightness-200"
                      />
                    </div>
                    <p className="text-[14px] text-[#4B336D] font-bold transition-all duration-300 group-hover:text-[#E1E8FF]">
                      {software.title}
                    </p>
                    <p className="text-[14px] text-[#4B336D] transition-all duration-300 group-hover:text-[#E1E8FF]">
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
            <div className="flex justify-center items-center relative my-1 z-20">
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 720 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="relative z-20 rounded-full"
              >
                <Image
                  src="/plus.svg"
                  alt="plus"
                  width={1000}
                  height={1000}
                  className="w-[85px] h-[130px]"
                />
              </motion.div>
            </div>

            {/* center Row */}
            <div className="flex justify-center gap-14 relative z-20">
              <div className="flex justify-center gap-3 relative z-20">
                {softwareDataCenter.map((software) => (
                  <div
                    key={software.id}
                    className="group w-[188px] h-[198px] rounded-[29px] text-center pt-3 px-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(64.61% 64.61% at 59.41% 35.39%, #DAE3FF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 8px 4px 0px #00000040",
                    }}
                  >
                    <div className="flex justify-center items-center mb-3">
                      <Image
                        src={software.img}
                        alt={software.title}
                        width={1000}
                        height={1000}
                        className="w-[77px] h-[77px] transition-all duration-300 group-hover:brightness-200"
                      />
                    </div>
                    <p className="text-[14px] text-[#4B336D] font-bold transition-all duration-300 group-hover:text-[#E1E8FF]">
                      {software.title}
                    </p>
                    <p className="text-[14px] text-[#4B336D] transition-all duration-300 group-hover:text-[#E1E8FF]">
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
    </div>
  );
};

export default TechStack2;

// bubble animation

// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// const TechStack = () => {
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

// export default TechStac;
