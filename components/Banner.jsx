import Image from "next/image";
import React from "react";
import SnakeAnimation from "./Infinity";

const Banner = () => {
  return (
    <>
      <div className="pt-32 -z-10">
        <div className="overflow-hidden">
          <div className="flex justify-center items-center mb-14">
            <div>
              <h1 className="text-[#37116C] font-semibold text-[60px]">
                Three Infinite Loops,
              </h1>
              <h2 className="gradient-text font-semibold text-[60px]">
                One Global Impact.
              </h2>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/Earth.svg"
              width={1000}
              height={1000}
              alt="earth"
              className="w-full h-full object-cover animate-spin-slow "
            />
            <div className="z-30 w-[100vw] h-[100vh] absolute top-[30%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
              <SnakeAnimation />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
