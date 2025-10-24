// import React from "react";

// const OurAchievement = () => {
//   return (
//     <div className="">
//         <div className="flex justify-center items-center pt-28">

//       <span className="text-[40px] gradient-text-about font-semibold ">
//         Our Achievements
//       </span>
//         </div>
//       <div className="flex justify-center items-center gap-8  pt-14">
//         <div>
//           <div
//             className="bg-[#FFFFFF90] w-[565px] h-[217px] rounded-[35px] "
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             <div className="flex justify-center items-center flex-col pt-4">
//               <div className="bg-[#FBFAFF] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[117px] h-[88px]">
//                 <p className="text-[68px] gradient-text-about font-medium w-32 text-center">
//                   6+
//                 </p>
//               </div>
//               <span className="gradient-text-about text-[27px] font-medium pt-3">
//                 Years of Technical Expertise
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 pt-5">
//             <div
//               className="w-[278px] h-[217px] bg-[#FFFFFF] border-[6px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
//               style={{
//                 boxShadow: "0px 4px 4px 0px #00000040",
//               }}
//             >
//               <div
//                 className="bg-[#ECEAF3] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px] "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 <p className="text-[68px] gradient-text-about font-medium text-center ">
//                   20+
//                 </p>
//               </div>
//               <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight">
//                 <span className="leading-tight">
//                   Projects <br /> Delivered{" "}
//                 </span>
//               </p>{" "}
//             </div>

//             <div
//               className="w-[278px] h-[217px] bg-[#FFFFFF] border-[6px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
//               style={{
//                 boxShadow: "0px 4px 4px 0px #00000040",
//               }}
//             >
//               <div
//                 className=" flex justify-center items-center w-[156px] h-[88px] "
                
//               >
//                 <p className="text-[68px] gradient-text-about font-medium text-center ">
//                   10+
//                 </p>
//               </div>
//               <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight">
//                 <span className="leading-tight">
//                   Brand  <br /> Colabs{" "}
//                 </span>
//               </p>{" "}
//             </div>
//           </div>
//         </div>

//         <div
//           className="w-[372px] h-[455px] backdrop-blur-[2px] border-[1px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
//           style={{
//             background:
//               "linear-gradient(148.64deg, rgba(255, 255, 255, 0.5) 37.25%, rgba(114, 114, 255, 0.5) 106.66%)",
//             boxShadow: "0px 4px 4px 0px #00000040",
//           }}
//         >
//           {/* Inner box */}
//           <div
//             className="bg-[#ECEAF3] border border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px]"
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             <p className="text-[68px] gradient-text-about font-medium text-center">
//               5+
//             </p>
//           </div>

//           {/* Text */}
//           <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight text-center">
//             <span className="leading-tight">
//               Major <br /> Countries <br /> Globally <br /> Targeted
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurAchievement;




// import React from "react";
// import CountUp from "react-countup";

// const OurAchievement = () => {
//   const achievements = [
//     { number: 6, label: "Years of Technical Expertise" },
//     { number: 20, label: "Projects Delivered" },
//     { number: 10, label: "Brand Colabs" },
//     { number: 5, label: "Major Countries Globally Targeted" },
//   ];

//   return (
//     <div>
//       <div className="flex justify-center items-center pt-28">
//         <span className="text-[40px] gradient-text-about font-semibold">
//           Our Achievements
//         </span>
//       </div>

//       <div className="flex justify-center items-center gap-8 pt-14 flex-wrap">
//         {/* First large card */}
//         <div>

//         <div
//           className="bg-[#FFFFFF90] w-[565px] h-[217px] rounded-[35px] mb-5"
//           style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//         >
//           <div className="flex justify-center items-center flex-col pt-4">
//             <div className="bg-[#FBFAFF] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[117px] h-[88px]">
//               <p className="text-[68px] gradient-text-about font-medium w-32 text-center">
//                 <CountUp end={achievements[0].number} duration={2} />
//                 +
//               </p>
//             </div>
//             <span className="gradient-text-about text-[27px] font-medium pt-3 text-center">
//               {achievements[0].label}
//             </span>
//           </div>
//         </div>

//         {/* Middle cards */}
//         <div className="flex  gap-5">
//           {achievements.slice(1, 3).map((item, idx) => (
//             <div
//               key={idx}
//               className="w-[278px] h-[217px] bg-[#FFFFFF] border-[6px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
//               style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//             >
//               <div
//                 className={`${
//                   idx === 0 ? "bg-[#ECEAF3]" : "flex justify-center items-center"
//                 } border-[1px] border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px]`}
//                 style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//               >
//                 <p className="text-[68px] gradient-text-about font-medium text-center">
//                   <CountUp end={item.number} duration={2} />+
//                 </p>
//               </div>
//               <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight text-center">
//                 {item.label.split(" ").map((line, i) => (
//                   <span key={i} className="block">
//                     {line}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           ))}
//         </div>
//         </div>

