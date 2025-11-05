// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Features",
//       links: ["Payment", "Card", "Pricing"],
//     },
//     {
//       title: "Support",
//       links: ["Help", "FAQ", "Contact"],
//     },
//     {
//       title: "Legal",
//       links: ["Privacy Policy", "Terms of Service", "Cookies"],
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-[#FFFFFF] to-[#C8D0E9]  ">
//       <div className="py-10">
//         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-1 px-10">
//           {/* Newsletter Section */}
//           <div
//             className="bg-[#FFFFFF38]   w-full lg:w-1/2 p-8 pl-14 rounded-[38px] lg:rounded-r-none flex flex-col justify-between"
//             style={{
//               backdropFilter: "blur(8.199999809265137px)",

//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             {/* Heading + Description */}
//             <div className="">
//               <h2 className="text-transparent w-[230px] bg-clip-text bg-gradient-to-r from-[#4B336D] to-[#C2ACE2] text-[28px] sm:text-[30px] font-bold leading-snug">
//                 Subscribe to Our Newsletter
//               </h2>

//               <p className="text-[#000000] text-[13px] pt-2 w-[380px]">
//                 Subscribe to our newsletter and be the first to receive
//                 insights, updates, and expert technical tips and how-to&apos;s
//                 from us on launching your brand.
//               </p>
//             </div>

//             {/* Input + Button */}
//             <div className="pt-4">
//               <p className="pb-1 text-[#4B336D] text-[13px] font-medium">
//                 Stay up to date
//               </p>

//               <div className="flex items-center pt-2 gap-3">
//                 <input
//                   type="text"
//                   placeholder="Enter your email"
//                   className="text-[13px] text-[#4B336D] placeholder-[#4B336D70] bg-[#ffffff] pl-4 focus:outline-none rounded-[20.5px] w-[200px] h-[41px]"
//                 />

//                 <button
//                   className="text-white text-[13px] rounded-[20.5px] font-semibold w-[91px] h-[41px] shadow-md cursor-pointer sheen-effect"
//                   style={{
//                     background:
//                       "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
//                     boxShadow: "0px 4px 4px 0px #00000040",
//                   }}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Links Section */}
//           <div
//             className="bg-[#FFFFFF90] w-full lg:w-1/2 p-8 rounded-[38px] lg:rounded-l-none flex "
//             style={{
//               backdropFilter: "blur(8.199999809265137px)",

//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             <div>
//               <h2 className="text-transparent text-right w-[350px] bg-clip-text bg-gradient-to-r from-[#4B336D] to-[#C2ACE2] text-[28px] sm:text-[30px] font-bold leading-snug">
//                 The singular destination for AEC excellence.
//               </h2>

//               {/* Logo */}
//               {/* <div className="flex justify-center">
//             <Image
//               src="/aec.svg"
//               width={1000}
//               height={1000}
//               alt="AEC Logo"
//               className="w-[150px] h-[60px]"
//             />
//           </div> */}

//               {/* Footer Links */}
//               <div className="flex items-center  space-x-16  pt-6 ">
//                 {footerLinks.map((section, idx) => (
//                   <div key={idx} className="text-right">
//                     <h3 className="text-[13px] font-semibold text-[#4B336D] pb-2">
//                       {section.title}
//                     </h3>
//                     <ul className="space-y-1 text-[13px] font-medium text-[#705C8D]">
//                       {section.links.map((link, linkIdx) => (
//                         <li
//                           key={linkIdx}
//                           className="hover:text-[#4B336D] transition cursor-pointer"
//                         >
//                           {link}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="  ">
//               <div className="relative w-[70px] h-[224px] flex justify-center items-center">
//                 {/* Footer frame as background */}
//                 <Image
//                   src="/footerframe.svg"
//                   alt="footer frame"
//                   fill
//                   className="object-contain "
//                 />

//                 {/* Social icons above the frame */}
//                 <div className="absolute ">
//                   <Image
//                     src="/mail.svg"
//                     alt="mail"
//                     width={40}
//                     height={40}
//                     className="w-[40px] h-[40px] cursor-pointer"
//                   />
//                   <Image
//                     src="/linkdin.svg"
//                     alt="linkedin"
//                     width={40}
//                     height={40}
//                     className="w-[40px] h-[40px] cursor-pointer"
//                   />
//                   <Image
//                     src="/insta.svg"
//                     alt="instagram"
//                     width={40}
//                     height={40}
//                     className="w-[40px] h-[40px] cursor-pointer"
//                   />
//                   <Image
//                     src="/whatsapp.svg"
//                     alt="whatsapp"
//                     width={40}
//                     height={40}
//                     className="w-[40px] h-[40px] cursor-pointer"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
    <footer className="bg-gradient-to-b from-[#FFFFFF] to-[#C8D0E9]">
      <div className="py-6 sm:py-8 lg:py-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-6 lg:gap-1 px-4 sm:px-6 lg:px-10">
          {/* Newsletter Section */}
          <div
            className="bg-[#FFFFFF38] w-full lg:w-1/2 p-6 sm:p-8 lg:pl-14 rounded-3xl lg:rounded-r-none flex flex-col justify-between"
            style={{
              backdropFilter: "blur(8.2px)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            {/* Heading + Description */}
            <div className="mb-4 sm:mb-6 lg:mb-0">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B336D] to-[#C2ACE2] text-2xl sm:text-3xl lg:text-[30px] font-bold leading-tight sm:leading-snug">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-[#000000] text-xs sm:text-sm lg:text-[13px] pt-2 sm:pt-3 w-full max-w-full lg:max-w-[380px]">
                Subscribe to our newsletter and be the first to receive
                insights, updates, and expert technical tips and how-to&apos;s
                from us on launching your brand.
              </p>
            </div>

            {/* Input + Button */}
            <div className="pt-2 sm:pt-4">
              <p className="pb-1 sm:pb-2 text-[#4B336D] text-xs sm:text-sm lg:text-[13px] font-medium">
                Stay up to date
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-xs sm:text-sm lg:text-[13px] text-[#4B336D] placeholder-[#4B336D70] bg-[#ffffff] pl-4 focus:outline-none rounded-2xl w-full sm:flex-1 lg:w-[200px] h-10 sm:h-[41px]"
                />

                <button
                  className="text-white text-xs sm:text-sm lg:text-[13px] rounded-2xl font-semibold w-full sm:w-[91px] h-10 sm:h-[41px] shadow-md cursor-pointer sheen-effect"
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
            className="bg-[#FFFFFF90] w-full lg:w-1/2 p-6 sm:p-8 rounded-3xl lg:rounded-l-none flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-4"
            style={{
              backdropFilter: "blur(8.2px)",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="flex-1">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B336D] to-[#C2ACE2] text-2xl sm:text-3xl lg:text-[30px] font-bold leading-tight sm:leading-snug text-center lg:text-right">
                The singular destination for AEC excellence.
              </h2>

              {/* Mobile and Tablet Social Icons with Background */}
              <div className="lg:hidden flex justify-center items-center pt-4 sm:pt-0">
                <div className="relative w-full sm:w-[224px] h-20 sm:h-[70px] flex justify-center items-center">
                  {/* Background SVG Frame */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src="/footerframemobile.svg"
                      alt="footer frame"
                      width={224}
                      height={224}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Social icons on top of background */}
                  <div className="relative z-10 flex flex-row lg:flex-col gap-4 sm:gap-3">
                    <Image
                      src="/mail.svg"
                      alt="mail"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                    />
                    <Image
                      src="/linkdin.svg"
                      alt="linkedin"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                    />
                    <Image
                      src="/insta.svg"
                      alt="instagram"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                    />
                    <Image
                      src="/whatsapp.svg"
                      alt="whatsapp"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className=" flex  sm:flex-row  sm:items-start justify-center lg:justify-end gap-[8%] md:gap-[15%] sm:gap-8 lg:gap-16 pt-4 sm:pt-6">
                {footerLinks.map((section, idx) => (
                  <div key={idx} className="text-right">
                    <h3 className="text-xs sm:text-sm lg:text-[13px] font-semibold text-[#4B336D] pb-2 sm:pb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-[13px] font-medium text-[#705C8D]">
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
            </div>

            {/* Social Icons Section */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-full sm:w-auto h-16 sm:h-[224px] flex justify-center items-center">
                {/* Footer frame as background - Hidden on mobile, visible on sm and up */}
                <div className="hidden sm:block relative w-16 lg:w-[70px] h-full">
                  <Image
                    src="/footerframe.svg"
                    alt="footer frame"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Social icons */}
                <div className="flex sm:absolute flex-row sm:flex-col gap-3 sm:gap-2 lg:gap-0">
                  <Image
                    src="/mail.svg"
                    alt="mail"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src="/linkdin.svg"
                    alt="linkedin"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src="/insta.svg"
                    alt="instagram"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src="/whatsapp.svg"
                    alt="whatsapp"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform"
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
