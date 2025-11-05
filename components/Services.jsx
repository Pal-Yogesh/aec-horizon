"use client";

import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

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
    <>
      {/* Background Blur - Hidden on mobile/tablet */}
      <div className="relative z-0">
        <div className="hidden lg:block absolute top-0 right-0 z-[1]">
          <Image
            src="/yellowblur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[650px] h-[100%]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
        <section className="relative scale-100 flex justify-center items-center">
          <div className="w-full">
            <h2
              className="font-bold text-[24px] md:text-[26px] lg:text-[29px] text-[#4B336D] mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-[8%] sm:px-[10%] md:px-[12%] lg:px-[13%]"
              style={{ opacity: 1, transform: "none" }}
            >
              Our{" "}
              <span className="gradient-text" tabIndex={0}>
                Services
              </span>
            </h2>
            <div className="relative">
              {/* Vertical Dashed Line */}
              <div
                className="hidden sm:block absolute left-3 sm:left-4 md:left-6 lg:left-8 top-0 bottom-0 w-1 z-10"
                style={{
                  transformOrigin: "center top",
                  opacity: 1,
                  transform: "none",
                }}
              >
                <div className="w-full h-full border-l-[3px] sm:border-l-[4px] md:border-l-[5px] lg:border-l-[6px] border-dashed border-white/90 shadow-sm"></div>
              </div>
              <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
                {/* BIM Services */}
                <motion.div
                  ref={ref1}
                  className="relative flex items-center"
                  style={{ opacity: 1, transform: "none" }}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls1}
                >
                  {/* Horizontal Dashed Line */}
                  <div className="hidden sm:block absolute left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-[30px] sm:w-[35px] md:w-[42px] lg:w-50 h-1 z-5">
                    <div className="sm:w-[100px] lg:w-full h-full border-t-[2px] sm:border-t-[3px] md:border-t-[3px] lg:border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
                  </div>
                  <div
                    className="relative shrink-0  sm:ml-16 md:ml-20 lg:ml-24 translate-x-8 sm:translate-x-12 md:translate-x-16 lg:translate-x-20 scale-200 z-10"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:shadow-[0_12px_36px_rgba(0,0,0,0.2)] lg:shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-4 sm:border-5 md:border-6 lg:border-8 border-white">
                      <div
                        className="h-12 w-12 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full grid place-items-center text-white text-4xl shadow-inner"
                        style={{ background: "rgb(215, 225, 255)" }}
                      >
                        <div>
                          <Image
                            src="/s1.svg"
                            alt="vector"
                            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden sm:block w-[260px] sm:w-[350px] md:w-[450px] lg:w-[590px] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] lg:rounded-[36px]  sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 ml-[1.5rem] sm:ml-[2rem] md:ml-[2.5rem] lg:ml-[3rem] pl-8 sm:pl-10 md:pl-12 lg:pl-16 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(220, 229, 255), rgb(191, 207, 255))",
                      opacity: 1,
                    }}
                  >
                    <h3
                      className=" font-bold  gradient-textservice mb-1 sm:mb-1.5 md:mb-2 ml-4 sm:ml-8 md:ml-12 lg:ml-15 "
                      style={{ opacity: 1, transform: "none" }}
                    >
                      BIM Services
                    </h3>
                    <ul className="  gradient-textli    space-y-0.5 sm:space-y-0.5 md:space-y-1 ml-4 sm:ml-8 md:ml-12 lg:ml-15">
                      {[
                        "BIM Modeling (LOD 100–500)",
                        "Revit Family & Template Creation",
                        "Clash Detection, Coordination",
                        "Scan-to-BIM & As-Built",
                        "Automation & MEPF modeling",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#6F6BD9] rounded-full mr-2 sm:mr-3 md:mr-3 lg:mr-4 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="block sm:hidden w-[260px] sm:w-[350px] md:w-[450px] lg:w-[590px] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] lg:rounded-[36px]  sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 ml-[1.5rem] sm:ml-[2rem] md:ml-[2.5rem] lg:ml-[3rem] pl-8 sm:pl-10 md:pl-12 lg:pl-16 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(220, 229, 255), rgb(191, 207, 255))",
                      opacity: 1,
                    }}
                  >
                    <h3
                      className=" font-bold  gradient-textli mb-1 sm:mb-1.5 md:mb-2 ml-4 sm:ml-8 md:ml-12 lg:ml-15 "
                      style={{ opacity: 1, transform: "none" }}
                    >
                      BIM Services
                    </h3>
                    <ul className="  gradient-textli2    space-y-0.5 sm:space-y-0.5 md:space-y-1 ml-4 sm:ml-8 md:ml-12 lg:ml-15">
                      {[
                        "BIM Modeling (LOD 100–500)",
                        "Revit Family & Template Creation",
                        "Clash Detection, Coordination",
                        "Scan-to-BIM & As-Built",
                        "Automation & MEPF modeling",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#6F6BD9] rounded-full mr-2 sm:mr-3 md:mr-3 lg:mr-4 shrink-0"></span>
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
                  {/* Horizontal Dashed Line */}
                  <div className="hidden sm:block absolute left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-[30px] sm:w-[35px] md:w-[42px] lg:w-50 h-1 z-5">
                    <div className="sm:w-[100px] lg:w-full h-full border-t-[2px] sm:border-t-[3px] md:border-t-[3px] lg:border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
                  </div>
                  <div
                    className="relative shrink-0  sm:ml-16 md:ml-20 lg:ml-24 translate-x-8 sm:translate-x-12 md:translate-x-16 lg:translate-x-20 scale-200 z-10"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:shadow-[0_12px_36px_rgba(0,0,0,0.2)] lg:shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-4 sm:border-5 md:border-6 lg:border-8 border-white">
                      <div
                        className="h-12 w-12 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full grid place-items-center text-white text-4xl shadow-inner"
                        style={{ background: "rgb(191, 175, 255)" }}
                      >
                        <div>
                          <Image
                            src="/s2.svg"
                            alt="vector"
                            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden sm:block w-[260px] sm:w-[350px] md:w-[450px] lg:w-[590px] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] lg:rounded-[36px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 ml-[1.5rem] sm:ml-[2rem] md:ml-[2.5rem] lg:ml-[3rem] pl-8 sm:pl-10 md:pl-12 lg:pl-16 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(186, 169, 255), rgb(206, 194, 255))",
                      opacity: 1,
                    }}
                  >
                    <h3
                      className="gradient-textservice font-bold  mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 ml-4 sm:ml-8 md:ml-12 lg:ml-15 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      Business Development
                    </h3>
                    <ul className="gradient-textli   space-y-0.5 sm:space-y-0.5 md:space-y-1 ml-4 sm:ml-8 md:ml-12 lg:ml-15 gradient-textli text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                      {[
                        "Go-to-Market for BIM startups",
                        "Proposal & Estimation",
                        "CRM Setup & Lead Gen",
                        "Brand Strategy",
                        "Strategic AEC Partnerships",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#6F6BD9] rounded-full mr-2 sm:mr-3 md:mr-3 lg:mr-4 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="block sm:hidden w-[260px] sm:w-[350px] md:w-[450px] lg:w-[590px] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] lg:rounded-[36px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 ml-[1.5rem] sm:ml-[2rem] md:ml-[2.5rem] lg:ml-[3rem] pl-8 sm:pl-10 md:pl-12 lg:pl-16 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(186, 169, 255), rgb(206, 194, 255))",
                      opacity: 1,
                    }}
                  >
                    <h3
                      className="gradient-textli font-bold  mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 ml-4 sm:ml-8 md:ml-12 lg:ml-15 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      Business Development
                    </h3>
                    <ul className="gradient-textli2   space-y-0.5 sm:space-y-0.5 md:space-y-1 ml-4 sm:ml-8 md:ml-12 lg:ml-15 gradient-textli text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                      {[
                        "Go-to-Market for BIM startups",
                        "Proposal & Estimation",
                        "CRM Setup & Lead Gen",
                        "Brand Strategy",
                        "Strategic AEC Partnerships",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#6F6BD9] rounded-full mr-2 sm:mr-3 md:mr-3 lg:mr-4 shrink-0"></span>
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
                  {/* Horizontal Dashed Line */}
                  <div className="hidden sm:block absolute left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-[30px] sm:w-[35px] md:w-[42px] lg:w-50 h-1 z-5">
                    <div className="sm:w-[100px] lg:w-full h-full border-t-[2px] sm:border-t-[3px] md:border-t-[3px] lg:border-t-[4px] border-dashed border-white/90 shadow-sm"></div>
                  </div>
                  <div
                    className="relative shrink-0  sm:ml-16 md:ml-20 lg:ml-24 translate-x-8 sm:translate-x-12 md:translate-x-16 lg:translate-x-20 scale-200 z-10"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:shadow-[0_12px_36px_rgba(0,0,0,0.2)] lg:shadow-[0_16px_48px_rgba(0,0,0,0.2)] grid place-items-center relative z-20 border-4 sm:border-5 md:border-6 lg:border-8 border-white">
                      <div
                        className="h-12 w-12 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full grid place-items-center text-white text-4xl shadow-inner"
                        style={{ background: "rgb(255, 229, 177)" }}
                      >
                        <div>
                          <Image
                            src="/s3.svg"
                            alt="vector"
                            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                            width={1000}
                            height={1000}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden sm:block w-[260px] sm:w-[350px] md:w-[450px] lg:w-[590px] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] lg:rounded-[36px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 ml-[1.5rem] sm:ml-[2rem] md:ml-[2.5rem] lg:ml-[3rem] pl-8 sm:pl-10 md:pl-12 lg:pl-16 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(255, 205, 110), rgb(255, 232, 189))",
                      opacity: 1,
                    }}
                  >
                    <h3
                      className=" font-bold gradient-textservice mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 ml-4 sm:ml-8 md:ml-12 lg:ml-15 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      Digital Marketing & Branding
                    </h3>
                    <ul className=" gradient-textli  space-y-0.5 sm:space-y-0.5 md:space-y-1 ml-4 sm:ml-8 md:ml-12 lg:ml-15 gradient-textli text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                      {[
                        "SEO for BIM & AEC",
                        "Social Media & Email Campaigns",
                        "BIM-based Content",
                        "Marketing Decks",
                        "Digital Positioning",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#6F6BD9] rounded-full mr-2 sm:mr-3 md:mr-3 lg:mr-4 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="block sm:hidden w-[260px] sm:w-[350px] md:w-[450px] lg:w-[590px] rounded-[20px] sm:rounded-[26px] md:rounded-[32px] lg:rounded-[36px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-2.5 lg:py-3 ml-[1.5rem] sm:ml-[2rem] md:ml-[2.5rem] lg:ml-[3rem] pl-8 sm:pl-10 md:pl-12 lg:pl-16 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:shadow-[0_10px_26px_rgba(0,0,0,0.12)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm relative border-1 border-white"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(255, 205, 110), rgb(255, 232, 189))",
                      opacity: 1,
                    }}
                  >
                    <h3
                      className="gradient-textli font-bold  mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 ml-4 sm:ml-8 md:ml-12 lg:ml-15 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      Digital Marketing & Branding
                    </h3>
                    <ul className="gradient-textli2   space-y-0.5 sm:space-y-0.5 md:space-y-1 ml-4 sm:ml-8 md:ml-12 lg:ml-15 gradient-textli text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                      {[
                        "SEO for BIM & AEC",
                        "Social Media & Email Campaigns",
                        "BIM-based Content",
                        "Marketing Decks",
                        "Digital Positioning",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#6F6BD9] rounded-full mr-2 sm:mr-3 md:mr-3 lg:mr-4 shrink-0"></span>
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
      </div>
    </>
  );
};

export default Services;
