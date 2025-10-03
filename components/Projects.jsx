// "use client";
// import Image from "next/image";
// import React from "react";

// const Projects = () => {
//   return (
//     <div>
//       <div className="bg-[url('/projects.svg')] bg-cover bg-center py-16">
//         <div className="pt-28 pb-20 px-[20%] ">
//           <div>
//             <div
//               className="border-[4px] rounded-[21px] w-[244px] text-center py-1 font-semibold text-[25px] border-white"
//               style={{
//                 background:
//                   "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//                 boxShadow: "0px 2.96px 5.03px 0px #00000040",
//               }}
//             >
//               <p className="gradient-text-about text-[18.49px]">
//                 Detailed View of Services
//               </p>
//             </div>
//             <span className="gradient-text font-bold text-[48.08px]">
//               Projects
//             </span>
//             <p className="gradient-text text-[22.19px] leading-tight">
//               Here&apos;s an exact look at what we worked on{" "}
//             </p>
//           </div>

//           <div className="pt-20">
//             <div
//               className="bg-[#FFFFFFD4] border-[4px] border-[#FFFFFF] rounded-[31px] w-[290px] h-[410px] flex justify-center items-center  text-[#575757]  hover:text-white hover:scale-105 transition duration-300 ease-in-out"
//               style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.background =
//                   "linear-gradient(180deg, rgba(92, 124, 255, 0.83) 0%, rgba(201, 212, 255, 0.83) 100%)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.background = "#FFFFFFD4")
//               }
//             >
//               <div
//                 className="  rounded-[31px] w-[250px] p-2 flex justify-center items-center
//             "
//                 style={{
//                   boxShadow: "0px 4px 14.9px 0px #A9BBFF",
//                 }}
//               >
//                 <div className="flex flex-col justify-center items-center space-y-4">
//                   <div
//                     className="flex justify-center items-center rounded-[31px]"
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(179, 193, 255, 0.83) 100%)",
//                       boxShadow: "0px -12px 17.6px 0px #B8C6FF29 inset",
//                     }}
//                   >
//                     <Image
//                       src="b1.svg"
//                       alt="bg"
//                       width={1000}
//                       height={1000}
//                       className="w-[214px] h-[166px]  hover:scale-x-[1.3] hover:scale-y-[1.6] transition duration-600 ease-in-out"
//                     />
//                   </div>
//                   <div
//                     className="border-[1.48px] rounded-[10.9px] w-[118px] h-[17px] text-center font-semibold border-white mt-4 "
//                     style={{
//                       background:
//                         "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",

//                       boxShadow: "0px 1.48px 2.51px 0px #00000040",
//                     }}
//                   >
//                     <p className="gradient-text-about text-[10px]">
//                       Commercial
//                     </p>
//                   </div>

//                   <div className="text-center font-semibold p-1 ">
//                     <p className="text-[20px] ">Vantage Point Towers</p>

//                     <p className="text-[12px] ">
//                       We delivered full architectural BIM modeling and MEP
//                       coordination for this 40-story landmark. Our clash
//                       detection saved $200k in potential rework.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;




