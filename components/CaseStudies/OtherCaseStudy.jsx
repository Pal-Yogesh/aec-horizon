"use client";
import React from "react";

const OtherCaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Storyline Heights",
      desc: "Read the case study of one of the largest residential projects ever.",
    },
    {
      id: 2,
      title: "Green Valley Towers",
      desc: "A sustainable project focusing on eco-friendly construction practices.",
    },
    {
      id: 3,
      title: "Blue Horizon Mall",
      desc: "Exploring modern retail architecture with advanced BIM solutions.",
    },
    {
      id: 4,
      title: "Skyline Residences",
      desc: "High-rise living redefined with precision engineering and design.",
    },
    {
      id: 5,
      title: "MetroLink Hub",
      desc: "Transit-oriented development integrating technology and design.",
    },
    {
      id: 6,
      title: "Grand Arena",
      desc: "A case study of world-class sports infrastructure delivery.",
    },
    {
      id: 7,
      title: "Sunrise Villas",
      desc: "Luxury meets innovation in this residential villa project.",
    },
    {
      id: 8,
      title: "Urban Heights",
      desc: "Innovative mixed-use development with modern engineering.",
    },
  ];

  return (
    <div className="pb-10 pt-10">
      {/* Header */}
      <div className="flex justify-center items-center mb-8">
        <div
          className="bg-[#DEE4FF] w-[250px] sm:w-[300px] md:w-[370px] flex justify-center items-center rounded-[7px] py-1.5"
          style={{
            boxShadow: "0px 4px 7.8px 0px #92B3FF",
          }}
        >
          <p className="gradient-text text-[18px] sm:text-[22px] md:text-[29px] font-bold text-center">
            View Other Case Studies
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div
        className="
          flex 
          gap-6 
          sm:gap-8 
          px-4 
          sm:px-6 
          md:px-10 
          overflow-x-auto 
          scrollbar-thin 
          scrollbar-thumb-[#9CB0FF] 
          scrollbar-track-[#E1E7FF] 
          scrollbar-thumb-rounded-full 
          scrollbar-track-rounded-full 
          scroll-smooth
        "
      >
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[210px] sm:w-[240px] md:w-[260px] cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Outer Card */}
            <div
              className="bg-[#E3E9FF] rounded-[18px] flex justify-center items-center p-2 md:p-3"
              style={{
                boxShadow: "0px 4px 20.4px 0px #1242FF40",
              }}
            >
              <div
                className="bg-[#F1F4FF] rounded-[18px] w-full h-[200px] sm:h-[220px] md:h-[233px]"
                style={{
                  boxShadow: "0px 4px 20.4px 0px #1242FF40 inset",
                }}
              ></div>
            </div>

            {/* Title */}
            <div
              className="bg-[#F1F4FF] rounded-[10px] w-[80%] mx-auto mt-3 py-1 text-center"
              style={{
                boxShadow: "0px 4px 4px 0px #9FB3FF",
              }}
            >
              <div className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold gradient-text-about leading-snug">
                {item.title}
              </div>
            </div>

            {/* Description */}
            <p className="text-[#4B336D] text-[13px] sm:text-[15px] md:text-[16px] text-center mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCaseStudy;
