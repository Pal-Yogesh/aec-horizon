import Image from "next/image";
import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="py-14">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="lg:w-[40%]  px-6 lg:px-0  font-semibold text-[20px] sm:text-[29px] gradient-text text-center">
              Our presence is <strong className="font-bold">Global. </strong>
              We&apos;re here for you
            </h1>
          </div>

          <div className="md:flex md:justify-center  md:gap-14 pt-5 md:pt-10 ">
            {/* text */}
            <div className="md:w-[258px] px-2 lg:pt-9 text-center md:text-left">
              <p className="font-semibold text-[20px] sm:text-[29px] gradient-text ">
                HEADQUARTERS
              </p>

              <div className="flex flex-col gap-2 text-[#4B336D] text-[15px] sm:text-[19px] w-[100%] ">
                <p className="font-semibold text-[25px] text-[#4B336D] ">
                  AEC Horizon
                </p>
                <p>S.S.B Sarani, Biddhanagar, West Bengal 71321</p>

                <p className="py-4">Mr Satyanand Roy</p>

                <p className="">+91 333336666 </p>
                <p>staya@gmail.com</p>
              </div>
            </div>
            {/* map */}
            <div className="w-[100%] lg:w-[722px] pt-10 md:pt-0">
              <Image
                src="/map.svg"
                alt="map"
                width={1000}
                height={1000}
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
