import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import CaseStudy from "@/components/CaseStudies/CaseStudy";
import CSResults from "@/components/CaseStudies/CSResults";
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
    <div className="bg-[#A4BAFF]">
      <div className="relative w-full   ">
        <HeroSectionBg />
        <HeroSectionBg />
      </div>
      <div className="absolute -top-[26.1%] w-[100%] ">
        <CaseStudy />
      </div>
      <div className="absolute top-[90%] w-[100%] ">


      <CSResults />
      </div>
    </div>
  );
}
