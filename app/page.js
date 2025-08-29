import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <WhyChoose />
    <Services />
    <WhoWeServe />
    <OurProcess />
    </>
    
  );
}
