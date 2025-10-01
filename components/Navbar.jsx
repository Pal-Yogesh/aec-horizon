"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  // Define menu items with their routes
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Software", path: "/softwares" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-[116px] pt-[35px]">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className=" w-[117px] h-[72px] bg-[#FFFFFF47] backdrop-blur-xl rounded-[15px] flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-[86px] h-[55px] cursor-pointer backdrop-blur-[5px]"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex items-center justify-between gap-6 bg-[#FFFFFF47] backdrop-blur-xl py-2 rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative py-1 px-4 cursor-pointer transition-all duration-300 ease-in-out
                         hover:bg-white hover:text-[#4B336D] rounded-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        {/* <Link
          id="contact"
          className="bg-[#FFFFFF47] backdrop-blur-xl rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10 py-3 cursor-pointer hover:bg-white transition-all duration-300"
        >
          Contact
        </Link> */}
        <Link
          href="#contact"
          scroll={false}
          className="bg-[#FFFFFF47] backdrop-blur-xl rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10 py-3 cursor-pointer hover:bg-white transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
