import Image from "next/image";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Features",
      links: ["Payment", "Card", "Pricing"],
    },
    {
      title: "Support",
      links: ["Help", "FAQ", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookies"],
    },
  ];

  return (
    <footer className=" bg-[url('/footerbg.svg')] bg-cover bg-center ">

      <div className="py-10">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-1 px-4">
        {/* Newsletter Section */}
        <div
          className="bg-[#FFFFFF90]   w-full lg:w-1/2 p-8 pl-14 rounded-[40px] lg:rounded-r-none flex flex-col justify-between"
          style={{
            backdropFilter: "blur(8.199999809265137px)",

            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          {/* Heading + Description */}
          <div className="">
            <h2 className="text-transparent w-[230px] bg-clip-text bg-gradient-to-r from-[#4B336D] to-[#C2ACE2] text-[28px] sm:text-[30px] font-bold leading-snug">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-[#000000] text-[13px] pt-2 w-[380px]">
              Subscribe to our newsletter and be the first to receive insights,
              updates, and expert technical tips and how-to&apos;s from us on
              launching your brand.
            </p>
          </div>

          {/* Input + Button */}
          <div className="pt-4">
            <p className="pb-1 text-[#4B336D] text-[13px] font-medium">
              Stay up to date
            </p>

            <div className="flex items-center pt-2 gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-[13px] text-[#4B336D] placeholder-[#4B336D70] bg-[#ffffff] pl-4 focus:outline-none rounded-[20.5px] w-[200px] h-[41px]"
              />

              <button
                className="text-white text-[13px] rounded-[20.5px] font-semibold w-[91px] h-[41px] shadow-md cursor-pointer sheen-effect"
                style={{
                  background:
                    "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div
          className="bg-[#FFFFFF90] w-full lg:w-1/2 p-8 rounded-[38px] lg:rounded-l-none"
          style={{
            backdropFilter: "blur(8.199999809265137px)",

            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/aec.svg"
              width={1000}
              height={1000}
              alt="AEC Logo"
              className="w-[150px] h-[60px]"
            />
          </div>

          {/* Footer Links */}
          <div className="flex items-center  space-x-20  pt-6 ">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-[13px] font-semibold text-[#4B336D] pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-[13px] font-medium text-[#705C8D]">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-[#4B336D] transition cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center ">

          <div className="relative w-[180px] h-[70px] flex justify-center items-center">
            {/* Footer frame as background */}
            <Image
              src="/footerframe.svg"
              alt="footer frame"
              fill
              className="object-contain"
            />

            {/* Social icons above the frame */}
            <div className="absolute flex items-center justify-center gap-2">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                width={40}
                height={40}
                className="w-[40px] h-[40px] cursor-pointer"
              />
              <Image
                src="/insta.svg"
                alt="instagram"
                width={27}
                height={27}
                className="w-[27px] h-[27px] cursor-pointer"
              />
              <Image
                src="/linkdin.svg"
                alt="linkedin"
                width={27}
                height={27}
                className="w-[27px] h-[27px] cursor-pointer"
              />
              <Image
                src="/mail.svg"
                alt="mail"
                width={27}
                height={27}
                className="w-[27px] h-[27px] cursor-pointer"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
