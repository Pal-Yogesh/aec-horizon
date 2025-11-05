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

export default function Home() {
  return (
    <div className="bg-[#D9DDEE]">
      <div className="relative w-full h-[80vh] lg:h-[108vh] overflow-hidden  ">
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
        <div className="absolute top-10">
          <Image
            src="/infiniteline.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-full h-[40vh] lg:h-[120vh] object-cover"
          />
        </div>
        <HeroSectionBg />

        <div className="absolute top-36  w-[100%]  hidden lg:block">
          <HeroContent />
        </div>
        <div className="absolute top-28  w-[100%] block lg:hidden">
          <HeroContentMobile />
        </div>
      </div>

      <div className="bg-[url('/vectors.svg')] bg-cover bg-center w-full h-full py-10 ">
        <WhyChoose />
        <Services />
      </div>
      <WhoWeServe />
      <GlobalAEC />
      <div className="relative z-0 ">
        <div className="absolute bottom-[13%] -left-40 z-[1] ">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
        <div className="mb-[7%]">
          <OurProcess />
        </div>
        <div className="relative w-full h-[110vh] overflow-hidden  ">
          <AboutSectionBg />

          <div className="absolute -top-10  w-[100%] ">
            <ProcessArchitecture />
          </div>
        </div>
      </div>
    </div>
  );
}
