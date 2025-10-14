// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const WhyChoose = () => {
//   return (
//     <div className="px-[116px] pt-20 pb-10">
//       <div>
//         <div>
//           <div>
//             <h1 className="text-[#4B336D] text-[45px]">
//               Why Choose{" "}
//               <span className="gradient-text font-bold">AEC Horizon?</span>
//             </h1>
//           </div>

//           <div className="flex justify-between items-center pt-10">
//             <div className="">
//               <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
//                 <div className="pt-3">
//                   <h1 className="font-bold text-[30px] gradient-text text-center ">
//                     {" "}
//                     Transparent Process
//                   </h1>
//                   <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
//                   <p className="px-10 text-[28px] text-center text-[#4B336D] pt-2">
//                     From consultation to delivery, every step mapped.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
//                 <div className="pt-3">
//                   <h1 className="font-bold text-[30px] gradient-text text-center ">
//                     {" "}
//                     Innovation First
//                   </h1>
//                   <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
//                   <p className="px-10 text-[28px] text-center text-[#4B336D] pt-2">
//                     Automation, Revit families, custom strategies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center items-center relative">
//       <motion.div
//         initial={{ rotate: 0 }}
//         whileInView={{ rotate: 360 }}
//         transition={{ duration: 2, ease: "linear" }}
//         viewport={{ once: true }} // rotates only the first time it's in view
//         className="absolute -top-4 left-1/2 -translate-x-1/2"
//       >
//         <Image
//           src="/plus.svg"
//           alt="plus"
//           width={115}
//           height={89}
//           className="w-[115px] h-[89px]"
//         />
//       </motion.div>
//     </div>

//           <div className="flex justify-between items-center pt-12">
//             <div className="">
//               <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
//                 <div className="pt-3">
//                   <h1 className="font-bold text-[30px] gradient-text text-center ">
//                     {" "}
//                     End to End Coverage
//                   </h1>
//                   <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
//                   <p className="px-8 text-[28px] text-center text-[#4B336D] pt-2">
//                     BIM, Business Development, digital strategy—all under one
//                     roof.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="bg-[#FFFFFF47] w-[420px] h-[250px] rounded-[40px] border border-white shadow-[0px_4px_4px_0px_#00000040]">
//                 <div className="pt-3">
//                   <h1 className="font-bold text-[30px] gradient-text text-center ">
//                     {" "}
//                     Real People. Real Results.
//                   </h1>
//                   <p className="w-full h-[2px] my-3 bg-[#FFFFFF]"></p>
//                   <p className="px-10 text-[28px] text-center text-[#4B336D] pt-2">
//                     No fluff. <br /> Just expert-driven solutions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center pt-12">
//           <button
//             className="text-white text-[18px] px-6 py-4 rounded-[13px] shadow-xl cursor-pointer"
//             style={{
//               background:
//                 "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             View our services
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12, duration: 0.6 },
  },
};

// ✅ Card data array
const cardData = [
  {
    id: 1,
    title: "Transparent Process",
    desc: "From consultation to delivery, every step mapped.",
  },
  {
    id: 2,
    title: "Innovation First",
    desc: "Automation, Revit families, custom strategies.",
  },
  {
    id: 3,
    title: "End to End Coverage",
    desc: "BIM, Business Development, digital strategy—all under one roof.",
  },
  {
    id: 4,
    title: "Real People. Real Results.",
    desc: "No fluff. Just expert-driven solutions.",
  },
];

const WhyChoose = () => {
  return (
    <div className="relative z-10">
      <div className="relative -z-10">
        <div className="absolute -top-64 -left-[20%]">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
      </div>

      <div className="px-[20%] pt-20 pb-10 ">
        <div>
          <h1 className="text-[#4B336D] text-[29px]">
            Why Choose{" "}
            <span className="gradient-text font-bold">AEC Horizon?</span>
          </h1>

          {/* ✅ Top row (first 2 cards) */}
          <div className="flex justify-center gap-32 items-center pt-10">
            {cardData.slice(0, 2).map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="bg-[#FFFFFF47] w-[280px] h-[170px] rounded-[28.5px] border border-white "
                  style={{
                    boxShadow: "0px 2.63px 2.63px 0px #00000040",

                    backdropFilter: "blur(26.26546287536621px)",
                    boxShadow: "0px 3.5px 19px 0px #809CFF",
                  }}
                >
                  <div className="pt-3">
                    <h1 className="font-bold text-[19px] gradient-text text-center">
                      {card.title}
                    </h1>
                    <p className="w-full h-[2px] my-2 bg-[#FFFFFF]"></p>
                    <p className="px-10 text-[18.39px] text-center text-[#4B336D] ">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ Plus sign animation */}
          <div className="flex justify-center items-center relative">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 720 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute -top-4 left-1/2 -translate-x-1/2"
            >
              <Image
                src="/plus.svg"
                alt="plus"
                width={115}
                height={89}
                className="w-[100px] h-[70px]"
              />
            </motion.div>
          </div>

          {/* ✅ Bottom row (last 2 cards) */}
          <div className="flex justify-center gap-32 items-center pt-12">
            {cardData.slice(2, 4).map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="bg-[#FFFFFF47] w-[280px] h-[180px] rounded-[28.5px] border border-white"
                  style={{
                    boxShadow: "0px 2.63px 2.63px 0px #00000040",

                    backdropFilter: "blur(26.26546287536621px)",
                    boxShadow: "0px 3.5px 19px 0px #809CFF",
                  }}
                >
                  <div className="pt-3">
                    <h1 className="font-bold text-[19px] gradient-text text-center">
                      {card.title}
                    </h1>
                    <p className="w-full h-[2px] my-2 bg-[#FFFFFF]"></p>
                    <p className="px-10 text-[18.39px] text-center text-[#4B336D]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ Button */}
          <div className="flex justify-center items-center py-12">
            <Link
              href="/services"
              className="text-white text-[18px] px-6 py-4 rounded-[13px] shadow-xl cursor-pointer"
              style={{
                background:
                  "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              View our services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
