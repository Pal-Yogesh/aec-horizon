import Banner from "@/components/Banner";
import Contact from "@/components/Contact";

import Navbar from "@/components/Navbar";
import OurProcess from "@/components/OurProcess";
import ProcessArchitecture from "@/components/ProcessArchitecture";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <>
    <Navbar />

    <div className="">

    <Banner />
    </div>
    <div className="-mt-[50%] z-[10] bg-[#D9DDEE] absolute w-[100%] ">

    <WhyChoose />
    <Services />
    <WhoWeServe />
    <OurProcess />
    <ProcessArchitecture />
    <Contact />
    </div>
    </>
    
  );
}