"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    img: "/b1.svg",
    category: "Commercial",
    title: "Vantage Point Towers",
    desc: "We delivered full architectural BIM modeling and MEP coordination for this 40-story landmark. Our clash detection saved $200k in potential rework.",
  },
  {
    id: 2,
    img: "/b2.svg",
    category: "Commercial",
    title: "Skyline Heights",
    desc: "A 50-story commercial complex where BIM coordination helped streamline construction and reduce overall costs by 15%.",
  },
  {
    id: 3,
    img: "/b3.svg",
    category: "Residential",
    title: "Green Living Apartments",
    desc: "Comprehensive BIM and MEP modeling for sustainable living spaces with zero-clash detection.",
  },
  {
    id: 4,
    img: "/b4.svg",
    category: "Industrial",
    title: "Fusion Industrial Park",
    desc: "Delivered detailed MEP coordination and 3D BIM modeling for industrial-grade facilities.",
  },
  {
    id: 5,
    img: "/b1.svg",
    category: "Commercial",
    title: "Techno Valley Plaza",
    desc: "Architectural and structural BIM coordination for a cutting-edge IT park.",
  },
  {
    id: 6,
    img: "/b2.svg",
    category: "Hospitality",
    title: "BlueWave Hotel",
    desc: "Executed end-to-end BIM coordination and clash detection for luxury hospitality construction.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const Projects = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index + 4 < projectsData.length) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="bg-[url('/projects.svg')] bg-cover bg-center py-16">
      <div className="pt-28 pb-20 px-[10%]">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="border-[4px] rounded-[21px] w-[244px] mx-auto py-1 font-semibold text-[25px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
              boxShadow: "0px 2.96px 5.03px 0px #00000040",
            }}
          >
            <p className="gradient-text-about text-[18.49px]">
              Detailed View of Services
            </p>
          </div>
          <span className="gradient-text-about font-bold text-[48.08px] mt-4">
            Projects
          </span>
          <p className="gradient-text-about text-[22.19px] leading-tight">
            Here&apos;s an exact look at what we worked on
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex gap-6"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {projectsData.slice(index, index + 4).map((project, i) => (
                  <motion.div
                    key={project.id}
                    className={`relative bg-[#FFFFFFD4]  border-[4px] border-[#FFFFFF] rounded-[31px] w-[290px] h-[410px] flex justify-center items-center  text-[#575757] hover:text-white transition duration-300 ease-in-out 
                    
                    `}
                    style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                    whileHover={{
                      scale: i === 1 ? 1.09 : 1.09,
                      transition: { duration: 0.3 },
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(180deg, rgba(92, 124, 255, 0.83) 0%, rgba(201, 212, 255, 0.83) 100%)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#FFFFFFD4")
                    }
                  >
                    <div
                      className="rounded-[31px] w-[250px] p-2 flex flex-col justify-center items-center"
                      style={{
                        boxShadow: "0px 4px 14.9px 0px #A9BBFF",
                      }}
                    >
                      <div
                        className="flex justify-center items-center rounded-[31px]"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(179, 193, 255, 0.83) 100%)",
                          boxShadow: "0px -12px 17.6px 0px #B8C6FF29 inset",
                        }}
                      >
                        <Image
                          src={project.img}
                          alt={project.title}
                          width={214}
                          height={166}
                          className="w-[214px] h-[166px] hover:scale-[1.3]  transition duration-500 ease-in-out"
                        />
                      </div>

                      <div
                        className="border-[1.48px] rounded-[10.9px] w-[118px] h-[17px] text-center font-semibold border-white mt-4"
                        style={{
                          background:
                            "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
                          boxShadow: "0px 1.48px 2.51px 0px #00000040",
                        }}
                      >
                        <p className="gradient-text-about text-[10px]">
                          {project.category}
                        </p>
                      </div>

                      <div className="text-center font-semibold p-1 mt-2">
                        <p className="text-[20px]">{project.title}</p>
                        <p className="text-[12px]">{project.desc}</p>
                      </div>
                    </div>

                    {/* Navigation Arrows - Only on center card (2nd card, index 1) */}
                    {i === 1 && (
                      <>
                        {/* Left Arrow */}
                        <button
                          onClick={prevSlide}
                          disabled={index === 0}
                          className={`absolute left-[-15px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-300 ${
                            index === 0
                              ? "bg-[#829BFF] cursor-not-allowed opacity-50"
                              : "bg-[#829BFF] hover:bg-[#829BFF20] shadow-lg hover:shadow-xl"
                          }`}
                          style={{
                            border: "1px solid #FFFFFF",

                            boxShadow: "0px 4px 13.6px 0px #00000052"

                          }}
                        >
                          <ArrowLeft 
                            size={20} 
                            className={index === 0 ? "text-gray-400" : "text-white"}
                            strokeWidth={3}
                          />
                        </button>

                        {/* Right Arrow */}
                        <button
                          onClick={nextSlide}
                          disabled={index + 4 >= projectsData.length}
                          className={`absolute right-[-15px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-300 ${
                            index + 4 >= projectsData.length
                              ? "bg-[#829BFF] cursor-not-allowed opacity-50"
                              : "bg-[#829BFF] hover:bg-[#829BFF20] shadow-lg hover:shadow-xl"
                          }`}
                          style={{
                            border: "1px solid #FFFFFF",
                            boxShadow: "0px 4px 13.6px 0px #00000052"
                          }}
                        >
                          <ArrowRight 
                            size={20} 
                            className={index + 4 >= projectsData.length ? "text-gray-400" : "text-white"}
                            strokeWidth={3}
                          />
                        </button>
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;