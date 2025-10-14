import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import ContactMap from "@/components/ContactMap";
import GetaQuote from "@/components/GetaQuote";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/getaquote.svg')] bg-cover bg-center w-full h-[100vh] pt-36 ">
      <div className="relative w-full h-[100%] overflow-hidden  ">
        <AboutSectionBg />

        <div className="absolute -top-10  w-[100%] ">
          <GetaQuote />
        </div>
      </div>
    </div>
  );
};

export default page;
