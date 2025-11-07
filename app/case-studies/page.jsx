import CaseStudy from "@/components/CaseStudies/CaseStudy";
import CSOperations from "@/components/CaseStudies/CSOperations";
import CSResults from "@/components/CaseStudies/CSResults";
import OtherCaseStudy from "@/components/CaseStudies/OtherCaseStudy";
import CSSectionBg from "@/components/CSSectionBg";

import HeroSectionBg from "@/components/HeroSectionBg";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#D9DFFF] to-[#C3D2FF]">
      {/* <div className="relative w-full   ">
        <HeroSectionBg />
        <HeroSectionBg />
        <CSSectionBg />
      </div> */}
      {/* <div className="absolute top-0 w-[100%] ">
        <CaseStudy />
      </div>
      <div className="absolute top-[80%] w-[100%]  ">
        <CSResults />
        <div className="mt-[5%] ">
          <CSOperations />
        </div>
        <div className=" w-[100%]  ">
          <OtherCaseStudy />
        </div>
      </div> */}


      <CaseStudy />
      <CSResults />
      <CSOperations />
      <OtherCaseStudy />
    </div>
  );
}
