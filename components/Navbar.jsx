"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const [showResources, setShowResources] = useState(false);
  const [hoveredResource, setHoveredResource] = useState(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Resources", path: "/", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      id: 1,
      name: "Bim & Drafting",
      href: "/services/bim-drafting",
      bgColor: "#A6B6FD",
      arrowColor: "#49689A",
      color: "from-[#A8C8FF] to-[#6B9FFF]",
      subServices: [
        "BIM Modelling & Drafting (LOD 100-500)",
        "Revit Family Creation",
        "BIM Template & Content Creation",
        "BIM Automation",
        "BIM Coordination & Clash Detection",
        "MEPF Coordination",
        "Scan to BIM",
        "Construction Documention Set/ As-built drawings",
        "PDF/CAD to BIM",
        "Structural 3D Modeling",
      ],
    },
    {
      id: 2,
      name: "Technical business development",
      href: "/services/technical-development",
      bgColor: "#B9A6FF",
      arrowColor: "#7F50B6",
      color: "from-[#D4B8FF] to-[#B08FFF]",
      subServices: [
        "Go to Market Strategy for AEC Services",
        "Strategic Partnerships",
        "Proposal and RFP Support",
        "Sales Enablement Tools",
        "Lead Generation & CRM Setup",
        "Branding & Positioning ",
        "Proposal Development & Estimation",
        "Client Engagement Strategies",
        "Market Research & Analysis",
        "Digital Transformation Consulting",
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
        "SEO for Construction & BIM",
        "Marketing Presentation",
        "Project Planning & Scheduling",
        "Social Media Marketing",
        "BIM Content Creation",
        "Email Campaigns, Pitch decks",
      ],
    },
  ];

  const resources = [
    {
      id: 1,
      name: "Projects",
      href: "/projects",
      bgColor: "#CED8FF",
      color: "from-[#A8C8FF] to-[#6B9FFF]",
    },
    {
      id: 2,
      name: "Case Studies",
      href: "/case-studies",
      bgColor: "#CED8FF",
      color: "from-[#D4B8FF] to-[#B08FFF]",
    },
    {
      id: 3,
      name: "Blogs",
      href: "/blog",
      bgColor: "#CED8FF",
      color: "from-[#FFD4A8] to-[#FFB366]",
    },
  ];

  const handleServiceClick = (path) => {
    setShowServices(false);
    setHoveredService(null);
  };
  const handleResourceClick = (path) => {
    setShowResources(false);
    setHoveredResource(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-[116px] pt-[25px]">
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
                  if (item.name === "Services") {
                    setShowServices(true);
                  } else if (item.name === "Resources") {
                    setShowResources(true);
                  }
                }
              }}
              onMouseLeave={() => {
                if (item.hasDropdown) {
                  setTimeout(() => {
                    if (!document.querySelector(".dropdown-area:hover")) {
                      if (item.name === "Services") {
                        setShowServices(false);
                        setHoveredService(null);
                      } else if (item.name === "Resources") {
                        setShowResources(false);
                        setHoveredResource(null);
                      }
                    }
                  }, 100);
                }
              }}
            >
              {item.hasDropdown ? (
                <button
                  className={`relative py-1 px-4 cursor-pointer transition-all duration-300 text-[17px] ease-in-out rounded-full font-medium ${
                    (item.name === "Services" && showServices) ||
                    (item.name === "Resources" && showResources)
                      ? "bg-white text-[#4B336D]"
                      : "hover:bg-white hover:text-[#4B336D]"
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.path}
                  className="relative py-1 px-4 cursor-pointer transition-all duration-300 text-[17px] ease-in-out hover:bg-white hover:text-[#4B336D] rounded-full font-medium inline-block"
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
          className="bg-[#FFFFFF47] backdrop-blur-xl rounded-[80px] border border-white text-[17px] text-[#4B336D] px-10 py-3 cursor-pointer hover:bg-white transition-all duration-300"
        >
          Get A Quote
        </Link>
      </div>

      {/* Services Dropdown */}
      {showServices && (
        <div
          className="dropdown-area fixed left-[30%] top-[120px] flex gap-4 z-40"
          style={{ width: "max-content" }}
          onMouseLeave={() => {
            setShowServices(false);
            setHoveredService(null);
          }}
        >
          {/* ▼ Top Arrow below Services button */}
          {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white/70"></div> */}

          {/* Left Panel - Fixed width */}
          <div className="relative bg-[#EFF2FF40] backdrop-blur-xl rounded-[22px] p-4 border border-white shadow-2xl w-[320px] h-[230px] transition-all duration-300 flex-shrink-0">
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
              className={`bg-gradient-to-br  ${hoveredService.name === "Digital Marketing & Branding" ? "h-[175px] mt-28" : ""} ${hoveredService.color} p-6 backdrop-blur-xl rounded-[22px]  border border-white shadow-2xl w-[500px] transition-all duration-300 flex-shrink-0`}
              style={{
                animation: "fadeInRight 0.3s ease-out",
               
              }}
            >
              {/* Arrow from left to right */}
              {/* <div className="absolute top-1/2 -left-[10px] -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/80"></div> */}

              <div className="grid grid-cols-2 gap-3 ">
                {hoveredService.subServices.map((subService, index) => (
                  <Link
                    key={index}
                    href={`/services/${hoveredService.id}/${index}`}
                    onClick={() =>
                      handleServiceClick(
                        `/services/${hoveredService.id}/${index}`
                      )
                    }
                    className="bg-[#DCE3FE] backdrop-blur-sm hover:bg-[#DCE3FE]/80 text-[#49689A] font-semibold text-[10px] px-3 py-2 rounded-[9px]  transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/60 inline-block"
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

      {showResources && (
        <div
          className="dropdown-area fixed left-[51%] top-[120px] flex gap-4 z-40"
          style={{ width: "max-content" }}
          onMouseLeave={() => {
            setShowResources(false);
            setHoveredResource(null);
          }}
        >
          {/* ▼ Top Arrow below Services button */}
          {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white/70"></div> */}

          {/* Left Panel - Fixed width */}
          <div className="relative bg-[#EFF2FF40] backdrop-blur-xl rounded-[22px] p-4 border border-white shadow-2xl w-[290px] h-[200px] transition-all duration-300 flex-shrink-0">
            <div className="space-y-4">
              {resources.map((resource) => (
                <Link
                  href={resource.href}
                  key={resource.id}
                  onMouseEnter={() => setHoveredResource(resource)}
                  onClick={() => handleResourceClick(resource.href)}
                  style={{
                    backgroundColor: resource.bgColor,
                    boxShadow: "0px 4px 10.8px 0px #9BC1FF",
                  }}
                  className={`w-full text-center px-4 py-3 rounded-[25px] border border-white transition-all duration-300 flex items-center justify-center group ${
                    hoveredResource?.id === resource.id
                      ? `bg-gradient-to-r ${resource.color} text-[#4B4B6B] shadow-lg scale-[1.02]`
                      : "bg-white/50 text-[#4B336D] hover:bg-white/70"
                  }`}
                >
                  <p className="text-[12px] text-[#4B336D] text-center">
                    {resource.name}
                  </p>
                  {/* <div
                    style={{ boxShadow: "0px 4px 9.8px 0px #00000040" }}
                    className={`w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredResource?.id === resource.id
                        ? "bg-white shadow-md"
                        : "bg-white/50 group-hover:bg-white"
                    }`}
                  >
                    <ArrowRight
                      style={{ color: resource.arrowColor }}
                      size={18}
                      className="w-[24px] h-[24px]"
                      strokeWidth={2.5}
                    />
                  </div> */}
                </Link>
              ))}
            </div>

            {/* ▶️ Arrow for right panel */}
            {/* {hoveredService && (
              <div className="absolute top-1/2 -right-[10px] -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-white/80"></div>
            )} */}
          </div>
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
