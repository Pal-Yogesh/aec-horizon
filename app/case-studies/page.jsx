import CaseStudy from "@/components/CaseStudies/CaseStudy";
import CSOperations from "@/components/CaseStudies/CSOperations";
import CSResults from "@/components/CaseStudies/CSResults";
import CSSectionBg from "@/components/CSSectionBg";

import HeroSectionBg from "@/components/HeroSectionBg";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#D9DFFF] to-[#C3D2FF]">
      <div className="relative w-full   ">
        <HeroSectionBg />
        <HeroSectionBg />
        <CSSectionBg />
      </div>
      <div className="absolute -top-[26.1%] w-[100%] ">
        <CaseStudy />
      </div>
      <div className="absolute top-[80%] w-[100%] overflow-x-hidden">
        <CSResults />
        <div className="mt-[8%]">
          <CSOperations />
        </div>
      </div>
    </div>
  );
}
