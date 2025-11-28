import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import ContactMap from "@/components/ContactMap";
import GetaQuote from "@/components/GetaQuote";
import ReusableFAQ from "@/components/FAQ/ReusableFAQ";
import { faqData } from "@/components/FAQ/FaqData";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-[url('/getaquote.svg')] bg-cover bg-center w-full h-[175vh] lg:h-[100vh] pt-36 ">
        <div className="relative w-full h-[100%] overflow-hidden  ">
          <AboutSectionBg />
          <div className="block md:hidden">
            <AboutSectionBg />
          </div>

          <div className="absolute -top-10  w-[100%] ">
            <GetaQuote />
          </div>
        </div>
      </div>
      <ReusableFAQ 
        faqData={faqData.getAQuote} 
        title="Quote Request FAQs"
        showContactCard={true}
      />
    </>
  );
};

export default page;
