// import Image from "next/image";
// import React from "react";

// const ServicesPage = () => {
//   return (
//     <div>
//       <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full pb-20">
//         <div className="pt-40 px-32 ">
//           {/* Header */}
//           <div
//             className="border-[4px] rounded-[30px] w-[320px] text-center py-2 font-semibold text-[25px] border-white"
//             style={{
//               background:
//                 "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//             }}
//           >
//             <p className="gradient-text-about">Detailed View Of Services</p>
//           </div>
//           <span className="gradient-text font-bold text-[65px]">Services</span>
//           <p className="gradient-text text-[45px]">
//             Here&apos;s an exact look at what we offer
//           </p>
//         </div>

//         {/* Rotating Section */}
//         <div>
//           <div className="relative flex justify-center items-center">
//             {/* Fixed Circle */}
//             <div>
//               <Image
//                 src="/Group 1321321806.svg"
//                 width={1000}
//                 height={1000}
//                 alt="Services Image 1"
//                 className="w-[850px] h-[850px]"
//               />
//             </div>

//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow ">
//               <Image
//                 src="/c1.svg"
//                 width={1000}
//                 height={1000}
//                 alt="Services group"
//                 className="w-full h-full"
//               />
//               <Image
//                 src="/c2.svg"
//                 width={1000}
//                 height={1000}
//                 alt="Services group"
//                 className="w-full h-full "
//               />
//               <Image
//                 src="/c3.svg"
//                 width={1000}
//                 height={1000}
//                 alt="Services group"
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceBanner = () => {
  return (
    <div>
      <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full pb-20">
        <div className="pt-40 px-32 ">
          {/* Header */}
          <div
            className="border-[4px] rounded-[30px] w-[320px] text-center py-2 font-semibold text-[25px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            }}
          >
            <p className="gradient-text-about">Detailed View Of Services</p>
          </div>
          <span className="gradient-text font-bold text-[65px]">Services</span>
          <p className="gradient-text text-[45px]">
            Here&apos;s an exact look at what we offer
          </p>
        </div>

        {/* Rotating Section */}
        <div className="relative flex justify-center items-center pt-20">
          {/* Fixed Background Circle */}
          <Image
            src="/circlefinal.svg"
            width={1000}
            height={1000}
            alt="Services Image 1"
            className="w-[850px] h-[850px]"
          />

          {/* Rotating Wrapper */}
          <div className="absolute w-[900px] h-[900px] animate-spin-slow">
            {/* Orbit Container */}
            <div className="relative w-full h-full">
              {/* Circle 1 (Top) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/c1.svg"
                  width={150}
                  height={150}
                  alt="c1"
                  className="w-[320px] h-[320px]"
                />
              </div>
              {/* Circle 2 (Bottom Left) */}
              <div className="absolute bottom-36 left-6">
                <Image
                  src="/c2.svg"
                  width={150}
                  height={150}
                  alt="c2"
                  className="w-[320px] h-[320px]"
                />
              </div>
              {/* Circle 3 (Bottom Right) */}
              <div className="absolute bottom-36 right-6">
                <Image
                  src="/c3.svg"
                  width={150}
                  height={150}
                  alt="c3"
                  className="w-[320px] h-[320px]"
                />
              </div>
            </div>
          </div>
        </div>


        <ServiceCard />
      </div>
    </div>
  );
};

export default ServiceBanner;
