import Contact from "@/components/Contact";
import HeroContent from "@/components/HeroContent";
import HeroSectionBg from "@/components/HeroSectionBg";

import OurProcess from "@/components/OurProcess";
import ProcessArchitecture from "@/components/ProcessArchitecture";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="bg-[#D9DDEE]">

      <div className="relative w-full h-[120%] overflow-hidden  ">
        <HeroSectionBg />

        <div className="absolute top-36  w-[100%] ">
          <HeroContent />
        </div>
      </div>
      
      <div className="  bg-[#D9DDEE]  w-[100%] ">
        <WhyChoose />
        <Services />
        <WhoWeServe />
        <OurProcess />
        <ProcessArchitecture />
        <Contact />
      </div>
    </div>
  );
}
