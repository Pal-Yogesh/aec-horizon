
"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    slug: "vantage-point-towers",
    title: "Vantage Point Towers",
    category: "Commercial",
    desc: "We delivered full architectural BIM modeling and MEP coordination for this 40-story landmark. Our clash detection saved $200k in potential rework.",
    img: "/b1.svg",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "skyline-heights",
    title: "Skyline Heights",
    category: "Commercial",
    desc: "A 50-story commercial complex where BIM coordination helped streamline construction and reduce overall costs by 15%.",
    img: "/b2.svg",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "green-living-apartments",
    title: "Green Living Apartments",
    category: "Residential",
    desc: "Comprehensive BIM and MEP modeling for sustainable living spaces with zero-clash detection.",
    img: "/b3.svg",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "fusion-industrial-park",
    title: "Fusion Industrial Park",
    category: "Industrial",
    desc: "Delivered detailed MEP coordination and 3D BIM modeling for industrial-grade facilities.",
    img: "/b4.svg",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "techno-valley-plaza",
    title: "Techno Valley Plaza",
    category: "Commercial",
    desc: "Architectural and structural BIM coordination for a cutting-edge IT park.",
    img: "/b1.svg",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "bluewave-hotel",
    title: "BlueWave Hotel",
    category: "Hospitality",
    desc: "Executed end-to-end BIM coordination and clash detection for luxury hospitality construction.",
    img: "/b2.svg",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "lakeside-residences",
    title: "Lakeside Residences",
    category: "Residential",
    desc: "BIM coordination for luxury lake-facing homes with advanced sustainability integrations.",
    img: "/b3.svg",
    content: [
      {
        heading: "Project Overview",
        items: [
          "Luxury residential development featuring lake views and sustainable design principles.",
          "Advanced BIM coordination ensuring seamless integration of all building systems.",
        ],
      },
      {
        heading: "Sustainability Features",
        items: [
          "Energy-efficient HVAC systems modeled and coordinated through BIM.",
          "Rainwater harvesting and solar panel integration planned using 3D models.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "solar-tech-factory",
    title: "Solar Tech Factory",
    category: "Industrial",
    desc: "3D BIM modeling for an energy-efficient solar panel production facility.",
    img: "/b4.svg",
    content: [
      {
        heading: "Facility Design",
        items: [
          "Complete 3D BIM modeling for industrial manufacturing facility.",
          "MEP coordination for specialized production equipment and clean room environments.",
        ],
      },
      {
        heading: "Energy Efficiency",
        items: [
          "Self-powered facility design with integrated solar systems.",
          "Advanced thermal modeling for optimal energy performance.",
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "the-horizon-complex",
    title: "The Horizon Complex",
    category: "Commercial",
    desc: "Detailed MEP and structural coordination for a smart commercial hub.",
    img: "/b2.svg",
    content: [
      {
        heading: "Smart Building Integration",
        items: [
          "BIM-enabled smart building systems for automated climate control and security.",
          "Integrated IoT sensors and building management systems modeled in BIM.",
        ],
      },
      {
        heading: "Structural Coordination",
        items: [
          "Complex structural analysis and coordination for multi-use commercial space.",
          "Advanced clash detection preventing construction delays and cost overruns.",
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "urban-suites",
    title: "Urban Suites",
    category: "Hospitality",
    desc: "BIM implementation for seamless design-to-construction process in urban hospitality.",
    img: "/b1.svg",
    content: [
      {
        heading: "Design Excellence",
        items: [
          "Boutique hotel design with detailed BIM models for all architectural elements.",
          "Custom millwork and finishes coordinated through detailed 3D models.",
        ],
      },
      {
        heading: "Construction Coordination",
        items: [
          "Seamless handoff from design to construction using BIM coordination.",
          "Real-time collaboration between architects, engineers, and contractors.",
        ],
      },
    ],
  },
  {
    id: 11,
    slug: "skyview-apartments",
    title: "Skyview Apartments",
    category: "Residential",
    desc: "End-to-end BIM execution for premium high-rise apartments.",
    img: "/b3.svg",
    content: [
      {
        heading: "High-Rise Coordination",
        items: [
          "Complete BIM coordination for 30+ story residential tower.",
          "Advanced MEP systems coordination across all residential units.",
        ],
      },
      {
        heading: "Premium Amenities",
        items: [
          "Rooftop amenity spaces and common areas fully modeled and coordinated.",
          "Detailed interior fit-out coordination for luxury residential units.",
        ],
      },
    ],
  },
  {
    id: 12,
    slug: "metro-logistics-park",
    title: "Metro Logistics Park",
    category: "Industrial",
    desc: "Delivered MEP and architectural BIM solutions for industrial warehousing.",
    img: "/b4.svg",
    content: [
      {
        heading: "Warehouse Design",
        items: [
          "Large-scale warehouse and logistics facility with optimized layout through BIM.",
          "Automated material handling systems coordinated in 3D models.",
        ],
      },
      {
        heading: "Infrastructure Coordination",
        items: [
          "Heavy-duty MEP systems for industrial operations fully coordinated.",
          "Loading dock and transportation infrastructure planned using BIM.",
        ],
      },
    ],
  },
];

export default function ProjectInnerPage() {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  if (!project) return <p className="p-10">Project not found</p>;

  return (
    <div className="  w-full pb-20">
      <div className="pt-40 px-[15%] ">
        <div className="flex justify-center items-center pt-16">
          <span className="gradient-text font-bold text-[40px] text-center">
            Projects
          </span>
        </div>

        <div className="mt-10 flex justify-center items-center flex-col  space-y-5">
          <div
            className="border-[2px] rounded-[15px] w-[105px] text-center py-1 font-semibold text-[12px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            }}
          >
            <p className="gradient-text-about">{project.category}</p>
          </div>
          <h1 className="text-[30px] text-center font-bold gradient-text w-[550px]">
            {project.title}
          </h1>
          <div
            className="border-[2px] rounded-[30px] w-[340px] text-center py-2 font-semibold text-[13px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            }}
          >
            <p className="gradient-text-about">
              22nd January | 2:32 am | AEC Horizon
            </p>
          </div>
          <div
            className="max-w-7xl mt-12 bg-[#FFFFFF70] w-full h-[588px] rounded-[58px] border-[4px] border-white flex justify-center items-center"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <Image
              src={project.img}
              width={800}
              height={400}
              alt={project.title}
              className="rounded-lg my-6"
            />
          </div>

          {/* Main Content Section */}
          <div className="flex mt-20 space-x-12">
            {/* INDEX */}
            <div
              className="w-[355px] bg-[#FFFFFF70] border-[2px] border-white rounded-[58px] p-4"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <div className="flex justify-center items-center">
                <div
                  className="gradient-text-about mb-12   bg-[#FFFFFF] font-bold text-[20px] w-[121px] rounded-[58px] text-center p-2"
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                  INDEX
                </div>
              </div>
              {project.content.map((c, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedContentIndex(index)}
                  className={`text-[20px] cursor-pointer mb-6 p-2  rounded-[58px] text-center ${
                    selectedContentIndex === index
                      ? "bg-[#FFFFFF44] text-[#4B336D]"
                      : "text-[#88799C]"
                  } hover:bg-white hover:text-[#4B336D]`}
                >
                  {c.heading}
                </div>
              ))}
            </div>

            {/* Selected Content Display */}
            <div
              className="flex-1 text-[#4B336D]  "
              //   style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <h2 className=" mb-5 text-[24px] font-bold">
                {project.content[selectedContentIndex].heading}
              </h2>
              <ul className="list-disc  text-[19px]  pl-6">
                {project.content[selectedContentIndex].items.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
