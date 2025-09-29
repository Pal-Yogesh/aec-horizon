// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const ProcessArchitecture = () => {
//   return (
//     <>
//       <div className="px-[116px] pt-10 pb-20">
//         <div>
//           <div>
// <div className="flex justify-center items-center">
//   <div>
//     <h2 className="gradient-text font-bold text-[45px]">
//       Process From Drafts To Deals
//     </h2>
//     <h1 className="text-[#1C0044] font-semibold text-[45px]">
//       We&apos;ve always got you covered
//     </h1>
//   </div>
// </div>
//           </div>

//           <div>
//             <div>
// <div>
//   <div className="flex justify-center items-center gap-3 pt-14  pb-4">
//     <div
//       className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
//       style={{
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       {" "}
//       <h1 className="gradient-text">A: Architecture</h1>{" "}
//     </div>
//     <div
//       className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
//       style={{
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       {" "}
//       <h1 className="gradient-text">1</h1>{" "}
//     </div>
//   </div>
//   <div className="flex justify-center items-center text-[20px] -ml-10 pb-6">
//     <div>
//       <span className="gradient-text">
//         BIM & Drafting Services → For precise
//       </span>
//       <br />{" "}
//       <span className="gradient-text">
//         design documentation, 3D modeling,
//       </span>
//       <br />{" "}
//       <span className="gradient-text">
//         and construction-ready plans.
//       </span>
//     </div>
//   </div>
//               </div>
//               <div className="flex justify-center items-center">
//                 <Image
//                   src="/layer.svg"
//                   alt="layer"
//                   width={1000}
//                   height={1000}
//                   className="w-[750px] h-[700px] object-cover"
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-32 pt-8">
// <div>
//   <div className="flex justify-center items-center gap-3   pb-3">
//     <div
//       className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
//       style={{
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       {" "}
//       <h1 className="gradient-text">E: Engineering</h1>{" "}
//     </div>
//     <div
//       className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
//       style={{
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       {" "}
//       <h1 className="gradient-text">2</h1>{" "}
//     </div>
//   </div>
//   <div className="flex justify-center items-center text-[20px] -ml-10 pb-8">
//     <div>
//       <span className="gradient-text">
//         Technical Business Development → To
//       </span>
//       <br />{" "}
//       <span className="gradient-text">
//         secure projects, create proposals.
//       </span>
//       <br />{" "}
//     </div>
//   </div>
// </div>

// <div>
//   <div className="flex justify-center items-center gap-3   pb-3">
//     <div
//       className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
//       style={{
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       {" "}
//       <h1 className="gradient-text">3</h1>{" "}
//     </div>
//     <div
//       className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
//       style={{
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       {" "}
//       <h1 className="gradient-text">C: Construction</h1>{" "}
//     </div>
//   </div>
//   <div className="flex justify-center items-center text-[20px]">
//     <div>
//       <span className="gradient-text">
//         Needs: Branding & Digital Marketing →
//       </span>
//       <br />{" "}
//       <span className="gradient-text">
//         To attract clients, showcase completed
//       </span>
//       <br /> <span className="gradient-text">projects.</span>
//     </div>
//   </div>
// </div>
// </div>

//               <div className="flex justify-center items-center pt-20 ">
//                 <Link
//                 href="/services"
//                   className="text-white text-[18px] px-6 py-4 rounded-[13px] shadow-xl  border border-white    cursor-pointer  "
//                   style={{
//                     background:
//                       "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
//                     boxShadow: "0px 4px 4px 0px #00000040",
//                   }}
//                 >
//                   View Our Services
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProcessArchitecture;

// "use client"
// import Image from 'next/image'
// import React from 'react'
// import { motion } from 'framer-motion'

// const ProcessArchitecture = () => {
//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background group image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="absolute"
//       >
//         <Image
//           src="/newgroup.svg"
//           width={1000}
//           height={1000}
//           alt="group"
//           className='w-[742px] h-[704px] object-cover'
//         />
//       </motion.div>

//       {/* Top circle (g1) */}
//       <motion.div
//         initial={{ opacity: 0, y: -100, scale: 0.5 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.3,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 100
//         }}
//         className="absolute top-[70px] left-1/2 transform -translate-x-1/2"
//       >
//         <Image
//           src="/g1.svg"
//           width={1000}
//           height={1000}
//           alt="group"
//           className='w-[216px] h-[216px] object-cover'
//         />
//       </motion.div>

