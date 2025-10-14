import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import Contact from "@/components/Contact";
import GlobalAEC from "@/components/GlobalAEC";
import HeroContent from "@/components/HeroContent";
import HeroSectionBg from "@/components/HeroSectionBg";

import OurProcess from "@/components/OurProcess";
import ProcessArchitecture from "@/components/ProcessArchitecture";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#D9DDEE]">
      <div className="relative w-full h-[120%] overflow-hidden  ">
        <div className="relative ">
          <div className="absolute -top-60 -right-60">
            <Image
              src="/blur.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[900px] h-[100%]"
            />
          </div>
        </div>
        <HeroSectionBg />

        <div className="absolute top-36  w-[100%] ">
          <HeroContent />
        </div>
      </div>

      {/* <div className="  bg-[#D9DDEE]  w-[100%] "> */}

      <WhyChoose />
      <Services />
      <WhoWeServe />
      <GlobalAEC />
      <div className="mb-[7%]">
        
      <OurProcess />
      </div>
      <div className="relative w-full h-[110vh] overflow-hidden  ">
        <AboutSectionBg />

        <div className="absolute -top-10  w-[100%] ">
          <ProcessArchitecture />
        </div>
      </div>
      <Contact />
    </div>
  );
}
