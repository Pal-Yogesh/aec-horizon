// import Image from "next/image";
// import React from "react";

// const Services = () => {
//   return (
//     <>
//       <div className="px-[116px] pt-24 bg-[#DBE0F3]">
//         <div>
//           <div>
//             <h1 className="font-bold text-[45px] text-[#4B336D] pb-9">
//               Our <span className="gradient-text">Services</span>
//             </h1>
//           </div>

//           <div >
//             <div className="relative">
//               <Image
//                 src="/line.svg"
//                 width={1000}
//                 height={1000}
//                 alt="line"
//                 className="w-[40px] h-[890px] mt-10 absolute -left-8"
//               />
//             </div>
//           </div>
//           <div className="space-y-7">
//             <div className="relative">
//               <div>
//                 <Image
//                   src="/service1.svg"
//                   className="w-full h-full"
//                   alt="service"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="absolute top-10 right-[33%]">
//                 <h1 className="gradient-textsm text-[23px]">BIM Services</h1>
//                 <ul className="list-disc list-inside text-[#4B336D] text-[23px] ml-10">
//                   <li>
//                     <span className="gradient-textli">
//                       BIM Modeling (LOD 100–500)
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Revit Family & Template Creation
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Clash Detection, Coordination
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Scan-to-BIM & As-Built
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Automation & MEPF modeling
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="relative ">
//               <div>
//                 <Image
//                   src="/service2.svg"
//                   className="w-full h-full"
//                   alt="service"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="absolute top-12 right-[33%]">
//                 <h1 className="gradient-textsm text-[23px]">
//                   Business Development
//                 </h1>
//                 <ul className="list-disc list-inside text-[#4B336D] text-[23px] ml-10">
//                   <li>
//                     <span className="gradient-textli">
//                       Go-to-Market for BIM startups
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Proposal & Estimation
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       CRM Setup & Lead Gen
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">Brand Strategy</span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Strategic AEC Partnerships
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="relative ">
//               <div>
//                 <Image
//                   src="/service3.svg"
//                   className="w-full h-full"
//                   alt="service"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="absolute top-12 right-[33%]">
//                 <h1 className="gradient-textsm text-[23px]">
//                   Digital Marketing & Branding
//                 </h1>
//                 <ul className="list-disc list-inside text-[#4B336D] text-[23px] ml-10">
//                   <li>
//                     <span className="gradient-textli">SEO for BIM & AEC</span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">
//                       Social Media & Email Campaigns
//                     </span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">BIM-based Content</span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">Marketing Decks</span>
//                   </li>
//                   <li>
//                     <span className="gradient-textli">Digital Positioning</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

"use client";

