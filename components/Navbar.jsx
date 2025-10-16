// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { useState } from "react";
// import { ArrowRight } from "lucide-react";

// const Navbar = () => {
//   const [showServices, setShowServices] = useState(false);
//   const [hoveredService, setHoveredService] = useState(null);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services", hasDropdown: true },
//     { name: "Projects", path: "/projects" },
//     { name: "Tech Stack", path: "/tech-stack" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const services = [
//     {
//       id: 1,
//       name: "Bim & Drafting",
//       href: "/services/bim-drafting",
//       bgColor: "#9BC1FF",
//       arrowColor: "#49689A",
//       color: "from-[#A8C8FF] to-[#6B9FFF]",
//       subServices: [
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//         "Bim & Drafting",
//       ],
//     },
//     {
//       id: 2,
//       name: "Technical business development",
//       href: "/services/technical-development",
//       bgColor: "#CFA6FF",
//       arrowColor: "#7F50B6",
//       color: "from-[#D4B8FF] to-[#B08FFF]",
//       subServices: [
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//         "Technical business development",
//       ],
//     },
//     {
//       id: 3,
//       name: "Digital Marketing & Branding",
//       href: "/services/digital-marketing",
//       bgColor: "#FFD47E",
//       arrowColor: "#8D723C",
//       color: "from-[#FFD4A8] to-[#FFB366]",
//       subServices: [
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//         "Digital Marketing & Branding",
//       ],
//     },
//   ];

//   const handleServiceClick = (path) => {
//     setShowServices(false);
//     setHoveredService(null);
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 px-[116px] pt-[35px]">
//       <div className="flex justify-between items-center p-4">
//         {/* Logo */}
//         <div className="w-[117px] h-[72px] bg-[#FFFFFF47] backdrop-blur-xl rounded-[15px] flex justify-center items-center">
//           <Link href="/">
//             <Image
//               src="/logo.svg"
//               alt="logo"
//               width={100}
//               height={100}
//               className="w-[86px] h-[55px] cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Menu Items */}
//         <div className="flex items-center justify-between gap-6 bg-[#FFFFFF47] backdrop-blur-xl py-2 rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10">
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => {
//                 if (item.hasDropdown) {
//                   setShowServices(true);
//                 }
//               }}
//               onMouseLeave={() => {
//                 if (item.hasDropdown) {
//                   setTimeout(() => {
//                     if (!document.querySelector(".dropdown-area:hover")) {
//                       setShowServices(false);
//                       setHoveredService(null);
//                     }
//                   }, 100);
//                 }
//               }}
//             >
//               {item.hasDropdown ? (
//                 <button className="relative py-1 px-4  cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#4B336D] rounded-full font-medium">
//                   {item.name}
//                 </button>
//               ) : (
//                 <Link
//                   href={item.path}
//                   className="relative py-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#4B336D] rounded-full font-medium inline-block"
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>

//         <Link
//           href="/get-a-quote"
//           scroll={false}
//           className="bg-[#FFFFFF47] backdrop-blur-xl rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10 py-3 cursor-pointer hover:bg-white transition-all duration-300"
//         >
//           Get A Quote
//         </Link>
//       </div>

//       {/* Services Dropdown */}
//       {showServices && (
//         <div
//           className="dropdown-area absolute top-[136px] -left-[18%] right-0 flex justify-center gap-8 px-4 sm:px-8 lg:px-[116px]"
//           onMouseLeave={() => {
//             setShowServices(false);
//             setHoveredService(null);
//           }}
//         >
//           {/* Left Panel - Service Categories */}
//           <div className="bg-[#EFF2FF40] backdrop-blur-xl rounded-[22px] p-4 border-[1px] border-white shadow-2xl w-full max-w-[320px] h-[230px]">
//             <div className="space-y-4">
//               {services.map((service) => (
//                 <Link
//                   href={service.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     backgroundColor: service.bgColor,
//                     boxShadow: "0px 4px 10.8px 0px #9BC1FF",
//                   }}
//                   key={service.id}
//                   onMouseEnter={() => setHoveredService(service)}
//                   onClick={() => {
//                     handleServiceClick(`/services/${service.id}`);
//                   }}
//                   className={`w-full text-left px-4 py-3 rounded-[25px] border-[1px] cursor-pointer border-white transition-all duration-300 flex items-center justify-between group ${
//                     hoveredService?.id === service.id
//                       ? `bg-gradient-to-r ${service.color} text-[#4B4B6B] shadow-lg scale-[1.02]`
//                       : "bg-white/50 text-[#4B336D] hover:bg-white/70"
//                   }`}
//                 >
//                   <span
//                     className={` text-[12px] text-[#49689A] ${
//                       hoveredService?.id === service.id ? "text-[#49689A]" : ""
//                     }`}
//                   >
//                     {service.name}
//                   </span>
//                   <div
//                     style={{
//                       boxShadow: "0px 4px 9.8px 0px #00000040",
//                     }}
//                     className={`w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-300 ${
//                       hoveredService?.id === service.id
//                         ? "bg-white shadow-md"
//                         : "bg-white/50 group-hover:bg-white"
//                     }`}
//                   >
//                     <ArrowRight
//                       style={{
//                         color: service.arrowColor,
//                       }}
//                       size={18}
//                       className="w-[24px] h-[24px]"
//                       strokeWidth={2.5}
//                     />
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right Panel - Sub Services - Only show when hoveredService exists */}
//           {hoveredService && (
//             <div
//               className={`bg-gradient-to-br ${hoveredService.color}  backdrop-blur-xl rounded-[30px] p-6 border border-white shadow-2xl w-full max-w-[550px] transition-all duration-300`}
//               style={{
//                 animation: "slideIn 0.3s ease-out",
//               }}
//             >
//               <div className="grid grid-cols-2 gap-3">
//                 {hoveredService.subServices.map((subService, index) => (
//                   <Link
//                     key={index}
//                     href={`/services/${hoveredService.id}/${index}`}
//                     onClick={() =>
//                       handleServiceClick(
//                         `/services/${hoveredService.id}/${index}`
//                       )
//                     }
//                     className="bg-[#DCE3FE] backdrop-blur-sm hover:bg-[#DCE3FE]/80 text-[#49689A] text-[12px]  px-3 py-2 rounded-[9px] text-center   transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/60 inline-block"
//                     style={{
//                       animation: `fadeInUp 0.3s ease-out ${index * 0.03}s both`,
//                       boxShadow: "0px 4px 6.6px 0px #00000040",
//                     }}
//                   >
//                     {subService}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Navbar;


