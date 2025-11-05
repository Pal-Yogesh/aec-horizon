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
      {/* Background Blur - Hidden on mobile/tablet */}
      <div className="relative -z-10">
        <div className="hidden lg:block absolute -top-64 -left-[20%]">
          <Image
            src="/blur.svg"
            width={1000}
            height={1000}
            alt="blur"
            className="w-[900px] h-[100%]"
          />
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-[15%] xl:px-[20%] pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
        <div>
          <h1 className="text-[#4B336D] text-[24px] sm:text-[26px] lg:text-[29px] text-center lg:text-left">
            Why Choose{" "}
            <span className="gradient-text font-bold">AEC Horizon?</span>
          </h1>

          {/* ✅ Top row (first 2 cards) */}
          <div className="flex flex-col sm:flex-row justify-center px-4 gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-32 items-center pt-6 sm:pt-8 lg:pt-10">
            {cardData.slice(0, 2).map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="bg-[#FFFFFF47] w-[19rem] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[150px] sm:h-[170px] rounded-[24px] sm:rounded-[28.5px] border border-white"
                  style={{
                    boxShadow: "0px 2.63px 2.63px 0px #00000040",
                    backdropFilter: "blur(26.26546287536621px)",
                    boxShadow: "0px 3.5px 19px 0px #809CFF",
                  }}
                >
                  <div className="pt-3 sm:pt-3">
                    <h1 className="font-bold text-[16px] sm:text-[18px] lg:text-[19px] gradient-text text-center px-2">
                      {card.title}
                    </h1>
                    <p className="w-full h-[2px] my-2 bg-[#FFFFFF]"></p>
                    <p className="px-6 sm:px-8 lg:px-10 text-[15px] sm:text-[17px] lg:text-[18.39px] text-center text-[#4B336D]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ Plus sign animation */}
          <div className="flex justify-center items-center relative mt-4 sm:mt-0 sm:my-6 lg:my-0">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 720 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="relative sm:absolute sm:-top-4 sm:left-1/2 sm:-translate-x-1/2"
            >
              <Image
                src="/plus.svg"
                alt="plus"
                width={115}
                height={89}
                className="w-[70px] h-[50px] sm:w-[85px] sm:h-[60px] lg:w-[100px] lg:h-[70px]"
              />
            </motion.div>
          </div>

          {/* ✅ Bottom row (last 2 cards) */}
          <div className="flex flex-col sm:flex-row   justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-32 items-center pt-6 sm:pt-8 lg:pt-12">
            {cardData.slice(2, 4).map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className="bg-[#FFFFFF47] w-[19rem]  sm:w-[240px] md:w-[260px] lg:w-[280px] h-[150px] sm:h-[180px] rounded-[24px] sm:rounded-[28.5px] border border-white"
                  style={{
                    boxShadow: "0px 2.63px 2.63px 0px #00000040",
                    backdropFilter: "blur(26.26546287536621px)",
                    boxShadow: "0px 3.5px 19px 0px #809CFF",
                  }}
                >
                  <div className="pt-3 sm:pt-3">
                    <h1 className="font-bold text-[16px] sm:text-[18px] lg:text-[19px] gradient-text text-center px-2">
                      {card.title}
                    </h1>
                    <p className="w-full h-[2px] my-2 bg-[#FFFFFF]"></p>
                    <p className="px-6 sm:px-8 lg:px-10 text-[15px] sm:text-[17px] lg:text-[18.39px] text-center text-[#4B336D]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ Button */}
          <div className="flex justify-center items-center py-8 sm:py-10 lg:py-12">
            <Link
              href="/services"
              className="text-white text-[15px] sm:text-[17px] lg:text-[18px] px-5 sm:px-6 py-3 sm:py-4 rounded-[13px] shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
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
