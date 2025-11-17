"use client";

import Image from "next/image";
import React from "react";
import CSSectionBg from "../CSSectionBg";

const results = [
  { label: "90 Days", width: "w-[185px]" },
  { label: "6+ Key Screens Delivered", width: "w-[300px]" },
  { label: "0 Revisions & Reviews", width: "w-[300px]" },
];
const CaseStudy = () => {
  return (
    <div className="relative w-full h-full z-10 -mt-32 sm:-mt-5 sm:ml-5 lg:ml-0 lg:-mt-0   px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <CSSectionBg />
        <div className="block md:hidden">

        <CSSectionBg />
        <CSSectionBg />
        </div>
      </div>
      <div className="relative w-full flex items-center">
        {/* Background block image */}
        <div className="relative w-[831px] h-[420px] left-[50%] md:left-[48%] 2xl:left-[48.4%] -translate-x-1/2 ">
          <Image
            src="/caseblock.svg"
            alt="case-study-bg"
            fill
            className="object-contain"
          />

          {/* Centered text content */}
          <div className="absolute top-[67.5%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
            {/* Title box */}
            <div
              className="bg-[#CCD7FF] md:w-[360px]  rounded-[20px] p-4 text-center"
              style={{
                boxShadow: "0px 4px 10.5px 0px #00000040",
              }}
            >
              <div className="text-[15px] md:text-[40px] gradient-text-about font-semibold leading-tight">
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
      </div>
    </div>
  );
};

export default CaseStudy;
