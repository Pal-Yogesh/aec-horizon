import Image from "next/image";
import React from "react";

const ProcessArchitecture = () => {
  return (
    <>
      <div className="px-[116px] pt-10 pb-20">
        <div>
          <div>
            <div className="flex justify-center items-center">
              <div>
                <h2 className="gradient-text font-bold text-[45px]">
                  Process From Drafts To Deals
                </h2>
                <h1 className="text-[#1C0044] font-semibold text-[45px]">
                  We&apos;ve always got you covered
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div className="flex justify-center items-center gap-3 pt-14  pb-4">
                  <div
                    className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
                    style={{
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    {" "}
                    <h1 className="gradient-text">A: Architecture</h1>{" "}
                  </div>
                  <div
                    className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
                    style={{
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    {" "}
                    <h1 className="gradient-text">1</h1>{" "}
                  </div>
                </div>
                <div className="flex justify-center items-center text-[20px] -ml-10 pb-6">
                  <div>
                    <span className="gradient-text">
                      BIM & Drafting Services → For precise
                    </span>
                    <br />{" "}
                    <span className="gradient-text">
                      design documentation, 3D modeling,
                    </span>
                    <br />{" "}
                    <sapn className="gradient-text">
                      and construction-ready plans.
                    </sapn>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/layer.svg"
                  alt="layer"
                  width={1000}
                  height={1000}
                  className="w-[750px] h-[700px] object-cover"
                />
              </div>

              <div className="flex justify-center items-center gap-32 pt-8">
                <div>
                  <div className="flex justify-center items-center gap-3   pb-3">
                    <div
                      className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      {" "}
                      <h1 className="gradient-text">E: Engineering</h1>{" "}
                    </div>
                    <div
                      className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      {" "}
                      <h1 className="gradient-text">2</h1>{" "}
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-[20px] -ml-10 pb-8">
                    <div>
                      <span className="gradient-text">
                        Technical Business Development → To
                      </span>
                      <br />{" "}
                      <span className="gradient-text">
                        secure projects, create proposals.
                      </span>
                      <br />{" "}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center gap-3   pb-3">
                    <div
                      className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      {" "}
                      <h1 className="gradient-text">3</h1>{" "}
                    </div>
                    <div
                      className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      {" "}
                      <h1 className="gradient-text">C: Construction</h1>{" "}
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-[20px]">
                    <div>
                      <span className="gradient-text">
                        Needs: Branding & Digital Marketing →
                      </span>
                      <br />{" "}
                      <span className="gradient-text">
                        To attract clients, showcase completed
                      </span>
                      <br /> <sapn className="gradient-text">projects.</sapn>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center pt-20 ">
                <button
                  className="text-white text-[18px] px-6 py-4 rounded-[13px] shadow-xl  border border-white    cursor-pointer  "
                  style={{
                    background:
                      "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessArchitecture;
