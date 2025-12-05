"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionBg from "./Background/SectionBg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Tan",
      position: "Project Head, Build Right Constructions Pvt. Ltd",
      image: "/test1.svg",
      testimonial:
        "The blend of BIM precision and business insight is what sets them apart. Our on-site coordination and documentation improved dramatically after their intervention.",
      bgColor: "bg-[#E9E9FF]",
    },
    {
      id: 2,
      name: "Rahul Verma",
      position: "Director, Axis Engineering Consultants",
      image: "/test2.svg",
      testimonial:
        "Their technical understanding of AEC systems is unmatched. From workflow optimisation to digital visibility, AEC horizon has helped us grow sustainbly across markets.",
      bgColor: "bg-[#BBBBFF]",
    },
    {
      id: 3,
      name: "Ananya Mehra",
      position: "Principle Architect, Lineform Studios",
      image: "/test3.svg",
      testimonial:
        "AEC Horizon transformed how our studio manages design and delivery. Their BIM integration made our workflows seamless and our projects more client ready than ever",
      bgColor: "bg-[#E9E9FF]",
    },
  ];

  return (
    // <div className="relative w-full  py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="relative w-full h-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden lg:overflow-visible ">
      <div className="absolute top-40 left-0 w-full h-full">
        <SectionBg />
        <div className="block md:hidden">
          <SectionBg />
          <SectionBg />
        </div>
      </div>
      {/* Title Button */}
      <div className="flex justify-center items-center mt-20 ">
        <div
            className="inline-block border-[2px] rounded-[44px] px-12 py-3 font-semibold text-[25px] border-[#FFFFFF4D]"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
              boxShadow: "0px 2.96px 5.03px 0px #00000040",
            }}
        >
          <p className="text-[20px] md:text-[29px] gradient-text-about font-semibold">
            Testimonials{" "}
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 lg:max-w-7xl lg:mx-auto mt-20">
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 pb-5 sm:pb-0 scrollbar-thin scrollbar-thumb-[#9CB0FF] scrollbar-track-[#E3E9FF] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-smooth snap-x snap-mandatory sm:snap-none">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                },
              }}
              className={`${testimonial.bgColor} backdrop-blur-xl rounded-[30px] m-3 p-3 shadow-lg border-[2px] border-white relative flex-shrink-0 sm:flex-shrink w-[280px] sm:w-auto snap-center`}
            >
              {/* Profile Section */}
              <div className="flex items-start gap-4 mb-6 ">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full "
                    // style={{
                    //   boxShadow: "0px 4px 12.4px 0px #00000040",
                    // }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Position */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#4B336D] mb-1">
                    <span className="gradient-text">{testimonial.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B336D] font-semibold leading-tight">
                    {testimonial.position}
                  </p>
                </div>

                {/* Quote Icon */}
                <div className="flex-shrink-0 lg:pt-4 hidden lg:block">
                  <Image src="/quote.svg" alt="quote" width={30} height={30} />
                </div>
              </div>

              {/* Testimonial Text */}
              <div>
                <p className="text-sm sm:text-base text-[#4B336D] leading-relaxed">
                  {testimonial.testimonial}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
