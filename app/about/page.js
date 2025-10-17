import AboutUs from "../../components/AboutUS/AboutUs";
import React from "react";
import HeroDot from "@/components/HeroDot";
import OurAchievement from "@/components/AboutUS/OurAchievement";
import Testmonial from "@/components/Testmonial";
import FAQ from "@/components/FAQ";
import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import MeetCrew from "@/components/MeetCrew";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[url('/aboutgrp.svg')] bg-cover bg-center h-full w-full  bg-[#d9e9ff8e]">
      
      <div className="relative w-full h-[120%] overflow-hidden  ">
      <div className="absolute top-10">
          <Image
            src="/infiniteline.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-full h-[120vh] object-cover"
          />
        </div>
        <AboutSectionBg />

        <div className="absolute -top-10  w-[100%] ">
          <AboutUs />
        </div>
      </div>
      <OurAchievement />
      <MeetCrew />
      <Testmonial />
      <FAQ />
    </div>
  );
};

export default page;
