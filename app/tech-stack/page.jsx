import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";

import TechStack from "@/components/TechStack";
import TechStack2 from "@/components/TechStack2";
import TechStack3 from "@/components/TechStack3";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full h-full bg-[#D8DDED] overflow-hidden">
      
      <div className="absolute inset-0 z-10 ">
        <AboutSectionBg />
        <div className="absolute -top-60 -left-[18%] -z-10">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
        <div className="absolute -top-48 -right-[18%] -z-10">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
      </div>
      <TechStack />
      <TechStack2 />
      <TechStack3 />
    </div>
  );
};

export default page;
