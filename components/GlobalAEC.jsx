"use client";
import { useState } from "react";
import Image from "next/image";

export default function GlobalAEC() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: "/g11.svg",
      title: "Real Estate & Property Development",
      description1:
        "Empowering developers and real estate firms to accelerate every phase of their projects through BIM visualization, integrated project data, and targeted AEC marketing.",
      description2:
        "From feasibility to sales, we deliver digital solutions for value-driven construction and investment.",
    },
    {
      id: 2,
      icon: "/g22.svg",
      title: "Infrastructure & Urban Planning",
      description1:
        "We partner with engineering consultancies and government bodies to digitize infrastructure and urban planning. ",
      description2:
        "Our BIM coordination, clash detection, and process automation expertise streamline design documentation and deliver scalable solutions for large-scale public works.",
    },
    {
      id: 3,
      icon: "/g33.svg",
      title: "Commercial & Industrial Construction",
      description1:
        "Supporting contractors, EPC firms, and builders in implementing BIM for precise project controls, efficient site coordination, and cost predictability at global construction sites. ",
      description2:
        "We help deliver complex commercial and industrial projects on time and on budget.",
    },
    {
      id: 4,
      icon: "/g44.svg",
      title: "Architecture & Interior Design Studios",
      description1:
        "Empowering architecture and interior design studios with Revit modeling, BIM documentation, and creative AEC digital marketing.",
      description2:
        "Strengthen your design innovation and brand visibility with tech-enabled, client-winning strategies.",
    },
    {
      id: 5,
      icon: "/g55.svg",
      title: "Manufacturing & Building Product Companies",
      description1:
        "Helping building product manufacturers and suppliers connect with specifiers, architects, and engineers worldwide through ",
      description2:
        "BIM library integration, digital catalogs, and targeted AEC marketing campaigns.",
    },
    {
      id: 6,
      icon: "/g66.svg",
      title: "Smart Cities & Sustainable Design Firms",
      description1:
        "Collaborating with sustainability-driven AEC brands, planners, and smart city innovators to leverage green BIM, data analytics, and advanced urban modeling.",
      description2:
        "Build tomorrow connected and efficient environments, one smart project at a time.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="gradient-text font-semibold text-center pt-10 md:pt-0  px-4 sm:px-8 md:px-[15%] lg:px-[20%] text-[20px] sm:text-[24px] lg:text-[29px] text-[#4B336D]">
          Industries and Global Markets We Serve
        </h1>
      </div>
      <div className="relative overflow-hidden pt-8 sm:pt-0 p-4 sm:p-8 lg:p-12 xl:p-16">
        {/* Blur background - hidden on mobile/tablet, visible on desktop */}
        <div className="hidden lg:block absolute -right-64 -top-20">
          <Image
            src="/blur.svg"
            alt="blur"
            width={1000}
            height={1000}
            className="w-[1000px] h-[100%]"
          />
        </div>
        <div className="max-w-6xl mx-auto relative">
          {/* Grid Container with Glass Effect */}
          <div
            className="backdrop-blur-md rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-4 sm:p-6 lg:p-12 xl:px-16 xl:pt-16 xl:py-4 border-[1px] border-white flex items-center justify-center"
            style={{
              background:
                "linear-gradient(124.64deg, #ABBDFF 29.57%, #C9D5FF 112.16%)",
              boxShadow: "0px 3.5px 21.8px 0px #020FFF69",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-7 sm:pt-0 sm:gap-8 lg:gap-12 -mt-8 sm:-mt-10 lg:-mt-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredCard === service.id;

                return (
                  <div
                    key={service.id}
                    className="relative flex justify-center"
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Icon Circle - Positioned Above Card */}
                    <div className="absolute -top-8 sm:-top-10 lg:-top-12 left-[50%] transform -translate-x-1/2 z-10 sm:mt-14 lg:mt-0">
                      <div className="relative">
                        {/* Glow Effect */}
                        <div
                          className={`rounded-full blur-xl transition-all duration-500 ${
                            isHovered ? "opacity-60 scale-125" : "opacity-40"
                          }`}
                        ></div>

                        <div>
                          <Image
                            src={Icon}
                            alt={service.title}
                            width={1000}
                            height={1000}
                            className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[100px] lg:h-[100px] object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="relative w-full max-w-[280px] sm:w-[246px] sm:mt-10 lg:mt-0 lg:w-[346px] backdrop-blur-sm rounded-[12px] pt-8 sm:pt-10  lg:py-10 shadow-xl border border-white transition-all duration-500"
                      style={{
                        background:
                          "linear-gradient(180deg, #DCE3FF 0%, #C4D1FF 100%)",
                      }}
                    >
                      <div className="relative min-h-[260px] sm:min-h-[280px] lg:h-[295px] pt-4 sm:pt-5">
                        {/* Title */}
                        <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold gradient-text text-center flex items-center justify-center bg-[#D9E2FF] border-[1px] border-white py-2 px-2">
                          {service.title}
                        </h3>

                        {/* Description 1 */}
                        <div className="p-4">
                          <p className="text-[#000000] text-[12px] sm:text-[13px] lg:text-[14px] mb-3 sm:mb-4">
                            {service.description1}
                          </p>

                          {/* Description 2 */}
                          <p className="text-[#000000] text-[12px] sm:text-[13px] lg:text-[14px]">
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
