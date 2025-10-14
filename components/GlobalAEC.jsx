"use client";
import { useState } from "react";
import {
  Wrench,
  Settings,
  Building2,
  Rocket,
  Globe2,
  Home,
} from "lucide-react";
import Image from "next/image";

export default function GlobalAEC() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: "/g11.svg",
      title: "Contractors & Builders",
      description1:
        "We understand the unique needs of each discipline and tailor our BIM, marketing, and business solutions accordingly.",
      description2:
        "Our technical expertise helps AEC professionals collaborate, innovate, and scale efficiently.",
    },
    {
      id: 2,
      icon: "/g22.svg",
      title: "Engineering Consultants",
      description1:
        "AEC Horizon delivers specialized solutions that enhance technical workflows and business growth worldwide.",
      description2:
        "We empower AEC leaders to operate smarter and expand their global reach.",
    },
    {
      id: 3,
      icon: "/g33.svg",
      title: "Real Estate Developers",
      description1:
        "Each sector benefits from our integrated approach to BIM, marketing, and business development.",
      description2:
        "AEC Horizon bridges technology and strategy to help AEC firms thrive worldwide.",
    },
    {
      id: 4,
      icon: "/g44.svg",
      title: "AEC Entrepreneurs & Startups",
      description1:
        "Our experts integrate BIM workflows, marketing strategies, and growth systems for scalability.",
      description2:
        "AEC Horizon helps entrepreneurs build strong, future-ready AEC ventures.",
    },
    {
      id: 5,
      icon: "/g55.svg",
      title: "Global AEC Enterprises & Design Build Firms",
      description1:
        "We provide cross-discipline BIM support, process automation, and digital expansion strategies.",
      description2:
        "Our technical experts help multinational AEC firms collaborate seamlessly across regions.",
    },
    {
      id: 6,
      icon: "/g66.svg",
      title: "Multinational Architectural Firms",
      description1:
        "We support architecture firms with precision BIM modeling, CAD documentation, and design visualization.",
      description2:
        "Our experts enhance efficiency from concept to construction, while strengthening brand identity online.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="gradient-text font-semibold px-[20%] text-[29px] text-[#4B336D] ">
          Global AEC markets that we serve:
        </h1>
      </div>
      <div className="  relative overflow-hidden p-8 sm:p-12 lg:p-16">

        <div className="absolute -right-64 -top-20">
            <Image src="/blur.svg" alt="blur" width={1000} height={1000} className="w-[1000px] h-[100%] " />
        </div>
        <div className="max-w-5xl mx-auto relative ">
          {/* Grid Container with Glass Effect */}
          <div
            className="backdrop-blur-md rounded-[28px] p-8 sm:p-12 lg:px-16 lg:pt-16 lg:py-4   border-[1px] border-white flex items-center justify-center"
            style={{
              background:
                "linear-gradient(124.64deg, #ABBDFF 29.57%, #C9D5FF 112.16%)",
              boxShadow: "0px 3.5px 21.8px 0px #020FFF69",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 -mt-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredCard === service.id;

                return (
                  <div
                    key={service.id}
                    className="relative"
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Icon Circle - Positioned Above Card */}
                    <div className="absolute -top-12 left-[50%] transform -translate-x-1/2 z-10">
                      <div className="relative">
                        {/* Glow Effect */}
                        <div
                          className={`  rounded-full blur-xl transition-all duration-500 ${
                            isHovered ? "opacity-60 scale-125" : "opacity-40"
                          }`}
                        ></div>

                        <div>
                          <Image
                            src={Icon}
                            alt={service.title}
                            width={1000}
                            height={1000}
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="relative w-[246px] backdrop-blur-sm rounded-[12px] pt-10 shadow-xl border border-white transition-all duration-500 "
                      style={{
                        background:
                          "linear-gradient(180deg, #DCE3FF 0%, #C4D1FF 100%)",
                      }}
                    >
                      <div className="relative h-[295px] pt-5 ">
                        {/* Title */}
                        <h3
                          className="text-[16px] font-semibold gradient-text text-center flex items-center justify-center bg-[#D9E2FF] border-[1px] border-white"
                          style={{}}
                        >
                          {service.title}
                        </h3>

                        {/* Description 1 */}
                        <div className="p-5">
                          <p className="text-[#000000] text-[14px]  mb-4">
                            {service.description1}
                          </p>

                          {/* Description 2 */}
                          <p className="text-[#000000] text-[14px] ">
                            {service.description2}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Decorative Line */}
                      <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#7B8FB8] to-transparent transition-all duration-500 ${
                          isHovered ? "w-4/5 opacity-100" : "w-0 opacity-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }

          @keyframes floatDelayed {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-30px) translateX(-15px);
            }
          }

          @keyframes floatSlow {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-15px) translateX(20px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: floatDelayed 8s ease-in-out infinite;
            animation-delay: 1s;
          }

          .animate-float-slow {
            animation: floatSlow 10s ease-in-out infinite;
            animation-delay: 2s;
          }
        `}</style>
      </div>
    </>
  );
}
