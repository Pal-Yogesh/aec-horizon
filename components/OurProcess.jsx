import Image from "next/image";
import React from "react";

const OurProcess = () => {
  return (
    <>
      <div className=" py-14">
        <div>
          <div className=" px-[116px]">
            <h1 className="font-bold text-[45px] text-[#4B336D]">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="text-[#000000] text-[25px]">
              We don&apos;t just deliver projects — we engineer clarity,
              collaboration, and measurable <br /> results at every phase.
            </p>
          </div>

          <div className="flex justify-start relative pt-24">
            <div className="w-[50%] h-full absolute top-40 -left-[370px]">
              <Image
                src="/process.svg"
                width={1000}
                height={1000}
                alt="process"
                className="w-full h-[100vh] "
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex justify-center  pl-32 z-[9999]">
              <div className="w-[780px]  bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
                <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
                  <h1 className="gradient-text-number font-semibold text-[60px] ">
                    1
                  </h1>
                </div>
                <div className="text-[25px] text-[#000000] px-10 pt-1">
                  <h1 className="font-semibold">We listen first.</h1>
                  <p>
                    We dive deep into your goals, existing workflows, and
                    challenges. This phase includes audits, stakeholder calls,
                    and strategic alignment.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center  pl-32 z-[9999]">
              <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
                <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
                  <h1 className="gradient-text-number font-semibold text-[60px] ">
                    2
                  </h1>
                </div>
                <div className="text-[25px] text-[#000000] px-10 pt-1">
                  <h1 className="font-semibold">We build the blueprint.</h1>
                  <p>
                    A custom project plan is created with timelines, milestones,
                    and deliverables tailored to your objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center  pl-32 z-[9999]">
              <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
                <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
                  <h1 className="gradient-text-number font-semibold text-[60px] ">
                    3
                  </h1>
                </div>
                <div className="text-[25px] text-[#000000] px-10 pt-1">
                  <h1 className="font-semibold">
                    We bring your project to life.
                  </h1>
                  <p>
                    From BIM modeling to business development and marketing
                    assets — this is where strategy turns into structure.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center  pl-32 z-[9999]">
              <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
                <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
                  <h1 className="gradient-text-number font-semibold text-[60px] ">
                    4
                  </h1>
                </div>
                <div className="text-[25px] text-[#000000] px-10 pt-1">
                  <h1 className="font-semibold">Review & Optimization.</h1>
                  <p>
                    We refine every layer with your feedback, run QA checks, and
                    optimize for future scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center  pl-32 z-[9999]">
              <div className="w-[780px] h-[168px] bg-[#FFFFFF52] border border-[#FFFFFF52] rounded-[40px] shadow-[0px_4px_4px_0px_#00000040] flex ">
                <div className="p-8 bg-[#FFFFFF] w-[95px] h-[166px] rounded-l-[40px]">
                  <h1 className="gradient-text-number font-semibold text-[60px] ">
                    5
                  </h1>
                </div>
                <div className="text-[25px] text-[#000000] px-10 pt-1">
                  <h1 className="font-semibold">
                    We&apos;re partners, not vendors.
                  </h1>
                  <p>
                    Post-launch or post-handover, we offer optional support
                    packages, retainer plans, or strategy refreshers so your
                    systems stay sharp as you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