"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Projects", path: "/projects" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      id: 1,
      name: "Bim & Drafting",
      href: "/services/bim-drafting",
      bgColor: "#9BC1FF",
      arrowColor: "#49689A",
      color: "from-[#A8C8FF] to-[#6B9FFF]",
      subServices: [
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
        "Bim & Drafting",
      ],
    },
    {
      id: 2,
      name: "Technical business development",
      href: "/services/technical-development",
      bgColor: "#CFA6FF",
      arrowColor: "#7F50B6",
      color: "from-[#D4B8FF] to-[#B08FFF]",
      subServices: [
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
        "Technical business development",
      ],
    },
    {
      id: 3,
      name: "Digital Marketing & Branding",
      href: "/services/digital-marketing",
      bgColor: "#FFD47E",
      arrowColor: "#8D723C",
      color: "from-[#FFD4A8] to-[#FFB366]",
      subServices: [
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
        "Digital Marketing & Branding",
      ],
    },
  ];

  const handleServiceClick = (path) => {
    setShowServices(false);
    setHoveredService(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-[116px] pt-[35px]">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="w-[117px] h-[72px] bg-[#FFFFFF47] backdrop-blur-xl rounded-[15px] flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-[86px] h-[55px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex items-center justify-between gap-6 bg-[#FFFFFF47] backdrop-blur-xl py-2 rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                if (item.hasDropdown) {
                  setShowServices(true);
                }
              }}
              onMouseLeave={() => {
                if (item.hasDropdown) {
                  setTimeout(() => {
                    if (!document.querySelector(".dropdown-area:hover")) {
                      setShowServices(false);
                      setHoveredService(null);
                    }
                  }, 100);
                }
              }}
            >
              {item.hasDropdown ? (
                <button className="relative py-1 px-4  cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#4B336D] rounded-full font-medium">
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.path}
                  className="relative py-1 px-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#4B336D] rounded-full font-medium inline-block"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/get-a-quote"
          scroll={false}
          className="bg-[#FFFFFF47] backdrop-blur-xl rounded-[80px] border border-white text-[20px] text-[#4B336D] px-10 py-3 cursor-pointer hover:bg-white transition-all duration-300"
        >
          Get A Quote
        </Link>
      </div>

      {/* Services Dropdown */}
      {showServices && (
        <div
          className="dropdown-area fixed left-[30%] top-[130px] flex gap-4 z-40"
          style={{ width: "max-content" }}
          onMouseLeave={() => {
            setShowServices(false);
            setHoveredService(null);
          }}
        >
          {/* ▼ Top Arrow below Services button */}
          {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white/70"></div> */}

          {/* Left Panel - Fixed width */}
          <div
            className="relative bg-[#EFF2FF40] backdrop-blur-xl rounded-[22px] p-4 border border-white shadow-2xl w-[320px] h-[230px] transition-all duration-300 flex-shrink-0"
          >
            <div className="space-y-4">
              {services.map((service) => (
                <Link
                  href={service.href}
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service)}
                  onClick={() => handleServiceClick(service.href)}
                  style={{
                    backgroundColor: service.bgColor,
                    boxShadow: "0px 4px 10.8px 0px #9BC1FF",
                  }}
                  className={`w-full text-left px-4 py-3 rounded-[25px] border border-white transition-all duration-300 flex items-center justify-between group ${
                    hoveredService?.id === service.id
                      ? `bg-gradient-to-r ${service.color} text-[#4B4B6B] shadow-lg scale-[1.02]`
                      : "bg-white/50 text-[#4B336D] hover:bg-white/70"
                  }`}
                >
                  <span className="text-[12px] text-[#49689A]">
                    {service.name}
                  </span>
                  <div
                    style={{ boxShadow: "0px 4px 9.8px 0px #00000040" }}
                    className={`w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredService?.id === service.id
                        ? "bg-white shadow-md"
                        : "bg-white/50 group-hover:bg-white"
                    }`}
                  >
                    <ArrowRight
                      style={{ color: service.arrowColor }}
                      size={18}
                      className="w-[24px] h-[24px]"
                      strokeWidth={2.5}
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* ▶️ Arrow for right panel */}
            {/* {hoveredService && (
              <div className="absolute top-1/2 -right-[10px] -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-white/80"></div>
            )} */}
          </div>

          {/* Right Panel - Fixed position beside left panel */}
          {hoveredService && (
            <div
              className={`bg-gradient-to-br ${hoveredService.color} backdrop-blur-xl rounded-[30px] p-6 border border-white shadow-2xl w-[500px] transition-all duration-300 flex-shrink-0`}
              style={{
                animation: "fadeInRight 0.3s ease-out",
              }}
            >
              {/* Arrow from left to right */}
              {/* <div className="absolute top-1/2 -left-[10px] -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/80"></div> */}

              <div className="grid grid-cols-2 gap-3">
                {hoveredService.subServices.map((subService, index) => (
                  <Link
                    key={index}
                    href={`/services/${hoveredService.id}/${index}`}
                    onClick={() =>
                      handleServiceClick(
                        `/services/${hoveredService.id}/${index}`
                      )
                    }
                    className="bg-[#DCE3FE] backdrop-blur-sm hover:bg-[#DCE3FE]/80 text-[#49689A] text-[12px] px-3 py-2 rounded-[9px] text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/60 inline-block"
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.03}s both`,
                      boxShadow: "0px 4px 6.6px 0px #00000040",
                    }}
                  >
                    {subService}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;