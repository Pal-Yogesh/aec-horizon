// import Image from "next/image";
// import React from "react";

// const testimonials = [
//   {
//     id: 1,
//     text: "Impressed by the professionalism and attention to detail.",
//     name: "Aliza Hawkins",
//     role: "CEO",
//     avatar: "/avatar.svg",
//   },
//   {
//     id: 2,
//     text: "Impressed by the professionalism and attention to detail.",
//     name: "Aliza Hawkins",
//     role: "CEO",
//     avatar: "/avatar.svg",
//   },
//   {
//     id: 3,
//     text: "Impressed by the professionalism and attention to detail.",
//     name: "Aliza Hawkins",
//     role: "CEO",
//     avatar: "/avatar.svg",
//   },
//   {
//     id: 4,
//     text: "Impressed by the professionalism and attention to detail.",
//     name: "Aliza Hawkins",
//     role: "CEO",
//     avatar: "/avatar.svg",
//   },
//   {
//     id: 5,
//     text: "Impressed by the professionalism and attention to detail.",
//     name: "Aliza Hawkins",
//     role: "CEO",
//     avatar: "/avatar.svg",
//   },
//   {
//     id: 6,
//     text: "Impressed by the professionalism and attention to detail.",
//     name: "Aliza Hawkins",
//     role: "CEO",
//     avatar: "/avatar.svg",
//   },
// ];

// const Testmonial = () => {
//   return (
//     <>
//       <div className="bg-[url('/faq.svg')] bg-cover bg-center min-h-screen w-full flex flex-col items-center py-20">
//         {/* Title Button */}
//         <div className="flex justify-center items-center pt-20">
//           <button
//             className="text-white text-[32px] rounded-[47px] shadow-xl cursor-pointer w-[259px] h-[51px] sheen-effect"
//             style={{
//               background:
//                 "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             Testimonials
//           </button>
//         </div>

//         {/* Testimonials Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20 px-10">
//           {testimonials.map((item) => (
//             <div key={item.id} className="relative w-[306px] h-[286px]">
//               {/* Frame SVG as background */}
//               <Image
//                 src="/frame.svg"
//                 alt="testimonial frame"
//                 fill
//                 className="object-contain"
//               />

//               {/* Text content above the frame */}
//               <div className="absolute top-4 left-6 right-6">
//                 <p className="text-[30px] gradient-text-about leading-snug">
//                   {item.text}
//                 </p>
//                 <p className="text-black text-[25px] mt-3">{item.name},</p>
//                 <p className="text-black text-[25px] font-bold">{item.role}</p>
//               </div>

//               {/* Avatar (outside bottom-right corner) */}
//               <div className="absolute -bottom-2 -right-3">
//                 <div
//                   className="bg-[#FFFFFF91] rounded-full w-[110px] h-[110px] flex justify-center items-center"
//                   style={{
//                     boxShadow: "0px 4px 4px 0px #00000040",
//                   }}
//                 >
//                   <Image
//                     src={item.avatar}
//                     alt={item.name}
//                     width={92}
//                     height={92}
//                     className="w-[92px] h-[92px] rounded-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testmonial;


"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Impressed by the professionalism and attention to detail.",
    name: "Aliza Hawkins",
    role: "CEO",
    avatar: "/avatar.svg",
  },
  {
    id: 2,
    text: "Impressed by the professionalism and attention to detail.",
    name: "Aliza Hawkins",
    role: "CEO",
    avatar: "/avatar.svg",
  },
  {
    id: 3,
    text: "Impressed by the professionalism and attention to detail.",
    name: "Aliza Hawkins",
    role: "CEO",
    avatar: "/avatar.svg",
  },
  {
    id: 4,
    text: "Impressed by the professionalism and attention to detail.",
    name: "Aliza Hawkins",
    role: "CEO",
    avatar: "/avatar.svg",
  },
  {
    id: 5,
    text: "Impressed by the professionalism and attention to detail.",
    name: "Aliza Hawkins",
    role: "CEO",
    avatar: "/avatar.svg",
  },
  {
    id: 6,
    text: "Impressed by the professionalism and attention to detail.",
    name: "Aliza Hawkins",
    role: "CEO",
    avatar: "/avatar.svg",
  },
];

const Testmonial = () => {
  return (
    <>
      <div className="bg-[url('/faq.svg')] bg-cover bg-center min-h-screen w-full flex flex-col items-center py-20">
        {/* Title Button */}
        <div className="flex justify-center items-center pt-20">
          <button
            className="text-white text-[32px] rounded-[47px] shadow-xl cursor-pointer w-[259px] h-[51px] sheen-effect"
            style={{
              background:
                "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            Testimonials
          </button>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20 px-10">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="relative w-[306px] h-[286px] cursor-pointer rounded-[45px] overflow-visible"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {/* Frame SVG as background */}
              <Image
                src="/frame.svg"
                alt="testimonial frame"
                fill
                className="object-contain z-0"
              />

              {/* Text content above the frame */}
              <div className="absolute top-4 left-6 right-6 z-10">
                <p className="text-[30px] gradient-text-about leading-snug">
                  {item.text}
                </p>
                <p className="text-black text-[25px] mt-3">{item.name},</p>
                <p className="text-black text-[25px] font-bold">{item.role}</p>
              </div>

              {/* Avatar (outside bottom-right corner) */}
              <div className="absolute -bottom-2 -right-3 z-20">
                <div
                  className="bg-[#FFFFFF91] rounded-full w-[110px] h-[110px] flex justify-center items-center"
                  style={{
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={92}
                    height={92}
                    className="w-[92px] h-[92px] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testmonial;