//       {/* Bottom left circle (g2) */}
//       <motion.div
//         initial={{ opacity: 0, x: -100, y: 100, scale: 0.5 }}
//         animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.6,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 100
//         }}
//         className="absolute bottom-[10%] left-[28%]"
//       >
//         <Image
//           src="/g2.svg"
//           width={1000}
//           height={1000}
//           alt="group"
//           className='w-[216px] h-[216px] object-cover'
//         />
//       </motion.div>

//       {/* Bottom right circle (g3) */}
//       <motion.div
//         initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
//         animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.9,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 100
//         }}
//         className="absolute bottom-[10%] right-[28%]"
//       >
//         <Image
//           src="/g3.svg"
//           width={1000}
//           height={1000}
//           alt="group"
//           className='w-[216px] h-[216px] object-cover'
//         />
//       </motion.div>
//     </div>
//   )
// }

// export default ProcessArchitecture

// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const ProcessArchitecture = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center pt-20 pb-10">
//         <div>
//           <h2 className="gradient-text font-bold text-[45px]">
//             Process From Drafts To Deals
//           </h2>
//           <h1 className="text-[#1C0044] font-semibold text-[45px]">
//             We&apos;ve always got you covered
//           </h1>
//         </div>
//       </div>

//       <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         {/* Container for background and overlay images */}
//         <div>
//           <div className="flex justify-center items-center gap-3 pt-14  pb-4">
//             <div
//               className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
//               style={{
//                 boxShadow: "0px 4px 4px 0px #00000040",
//               }}
//             >
//               {" "}
//               <h1 className="gradient-text">A: Architecture</h1>{" "}
//             </div>
//             <div
//               className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
//               style={{
//                 boxShadow: "0px 4px 4px 0px #00000040",
//               }}
//             >
//               {" "}
//               <h1 className="gradient-text">1</h1>{" "}
//             </div>
//           </div>
//           <div className="flex justify-center items-center text-[20px] -ml-10 pb-6">
//             <div>
//               <span className="gradient-text">
//                 BIM & Drafting Services → For precise
//               </span>
//               <br />{" "}
//               <span className="gradient-text">
//                 design documentation, 3D modeling,
//               </span>
//               <br />{" "}
//               <span className="gradient-text">
//                 and construction-ready plans.
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="relative w-[50vw] max-w-[742px] aspect-[742/704]">
//           {/* Background group image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="absolute inset-0"
//           >
//             <Image
//               src="/newgroup.svg"
//               fill
//               alt="group"
//               className="object-contain"
//               priority
//             />
//           </motion.div>

//           {/* Top circle (g1) */}
//           <motion.div
//             initial={{ opacity: 0, y: -100, scale: 0.5 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.3,
//               ease: "easeOut",
//               type: "spring",
//               stiffness: 100,
//             }}
//             className="absolute top-[6.5%] left-[48%] -translate-x-1/2"
//           >
//             <Image
//               src="/g1.svg"
//               width={216}
//               height={216}
//               alt="group"
//               className="w-[100%] max-w-[216px] h-auto object-contain"
//             />
//           </motion.div>

//           <div>
//             <div className="flex justify-center items-center gap-3   pb-3">
//               <div
//                 className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 {" "}
//                 <h1 className="gradient-text">E: Engineering</h1>{" "}
//               </div>
//               <div
//                 className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 {" "}
//                 <h1 className="gradient-text">2</h1>{" "}
//               </div>
//             </div>
//             <div className="flex justify-center items-center text-[20px] -ml-10 pb-8">
//               <div>
//                 <span className="gradient-text">
//                   Technical Business Development → To
//                 </span>
//                 <br />{" "}
//                 <span className="gradient-text">
//                   secure projects, create proposals.
//                 </span>
//                 <br />{" "}
//               </div>
//             </div>
//           </div>
//           {/* Bottom left circle (g2) */}
//           <motion.div
//             initial={{ opacity: 0, x: -100, y: 100, scale: 0.5 }}
//             animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//               ease: "easeOut",
//               type: "spring",
//               stiffness: 100,
//             }}
//             className="absolute bottom-[7%] left-[6%]"
//           >
//             <Image
//               src="/g2.svg"
//               width={216}
//               height={216}
//               alt="group"
//               className="w-[100%] max-w-[216px] h-auto object-contain"
//             />
//           </motion.div>

//           {/* Bottom right circle (g3) */}

