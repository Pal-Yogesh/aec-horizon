"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-[116px] pt-[35px]  ">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[86px] h-[55px]"
          />
        </div>

        {/* Menu Items */}
        <div className="flex items-center justify-between gap-6 bg-[#FFFFFF47] backdrop-blur-xl py-2 rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10">
          {["Home", "Why us", "Service", "Our Expert", "Pricing"].map((item, index) => (
            <p
              key={index}
              className="relative py-1 px-4 cursor-pointer transition-all duration-300 ease-in-out
                         hover:bg-white hover:text-[#4B336D] rounded-full"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Contact Button */}
        <div className="bg-[#FFFFFF47] backdrop-blur-xl rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10 py-3 cursor-pointer hover:bg-white transition-all duration-300">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
