import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import SectionBg from "@/components/Background/SectionBg";
import TechStack from "@/components/TechStack";
import TechStack2 from "@/components/TechStack2";
import TechStack3 from "@/components/TechStack3";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative w-full h-full bg-[#D8DDED] overflow-hidden">
        <div className="absolute inset-0 z-10 ">
          <AboutSectionBg />
          <AboutSectionBg />
          <div className="absolute -top-60 -left-[18%] -z-10 hidden lg:block">
            <Image
              src="/blur.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[900px] h-[100%]"
            />
          </div>
          <div className="absolute -top-48 -right-[18%] -z-10 hidden lg:block">
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
      </div>
      <div className="relative z-10">
        <div className="absolute inset-0 z-10 ">
          <SectionBg />
        </div>
        <div className="absolute top-0 -left-[10%] z-10 hidden lg:block">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[700px] h-[20%]"
          />
        </div>
        {/* <div className="absolute -bottom-[12%] -right-[12%] z-10">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[500px] h-[50%]"
          />
        </div> */}
        <div className="absolute bottom-[35%] right-0 z-10 overflow-hidden">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[400px] h-[100%]"
          />
        </div>
        <TechStack3 />
      </div>
    </>
  );
};

export default page;
