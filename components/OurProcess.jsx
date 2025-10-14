// import Image from "next/image";
// import React from "react";

// const OurProcess = () => {
//   return (
//     <>
//       <div className=" py-14">
//         <div>
//           <div className=" px-[116px]">
//             <h1 className="font-bold text-[45px] text-[#4B336D]">
//               Our <span className="gradient-text">Process</span>
//             </h1>
//             <p className="text-[#000000] text-[25px]">
//               We don&apos;t just deliver projects — we engineer clarity,
//               collaboration, and measurable <br /> results at every phase.
//             </p>
//           </div>

//           <div className="flex justify-start relative pt-24">
//             <div className="w-[50%] h-full absolute top-40 -left-[370px]">
//               <Image
//                 src="/process.svg"
//                 width={1000}
//                 height={1000}
//                 alt="process"
//                 className="w-full h-[100vh] "
//               />
//             </div>
//           </div>

//           <div className="space-y-10">
//             <div className="flex justify-center  pl-32 z-[9999]">
//               <div className="w-[780px]  bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
//                 <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
//                   <h1 className="gradient-text-number font-semibold text-[60px] ">
//                     1
//                   </h1>
//                 </div>
//                 <div className="text-[25px] text-[#000000] px-10 pt-1">
//                   <h1 className="font-semibold">We listen first.</h1>
//                   <p>
//                     We dive deep into your goals, existing workflows, and
//                     challenges. This phase includes audits, stakeholder calls,
//                     and strategic alignment.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center  pl-32 z-[9999]">
//               <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
//                 <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
//                   <h1 className="gradient-text-number font-semibold text-[60px] ">
//                     2
//                   </h1>
//                 </div>
//                 <div className="text-[25px] text-[#000000] px-10 pt-1">
//                   <h1 className="font-semibold">We build the blueprint.</h1>
//                   <p>
//                     A custom project plan is created with timelines, milestones,
//                     and deliverables tailored to your objectives.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center  pl-32 z-[9999]">
//               <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
//                 <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
//                   <h1 className="gradient-text-number font-semibold text-[60px] ">
//                     3
//                   </h1>
//                 </div>
//                 <div className="text-[25px] text-[#000000] px-10 pt-1">
//                   <h1 className="font-semibold">
//                     We bring your project to life.
//                   </h1>
//                   <p>
//                     From BIM modeling to business development and marketing
//                     assets — this is where strategy turns into structure.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center  pl-32 z-[9999]">
//               <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
//                 <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
//                   <h1 className="gradient-text-number font-semibold text-[60px] ">
//                     4
//                   </h1>
//                 </div>
//                 <div className="text-[25px] text-[#000000] px-10 pt-1">
//                   <h1 className="font-semibold">Review & Optimization.</h1>
//                   <p>
//                     We refine every layer with your feedback, run QA checks, and
//                     optimize for future scalability.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center  pl-32 z-[9999]">
//               <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
//                 <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
//                   <h1 className="gradient-text-number font-semibold text-[60px] ">
//                     5
//                   </h1>
//                 </div>
//                 <div className="text-[25px] text-[#000000] px-10 pt-1">
//                   <h1 className="font-semibold">
//                     We&apos;re partners, not vendors.
//                   </h1>
//                   <p>
//                     Post-launch or post-handover, we offer optional support
//                     packages, retainer plans, or strategy refreshers so your
//                     systems stay sharp as you grow.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurProcess;


"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "We listen first.",
    description:
      "We dive deep into your goals, existing workflows, and challenges. This phase includes audits, stakeholder calls, and strategic alignment.",
  },
  {
    id: 2,
    title: "We build the blueprint.",
    description:
      "A custom project plan is created with timelines, milestones, and deliverables tailored to your objectives.",
  },
  {
    id: 3,
    title: "We bring your project to life.",
    description:
      "From BIM modeling to business development and marketing assets — this is where strategy turns into structure.",
  },
  {
    id: 4,
    title: "Review & Optimization.",
    description:
      "We refine every layer with your feedback, run QA checks, and optimize for future scalability.",
  },
  {
    id: 5,
    title: "We’re partners, not vendors.",
    description:
      "Post-launch or post-handover, we offer optional support packages, retainer plans, or strategy refreshers so your systems stay sharp as you grow.",
  },
];

const OurProcess = () => {
  return (
    <>
      <div className="py-14 relative ">
        {/* Heading */}
        <div className="px-[22%]">
          <h1 className="font-bold text-[29px] text-[#4B336D]">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-[#000000] text-[19px]">
            We don&apos;t just deliver projects — we engineer clarity,
            collaboration, and measurable  results at every phase.
          </p>
        </div>

        {/* Background Image */}
        <div className="flex justify-start relative pt-16">
          <div className="w-[50%] h-full absolute top-24 -left-[190px]">
            <Image
              src="/process.svg"
              width={1000}
              height={1000}
              alt="process"
              className="w-full h-[85vh]"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-10 z-[10] relative mt-1 ml-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex justify-center pl-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.3, // each one after the other
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-[585px] h-[123px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] flex backdrop-blur-sm">
                <div className="p-8 bg-[#FFFFFF] w-[95px] h-[123px] rounded-l-[20px] flex justify-center items-center">
                  <h1 className="gradient-text-number font-semibold text-[44px]">
                    {step.id}
                  </h1>
                </div>
                <div className="text-[15.75px] text-[#000000] px-10 pt-2">
                  <h1 className="font-semibold">{step.title}</h1>
                  <p className="">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProcess;
