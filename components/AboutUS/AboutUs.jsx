"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import SectionBg from "../Background/SectionBg";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const carouselData = [
    {
      title: "Our Vision",
      content:
        "To reshape the future of the AEC industry through the seamless fusion of technical intelligence, creative innovation, and digital transformation. We envision architects, engineers, and construction leaders working with unmatched precision, efficiency, and collaboration, powered by BIM-led design, data-driven strategy, and technology that enhances human expertise.",
    },
    {
      title: "Our Story",
      content:
        "AEC Horizon was created to meet the real needs of the architecture, engineering, and construction sectors: not just fragmented solutions, but a holistic partner fluent in both design and business growth. Today, we help AEC firms worldwide turn complexity into clarity, transforming how they build, communicate, and scale.",
    },
    {
      title: "Our Mission",
      content:
        "We aim to empower every AEC professional, from independent architects to global engineering firms, with tools, systems, and strategies to elevate their craft and accelerate results. Through BIM integration, technical expertise, and digital intelligence, we build a connected ecosystem where efficiency, creativity, and sustainability thrive",
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

          {/* Updated Carousel with Project-style Animation */}
          <div className="flex justify-center items-center my-20  relative overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-[1128px] h-[400px] lg:h-[500px] overflow-hidden">
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
                          <p className="text-[#3B1D66] text-[15px] sm:text-[17px] lg:text-[18px] px-5">
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
