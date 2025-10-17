import Image from "next/image";
import React from "react";

const CSOperations = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center flex-col ">
          <div
            className="bg-[#DEE4FF] w-[370px] flex justify-center items-center rounded-[20px]   py-1.5"
            style={{
              boxShadow: "0px 4px 7.8px 0px #92B3FF",
            }}
          >
            <p className="gradient-text text-[29px] font-bold">
              Process Of Operations
            </p>
          </div>

          <div>
            <Image
              src="/csprocess.svg"
              alt="case-study-bg"
              width={1000}
              height={1000}
              className="w-[950px] h-[730px] select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CSOperations;
