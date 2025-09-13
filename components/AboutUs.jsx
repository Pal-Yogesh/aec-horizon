// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React from "react";

// const AboutUs = () => {
//   return (
//     <div>
//       <div className="bg-[url('/aboutus.svg')] h-full w-full">
//         <div className="text-center">
//           <h2 className="font-medium text-[80px] text-[#4B336D]">About</h2>
//           <h2 className=" text-[80px] gradient-text-about font-bold lg:-mt-6">
//             AEC Horizon
//           </h2>
//           <p className="text-[#3B1D66] text-[40px] font-normal">
//             AEC Horizon was built on the belief that
//           </p>
//           <p className="text-[#3B1D66] text-[40px] font-medium lg:-mt-3">
//             great projects need strong support.
//           </p>
//         </div>

//         <div className="flex justify-center items-center">
//           <div className="flex justify-center items-center my-20 ">
//             <div
//               className="w-[538px] h-full bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center  leading-tight border-[4px] border-[#FFFFFF] "
//               style={{
//                 boxShadow: "0px 8px 4px 0px #00000040",
//                 backdropFilter: "blur(25px)",
//               }}
//             >
//               <div>
//                 <p className="text-[70px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] ">
//                   Our Story
//                 </p>
//               </div>
//               <div className="py-10">
//                 <p className="text-[#3B1D66] text-[40px] px-12">
//                   Over the years, we&apos;ve grown into a trusted partner,
//                   empowering AEC professionals with solutions that blend
//                   precision and innovation.
//                 </p>
//               </div>

//             </div>
//           </div>
//           <div className="flex justify-center items-center my-20 ">
//             <div
//               className="w-[538px] h-full bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center  leading-tight border-[4px] border-[#FFFFFF] "
//               style={{
//                 boxShadow: "0px 8px 4px 0px #00000040",
//                 backdropFilter: "blur(25px)",
//               }}
//             >
//               <div>
//                 <p className="text-[70px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] ">
//                   Our Story
//                 </p>
//               </div>
//               <div className="py-10">
//                 <p className="text-[#3B1D66] text-[40px] px-12">
//                   Over the years, we&apos;ve grown into a trusted partner,
//                   empowering AEC professionals with solutions that blend
//                   precision and innovation.
//                 </p>
//               </div>

//               <div className="flex justify-center items-cente gap-[60%] px-12 pb-10">
//                 <div className="">
//                   <button
//                     className="border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[70px] h-[70px]"
//                     style={{
//                       boxShadow: "0px 8px 4px 0px #00000040",

//                       backdropFilter: "blur(25px)",
//                     }}
//                   >
//                     <ChevronLeft
//                       size={60}
//                       className="text-[#47099F] text-[40px] font-bold"
//                     />
//                   </button>
//                 </div>
//                 <div className="">
//                   <button
//                     className="border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[70px] h-[70px]"
//                     style={{
//                       boxShadow: "0px 8px 4px 0px #00000040",

