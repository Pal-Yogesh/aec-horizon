"use client";

import Image from "next/image";
import React from "react";

const results = [
  { label: "90 Days", width: "w-[185px]" },
  { label: "6+ Key Screens Delivered", width: "w-[300px]" },
  { label: "0 Revisions & Reviews", width: "w-[300px]" },
];
const CaseStudy = () => {
  return (
    <div> 
      <div className="relative w-full flex justify-center items-center">
        {/* Background block image */}
        <div className="relative w-[831px] h-[840px]">
          <Image
            src="/caseblock.svg"
            alt="case-study-bg"
            fill
            className="object-contain"
          />

          {/* Centered text content */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
            {/* Title box */}
            <div
              className="bg-[#CCD7FF] w-[360px] rounded-[20px] p-4 text-center"
              style={{
                boxShadow: "0px 4px 10.5px 0px #00000040",
              }}
            >
              <div className="text-[40px] gradient-text-about font-semibold leading-tight">
                <span className="block">AEC Horizon</span>
                <span className="block">Case Study</span>
              </div>
            </div>

            <div
              className="border-[2px] rounded-[29px] w-[280px] flex justify-center items-center py-1 font-semibold text-[12px] border-white text-center"
              style={{
                background:
                  "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
                boxShadow: "0px 4px 6.8px 0px #00000040",
              }}
            >
              <p className="gradient-text-about leading-snug">
                Read how we&apos;ve helped major brands
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 border-[2px] rounded-[19px] bg-[#E1E7FF] w-[600px] flex justify-center items-center h-[70px] font-semibold text-[16px] border-white text-center"
          style={{
            boxShadow: "0px 4px 10.5px 0px #00000040",
          }}
        >
          <p className="gradient-text-about leading-relaxed">
            Streamlining AEC Operations with Unified Expertise with AEC
            Horizon&apos;s Technical Expertise
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default CaseStudy;
