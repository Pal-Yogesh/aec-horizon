"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import SectionBg from "../Background/SectionBg";

const AboutUs = () => {
  const carouselData = [
    {
      title: "Our Vision",
      content: (
        <>
          Create a more intelligent and interconnected AEC sector. <br /> <br />
          With the appropriate technology, teams can operate more efficiently
          and quickly. <br /> <br />
          Encourage them to perform at their highest level each and every day.
        </>
      ),
    },
    {
      title: "Our Story",
      content: (
        <>
          We began addressing actual problems that AEC teams encounter. <br />
          <br />
          Rather than dispersed solutions, we offer clarity. <br />
          <br />
          We assist businesses in improving their construction, communication,
          and self-assurance.
        </>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <>
          Give AEC professionals useful resources and assistance. <br />
          <br />
          Develop your digital and BIM abilities for more intelligent workflows.{" "}
          <br />
          <br />
          Create an environment that fosters innovation, productivity, and
          sustainability.
        </>
      ),
    },
  ];

  // Create truly infinite loop with large array - no visible resets
  const repeatCount = 50; // Repeat 50 times = 200 items total
  const infiniteData = Array.from(
    { length: repeatCount },
    () => carouselData
  ).flat();
  const middleIndex = Math.floor(repeatCount / 2) * carouselData.length; // Start from exact middle
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const getPreviousIndex = () => {
    return currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex + 1;
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <SectionBg />
        <div className="block md:hidden">
          <SectionBg />
          <SectionBg />
        </div>
      </div>
      <div className="relative  w-full flex flex-col items-center ">
        <div>
          <div className="text-center pt-32 lg:pt-52">
            <h2 className="font-medium text-[23px] sm:text-[25px]  lg:text-[30px] text-[#4B336D]">
              About
            </h2>
            <h2 className="text-[24px] sm:text-[25px]  lg:text-[30px] gradient-text-about font-bold ">
              AEC Horizon
            </h2>
            <p className="text-[#3B1D66] text-[17px] lg:text-[19px] font-normal">
              AEC Horizon was built on the belief that
            </p>
            <p className="text-[#3B1D66] text-[19px] sm:text-[21px] lg:text-[23px] font-semibold ">
              great projects need strong support.
            </p>
          </div>

          {/* desktop carousel */}
          <div className="hidden lg:flex justify-center items-center my-20  relative overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-[1128px] h-[400px] lg:h-[500px] overflow-hidden">
              {/* Inner Container with Slide Animation */}
              <div
                className="flex gap-6 absolute transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(calc(-${currentIndex * 384}px))`,
                  left: `calc(50% - 192px)`, // Center the active card
                }}
              >
                {infiniteData.map((item, index) => {
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
                      className={`flex-shrink-0 transition-all duration-700 px-6 md:px-0 ease-out ${
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
                        className="w-[320px] h-[380px] lg:w-[360px] lg:h-[455px] bg-[#FFFFFF54] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
                        style={{
                          boxShadow: "0px 8px 4px 0px #00000040",
                          backdropFilter: "blur(25px)",
                        }}
                      >
                        <div>
                          <p className="text-[28px] lg:text-[42px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] bg-white">
                            {item.title}
                          </p>
                        </div>
                        <div className="py-5">
                          <p className="text-[#3B1D66] text-[15px] sm:text-[17px] lg:text-[18px] px-4">
                            {item.content}
                          </p>
                        </div>

                        {/* Navigation Buttons - Only on center card */}
                        {position === "center" && (
                          <div className="flex justify-between items-center px-12 mt-[8%]">
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

          {/* mobile carousel */}
          <div className=" lg:hidden flex justify-center items-center my-20  relative ">
            {/* Carousel Container */}
            <div className="relative w-full max-w-[1128px] h-[400px]  [--stride:343.8px]  ">
              {/* Inner Container with Slide Animation */}
              <div
                className="flex gap-6 absolute transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(calc(var(--stride) * -${currentIndex}))`,
                  left: `calc(50% - (var(--stride) / 2))`, // Center the active card
                }}
              >
                {infiniteData.map((item, index) => {
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
                      className={`flex-shrink-0 transition-all duration-700 md:px-0 ease-out ${
                        position === "center"
                          ? "opacity-100 scale-100 z-10"
                          : position === "left" || position === "right"
                          ? "opacity-0 lg:opacity-60 scale-90 z-0"
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
                        className="w-[320px] h-[380px] lg:w-[360px] lg:h-[455px] bg-[#FFFFFF54] rounded-[49px] text-center leading-tight border-[4px] border-[#FFFFFF]"
                        style={{
                          boxShadow: "0px 8px 4px 0px #00000040",
                          backdropFilter: "blur(25px)",
                        }}
                      >
                        <div>
                          <p className="text-[28px] lg:text-[42px] gradient-text-about pt-2 pb-4 font-bold border-b-[7px] border-[#FFFFFF] bg-white">
                            {item.title}
                          </p>
                        </div>
                        <div className="py-5">
                          <p className="text-[#3B1D66] text-[15px] sm:text-[17px] lg:text-[18px] px-4">
                            {item.content}
                          </p>
                        </div>

                        {/* Navigation Buttons - Only on center card */}
                        {position === "center" && (
                          <div className="flex justify-between items-center px-12 mt-[8%]">
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
      </div>
    </div>
  );
};

export default AboutUs;
