import React from "react";
import SubServiceTemplate from "@/components/Services/SubServices/SubServiceTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const BimModelling = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Modelling & Drafting",
    heading:
      "Delivering precision and performance through intelligent BIM models",
    desc1:
      "At AEC Horizon, we deliver comprehensive BIM modeling and drafting services across all Levels of Development (LOD 100-500). Our team supports architects, engineers, contractors, and facility managers with accurate 3D models and documentation that streamline the design-to-construction process.",
    desc2:
      "Our BIM specialists develop construction-ready and as-built models that enhance coordination, minimize rework, and improve decision-making throughout the building life cycle.",

    whatWeOffer: [
      {
        id: 1,
        title: "LOD 100-200 – Conceptual & Design Models",
        desc: "Early-stage BIM models built with precise massing, space allocation, and schematic layouts, ideal for concept design and coordination between architecture and engineering teams.",
      },
      {
        id: 2,
        title: "LOD 300 – Detailed Design & Coordination",
        desc: "Highly detailed 3D BIM models with accurate geometry and spatial relationships for MEP, structural, and architectural systems. Ensures seamless interdisciplinary coordination across all disciplines.",
      },
      {
        id: 3,
        title: "LOD 400 – Fabrication & Construction Models",
        desc: "Advanced BIM construction models that include fabrication-level details for shop drawings, on-site coordination, and quantity take-offs, supporting efficient execution and clash-free delivery.",
      },
      {
        id: 4,
        title: "LOD 500 – As-built & Facility Management Models",
        desc: "Fully verified as-built BIM models representing the final construction condition. Ideal for facility management, maintenance planning, and future renovation projects.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architectural, Structural and MEP BIM Modelling",
      },
      {
        id: 2,
        desc: "2D Drafting to 3D model conversion",
      },
      {
        id: 3,
        desc: "Clash Detection & Coordination",
      },
      {
        id: 4,
        desc: "Construction Documentation",
      },
      {
        id: 5,
        desc: "Quantity Take-offs (BOQ Generation)",
      },
      {
        id: 6,
        desc: "Scan to BIM & As-Built Modelling",
      },
      {
        id: 7,
        desc: "Revit family creation & BIM content development",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Revit & Navisworks Experts",
        desc: "Our BIM specialists use the latest Autodesk Revit and Navisworks tools to deliver precise, coordinated, and constructible models for global AEC clients.",
      },
      {
        id: 2,
        title: "Quality Driven BIM Approach",
        desc: "Each model undergoes a strict QA/QC process, ensuring compliance, consistency, and alignment with project standards.",
      },
      {
        id: 3,
        title: "End-to-End BIM Support",
        desc: "From concept design to facility management, our BIM outsourcing services offer a single source of truth for all stakeholders.",
      },
      {
        id: 4,
        title: "Cost & Time Optimisation",
        desc: "With clash-free coordination, MEP BIM modeling, and automated quantity take-offs, we help clients reduce rework, delays, and overall costs.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <span>
              Minimized rework and RFIs through accurate{" "}
              <strong>BIM coordination</strong>
            </span>
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <span>
              Faster project delivery with efficient
              <strong>BIM modeling </strong>workflows
            </span>
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
              <span>
              Seamless collaboration between{" "}
              <strong>architects, engineers, and contractors</strong>
            </span>
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <span>
              Precise quantity estimation using <strong>5D BIM</strong> and{" "}
              <strong>Revit</strong> data
            </span>
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            <span>
              Improved facility management with detailed{" "}
              <strong>as-built BIM models</strong>
            </span>
          </>
        ),
      },
    ],
    imagePath: "/s11.svg",
    bgColor: "from-[#A8C8FF] to-[#6B9FFF]",
    features: [
      {
        icon: "/bim1.svg",
        title: "LOD 100-200",
        description: "Conceptual and schematic design models",
      },
      {
        icon: "/bim2.svg",
        title: "LOD 300-400",
        description: "Detailed design and construction documentation",
      },
      {
        icon: "/bim3.svg",
        title: "LOD 500",
        description: "As-built and facility management models",
      },
      {
        icon: "/bim4.svg",
        title: "LOD 600-700",
        description: "As-built and facility management models",
      },
    ],
  };

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.modeling} />;
};

export default BimModelling;
