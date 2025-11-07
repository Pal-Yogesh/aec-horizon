// "use client";

// import Image from "next/image";
// import React from "react";

// const results = [
//   { label: "90 Days", width: "w-[185px]" },
//   { label: "6+ Key Screens Delivered", width: "w-[300px]" },
//   { label: "0 Revisions & Reviews", width: "w-[300px]" },
// ];
// const CSResults = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center ">
//         {/* Heading */}
//         <h2 className="text-[29px] text-center font-semibold gradient-text-about mb-8">
//           Results achieved in:
//         </h2>

//         {/* Result Cards */}
//         <div className="flex flex-wrap justify-center items-center gap-8">
//           {results.map((item, index) => (
//             <div
//               key={index}
//               className="text-[29px] text-white flex flex-col justify-center items-center"
//             >
//               {/* Top Circle */}
//               <div
//                 className="bg-white w-[31px] h-[31px] rounded-full flex justify-center items-center z-10"
//                 style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//               ></div>

//               {/* Card Box */}
//               <div
//                 className={`bg-gradient-to-b from-[#C5D1FF87] to-[#9CB0FF] -mt-4 z-0 ${item.width} h-[107px] flex justify-center items-center rounded-[18px] p-4 border border-white`}
//                 style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
//               >
//                 <p className="text-center leading-tight">{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="relative w-full flex justify-center mt-20">
//         {/* Outer container with gradient background */}
//         <div className="relative flex items-center justify-between   px-8 pt-7   ">
//           <Image
//             src="/Union.svg"
//             alt="background-connector"
//             width={1000}
//             height={1000}
//             className="absolute inset-0 object-contain  "
//           />
//           <div className="flex justify-center items-center relative z-10">
//             <div
//               className=" w-[162px] h-[176px] bg-[#E3E9FF] rounded-[21px] flex justify-center items-center"
//               style={{
//                 boxShadow: "0px 4px 20.4px 0px #1242FF40",
//               }}
//             >
//               <div
//                 className=" w-[144px] h-[155px] bg-[#E3E9FF] rounded-[21px]"
//                 style={{
//                   boxShadow: "0px 4px 20.4px 0px #1242FF40",
//                 }}
//               >
//                 <p className="text-[17px] text-[#4B336D] font-semibold text-center p-4">
//                   Introduction to the Brand
//                 </p>
//                 <div className="flex justify-center ">
//                   <Image
//                     src="/case1.svg"
//                     alt="case-study-bg"
//                     width={1000}
//                     height={1000}
//                     className="w-[75px] h-[62px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right paragraph */}
//           <div className="relative z-10 max-w-[700px] px-12  text-[#2C1E4A] text-[17px] font-normal leading-relaxed">
//             <p>
//               An established AEC firm specializing in infrastructure and
//               commercial projects faced consistent operational slowdowns due to
//               fragmented service handling. The company relied on three different
//               agencies for its core functions —{" "}
//               <strong>
//                 BIM & Drafting, Technical Business Development, and Digital
//                 Marketing.
//               </strong>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="relative w-full flex justify-center mt-20">
//         {/* Outer container with gradient background */}
//         <div className="relative flex items-center justify-between   px-8 pt-7   ">
//           <Image
//             src="/union2.svg"
//             alt="background-connector"
//             width={1000}
//             height={1000}
//             className="absolute inset-0 object-contain  "
//           />

//           {/* Right paragraph */}
//           <div className="relative z-10 max-w-[700px] pr-5   text-[#2C1E4A] text-[17px] font-normal leading-relaxed">
//             <p>
//               An established AEC firm specializing in infrastructure and
//               commercial projects faced consistent operational slowdowns due to
//               fragmented service handling. The company relied on three different
//               agencies for its core functions —{" "}
//               <strong>
//                 BIM & Drafting, Technical Business Development, and Digital
//                 Marketing.
//               </strong>
//             </p>
//           </div>
//           <div className="flex justify-center items-center relative z-10">
//             <div
//               className=" w-[162px] h-[176px] bg-[#E3E9FF] rounded-[21px] flex justify-center items-center"
//               style={{
//                 boxShadow: "0px 4px 20.4px 0px #1242FF40",
//               }}
//             >
//               <div
//                 className=" w-[144px] h-[155px] bg-[#E3E9FF] rounded-[21px]"
//                 style={{
//                   boxShadow: "0px 4px 20.4px 0px #1242FF40",
//                 }}
//               >
//                 <p className="text-[17px] text-[#4B336D] font-semibold text-center p-4">
//                   Problem Statement
//                 </p>
//                 <div className="flex justify-center ">
//                   <Image
//                     src="/case2.svg"
//                     alt="case-study-bg"
//                     width={1000}
//                     height={1000}
//                     className="w-[75px] h-[62px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative w-full flex justify-center mt-20">
//         {/* Outer container with gradient and SVG background */}
//         <div className="relative flex items-center justify-between px-8 ">
//           {/* Background SVG */}
//           <Image
//             src="/union3.svg"
//             alt="background-connector"
//             width={1000}
//             height={1000}
//             className="absolute inset-0 object-cover "
//           />

