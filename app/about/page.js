import AboutUs from "../../components/AboutUS/AboutUs";
import React from "react";
import HeroDot from "@/components/HeroDot";
import OurAchievement from "@/components/AboutUS/OurAchievement";

const page = () => {
  return (
    <>
      {/* <div className="relative w-full h-auto overflow-hidden bg-[#D9DDEE]">
        <div>
          <HeroDot />
        </div>
        <div className=" -mt-[20%] z-[10]  absolute w-[100%] ">
          <AboutUs />
        </div>
      </div> */}
        {/* <div className="relative w-full h-full  pb-20 ">
              <HeroDot />
      
              <div className="absolute top-0  w-[100%] ">
                <AboutUs />
              </div>
            </div> */}
                <AboutUs />
                {/* <OurAchievement /> */}

    </>
  );
};

export default page;