//           <div>
//             <div className="flex justify-center items-center gap-3   pb-3">
//               <div
//                 className=" w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2 "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 {" "}
//                 <h1 className="gradient-text">3</h1>{" "}
//               </div>
//               <div
//                 className=" w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2 "
//                 style={{
//                   boxShadow: "0px 4px 4px 0px #00000040",
//                 }}
//               >
//                 {" "}
//                 <h1 className="gradient-text">C: Construction</h1>{" "}
//               </div>
//             </div>
//             <div className="flex justify-center items-center text-[20px]">
//               <div>
//                 <span className="gradient-text">
//                   Needs: Branding & Digital Marketing →
//                 </span>
//                 <br />{" "}
//                 <span className="gradient-text">
//                   To attract clients, showcase completed
//                 </span>
//                 <br /> <span className="gradient-text">projects.</span>
//               </div>
//             </div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
//             animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.9,
//               ease: "easeOut",
//               type: "spring",
//               stiffness: 100,
//             }}
//             className="absolute bottom-[7%] right-[6%]"
//           >
//             <Image
//               src="/g3.svg"
//               width={216}
//               height={216}
//               alt="group"
//               className="w-[100%] max-w-[216px] h-auto object-contain"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProcessArchitecture;



"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProcessArchitecture = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-20 pb-10 ">
        <div>
          <h2 className="gradient-text font-bold text-[45px]">
            Process From Drafts To Deals
          </h2>
          <h1 className="text-[#1C0044] font-semibold text-[45px]">
            We&apos;ve always got you covered
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[150vh] flex items-center justify-center overflow-hidden">
        {/* Container for background and overlay images */}
        <div className="relative w-[50vw] max-w-[742px] aspect-[1042/1004]">
          {/* Background group image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/newgroup.svg"
              fill
              alt="group"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Top circle (g1) with text above */}
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            className="absolute top-[-28%] left-[48%] -translate-x-1/2 flex flex-col items-center"
          >
            {/* Text above g1 */}
            <div className="flex justify-center items-center gap-3 pb-3">
              <div
                className="w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <h1 className="gradient-text">A: Architecture</h1>
              </div>
              <div
                className="w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <h1 className="gradient-text">1</h1>
              </div>
            </div>
            <div className="flex justify-center items-center text-[20px] pb-6">
              <div className="text-center">
                <span className="gradient-text">
                  BIM & Drafting Services → For precise
                </span>
                <br />
                <span className="gradient-text">
                  design documentation, 3D modeling,
                </span>
                <br />
                <span className="gradient-text">
                  and construction-ready plans.
                </span>
              </div>
            </div>
            {/* g1 SVG */}
            <Image
              src="/g1.svg"
              width={216}
              height={216}
              alt="group"
              className="w-[100%] max-w-[216px] h-auto object-contain mt-[12%]"
            />
          </motion.div>

          {/* Bottom left circle (g2) with text below */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            className="absolute bottom-[8%] left-[6%] "
          >
            {/* g2 SVG */}
            <Image
              src="/g2.svg"
              width={216}
              height={216}
              alt="group"
              className="w-[100%] max-w-[216px] h-auto object-contain"
            />
            {/* Text below g2 */}

            <div className="absolute right-[-32%] top-[93%]">
              <div className="mt-[17%] flex justify-center items-center gap-3  pt-3 ">
                <div
                  className="w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2"
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                  <h1 className="gradient-text">E: Engineering</h1>
                </div>
                <div
                  className="w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2"
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                  <h1 className="gradient-text">2</h1>
                </div>
              </div>
              <div className="flex justify-center items-center text-[20px] pt-2">
                <div className="text-center">
                  <span className="gradient-text">
                    Technical Business Development → To
                  </span>
                  <br />
                  <span className="gradient-text">
                    secure projects, create proposals.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom right circle (g3) with text below */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            className="absolute bottom-[-23.5%] right-[-17.5%]  "
          >
            {/* g3 SVG */}
            <Image
              src="/g3.svg"
              width={216}
              height={216}
              alt="group"
              className="w-[100%] max-w-[216px] h-auto object-contain "
            />
            {/* Text below g3 */}
            <div className="mt-[12%] flex justify-center items-center gap-3 pt-3 ">
              <div
                className="w-[70px] h-[68px] bg-[#FFFFFF] rounded-full text-center font-bold text-[35px] pt-2"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <h1 className="gradient-text">3</h1>
              </div>
              <div
                className="w-[306px] h-[68px] bg-[#FFFFFF] rounded-[34px] text-center font-bold text-[35px] pt-2"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <h1 className="gradient-text">C: Construction</h1>
              </div>
            </div>
            <div className="flex justify-center items-center text-[20px] pt-2">
              <div className="text-center">
                <span className="gradient-text">
                  Needs: Branding & Digital Marketing →
                </span>
                <br />
                <span className="gradient-text">
                  To attract clients, showcase completed
                </span>
                <br />
                <span className="gradient-text">projects.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProcessArchitecture;