import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Services = () => {
  // Refs and controls for each service card
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { threshold: 0.2, once: false });
  const isInView2 = useInView(ref2, { threshold: 0.2, once: false });
  const isInView3 = useInView(ref3, { threshold: 0.2, once: false });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Animation variants for the service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Staggered animation for cards
  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
      setTimeout(() => controls2.start("visible"), 200);
      setTimeout(() => controls3.start("visible"), 400);
    }
  }, [isInView1, controls1, controls2, controls3]);

  return (
    <section className="relative scale-100 min-h-screen py-16 bg-gradient-to-b from-[#D8DDED] to-[#E1E8FF]">
      <div className="w-full mx-auto px-32  ">
        <h2
          className="font-bold text-[45px] text-[#4B336D] mb-20"
          style={{ opacity: 1, transform: "none" }}
        >
          Our{" "}
          <span className="gradient-text" tabIndex={0}>
            Services
          </span>
        </h2>
        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-1 z-10"
            style={{
              transformOrigin: "center top",
              opacity: 1,
              transform: "none",
            }}
          >
            <div className="w-full h-full border-l-[6px] border-dashed border-white/90 shadow-sm"></div>
          </div>
          <div className="space-y-20">
            {/* BIM Services */}
            <motion.div
              ref={ref1}
              className="relative flex items-center"
              style={{ opacity: 1, transform: "none" }}
              variants={cardVariants}
              initial="hidden"
              animate={controls1}
            >
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-50 h-1 z-5">
                <div className="w-full h-full border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
              </div>
              <div
                className="relative shrink-0 ml-24 translate-x-20 scale-200 z-10"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="h-36 w-36 rounded-full bg-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-8 border-white">
                  <div
                    className="h-32 w-32 rounded-full grid place-items-center text-white text-4xl shadow-inner"
                    style={{ background: "rgb(215, 225, 255)" }}
                  >
                    <svg
                      width="90"
                      height="95"
                      viewBox="0 0 151 151"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1_225)">
                        <path
                          d="M87.517 18.4146C89.8755 17.4501 92.4457 17.1595 94.953 17.574C97.4603 17.9885 99.8104 19.0924 101.752 20.7678L102.636 21.5928L135.746 55.4843C137.545 57.3229 138.821 59.6273 139.438 62.1509C140.055 64.6746 139.991 67.3225 139.251 69.8115L138.851 70.9593L122.275 113.381C121.345 115.756 119.812 117.833 117.834 119.397C115.856 120.961 113.505 121.956 111.025 122.277L75.4263 126.833C74.5105 126.943 73.5526 127.077 72.5526 127.235L69.4406 127.751L67.8145 128.053L62.7469 129.057L59.2774 129.817L54.0557 131.016L47.362 132.651L36.4839 135.492L31.956 136.741C30.8134 137.062 29.6101 137.085 28.4566 136.807C27.3031 136.529 26.2362 135.959 25.3538 135.149C24.4714 134.34 23.8017 133.316 23.4061 132.173C23.0105 131.029 22.9017 129.803 23.0896 128.605L23.3279 127.558L25.3955 119.58L27.2459 112.061L28.844 105.21L30.0145 99.8647L30.7505 96.3062L31.7388 91.1264L32.2995 87.8477L32.7481 84.7771L37.3741 46.8967C37.6654 44.5589 38.5149 42.3306 39.8474 40.4086C41.1798 38.4867 42.9543 36.9303 45.0139 35.8769L46.0723 35.3819L87.517 18.4146ZM92.7177 31.7373L51.2801 48.7046L47.1868 82.223L46.8503 85.0641C46.1624 90.3418 45.2621 95.5883 44.1518 100.79L42.9533 106.429L65.9991 82.84C65.2001 79.789 65.4071 76.5534 66.5879 73.635C67.7686 70.7166 69.8572 68.2786 72.5297 66.6991C75.2022 65.1196 78.3091 64.4869 81.3687 64.8992C84.4283 65.3114 87.2695 66.7455 89.4516 68.9791C91.6338 71.2126 93.0348 74.1208 93.4376 77.2525C93.8403 80.3843 93.2222 83.5645 91.6791 86.3C90.136 89.0354 87.7541 91.1733 84.903 92.3819C82.0518 93.5905 78.8907 93.8023 75.91 92.9845L52.8641 116.574L55.6117 115.95L61.1068 114.766C64.5314 114.05 67.9741 113.428 71.4312 112.9L109.259 108.051L125.836 65.636L92.7177 31.7373ZM109.28 8.10512C110.486 6.86882 112.092 6.12545 113.795 6.01449C115.498 5.90354 117.183 6.43262 118.532 7.50248L119.191 8.10512L148.923 38.5386C150.194 39.8267 150.935 41.5631 150.996 43.3924C151.057 45.2216 150.432 47.0055 149.25 48.3787C148.067 49.752 146.417 50.6108 144.637 50.7794C142.856 50.9481 141.08 50.4137 139.672 49.2857L139.013 48.6831L109.28 18.2496C107.966 16.9042 107.228 15.0797 107.228 13.1774C107.228 11.275 107.966 9.45051 109.28 8.10512Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1_225"
                          x="0"
                          y="0"
                          width="151"
                          height="151"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="-13" dy="4" />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_225"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_225"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 rounded-3xl px-10 py-6 ml-[3rem] pl-16 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                style={{
                  background:
                    "linear-gradient(to right, rgb(220, 229, 255), rgb(191, 207, 255))",
                  opacity: 1,
                }}
              >
                <h3
                  className="gradient-textsm text-[23px] mb-6 ml-15"
                  style={{ opacity: 1, transform: "none" }}
                >
                  BIM Services
                </h3>
                <ul className="space-y-1 ml-15 gradient-textli text-[23px]">
                  {[
                    "BIM Modeling (LOD 100–500)",
                    "Revit Family & Template Creation",
                    "Clash Detection, Coordination",
                    "Scan-to-BIM & As-Built",
                    "Automation & MEPF modeling",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center  "
                      // style={{ opacity: 1, transform: 'none' }}
                    >
                      <span className="w-1 h-1 bg-[#6F6BD9] rounded-full mr-4 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            {/* Business Development */}
            <motion.div
              ref={ref2}
              className="relative flex items-center"
              style={{ opacity: 1, transform: "none" }}
              variants={cardVariants}
              initial="hidden"
              animate={controls2}
            >
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-50 h-1 z-5">
                <div className="w-full h-full border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
              </div>
              <div
                className="relative shrink-0 ml-24 translate-x-20 scale-200 z-10"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="h-36 w-36 rounded-full bg-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-8 border-white">
                  <div
                    className="h-32 w-32 rounded-full grid place-items-center text-white text-4xl shadow-inner"
                    style={{ background: "rgb(191, 175, 255)" }}
                  >
                    <svg
                      width="86"
                      height="96"
                      viewBox="0 0 151 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1_226)">
                        <path
                          d="M47.5 17.25V34.5H30.25V17.25H47.5ZM21.625 8.625V43.125H56.125V8.625H21.625ZM90.625 30.1875V47.4375H73.375V30.1875H90.625ZM64.75 21.5625V56.0625H99.25V21.5625H64.75ZM47.5 69V86.25H30.25V69H47.5ZM21.625 60.375V94.875H56.125V60.375H21.625Z"
                          fill="white"
                        />
                        <path
                          d="M107.875 43.125V69H82V94.875H56.125V129.375H142.375V43.125H107.875ZM90.625 77.625H107.875V94.875H90.625V77.625ZM82 120.75H64.75V103.5H82V120.75ZM107.875 120.75H90.625V103.5H107.875V120.75ZM133.75 120.75H116.5V103.5H133.75V120.75ZM133.75 94.875H116.5V77.625H133.75V94.875ZM116.5 69V51.75H133.75V69H116.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1_226"
                          x="-8"
                          y="-6"
                          width="159"
                          height="158"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="-11" dy="4" />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_226"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_226"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 rounded-3xl px-10 py-6 ml-[3rem] pl-16 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                style={{
                  background:
                    "linear-gradient(to right, rgb(186, 169, 255), rgb(206, 194, 255))",
                  opacity: 1,
                }}
              >
                <h3
                  className="gradient-textsm text-[23px] mb-6 ml-15"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Business Development
                </h3>
                <ul className="space-y-1 ml-15 gradient-textli text-[23px]">
                  {[
                    "Go-to-Market for BIM startups",
                    "Proposal & Estimation",
                    "CRM Setup & Lead Gen",
                    "Brand Strategy",
                    "Strategic AEC Partnerships",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center "
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <span className="w-1 h-1 bg-[#6F6BD9] rounded-full mr-4 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            {/* Digital Marketing & Branding */}
            <motion.div
              ref={ref3}
              className="relative flex items-center"
              style={{ opacity: 1, transform: "none" }}
              variants={cardVariants}
              initial="hidden"
              animate={controls3}
            >
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-50 h-1 z-5">
                <div className="w-full h-full border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
              </div>
              <div
                className="relative shrink-0 ml-24 translate-x-20 scale-200 z-10"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="h-36 w-36 rounded-full bg-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-8 border-white">
                  <div
                    className="h-32 w-32 rounded-full grid place-items-center text-white text-4xl shadow-inner"
                    style={{ background: "rgb(255, 229, 177)" }}
                  >
                    <svg
                      width="94"
                      height="85"
                      viewBox="0 0 182 163"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1_227)">
                        <path
                          d="M162.172 21.3937C160.421 20.2607 158.418 19.5752 156.339 19.3976C154.261 19.2199 152.171 19.5556 150.253 20.375L87.3956 45.1306C85.909 45.7413 84.3165 46.0529 82.7094 46.0475H42.4688C39.0914 46.0475 35.8523 47.3891 33.4642 49.7773C31.076 52.1654 29.7344 55.4045 29.7344 58.7818V59.8006H17V90.3631H29.7344V91.6875C29.8142 95.0116 31.191 98.1726 33.5705 100.495C35.9501 102.818 39.1437 104.117 42.4688 104.116L57.75 136.512C58.7847 138.694 60.4138 140.54 62.4501 141.837C64.4864 143.134 66.8474 143.831 69.2619 143.847H75.68C79.0397 143.821 82.2526 142.467 84.6188 140.082C86.9849 137.697 88.3126 134.473 88.3125 131.113V105.339L150.253 130.094C151.778 130.694 153.402 131.005 155.041 131.011C157.584 130.964 160.059 130.186 162.172 128.77C163.847 127.639 165.23 126.125 166.204 124.353C167.178 122.581 167.717 120.603 167.775 118.582V31.8868C167.766 29.8138 167.25 27.7745 166.274 25.9458C165.297 24.1172 163.889 22.5546 162.172 21.3937ZM75.5781 58.7818V91.6875H42.4688V58.7818H75.5781ZM75.5781 131.113H69.16L56.6294 104.116H75.5781V131.113ZM92.0819 93.2156C90.8721 92.5979 89.6109 92.0866 88.3125 91.6875V58.0687C89.5981 57.8015 90.859 57.4266 92.0819 56.9481L155.041 31.8868V118.277L92.0819 93.2156ZM168.081 62.3475V87.8162C171.458 87.8162 174.697 86.4746 177.085 84.0864C179.473 81.6982 180.815 78.4592 180.815 75.0818C180.815 71.7045 179.473 68.4654 177.085 66.0773C174.697 63.6891 171.458 62.3475 168.081 62.3475Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1_227"
                          x="0.7"
                          y="-4.3"
                          width="180.415"
                          height="179.6"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="-8" dy="4" />
                          <feGaussianBlur stdDeviation="4.15" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_227"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_227"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 rounded-3xl px-10 py-6 ml-[3rem] pl-16 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                style={{
                  background:
                    "linear-gradient(to right, rgb(255, 205, 110), rgb(255, 232, 189))",
                  opacity: 1,
                }}
              >
                <h3
className="gradient-textsm text-[23px] mb-6 ml-15"                  style={{ opacity: 1, transform: "none" }}
                >
                  Digital Marketing & Branding
                </h3>
                <ul className="space-y-1 ml-15 gradient-textli text-[23px]">
                  {[
                    "SEO for BIM & AEC",
                    "Social Media & Email Campaigns",
                    "BIM-based Content",
                    "Marketing Decks",
                    "Digital Positioning",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center "
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <span className="w-1 h-1 bg-[#6F6BD9] rounded-full mr-4 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
