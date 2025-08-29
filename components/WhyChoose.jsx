import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="px-[116px] pt-20 pb-10">
      <div>
        <div>
          <div>
            <h1 className="text-[#4B336D] text-[45px]">
              Why Choose{" "}
              <span className="gradient-text font-bold">AEC Horizon?</span>
            </h1>
          </div>

          <div className="flex justify-between items-center pt-10">
            <div className="">
              <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
                <div className="pt-3">
                  <h1 className="font-bold text-[30px] gradient-text text-center ">
                    {" "}
                    Transparent Process
                  </h1>
                  <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
                  <p className="px-10 text-[28px] text-center text-[#4B336D] pt-2">
                    From consultation to delivery, every step mapped.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
                <div className="pt-3">
                  <h1 className="font-bold text-[30px] gradient-text text-center ">
                    {" "}
                    Innovation First
                  </h1>
                  <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
                  <p className="px-10 text-[28px] text-center text-[#4B336D] pt-2">
                    Automation, Revit families, custom strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <Image
              src="/plus.svg"
              alt="plus"
              width={1000}
              height={1000}
              className="w-[115px] h-[89px] absolute -top-4 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="flex justify-between items-center pt-12">
            <div className="">
              <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
                <div className="pt-3">
                  <h1 className="font-bold text-[30px] gradient-text text-center ">
                    {" "}
                    End to End Coverage
                  </h1>
                  <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
                  <p className="px-8 text-[28px] text-center text-[#4B336D] pt-2">
                    BIM, Business Development, digital strategy—all under one
                    roof.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
                <div className="pt-3">
                  <h1 className="font-bold text-[30px] gradient-text text-center ">
                    {" "}
                    Real People. Real Results.
                  </h1>
                  <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
                  <p className="px-10 text-[28px] text-center text-[#4B336D] pt-2">
                    No fluff. <br /> Just expert-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12">
          <button
            className="text-white text-[18px] px-6 py-4 rounded-[13px] shadow-xl cursor-pointer"
            style={{
              background:
                "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            View our services
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
