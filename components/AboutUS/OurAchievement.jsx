import React from "react";

const OurAchievement = () => {
  return (
    <div className="">
        <div className="flex justify-center items-center pt-40">

      <span className="text-[80px] gradient-text-about font-semibold">
        Our Achievements
      </span>
        </div>
      <div className="flex justify-center items-center gap-8  pt-14">
        <div>
          <div
            className="bg-[#FFFFFF90] w-[565px] h-[217px] rounded-[35px] "
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="flex justify-center items-center flex-col pt-4">
              <div className="bg-[#FBFAFF] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[117px] h-[88px]">
                <p className="text-[80px] gradient-text-about font-medium w-32 text-center">
                  6+
                </p>
              </div>
              <span className="gradient-text-about text-[32px] font-medium pt-3">
                Years of Technical Expertise
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-5">
            <div
              className="w-[278px] h-[217px] bg-[#FFFFFF] border-[6px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div
                className="bg-[#ECEAF3] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px] "
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <p className="text-[80px] gradient-text-about font-medium text-center ">
                  20+
                </p>
              </div>
              <p className="gradient-text-about text-[32px] font-medium pt-3 leading-tight">
                <span className="leading-tight">
                  Projects <br /> Delivered{" "}
                </span>
              </p>{" "}
            </div>

            <div
              className="w-[278px] h-[217px] bg-[#FFFFFF] border-[6px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div
                className="bg-[#ECEAF3] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px] "
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <p className="text-[80px] gradient-text-about font-medium text-center ">
                  10+
                </p>
              </div>
              <p className="gradient-text-about text-[32px] font-medium pt-3 leading-tight">
                <span className="leading-tight">
                  Brand  <br /> Colabs{" "}
                </span>
              </p>{" "}
            </div>
          </div>
        </div>

        <div
          className="w-[372px] h-[455px] backdrop-blur-[2px] border-[1px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
          style={{
            background:
              "linear-gradient(148.64deg, rgba(255, 255, 255, 0.5) 37.25%, rgba(114, 114, 255, 0.5) 106.66%)",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          {/* Inner box */}
          <div
            className="bg-[#ECEAF3] border border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px]"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <p className="text-[80px] gradient-text-about font-medium text-center">
              5+
            </p>
          </div>

          {/* Text */}
          <p className="gradient-text-about text-[32px] font-medium pt-3 leading-tight text-center">
            <span className="leading-tight">
              Major <br /> Countries <br /> Globally <br /> Targeted
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;
