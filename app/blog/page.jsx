import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import Blog from "@/components/Blogs/Blog";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>

      <div className="bg-[url('/aboutgrp.svg')] bg-cover bg-center h-full w-full  bg-[#d9e9ff8e]">
        <div className="relative w-full h-[120%] overflow-hidden  ">
          <div className="absolute top-10">
            <Image
              src="/blogline.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[150vw] h-[150vh] object-cover"
            />
          </div>
          <AboutSectionBg />

          <div className="absolute -top-10  w-[100%] ">
            <Blog />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
