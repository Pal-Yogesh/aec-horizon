import Image from "next/image";
import React from "react";

const WhoWeServe = () => {
  return (
    <>
      <div className="px-[116px] pt-20">
        <div>
          <div>
            <div>
              <h1 className="font-bold text-[45px] text-[#4B336D] ">
                Who we <span className="gradient-text">Serve</span>
              </h1>
              <p className="text-[#000000] text-[25px]">
                From startups to skyscrapers—our clients shape the <br /> built
                world.
              </p>
            </div>
            <div className="pt-5">
              <Image
                src="/weserve.svg"
                alt="serve"
                width={1000}
                height={1000}
                className="w-full h-[100%] object-cover"
              />
              <div className="flex justify-center items-center pt-12 relative">
                <button
                  className="text-white text-[18px] px-6 py-4 rounded-[13px] shadow-xl absolute -top-11 cursor-pointer  "
                  style={{
                    background:
                      "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                >
                  Get Solutions For your Industry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeServe;
