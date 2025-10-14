import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import Contact from "@/components/Contact";
import ContactMap from "@/components/ContactMap";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/contact.svg')] bg-cover bg-center w-full h-[200vh] pt-36 pb-12">
      <div className="relative w-full h-[100%] overflow-hidden  ">
        <AboutSectionBg />

        <div className="absolute -top-10  w-[100%] ">
          <Contact />
        </div>
        <div className="absolute top-[50%]  w-[100%] ">
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default page;
