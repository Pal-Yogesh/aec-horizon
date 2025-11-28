import Image from "next/image";
import React from "react";

const MeetCrew = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 ">
        <div
          className="bg-[#FFFFFF64] border-[1px] border-[#FFFFFF] text-center px-5 md:px-16 rounded-[70.5px] py-3"
          style={{
            boxShadow: "0px 11px 13.5px 0px #00000040",
          }}
        >
          <p className="text-[20px] md:text-[29px] gradient-text-about font-semibold">
            Meet The Crew Making It All Happen{" "}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center pt-12">
        <Image
          src="/crew.svg"
          alt="crew"
          width={1000}
          height={1000}
          className="w-[100%] h-[70vh]"
        />
      </div>

     
    </div>
  );
};

export default MeetCrew;
