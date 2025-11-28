import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "../../FAQ/FaqData";

const RevitFamily = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Revit Family Creation Services",
    heading: "Custom Revit Family Creation for Smarter BIM Workflows",
    desc1: (
      <span>
        At AEC Horizon, we deliver{" "}
        custom Revit family creation services that form the
        foundation of efficient and intelligent BIM workflows.
      </span>
    ),
    desc2: (
      <>
        <span>
          Our Revit experts create high-quality, parametric,
          and manufacturer-specific Revit families tailored to your firm design
          standards, ensuring seamless integration across{" "}
          architectural, structural, and MEP BIM models.
        </span>
        <br />
        <span>
          Whether your projects are based in Europe, the{" "}
          Middle East, or the USA, our precise{" "}
          Revit BIM services enhance productivity, improve
          collaboration, and maintain consistency across all phases of design
          and construction.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Custom Revit family creation",
        desc: " From generic components to detailed manufacturer-specific models, we develop accurate, performance-optimized Revit families aligned with project geometry and functionality.",
      },
      {
        id: 2,
        title: "Parametric BIM Modelling",
        desc: (
          <>
            <p>
              Intelligent, adaptable Revit families that automatically adjust to
              design variations, maintaining accuracy throughout your{" "}
              BIM models.
            </p>
          </>
        ),
      },
      {
        id: 3,
        title: "Revit family standardisation:",
        desc: (
          <>
            <p>
              Establishing naming conventions, category structures, and shared
              parameters for consistent BIM coordination across
              large-scale projects.
            </p>
          </>
        ),
      },
      {
        id: 4,
        title: "Product library development",
        desc: (
          <>
            <p>
              Comprehensive Revit family libraries designed for{" "}
              architects, engineers, and product manufacturers,
              promoting design efficiency and reuse.
            </p>
          </>
        ),
      },
      {
        id: 5,
        title: "Family Conversion & Optimisation",
        desc: (
          <>
            <p>
              Upgrading legacy CAD blocks and outdated content
              into fully functional, Revit-compatible{" "}
              BIM components.
            </p>
          </>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architectural families (doors, windows, furniture and fixtures)",
      },
      {
        id: 2,
        desc: "Structural families (beams, columns, foundations, rebar systems)",
      },
      {
        id: 3,
        desc: "MEP families (HVAC units, lighting fixtures, plumbing systems, panels)",
      },
      {
        id: 4,
        desc: "Annotation families (tags, symbols, title blocks)",
      },
      {
        id: 5,
        desc: "Manufacturer specific content for BIM object libraries",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Parametric Accuracy",
        desc: (
          <>
            <span>
              Each Revit family is designed with intelligent
              parameters for geometry, materials, and visibility, ensuring
              models adapt seamlessly to project-specific requirements.
            </span>
          </>
        ),
      },
      {
        id: 2,
        title: "High Performance Revit Families",
        desc: (
          <span>
            Our models are optimized for efficiency and scalability, minimizing
            file sizes while maintaining precise geometry, data integrity, and{" "}
            BIM model performance across all platforms.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Standards Compliance",
        desc: (
          <span>
            We follow global BIM protocols including{" "}
            LOD, AIA, and ISO 19650 standards, ensuring
            consistency, interoperability, and compliance for{" "}
            architectural, structural, and MEP BIM projects.
          </span>
        ),
      },
      {
        id: 4,
        title: "Scalable BIM Solutions",
        desc: (
          <span>
            From individual components to large{" "}
            Revit family libraries, we support AEC firms in{" "}
            Europe, the Middle East, and the USA with scalable{" "}
            BIM outsourcing services that grow with your
            project demands.
          </span>
        ),
      },
      {
        id: 5,
        title: "Cross-Discipline Coordination",
        desc: (
          <span>
            Our BIM experts ensure smooth integration of{" "}
            Revit families across disciplines, bridging
            architectural, structural, and MEP systems for efficient{" "}
            BIM coordination and project delivery.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <p>
            Streamlined BIM modeling for faster and more
            efficient project delivery.
          </p>
        ),
      },
      {
        id: 2,
        desc: (
          <p>
            Consistent BIM documentation ensuring accuracy
            across all project stages.
          </p>
        ),
      },
      {
        id: 3,
        desc: (
          <p>
            Reduced modeling errors through intelligent{" "}
            BIM coordination and QA checks.
          </p>
        ),
      },
      {
        id: 4,
        desc: (
          <p>
            Improved collaboration between architectural,
            structural, and MEP BIM teams.
          </p>
        ),
      },
      {
        id: 5,
        desc: (
          <p>
            Faster design iterations enabled by{" "}
            parametric Revit family creation and adaptability.
          </p>
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
  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.revitFamily} />;
};

export default RevitFamily;
