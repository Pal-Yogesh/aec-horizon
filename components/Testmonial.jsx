

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionBg from "./Background/SectionBg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Danny Lopez",
      position: "Special Operator, LEO solutions",
      image: "/avatar.svg",
      testimonial:
        "The entire ecosystem at AEC Horizon is extremely optimised perfectly made for each of the services that are intertwining.",
      bgColor: "bg-[#E9E9FF]",
    },
    {
      id: 2,
      name: "Danny Lopez",
      position: "Special Operator, LEO solutions",
      image: "/avatar.svg",
      testimonial:
        "The entire ecosystem at AEC Horizon is extremely optimised perfectly made for each of the services that are intertwining.",
      bgColor: "bg-[#BBBBFF]",
    },
    {
      id: 3,
      name: "Danny Lopez",
      position: "Special Operator, LEO solutions",
      image: "/avatar.svg",
      testimonial:
        "The entire ecosystem at AEC Horizon is extremely optimised perfectly made for each of the services that are intertwining.",
      bgColor: "bg-[#E9E9FF]",
    },
    {
      id: 4,
      name: "Danny Lopez",
      position: "Special Operator, LEO solutions",
      image: "/avatar.svg",
      testimonial:
        "The entire ecosystem at AEC Horizon is extremely optimised perfectly made for each of the services that are intertwining.",
      bgColor: "bg-[#BBBBFF]",
    },
    {
      id: 5,
      name: "Danny Lopez",
      position: "Special Operator, LEO solutions",
      image: "/avatar.svg",
      testimonial:
        "The entire ecosystem at AEC Horizon is extremely optimised perfectly made for each of the services that are intertwining.",
      bgColor: "bg-[#E9E9FF]",
    },
    {
      id: 6,
      name: "Danny Lopez",
      position: "Special Operator, LEO solutions",
      image: "/avatar.svg",
      testimonial:
        "The entire ecosystem at AEC Horizon is extremely optimised perfectly made for each of the services that are intertwining.",
      bgColor: "bg-[#BBBBFF]",
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
      <div className="flex justify-center items-center pt-20 relative z-10">
        <button
          className="text-white text-[24px] md:text-[32px] rounded-[47px]    cursor-pointer w-[180px] h-[42px] md:w-[259px] md:h-[51px] sheen-effect"
          style={{
            background:
              "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          Testimonials
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 lg:max-w-7xl lg:mx-auto mt-20">
        <div  className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 pb-5 sm:pb-0 scrollbar-thin scrollbar-thumb-[#9CB0FF] scrollbar-track-[#E3E9FF] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-smooth snap-x snap-mandatory sm:snap-none">
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
                    style={{
                      boxShadow: "0px 4px 12.4px 0px #00000040",
                    }}
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
                    <span className="gradient-text">Danny Lopez</span>
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
