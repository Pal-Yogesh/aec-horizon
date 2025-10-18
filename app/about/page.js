import AboutUs from "../../components/AboutUS/AboutUs";
import React from "react";
import OurAchievement from "@/components/AboutUS/OurAchievement";
import Testmonial from "@/components/Testmonial";
import FAQ from "@/components/FAQ";
import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import MeetCrew from "@/components/MeetCrew";
import Image from "next/image";
import Milestone from "@/components/AboutUS/Milestone";
import SectionBg2 from "@/components/Background/SectionBG2";

const page = () => {
  return (
    <div className="bg-[url('/aboutgrp.svg')] bg-cover bg-center h-full w-full  bg-[#d9e9ff8e]">
      <div className="relative w-full     ">
        <div className="absolute top-10">
          <Image
            src="/infiniteline.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-full h-[120vh] object-cover"
          />
        </div>
        <SectionBg2 />

        <div className="absolute top-0 2xl:-top-[0%]  w-[100%] ">
          <AboutUs />
        </div>
        <div className="mt-[13%] 2xl:mt-0 ">
          <OurAchievement />
          <MeetCrew />
          <Testmonial />
          <Milestone />
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default page;
