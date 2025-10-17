import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import BlogInnerPage from "@/components/Blogs/BlogInnerPage";

import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>

      <div
        className="bg-gradient-to-br from-[#D9E9FF] to-[#C8D0E9]  w-full  "
        style={{
          height: "250vh",
        }}
      >
        <div className="relative w-full h-full  ">
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
        </div>
        <div className="absolute -top-10  w-[100%]  ">
          <BlogInnerPage />
        </div>
      </div>
    </>
  );
}
