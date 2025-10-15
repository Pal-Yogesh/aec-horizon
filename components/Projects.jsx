"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projectsData1 = [
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
const projectsData2 = [
  {
    id: 7,
    img: "/b3.svg",
    category: "Residential",
    title: "Lakeside Residences",
    desc: "BIM coordination for luxury lake-facing homes with advanced sustainability integrations.",
  },
  {
    id: 8,
    img: "/b4.svg",
    category: "Industrial",
    title: "Solar Tech Factory",
    desc: "3D BIM modeling for an energy-efficient solar panel production facility.",
  },
  {
    id: 9,
    img: "/b2.svg",
    category: "Commercial",
    title: "The Horizon Complex",
    desc: "Detailed MEP and structural coordination for a smart commercial hub.",
  },
  {
    id: 10,
    img: "/b1.svg",
    category: "Hospitality",
    title: "Urban Suites",
    desc: "BIM implementation for seamless design-to-construction process in urban hospitality.",
  },
  {
    id: 11,
    img: "/b3.svg",
    category: "Residential",
    title: "Skyview Apartments",
    desc: "End-to-end BIM execution for premium high-rise apartments.",
  },
  {
    id: 12,
    img: "/b4.svg",
    category: "Industrial",
    title: "Metro Logistics Park",
    desc: "Delivered MEP and architectural BIM solutions for industrial warehousing.",
  },
];

function ProjectCarousel({ data, arrowCard = 3 }) { 
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index + 4 < data.length) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex gap-6 transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${index * (290 + 24)}px)`,
        }}
      >
        {data.map((project, i) => {
          const isVisible = i >= index && i < index + 4;
          const isArrowCard = i === index + (arrowCard - 1); // 👈 dynamically set card

          return (
            <div
              key={project.id}
              className={`flex-shrink-0 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-30 scale-90"
              }`}
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div
                className="relative bg-white/80 backdrop-blur-sm border-4 hover:scale-105 border-white rounded-[31px] w-[290px] h-[410px] flex justify-center items-center text-[#575757] group hover:text-white transition-all duration-500 ease-out cursor-pointer"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(180deg, rgba(92, 124, 255, 0.83) 0%, rgba(201, 212, 255, 0.83) 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
                }}
              >
                <div
                  className="rounded-[31px] w-[250px] p-2 flex flex-col justify-center items-center"
                  style={{
                    boxShadow: "0px 4px 14.9px 0px #A9BBFF",
                  }}
                >
                  {/* Image */}
                  <div
                    className="flex justify-center items-center rounded-[31px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(179, 193, 255, 0.83) 100%)",
                      boxShadow: "0px -12px 17.6px 0px #B8C6FF29 inset",
                    }}
                  >
                    <div className="w-[214px] h-[166px] flex items-center justify-center text-7xl group-hover:scale-125 transition-transform duration-500 ease-out">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={214}
                        height={166}
                      />
                    </div>
                  </div>

                  {/* Category */}
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

                  {/* Text */}
                  <div className="text-center font-semibold p-1 mt-2">
                    <p className="text-[20px]">{project.title}</p>
                    <p className="text-[12px] leading-tight">{project.desc}</p>
                  </div>
                </div>

                {/* Navigation Buttons on selected card */}
                {isArrowCard && (
                  <>
                    <button
                      onClick={prevSlide}
                      disabled={index === 0}
                      className={`absolute left-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                        index === 0
                          ? "bg-[#829BFF] cursor-not-allowed opacity-40"
                          : "bg-[#829BFF] hover:bg-[#6B84FF] hover:scale-110 shadow-lg hover:shadow-xl"
                      }`}
                      style={{
                        border: "2px solid #FFFFFF",
                        boxShadow: "0px 4px 13.6px 0px #00000052",
                      }}
                    >
                      <ArrowLeft
                        size={24}
                        className={
                          index === 0 ? "text-gray-300" : "text-white"
                        }
                        strokeWidth={3}
                      />
                    </button>

                    <button
                      onClick={nextSlide}
                      disabled={index + 4 >= data.length}
                      className={`absolute right-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                        index + 4 >= data.length
                          ? "bg-[#829BFF] cursor-not-allowed opacity-40"
                          : "bg-[#829BFF] hover:bg-[#6B84FF] hover:scale-110 shadow-lg hover:shadow-xl"
                      }`}
                      style={{
                        border: "2px solid #FFFFFF",
                        boxShadow: "0px 4px 13.6px 0px #00000052",
                      }}
                    >
                      <ArrowRight
                        size={24}
                        className={
                          index + 4 >= data.length
                            ? "text-gray-300"
                            : "text-white"
                        }
                        strokeWidth={3}
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: data.length - 3 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-8 h-3 bg-[#829BFF]"
                : "w-3 h-3 bg-[#C4D0FF] hover:bg-[#A0B0FF]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="py-16">
      <div className="pt-28 pb-20 px-4 sm:px-8 lg:px-[8%] overflow-x-hidden">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="border-4 rounded-[21px] w-[244px] mx-auto py-1 font-semibold text-[25px] border-white"
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
          <span className="gradient-text font-bold text-[48.08px]">
            Projects
          </span>
          <p className="gradient-text text-[22.19px] leading-tight">
            Here&apos;s an exact look at what we worked on
          </p>
        </div>

        {/* First carousel — arrows on 2nd card */}
        <ProjectCarousel data={projectsData1} arrowCard={2} />

        {/* Second carousel — arrows on 3rd card */}
        <div className="mt-10">
          <ProjectCarousel data={projectsData2} arrowCard={3} />
        </div>
      </div>
    </div>
  );
}