//           {/* Left card */}
//           <div className="relative z-10 -mt-[12%] ">
//             <div
//               className="w-[162px] h-[176px] bg-[#E3E9FF] rounded-[21px] flex justify-center items-center"
//               style={{ boxShadow: "0px 4px 20.4px 0px #1242FF40" }}
//             >
//               <div
//                 className="w-[144px] h-[155px] bg-[#E3E9FF] rounded-[21px] flex flex-col justify-center items-center p-3"
//                 style={{ boxShadow: "0px 4px 20.4px 0px #1242FF40" }}
//               >
//                 <p className="text-[17px] text-[#4B336D] font-semibold text-center leading-snug mb-3">
//                   Solution we <br /> provided
//                 </p>
//                 <Image
//                   src="/case3.svg"
//                   alt="solution-icon"
//                   width={75}
//                   height={62}
//                   className="w-[75px] h-[62px]"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right content */}
//           <div className="relative z-10 max-w-[700px] text-[#2C1E4A] text-[17px] font-normal px-10 pt-20">
//             <p className="mb-5">
//               AEC Horizon stepped in as an integrated partner providing all
//               three specialized services under one roof:
//             </p>

//             <ol className="list-decimal list-inside space-y-4">
//               <li>
//                 <strong>BIM & Drafting Excellence –</strong> Streamlined 3D
//                 modeling, drawing automation, and project coordination
//                 workflows.
//               </li>
//               <li>
//                 <strong>Technical Business Development –</strong> Structured
//                 lead funnel for AEC clientele, proposal optimization, and
//                 partnership growth.
//               </li>
//               <li>
//                 <strong>Digital Marketing for AEC –</strong> Website revamp,
//                 industry-focused campaigns, and strategic content creation
//                 aligning with the brand&apos;s technical identity.
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CSResults;

"use client";

import Image from "next/image";
import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionBg from "../Background/SectionBg";
import CSSectionBg from "../CSSectionBg";

const results = [
  { number: 90, label: "Days", width: "w-[185px]", widthmobile: "w-[120px]" },
  {
    number: 6,
    label: "Key Screens Delivered",
    width: "w-[300px]",
    widthmobile: "w-[120px]",
  },
  {
    number: 0,
    label: "Revisions & Reviews",
    width: "w-[300px]",
    widthmobile: "w-[280px]",
  },
];

const sections = [
  {
    id: 1,
    image: "/Union.svg",
    cardTitle: "Introduction to the Brand",
    cardImage: "/case1.svg",
    text: (
      <>
        An established AEC firm specializing in infrastructure and commercial
        projects faced consistent operational slowdowns due to fragmented
        service handling. The company relied on three different agencies for its
        core functions —{" "}
        <strong>
          BIM & Drafting, Technical Business Development, and Digital Marketing.
        </strong>
      </>
    ),
    reverse: false,
  },
  {
    id: 2,
    image: "/union2.svg",
    cardTitle: "Problem Statement",
    cardImage: "/case2.svg",
    text: (
      <>
        An established AEC firm specializing in infrastructure and commercial
        projects faced consistent operational slowdowns due to fragmented
        service handling. The company relied on three different agencies for its
        core functions —{" "}
        <strong>
          BIM & Drafting, Technical Business Development, and Digital Marketing.
        </strong>
      </>
    ),
    reverse: true,
  },
  {
    id: 3,
    image: "/union3.svg",
    cardTitle: (
      <>
        Solution we <br /> provided
      </>
    ),
    cardImage: "/case3.svg",
    text: (
      <>
        <p className="mt-5 sm:mt-0 mb-[2px] md:mb-5">
          AEC Horizon stepped in as an integrated partner providing all three
          specialized services under one roof:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 md:space-y-4">
          <li>
            <strong>BIM & Drafting Excellence –</strong> Streamlined 3D
            modeling, drawing automation, and project coordination workflows.
          </li>
          <li>
            <strong>Technical Business Development –</strong> Structured lead
            funnel for AEC clientele, proposal optimization, and partnership
            growth.
          </li>
          <li>
            <strong>Digital Marketing for AEC –</strong> Website revamp,
            industry-focused campaigns, and strategic content creation aligning
            with the brand&apos;s technical identity.
          </li>
        </ol>
      </>
    ),
    reverse: false,
    customMargin: "-mt-[16%]",
  },
];

