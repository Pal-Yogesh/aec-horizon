import Image from "next/image";
import React from "react";

const Bim = () => {
  return (
    <div className="bg-gradient-to-b from-[#BCC8F2] to-[#E1E8FF] w-full pb-40 ">
      <div className=" flex items-center justify-center pt-40 pb-12">
        <p
          className="bg-gradient-to-r from-[#7595FF] to-[#BACAFF]   text-[10px] text-white py-2 px-4  border-[1px] border-white rounded-[24.18px]"
          style={{
            boxShadow: "0px 1.93px 7.09px 0px #00000040",
          }}
        >
          BIM & Drafting
        </p>
      </div>

      <div className="mx-[7%]">
        <div className="flex items-center justify-center p-4 bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[43px] ">
          <div
            className="gradient-text p-3 text-[90px] font-semibold  flex items-center justify-center bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[43px] my-8"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="px-24">
              <p>LiDar</p>
              <p className="-mt-10  gradient-text">Mapping</p>
            </div>
            <div>
              <Image
                src="/s11.svg"
                alt="s11"
                width={1000}
                height={1000}
                className="w-[500px] h-[311px]"
              />
            </div>
          </div>
        </div>

        {/* <div>
          <div className="flex items-center justify-center flex-col relative"
         >
            <div className="w-[106px] h-[95px] z-10 bg-[#EEF1FD] border-[2.5px] border-[#FFFFFF] border-b-0 rounded-t-[15px] flex items-center justify-center"
             style={{
                boxShadow: "0px 3.02px 14.57px 0px #4767FF",
    
              }}>
              <Image
                src="/s12.svg"
                alt="s12"
                width={1000}
                height={1000}
                className="w-[60px] h-[60px]"
              />
            </div>

            <div className="absolute top-[100%] -z-0 w-[155px] h-[131px] bg-[#EEF1FD] border-[2.5px] border-[#FFFFFF] border-t-3 rounded-[15px] flex items-center justify-center text-[22px] text-[#304695] text-center"
             style={{
                boxShadow: "0px 3.02px 14.57px 0px #4767FF",
    
              }}>
              Qualified Experts
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Bim;
