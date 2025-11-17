"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionBg from "../Background/SectionBg";

const OurAchievement = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [arrowSize, setArrowSize] = useState(32);

  useEffect(() => {
    const updateArrowSize = () => {
      if (window.innerWidth < 640) {
        setArrowSize(24);
      } else if (window.innerWidth < 1024) {
        setArrowSize(28);
      } else {
        setArrowSize(32);
      }
    };

    updateArrowSize();
    window.addEventListener("resize", updateArrowSize);
    return () => window.removeEventListener("resize", updateArrowSize);
  }, []);

  const achievements = [
    { number: 6, label: "Years of Technical Expertise" },
    { number: 20, label: "Projects Delivered" },
    { number: 10, label: "Brand Colabs" },
    { number: 5, label: "Major Countries Globally Targeted" },
  ];

  return (
    <div className="relative w-full h-full z-10  lg:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <SectionBg />
        <div className="block md:hidden">

        <SectionBg />
        <SectionBg />
        <SectionBg />
        </div>

      </div>
      <div ref={ref} className="">
        <div className="flex justify-center items-center">
          <div>
            <div
              className="bg-[#FFFFFF57] border-[2px] sm:border-[3px] border-[#FFFFFF] text-center px-6 sm:px-12 lg:px-20 py-1 rounded-[50px] sm:rounded-[60px] lg:rounded-[70.5px]"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <p className="text-[16px] sm:text-[20px] lg:text-[25px] gradient-text-about">
                Supporting Innovators, Building Success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8 sm:pt-12 lg:pt-16">
          <span className="text-[24px] sm:text-[32px] lg:text-[40px] gradient-text-about font-semibold">
            Our Achievements
          </span>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 lg:pt-14 flex-wrap">
          {/* First large card */}
          <div className="w-full sm:w-auto flex flex-col items-center">
            <div
              className="bg-[#FFFFFF90] w-full max-w-[320px] h-[160px] sm:w-[400px] sm:h-[180px] lg:w-[565px] lg:h-[217px] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] mb-4 sm:mb-5"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <div className="flex justify-center items-center flex-col pt-3 sm:pt-4">
                <div
                  className="bg-[#FBFAFF] border-[1px] border-white rounded-[15px] sm:rounded-[18px] flex justify-center items-center w-[90px] h-[70px] sm:w-[110px] sm:h-[80px] lg:w-[117px] lg:h-[88px]"
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                  <p className="text-[40px] sm:text-[50px] lg:text-[68px] gradient-text-about font-medium w-24 sm:w-28 lg:w-32 text-center">
                    {inView ? (
                      <CountUp end={achievements[0].number} duration={2} />
                    ) : (
                      "0"
                    )}
                    +
                  </p>
                </div>
                <span className="gradient-text-about text-[18px] sm:text-[22px] lg:text-[27px] font-medium pt-2 sm:pt-3 text-center px-4">
                  {achievements[0].label}
                </span>
              </div>
            </div>

            {/* Middle cards */}
            <div className="flex gap-3 sm:gap-4 lg:gap-5">
              {achievements.slice(1, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="w-[150px] h-[180px] sm:w-[230px] sm:h-[200px] lg:w-[278px] lg:h-[217px] bg-[#FFFFFF] border-[4px] sm:border-[5px] lg:border-[6px] border-white rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] flex justify-center items-center flex-col pt-2"
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                  <div
                    className={`${
                      idx === 0
                        ? "bg-[#ECEAF3]"
                        : "flex justify-center items-center"
                    } border-[1px] border-white rounded-[15px] sm:rounded-[18px] flex justify-center items-center w-[100px] h-[70px] sm:w-[130px] sm:h-[80px] lg:w-[156px] lg:h-[88px]`}
                    style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                  >
                    <p className="text-[40px] sm:text-[50px] lg:text-[68px] gradient-text-about font-medium text-center">
                      {inView ? (
                        <CountUp end={item.number} duration={2} />
                      ) : (
                        "0"
                      )}
                      +
                    </p>
                  </div>
                  <p className="gradient-text-about text-[14px] sm:text-[20px] lg:text-[27px] font-medium pt-2 sm:pt-3 leading-tight text-center px-2">
                    {item.label.split(" ").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div
            className="w-full max-w-[320px] h-[300px] sm:w-[330px] sm:h-[420px] lg:w-[372px] lg:h-[455px] backdrop-blur-[2px] border-[1px] border-white rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] flex justify-center items-center flex-col pt-2"
            style={{
              background:
                "linear-gradient(148.64deg, rgba(255, 255, 255, 0.5) 37.25%, rgba(114, 114, 255, 0.5) 106.66%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div
              className="bg-[#ECEAF3] border border-white rounded-[15px] sm:rounded-[18px] flex justify-center items-center w-[100px] h-[70px] sm:w-[130px] sm:h-[80px] lg:w-[156px] lg:h-[88px]"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <p className="text-[40px] sm:text-[50px] lg:text-[68px] gradient-text-about font-medium text-center">
                {inView ? (
                  <CountUp end={achievements[3].number} duration={2} />
                ) : (
                  "0"
                )}
                +
              </p>
            </div>

            <p className="gradient-text-about text-[16px] sm:text-[22px] lg:text-[27px] font-medium pt-2 sm:pt-3 leading-tight text-center px-4">
              {achievements[3].label.split(" ").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="mt-6 sm:mt-8 ml-3 sm:ml-0">
              <Image
                src="/bank.svg"
                width={1000}
                height={1000}
                alt="blur"
                className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[100px] lg:h-[100px]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-12 sm:pt-16 lg:pt-20 relative z-10 gap-3 sm:gap-4">
          <Link href="/projects">
            <button
              className="text-white text-[16px] sm:text-[20px] lg:text-[27px] rounded-[35px] sm:rounded-[40px] lg:rounded-[47px] shadow-xl cursor-pointer w-[180px] h-[42px] sm:w-[220px] sm:h-[48px] lg:w-[259px] lg:h-[51px] sheen-effect hover:scale-105 transition-transform duration-300"
              style={{
                background:
                  "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              View Our Projects
            </button>
          </Link>
          <Link href="/projects">
            <button
              className="text-white text-[27px] rounded-[35px] sm:rounded-[40px] lg:rounded-[47px] shadow-xl cursor-pointer w-[45px] h-[46px] sm:w-[52px] sm:h-[53px] lg:w-[57px] lg:h-[58px] flex justify-center items-center hover:scale-105 transition-transform duration-300"
              style={{
                background:
                  "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <ArrowRight size={arrowSize} className="text-white font-bold" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;