//         {/* Right card */}
//         <div
//           className="w-[372px] h-[455px] backdrop-blur-[2px] border-[1px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
//           style={{
//             background:
//               "linear-gradient(148.64deg, rgba(255, 255, 255, 0.5) 37.25%, rgba(114, 114, 255, 0.5) 106.66%)",
//             boxShadow: "0px 4px 4px 0px #00000040",
//           }}
//         >
//           <div
//             className="bg-[#ECEAF3] border border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px]"
//             style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//           >
//             <p className="text-[68px] gradient-text-about font-medium text-center">
//               <CountUp end={achievements[3].number} duration={2} />+
//             </p>
//           </div>

//           <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight text-center">
//             {achievements[3].label.split(" ").map((line, i) => (
//               <span key={i} className="block">
//                 {line}
//               </span>
//             ))}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurAchievement;

"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionBg from "../Background/SectionBg";

const OurAchievement = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  const achievements = [
    { number: 6, label: "Years of Technical Expertise" },
    { number: 20, label: "Projects Delivered" },
    { number: 10, label: "Brand Colabs" },
    { number: 5, label: "Major Countries Globally Targeted" },
  ];

  return (


    <div className="relative w-full h-full z-10">
    <div className="absolute top-0 left-0 w-full h-full -z-10">

<SectionBg />
    </div>
    <div ref={ref} className=""
   >
      <div className="flex justify-center items-center ">
        <span className="text-[40px] gradient-text-about font-semibold">
          Our Achievements
        </span>
      </div>

      <div className="flex justify-center items-center gap-8 pt-14 flex-wrap">
        {/* First large card */}
        <div>
          <div
            className="bg-[#FFFFFF90] w-[565px] h-[217px] rounded-[35px] mb-5"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <div className="flex justify-center items-center flex-col pt-4">
              <div className="bg-[#FBFAFF] border-[1px] border-white rounded-[18px] flex justify-center items-center w-[117px] h-[88px]"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
                <p className="text-[68px] gradient-text-about font-medium w-32 text-center">
                  {inView ? <CountUp end={achievements[0].number} duration={2} /> : "0"}+
                </p>
              </div>
              <span className="gradient-text-about text-[27px] font-medium pt-3 text-center">
                {achievements[0].label}
              </span>
            </div>
          </div>

          {/* Middle cards */}
          <div className="flex gap-5">
            {achievements.slice(1, 3).map((item, idx) => (
              <div
                key={idx}
                className="w-[278px] h-[217px] bg-[#FFFFFF] border-[6px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <div
                  className={`${
                    idx === 0 ? "bg-[#ECEAF3]" : "flex justify-center items-center"
                  } border-[1px] border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px]`}
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                  <p className="text-[68px] gradient-text-about font-medium text-center">
                    {inView ? <CountUp end={item.number} duration={2} /> : "0"}+
                  </p>
                </div>
                <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight text-center">
                  {item.label.split(" ").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div
          className="w-[372px] h-[455px] backdrop-blur-[2px] border-[1px] border-white rounded-[35px] flex justify-center items-center flex-col pt-2"
          style={{
            background:
              "linear-gradient(148.64deg, rgba(255, 255, 255, 0.5) 37.25%, rgba(114, 114, 255, 0.5) 106.66%)",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div
            className="bg-[#ECEAF3] border border-white rounded-[18px] flex justify-center items-center w-[156px] h-[88px]"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <p className="text-[68px] gradient-text-about font-medium text-center">
              {inView ? <CountUp end={achievements[3].number} duration={2} /> : "0"}+
            </p>
          </div>

          <p className="gradient-text-about text-[27px] font-medium pt-3 leading-tight text-center">
            {achievements[3].label.split(" ").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="  mt-8">
            <Image
              src="/bank.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-20 relative z-10 gap-4">
        <Link href="/projects">
          <button
            className="text-white text-[27px] rounded-[47px] shadow-xl cursor-pointer w-[259px] h-[51px] sheen-effect"
            style={{
              background:
              "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            >
            View Our Projects
          </button>
            </Link>
            <Link href="/projects">
          <button
            className="text-white text-[27px] rounded-[47px] shadow-xl cursor-pointer w-[57px] h-[58px]  flex justify-center items-center"
            style={{
              background:
                "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <ArrowRight size={32} className="text-white font-bold" />
          </button>
            </Link>
        </div>
    </div>
    </div>
  );
};

export default OurAchievement;