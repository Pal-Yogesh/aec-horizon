import Image from "next/image";
import React from "react";

const TBDServiceLocation = () => {
  const serviceLocations = [
    { id: 1, country: "Spain" },
    { id: 2, country: "United States" },
    { id: 3, country: "United Kingdom" },
    { id: 4, country: "India" },
  ];

  return (
    <div className="pt-20 flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <h2 className="font-semibold text-[26px] md:text-[40px] gradient-text text-center w-[400px]">
        Our Service Locations
      </h2>

      <div
        className="border-[2px] md:border-[4px] rounded-[22px] md:rounded-[30px] px-8 md:px-0 md:w-[404px] text-center py-1 font-semibold text-[20px] md:text-[30px] mt-4 border-white"
        style={{
          background:
            "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
        }}
      >
        <p className="text-[#4B336D]">Places where we operate</p>
      </div>

      {/* Scrollable Cards Row */}
      <div className="mt-16 w-full flex justify-center">
        <div
          className="
            flex gap-6 px-4 
            overflow-x-auto scrollbar-hide 
            pb-5 snap-x snap-mandatory
          "
        >
          {serviceLocations.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center space-y-5 flex-shrink-0 snap-center"
            >
              {/* Card Image */}
              <div
                className="bg-[#FFFFFFA1] border-[1px] backdrop-blur-[30.5px] border-white rounded-[34px] w-[315px] h-[195px] flex justify-center items-center"
                style={{
                  boxShadow: "0px 6.96px 8.05px 0px #A09DCA",
                }}
              >
                <Image
                  src="/biml1.svg"
                  alt="location"
                  width={300}
                  height={200}
                  className="w-[300px] h-[200px] pt-2"
                />
              </div>

              {/* Card Text */}
              <div
                className="bg-[#FFFFFFA1] text-[12px] text-[#4B336D] border-[1px] backdrop-blur-[30.5px] border-white rounded-[34px] px-3 h-[45px] flex flex-col justify-center items-center"
                style={{
                  boxShadow: "0px 6.96px 8.05px 0px #A09DCA",
                }}
              >
                <p>Operating Services in {item.country}</p>
                <button className="gradient-text text-[12px] underline cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default TBDServiceLocation;
