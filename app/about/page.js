import AboutUs from "../../components/AboutUS/AboutUs";
import React from "react";
import OurAchievement from "@/components/AboutUS/OurAchievement";
import Testmonial from "@/components/Testmonial";
import FAQ from "@/components/FAQ";
import MeetCrew from "@/components/MeetCrew";
import Image from "next/image";
import Milestone from "@/components/AboutUS/Milestone";
import MilestoneMobile from "@/components/AboutUS/MilestoneMobile";

const page = () => {
  return (
    <div className="lg:bg-[url('/aboutgrp.svg')] lg:bg-cover lg:bg-center h-full w-full  bg-[#d9e9ff8e]"
    style={{
      background: "linear-gradient(180deg, #D8DDED 0%, #E1E8FF 68.17%)",

    }}>
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

        <div className=" ">
          <AboutUs />
          <OurAchievement />
          <MeetCrew />
          <Testmonial />
          <div className="hidden lg:block">
            <Milestone />
          </div>

          <div className="block lg:hidden">
            <MilestoneMobile />
          </div>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default page;
