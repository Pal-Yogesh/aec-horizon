// "use client";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useState } from "react";
// import OurAchievement from "./OurAchievement";

// const AboutUs = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const carouselData = [
//     {
//       title: "Our Vision",
//       content:
//         "At AEC Horizon, our vision is simple yet powerful: 'Transforming the Industry Behind the Scenes.' We believe every project deserves the best support.",
//     },
//     {
//       title: "Our Story",
//       content:
//         "Over the years, we've grown into a trusted partner, empowering AEC professionals with solutions that blend precision and innovation.",
//     },
//     {
//       title: "Our Mission",
//       content:
//         "We are committed to delivering excellence through innovative solutions, cutting-edge technology, and unwavering dedication to our clients' success.",
//     },
//   ];

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getPreviousIndex = () => {
//     return currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
//   };

//   const getNextIndex = () => {
//     return currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
//   };

//   return (
//     <div>
//       <div className= "w-full ">
//         <div>
//           <div className="text-center pt-48">
//             <h2 className="font-medium text-[58.25px] text-[#4B336D]">About</h2>
//             <h2 className="text-[58.25px] gradient-text-about font-bold lg:-mt-7">
//               AEC Horizon
//             </h2>
//             <p className="text-[#3B1D66] text-[29.13px] font-normal">
//               AEC Horizon was built on the belief that
//             </p>
//             <p className="text-[#3B1D66] text-[29.13px] font-medium lg:-mt-2">
//               great projects need strong support.
//             </p>
//           </div>

//           <div className="flex justify-center items-center my-24 relative ">
//             {/* Left Card (Previous) - Partially visible */}
//             <div className="absolute left-[38%] transform -translate-x-1/2 z-0 opacity-60">
//               <div
//                 className="w-[360px] h-[455px]  bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
//                 style={{
//                   boxShadow: "0px 8px 4px 0px #00000040",
//                 }}
//               >
//                 <div>
//                   <p className="text-[42px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF]">
//                     {carouselData[getPreviousIndex()].title}
//                   </p>
//                 </div>
//                 <div className="py-10">
//                   <p className="text-[#3B1D66] text-[19px] px-12">
//                     {carouselData[getPreviousIndex()].content}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Center Card (Current) - Fully visible with controls */}
//             <div className="z-10 relative">
//               <div
//                 className="w-[360px] h-[455px]  bg-[#FFFFFF54]  rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
//                 style={{
//                   boxShadow: "0px 8px 4px 0px #00000040",
//                   backdropFilter: "blur(25px)",
//                 }}
//               >
//                 <div>
//                   <p className="text-[42px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] bg-white">
//                     {carouselData[currentIndex].title}
//                   </p>
//                 </div>
//                 <div className="py-10 ">
//                   <p className="text-[#3B1D66] text-[19px] px-12">
//                     {carouselData[currentIndex].content}
//                   </p>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-between items-center px-12 mt-16">
//                   <button
//                     onClick={handlePrevious}
//                     className="cursor-pointer border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[42px] h-[42px] flex items-center justify-center transition-all duration-200 hover:scale-105"
//                     style={{
//                       boxShadow: "0px 8px 4px 0px #00000040",
//                       backdropFilter: "blur(25px)",
//                     }}
//                   >
//                     <ChevronLeft
//                       size={25}
//                       className="text-[#47099F] font-bold"
//                     />
//                   </button>

//                   <button
//                     onClick={handleNext}
//                     className="cursor-pointer border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[42px] h-[42px] flex items-center justify-center transition-all duration-200 hover:scale-105"
//                     style={{
//                       boxShadow: "0px 8px 4px 0px #00000040",
//                       backdropFilter: "blur(25px)",
//                     }}
//                   >
//                     <ChevronRight
//                       size={25}
//                       className="text-[#47099F] font-bold"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Card (Next) - Partially visible */}
//             <div className="absolute right-[38%] transform translate-x-1/2 z-0 opacity-60">
//               <div
//                 className="w-[360px] h-[455px]  bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
//                 style={{
//                   boxShadow: "0px 8px 4px 0px #00000040",
//                 }}
//               >
//                 <div>
//                   <p className="text-[42px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF]">
//                     {carouselData[getNextIndex()].title}
//                   </p>
//                 </div>
//                 <div className="py-10">
//                   <p className="text-[#3B1D66] text-[19px] px-12">
//                     {carouselData[getNextIndex()].content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center">
//           <div>
//             <div
//               className="bg-[#FFFFFF57] border-[3px] border-[#FFFFFF] text-center px-20 rounded-[70.5px] py-3"
//               style={{
//                 boxShadow: "0px 4px 4px 0px #00000040",
//               }}
//             >
//               <p className="text-[25px] gradient-text-about">
//                 Supporting Innovators, Building Success.
//               </p>
//             </div>
//             <div className="flex justify-center items-center mt-10 gap-6">
//               <p className="text-[32px] gradient-text-about">
//                 See how we can help you
//               </p>
//               <button
//                 className="text-white text-[27px] rounded-[47px] shadow-xl cursor-pointer w-[57px] h-[58px]  flex justify-center items-center"
//                 style={{
//                   background:
//                     "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 <ArrowRight size={32} className="text-white font-bold" />
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;

"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const carouselData = [
    {
      title: "Our Vision",
      content:
        "At AEC Horizon, our vision is simple yet powerful: 'Supporting the Industry Behind the Scenes.' We believe every project deserves the best support.",
    },
    {
      title: "Our Story",
      content:
        "Over the years, we've grown into a trusted partner, empowering AEC professionals with solutions that blend precision and innovation.",
    },
    {
      title: "Our Mission",
      content:
        "We are committed to delivering excellence through innovative solutions, cutting-edge technology, and unwavering dedication to our clients' success.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div>
      <div className="w-full ">
        <div>
          <div className="text-center pt-60">
            <h2 className="font-medium text-[30px] text-[#4B336D]">About</h2>
            <h2 className="text-[30px] gradient-text-about font-bold ">
              AEC Horizon
            </h2>
            <p className="text-[#3B1D66] text-[19px] font-normal">
              AEC Horizon was built on the belief that
            </p>
            <p className="text-[#3B1D66] text-[21px] font-semibold ">
              great projects need strong support.
            </p>
          </div>

          {/* Updated Carousel with Project-style Animation */}
          <div className="flex justify-center items-center my-20  relative overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-[1128px] h-[500px] overflow-hidden">
              {/* Inner Container with Slide Animation */}
              <div
                className="flex gap-6 transition-transform duration-700 ease-out absolute"
                style={{
                  transform: `translateX(calc(-${currentIndex * 384}px))`,
                  left: `calc(50% - 192px)`, // Center the active card
                }}
              >
                {carouselData.map((item, index) => {
                  const position =
                    index === currentIndex
                      ? "center"
                      : index === getPreviousIndex()
                      ? "left"
                      : index === getNextIndex()
                      ? "right"
                      : "hidden";

                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 transition-all duration-700 ease-out ${
                        position === "center"
                          ? "opacity-100 scale-100 z-10"
                          : position === "left" || position === "right"
                          ? "opacity-60 scale-90 z-0"
                          : "opacity-0 scale-90"
                      }`}
                      style={{
                        transform:
                          position === "center"
                            ? "translateY(0)"
                            : "translateY(0)",
                        position: "relative",
                      }}
                    >
                      <div
                        className="w-[360px] h-[455px] bg-[#FFFFFF54] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
                        style={{
                          boxShadow: "0px 8px 4px 0px #00000040",
                          backdropFilter: "blur(25px)",
                        }}
                      >
                        <div>
                          <p className="text-[42px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] bg-white">
                            {item.title}
                          </p>
                        </div>
                        <div className="py-10">
                          <p className="text-[#3B1D66] text-[19px] px-12">
                            {item.content}
                          </p>
                        </div>

                        {/* Navigation Buttons - Only on center card */}
                        {position === "center" && (
                          <div className="flex justify-between items-center px-12 mt-16">
                            <button
                              onClick={handlePrevious}
                              className="cursor-pointer border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[42px] h-[42px] flex items-center justify-center transition-all duration-200 hover:scale-105"
                              style={{
                                boxShadow: "0px 8px 4px 0px #00000040",
                                backdropFilter: "blur(25px)",
                              }}
                            >
                              <ChevronLeft
                                size={25}
                                className="text-[#47099F] font-bold"
                              />
                            </button>

                            <button
                              onClick={handleNext}
                              className="cursor-pointer border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[42px] h-[42px] flex items-center justify-center transition-all duration-200 hover:scale-105"
                              style={{
                                boxShadow: "0px 8px 4px 0px #00000040",
                                backdropFilter: "blur(25px)",
                              }}
                            >
                              <ChevronRight
                                size={25}
                                className="text-[#47099F] font-bold"
                              />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <div
              className="bg-[#FFFFFF57] border-[3px] border-[#FFFFFF] text-center px-20 rounded-[70.5px] "
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <p className="text-[25px] gradient-text-about">
                Supporting Innovators, Building Success.
              </p>
            </div>
            {/* <div className="flex justify-center items-center mt-10 gap-6">
              <p className="text-[32px] gradient-text-about">
                See how we can help you
              </p>
              <button
                className="text-white text-[27px] rounded-[47px] shadow-xl cursor-pointer w-[57px] h-[58px] flex justify-center items-center transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <ArrowRight size={32} className="text-white font-bold" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