const CSResults = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      className="relative w-full h-full z-10  lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden pb-[10%] lg:pb-[4%]"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <CSSectionBg />
        <CSSectionBg />
      </div>
      {/* Results Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-[22px] md:text-[29px] text-center font-semibold gradient-text-about mb-8">
          Results achieved in:
        </h2>

        <div
          className="mb-10 border-[2px] rounded-[19px] p-2 sm:p-0 bg-[#E1E7FF] md:w-[600px] flex justify-center items-center h-[70px] font-semibold text-[12px] md:text-[16px] border-white text-center"
          style={{
            boxShadow: "0px 4px 10.5px 0px #00000040",
          }}
        >
          <p className="gradient-text-about leading-relaxed">
            Streamlining AEC Operations with Unified Expertise with AEC
            Horizon&apos;s Technical Expertise
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {results.map((item, index) => (
            <div
              key={index}
              className="text-[29px] text-white flex flex-col justify-center items-center"
            >
              <div
                className="bg-white w-[22px] md:w-[31px] h-[22px] md:h-[31px] rounded-full flex justify-center items-center z-10"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              ></div>

              <div
                className="bg-gradient-to-b from-[#C5D1FF87] to-[#9CB0FF] -mt-4 z-0 h-[107px] flex flex-col justify-center items-center rounded-[18px] p-2 md:p-4 border border-white"
                style={{
                  width:
                    inView && window.innerWidth >= 768
                      ? item.width.replace("w-[", "").replace("]", "")
                      : item.widthmobile.replace("w-[", "").replace("]", ""),
                  boxShadow: "0px 4px 4px 0px #00000040 inset",
                }}
              >
                <p className="text-[24px] md:text-[40px] font-bold  text-center leading-tight">
                  {inView ? <CountUp end={item.number} duration={2} /> : "0"}
                  {item.number > 0 && item.number < 10 ? "+" : ""}
                </p>
                <p className="text-white text-[12px] md:text-[18px] font-medium text-center leading-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10  ">
        <Image
          src="/csleft.svg"
          alt="case-study-bg"
          width={1000}
          height={1000}
          className="absolute top-[27%] -left-[12%] lg:w-[700px] lg:h-[700px] w-[400px] h-[400px] z-0"
        />
        <Image
          src="/csright.svg"
          alt="case-study-bg"
          width={1000}
          height={1000}
          className="absolute top-[27%] -right-[12%] lg:w-[700px] lg:h-[700px] w-[400px] h-[400px] z-0"
        />
        {/* Section Mapping */}
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative w-full flex justify-center mt-10 md:mt-14 lg:mt-20 "
          >
            <div
              className={`relative flex items-center justify-between lg:px-8 lg:pt-7 ${
                section.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <Image
                src={section.image}
                alt="background-connector"
                width={1000}
                height={1000}
                className="absolute inset-0 object-contain"
              />

              {/* Card */}
              <div
                className={`flex justify-center items-center relative z-10 ${
                  section.customMargin || ""
                }`}
              >
                <div
                  className={`lg:w-[162px] lg:h-[176px] md:w-[145px] md:h-[145px] w-[70px] h-[70px] ml-1.5 md:ml-3 mt-2   sm:mt-5  mr-1.5 md:mr-3 lg:mr-0 lg:ml-0 md:mt-2 bg-[#E3E9FF] rounded-[10px] md:rounded-[21px] flex justify-center items-center
                    ${section.id === 3 ? "mt-[12%]" : ""}
                    
                    `}
                  style={{ boxShadow: "0px 4px 20.4px 0px #1242FF40" }}
                >
                  <div
                    className="lg:w-[144px] lg:h-[155px] md:w-[130px] md:h-[130px] w-[60px] h-[60px] bg-[#E3E9FF] rounded-[11px] md:rounded-[21px] flex flex-col justify-center items-center p-3"
                    style={{ boxShadow: "0px 4px 20.4px 0px #1242FF40" }}
                  >
                    <p className="text-[7px] md:text-[12px] lg:text-[17px] text-[#4B336D] font-semibold text-center leading-snug mb-1 md:mb-3">
                      {section.cardTitle}
                    </p>
                    <Image
                      src={section.cardImage}
                      alt="case-study-bg"
                      width={1000}
                      height={1000}
                      className="md:w-[75px] md:h-[62px] w-[25px] h-[25px]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`relative z-10 max-w-[750px] text-[#2C1E4A] text-[7px] md:text-[12px] lg:text-[17px] font-normal leading-relaxed ${
                  section.reverse ? "md:pr-10" : "md:px-10 md:pt-4  sm:-mt-0"
                } ${
                  section.id === 3 ? "md:pt-14 pt-1 px-1.5 sm:pt-0 sm:px-0" : ""
                }
                ${
                  section.id === 2
                    ? "ml-4 md:ml-5 lg:ml-0 mt-1.5 md:mt-0 p-1.5 sm:p-0"
                    : ""
                }
                ${section.id === 1 ? "mt-2 sm:mt-0 p-1.5 sm:p-0" : ""} `}
              >
                {section.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSResults;