//                       backdropFilter: "blur(25px)",
//                     }}
//                   >
//                     <ChevronRight
//                       size={60}
//                       className="text-[#47099F] text-[40px] font-bold ml-1.5"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center items-center my-20 ">
//             <div
//               className="w-[538px] h-full bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center  leading-tight border-[4px] border-[#FFFFFF] "
//               style={{
//                 boxShadow: "0px 8px 4px 0px #00000040",
//                 backdropFilter: "blur(25px)",
//               }}
//             >
//               <div>
//                 <p className="text-[70px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] ">
//                   Our Story
//                 </p>
//               </div>
//               <div className="py-10">
//                 <p className="text-[#3B1D66] text-[40px] px-12">
//                   Over the years, we&apos;ve grown into a trusted partner,
//                   empowering AEC professionals with solutions that blend
//                   precision and innovation.
//                 </p>
//               </div>

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      title: "Our Vision",
      content:
        "At AEC Horizon, our vision is simple yet powerful: 'Transforming the Industry Behind the Scenes.' We believe every project deserves the best support.",
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
      <div className="bg-[url('/aboutus.svg')] bg-cover bg-center h-[250vh] w-full">
        <div>
          <div className="text-center pt-52">
            <h2 className="font-medium text-[80px] text-[#4B336D]">About</h2>
            <h2 className="text-[80px] gradient-text-about font-bold lg:-mt-6">
              AEC Horizon
            </h2>
            <p className="text-[#3B1D66] text-[40px] font-normal">
              AEC Horizon was built on the belief that
            </p>
            <p className="text-[#3B1D66] text-[40px] font-medium lg:-mt-3">
              great projects need strong support.
            </p>
          </div>

          <div className="flex justify-center items-center my-20 relative ">
            {/* Left Card (Previous) - Partially visible */}
            <div className="absolute left-[38%] transform -translate-x-1/2 z-0 opacity-60">
              <div
                className="w-[538px] h-full bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
                style={{
                  boxShadow: "0px 8px 4px 0px #00000040",
                }}
              >
                <div>
                  <p className="text-[70px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF]">
                    {carouselData[getPreviousIndex()].title}
                  </p>
                </div>
                <div className="py-10">
                  <p className="text-[#3B1D66] text-[40px] px-12">
                    {carouselData[getPreviousIndex()].content}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Card (Current) - Fully visible with controls */}
            <div className="z-10 relative">
              <div
                className="w-[538px] h-full  bg-[#FFFFFF54]  rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
                style={{
                  boxShadow: "0px 8px 4px 0px #00000040",
                  backdropFilter: "blur(25px)",
                }}
              >
                <div>
                  <p className="text-[70px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] bg-white">
                    {carouselData[currentIndex].title}
                  </p>
                </div>
                <div className="py-10 ">
                  <p className="text-[#3B1D66] text-[40px] px-12">
                    {carouselData[currentIndex].content}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center px-12 pb-10">
                  <button
                    onClick={handlePrevious}
                    className="cursor-pointer border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[70px] h-[70px] flex items-center justify-center transition-all duration-200 hover:scale-105"
                    style={{
                      boxShadow: "0px 8px 4px 0px #00000040",
                      backdropFilter: "blur(25px)",
                    }}
                  >
                    <ChevronLeft
                      size={40}
                      className="text-[#47099F] font-bold"
                    />
                  </button>

                  <button
                    onClick={handleNext}
                    className="cursor-pointer border-[1px] rounded-full border-[#DCDCDC] bg-[#FFFFFF] w-[70px] h-[70px] flex items-center justify-center transition-all duration-200 hover:scale-105"
                    style={{
                      boxShadow: "0px 8px 4px 0px #00000040",
                      backdropFilter: "blur(25px)",
                    }}
                  >
                    <ChevronRight
                      size={40}
                      className="text-[#47099F] font-bold"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card (Next) - Partially visible */}
            <div className="absolute right-[38%] transform translate-x-1/2 z-0 opacity-60">
              <div
                className="w-[538px] h-full bg-[#FFFFFF8A] backdrop-blur-[81px] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
                style={{
                  boxShadow: "0px 8px 4px 0px #00000040",
                }}
              >
                <div>
                  <p className="text-[70px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF]">
                    {carouselData[getNextIndex()].title}
                  </p>
                </div>
                <div className="py-10">
                  <p className="text-[#3B1D66] text-[40px] px-12">
                    {carouselData[getNextIndex()].content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Indicator dots */}
          {/* <div className="flex justify-center space-x-3 pb-10">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#47099F] scale-110"
                  : "bg-[#DCDCDC] hover:bg-[#47099F]/50"
              }`}
            />
          ))}
        </div> */}
        </div>

        <div className="flex justify-center items-center">
          <div>
            <div
              className="bg-[#FFFFFF57] border-[3px] border-[#FFFFFF] text-center px-20 rounded-[70.5px] py-3"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <p className="text-[32px] gradient-text-about">
                Supporting Innovators, Building Success.
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 gap-6">
              <p className="text-[32px] gradient-text-about">
                See how we can help you
              </p>
              <ArrowRight size={50} className="text-[#7E3C77]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
