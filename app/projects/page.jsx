import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import Projects from "@/components/Projects";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFFFFF] to-[#C8D0E9] lg:pb-40 overflow-hidden">

      <div className="relative w-full h-[100%]   ">
        {/* <AboutSectionBg /> */}
        <div className="absolute -top-60 -left-[18%]">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
        <div className="absolute -bottom-60 -right-[18%]">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
        {/* <div className="absolute -top-10  w-[100%]">
          <Projects />
        </div> */}
      </div>
      <Projects />
    </div>
  );
};

export default page;
