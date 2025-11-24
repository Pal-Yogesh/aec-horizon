
// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     id: 1,
//     title: "We listen first.",
//     description:
//       "We dive deep into your goals, existing workflows, and challenges. This phase includes audits, stakeholder calls, and strategic alignment.",
//   },
//   {
//     id: 2,
//     title: "We build the blueprint.",
//     description:
//       "A custom project plan is created with timelines, milestones, and deliverables tailored to your objectives.",
//   },
//   {
//     id: 3,
//     title: "We bring your project to life.",
//     description:
//       "From BIM modeling to business development and marketing assets — this is where strategy turns into structure.",
//   },
//   {
//     id: 4,
//     title: "Review & Optimization.",
//     description:
//       "We refine every layer with your feedback, run QA checks, and optimize for future scalability.",
//   },
//   {
//     id: 5,
//     title: "We’re partners, not vendors.",
//     description:
//       "Post-launch or post-handover, we offer optional support packages, retainer plans, or strategy refreshers so your systems stay sharp as you grow.",
//   },
// ];

// const OurProcess = () => {
//   return (
//     <>
//       <div className="py-14 relative ">
//         {/* Heading */}
//         <div className="px-[22%]">
//           <h1 className="font-bold text-[29px] text-[#4B336D]">
//             Our <span className="gradient-text">Process</span>
//           </h1>
//           <p className="text-[#000000] text-[19px]">
//             We don&apos;t just deliver projects — we engineer clarity,
//             collaboration, and measurable  results at every phase.
//           </p>
//         </div>

//         {/* Background Image */}
//         <div className="flex justify-start relative pt-16">
//           <div className="w-[50%] h-full absolute top-24 -left-[190px]">
//             <Image
//               src="/process.svg"
//               width={1000}
//               height={1000}
//               alt="process"
//               className="w-full h-[85vh]"
//             />
//           </div>
//         </div>

//         {/* Process Steps */}
//         <div className="space-y-10 z-[10] relative mt-1 ml-14">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               className="flex justify-center pl-32"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.3, // each one after the other
//               }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <div className="w-[585px] h-[123px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] flex backdrop-blur-sm">
//                 <div className="p-8 bg-[#FFFFFF] w-[95px] h-[123px] rounded-l-[20px] flex justify-center items-center">
//                   <h1 className="gradient-text-number font-semibold text-[44px]">
//                     {step.id}
//                   </h1>
//                 </div>
//                 <div className="text-[15.75px] text-[#000000] px-10 pt-2">
//                   <h1 className="font-semibold">{step.title}</h1>
//                   <p className="">{step.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
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
    title: "Discover & Diagnose",
    description:
      "We begin with a deep analysis of your AEC workflows, BIM environment, and business operations, identifying bottlenecks, opportunities, and technology needs.",
  },
  {
    id: 2,
    title: "System Architecture & Design",
    description:
      "Our team architects a connected BIM and business system, aligning collaborative model workflows, digital infrastructure, and documentation to your project goals.",
  },
  {
    id: 3,
    title: "Develop & Streamline",
    description:
      "Next, we develop and implement core solutions: BIM modeling, business process automation, and integrated marketing, bringing every phase of your AEC pipeline into harmony.",
  },
  {
    id: 4,
    title: "Digital Amplification",
    description:
      "With systems live, we use AEC-focused digital marketing and advanced SEO to grow your brand reach, connect with key decision-makers, and win more projects.",
  },
  {
    id: 5,
    title: "Measure, Optimize & Evolve",
    description:
      "Finally, we continuously monitor performance using live analytics and BIM-driven insights, refining your strategy for lasting efficiency, profitability, and brand growth as your business evolves.",
  },
];

const OurProcess = () => {
  return (
    <>
      <div className="py-8 sm:py-10 lg:py-14 relative">
        {/* Heading */}
        <div className="px-4 sm:px-8 lg:px-[22%]">
          <h1 className="font-bold text-[22px] sm:text-[26px] lg:text-[29px] text-[#4B336D]">
            Inside Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-[#000000] text-[14px] sm:text-[16px] lg:text-[19px]">
          From first diagnosis to digital growth, our step-by-step approach ensures your AEC projects run smarter, scale faster, and deliver lasting impact.
          </p>
        </div>

        {/* Background Image - Hidden on mobile and tablet, visible on desktop */}
        <div className="hidden lg:flex justify-start relative pt-16">
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
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 z-[10] relative mt-6 sm:mt-8 lg:mt-1 px-4 sm:px-8 lg:ml-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex justify-center lg:pl-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.3,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full max-w-[585px] min-h-[100px] sm:min-h-[110px] lg:h-[123px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] flex backdrop-blur-sm">
                <div className="p-4 sm:p-6 lg:p-8 bg-[#FFFFFF] w-[60px] sm:w-[75px] lg:w-[95px] min-h-full rounded-l-[20px] flex justify-center items-center">
                  <h1 className="gradient-text-number font-semibold text-[28px] sm:text-[36px] lg:text-[44px]">
                    {step.id}
                  </h1>
                </div>
                <div className="text-[12px] sm:text-[14px] lg:text-[15px] text-[#000000] px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:pt-1.5">
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
