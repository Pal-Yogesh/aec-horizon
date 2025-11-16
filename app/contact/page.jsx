import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import Contact from "@/components/Contact";
import ContactMap from "@/components/ContactMap";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/contact.svg')] bg-cover bg-center w-full h-[100%] pt-36 ">
      <div className="relative w-full ">
        <div className="absolute inset-0 z-10">
          <AboutSectionBg />
        </div>

        {/* <div className="absolute -top-10  w-[100%] "> */}
        <Contact />
        {/* </div> */}
        {/* <div className="absolute top-[72%] lg:top-[50%]  w-[100%] "> */}
        <ContactMap />
        {/* </div> */}
      </div>
    </div>
  );
};

export default page;
