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

const results = [
  { label: "90 Days", width: "w-[185px]" },
  { label: "6+ Key Screens Delivered", width: "w-[300px]" },
  { label: "0 Revisions & Reviews", width: "w-[300px]" },
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
        <p className="mb-5">
          AEC Horizon stepped in as an integrated partner providing all three
          specialized services under one roof:
        </p>
        <ol className="list-decimal list-inside space-y-4">
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
  return (
    <div className="overflow-x-hidden">
      {/* Results Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-[29px] text-center font-semibold gradient-text-about mb-8">
          Results achieved in:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {results.map((item, index) => (
            <div
              key={index}
              className="text-[29px] text-white flex flex-col justify-center items-center"
            >
              <div
                className="bg-white w-[31px] h-[31px] rounded-full flex justify-center items-center z-10"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              ></div>
              <div
                className={`bg-gradient-to-b from-[#C5D1FF87] to-[#9CB0FF] -mt-4 z-0 ${item.width} h-[107px] flex justify-center items-center rounded-[18px] p-4 border border-white`}
                style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
              >
                <p className="text-center leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Image
          src="/csleft.svg"
          alt="case-study-bg"
          width={1000}
          height={1000}
          className="absolute top-[27%] -left-[12%] w-[700px] h-[700px] z-0"
        />
        <Image
          src="/csright.svg"
          alt="case-study-bg"
          width={1000}
          height={1000}
          className="absolute top-[27%] -right-[12%] w-[700px] h-[700px] z-0"
        />
        {/* Section Mapping */}
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative w-full flex justify-center mt-20"
          >
            <div
              className={`relative flex items-center justify-between px-8 pt-7 ${
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
                  className="w-[162px] h-[176px] bg-[#E3E9FF] rounded-[21px] flex justify-center items-center"
                  style={{ boxShadow: "0px 4px 20.4px 0px #1242FF40" }}
                >
                  <div
                    className="w-[144px] h-[155px] bg-[#E3E9FF] rounded-[21px] flex flex-col justify-center items-center p-3"
                    style={{ boxShadow: "0px 4px 20.4px 0px #1242FF40" }}
                  >
                    <p className="text-[17px] text-[#4B336D] font-semibold text-center leading-snug mb-3">
                      {section.cardTitle}
                    </p>
                    <Image
                      src={section.cardImage}
                      alt="case-study-bg"
                      width={75}
                      height={62}
                      className="w-[75px] h-[62px]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`relative z-10 max-w-[750px] text-[#2C1E4A] text-[17px] font-normal leading-relaxed ${
                  section.reverse ? "pr-10" : "px-10 pt-4"
                } ${section.id === 3 ? "pt-14" : ""}`}
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
