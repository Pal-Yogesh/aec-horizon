import AboutSectionBg from "@/components/AboutUS/AboutSectionBg";
import GlobalAEC from "@/components/GlobalAEC";
import HeroContent from "@/components/HeroContent";
import HeroContentMobile from "@/components/HeroContentMobile";
import HeroSectionBg from "@/components/HeroSectionBg";
import OurProcess from "@/components/OurProcess";
import ProcessArchitecture from "@/components/ProcessArchitecture";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";
import ReusableFAQ from "@/components/FAQ/ReusableFAQ";
import { faqData } from "@/components/FAQ/FaqData";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <div className="bg-[#D9DDEE]">
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[108vh] overflow-hidden  ">
        <div className="relative ">
          <div className="absolute -top-60 -right-60">
            <Image
              src="/blur.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[900px] h-[100%]"
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute top-10">
          <Image
            src="/infiniteline.svg"
            width={1000}
            height={1000}
            alt="hero infinite line"
            className="w-full h-[40vh] lg:h-[120vh] object-cover"
            priority
            fetchPriority="high"
          />
        </div>
        <HeroSectionBg />
        <div className="block md:hidden">
          <HeroSectionBg />
        </div>

        <div className="absolute top-36  w-[100%]  hidden lg:block">
          <HeroContent />
        </div>
        <div className="absolute top-24  w-[100%] block lg:hidden">
          <HeroContentMobile />
        </div>
      </div>

      <div className="lg:bg-[url('/vectors.svg')] lg:bg-cover lg:bg-center w-full h-full py-10 ">
        <WhyChoose />
        <Services />
      </div>
      <WhoWeServe />
      <GlobalAEC />
      <div className="relative z-0 ">
        <div className="absolute bottom-[13%] -left-40 z-[1] hidden lg:block">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
        <div className="">
          <OurProcess />
        </div>
        <div className=" overflow-hidden z-30  ">
            <Locations />
            <ProcessArchitecture />
        </div>
      </div>
      <ReusableFAQ
        faqData={faqData.homepage}
        title="Frequently Asked Questions"
        showContactCard={true}
      />
    </div>
  );
}
