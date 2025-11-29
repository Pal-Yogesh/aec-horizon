"use client";
import Image from "next/image";
import React from "react";
import SectionBg from "./Background/SectionBg";
import AboutSectionBg from "./AboutUS/AboutSectionBg";

const Locations = () => {
  const serviceLocations = [
    { id: 1, country: "Netherlands", image: "/netherland.svg" },
    { id: 2, country: "Singapore", image: "/singapore.svg" },
    { id: 3, country: "United States", image: "/us.svg" },
    { id: 4, country: "United Kingdom", image: "/uk.svg" },
    { id: 5, country: "Denmark", image: "/denmark.svg" },
    { id: 6, country: "Germany", image: "/germany.svg" },
    { id: 7, country: "India", image: "/india.svg" },
    { id: 8, country: "Canada", image: "/canada.svg" },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden z-20">
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <SectionBg />
      </div>
      <div className="absolute inset-0 -z-10 block lg:hidden">
        <AboutSectionBg />
      </div>
      <div className="pt-32 md:pt-20 flex flex-col items-center overflow-hidden">
        {/* Heading */}
        <h2 className="font-semibold text-[26px] md:text-[40px] gradient-text text-center w-full">
          Our Global Presence is here for you
        </h2>

        <div
          className="border-[2px] md:border-[4px] rounded-[22px] md:rounded-[30px] px-8 md:px-0 md:w-[404px] text-center font-semibold text-[20px] md:text-[30px] mt-4 border-white"
          style={{
            background:
              "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
          }}
        >
          <p className="text-[#4B336D]">Places where we operate</p>
        </div>

        {/* Responsive Layout */}
        <div className="mt-16 w-full flex justify-center">
          <div
            className="
            flex gap-6 px-6 pb-5
            overflow-x-auto snap-x snap-mandatory
            lg:flex-wrap lg:justify-center lg:overflow-visible
          "
          >
            {serviceLocations.map((item) => (
              <div
                key={item.id}
                className="
                flex flex-col items-center space-y-5 flex-shrink-0 snap-center
                lg:flex-shrink lg:snap-none
              "
              >
                {/* Card Image */}
                <div
                  className="bg-[#FFFFFF] border-[1px] backdrop-blur-[30.5px] border-white rounded-[34px] w-[315px] h-[195px] flex justify-center items-center"
                  style={{ boxShadow: "0px 6.96px 8.05px 0px #A09DCA" }}
                >
                  <Image
                    src={item.image}
                    alt={item.country}
                    width={300}
                    height={200}
                    className="w-[300px] h-[200px] pt-2"
                  />
                </div>

                {/* Card Text */}
                <div
                  className="bg-white rounded-[34px] px-12 h-[45px] flex flex-col justify-center items-center"
                  style={{ boxShadow: "0px 6.96px 8.05px 0px #A09DCA" }}
                >
                  <div className="font-bold text-[18px] gradient-text border-[1px] backdrop-blur-[30.5px] border-white rounded-[34px] flex flex-col justify-center items-center">
                    <p>{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
