import Image from "next/image";
import React from "react";

const MeetCrew = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-40">
        <div
          className="bg-[#FFFFFF64] border-[1px] border-[#FFFFFF] text-center px-16 rounded-[70.5px] py-3"
          style={{
            boxShadow: "0px 11px 13.5px 0px #00000040",
          }}
        >
          <p className="text-[29px] gradient-text-about font-semibold">
            Meet The Crew Making It All Happen{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center pt-28">
        <Image src="/cardgrp.svg" alt="crew" width={1000} height={1000} className="w-[894px] h-[381px]"/>
      </div>

      <div className="flex justify-center items-center mt-10 text-[30px] text-[#4B336D] ">
          <p className="text-center w-[50%]">
            A mix of creatives, strategists, and caffeine-fueled
            problem-solvers, all obsessed with building what&apos;s next.
          </p>
        </div>
    </div>
  );
};

export default MeetCrew;
