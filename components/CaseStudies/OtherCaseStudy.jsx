"use client";
import React from "react";

const OtherCaseStudy = () => {
  // Dummy array for 8 cards
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
    <>
      <div className="pb-10 ">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <div
            className="bg-[#DEE4FF] w-[370px] flex justify-center items-center rounded-[7px] py-1.5"
            style={{
              boxShadow: "0px 4px 7.8px 0px #92B3FF",
            }}
          >
            <p className="gradient-text text-[29px] font-bold">
              View Other Case Studies
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex justify-center items-start gap-8 overflow-hidden p-4">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="w-[260px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Outer Box */}
              <div
                className="w-[255px] h-[264px] bg-[#E3E9FF] rounded-[21px] flex justify-center items-center"
                style={{
                  boxShadow: "0px 4px 20.4px 0px #1242FF40",
                }}
              >
                <div
                  className="w-[212px] h-[233px] bg-[#F1F4FF] rounded-[21px]"
                  style={{
                    boxShadow: "0px 4px 20.4px 0px #1242FF40",
                  }}
                ></div>
              </div>

              {/* Title */}
              <div
                className="bg-[#F1F4FF] rounded-[12px] w-[197px] h-[24px] mt-3 mx-auto"
                style={{
                  boxShadow: "0px 4px 4px 0px #9FB3FF",
                }}
              >
                <div className="text-[18px] font-semibold gradient-text-about text-center">
                  {item.title}
                </div>
              </div>

              {/* Description */}
              <div className="mt-2 text-center">
                <p className="text-[#4B336D] text-[16px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherCaseStudy;
