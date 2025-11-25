import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const RevitFamily = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Revit Family Creation Services",
    heading: "Custom Revit Family Creation for Smarter BIM Workflows",
    desc1: (
      // <>
      <span>
        At <strong>AEC Horizon</strong>, we deliver{" "}
        <strong>custom Revit family creation services</strong> that form the
        foundation of efficient and intelligent <strong>BIM workflows</strong>.
      </span>
      // </>
    ),
    desc2: (
      <>
        <span>
          Our <strong>Revit experts</strong> create high-quality, parametric,
          and manufacturer-specific Revit families tailored to your firm design
          standards, ensuring seamless integration across{" "}
          <strong>architectural, structural, and MEP BIM models.</strong>
        </span>
        <br />
        <span>
          Whether your projects are based in <strong>Europe</strong>, the{" "}
          <strong>Middle East</strong>, or the <strong>USA</strong>, our precise{" "}
          <strong>Revit BIM services</strong> enhance productivity, improve USA,
          our precise Revit BIM services enhance productivity, improve
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
              <strong>BIM models</strong>.
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
              parameters for consistent <strong>BIM coordination</strong> across
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
              <strong>architects, engineers, and product manufacturers</strong>,
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
              Upgrading <strong>legacy CAD blocks</strong> and outdated content
              into fully functional, Revit-compatible{" "}
              <strong> BIM components</strong>.
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
              Each <strong>Revit family</strong> is designed with intelligent
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
            <strong>BIM model performance</strong> across all platforms.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Standards Compliance",
        desc: (
          <sapn>
            We follow global BIM protocol,s including{" "}
            <strong>LOD, AIA, and ISO 19650</strong> standards, ensuring
            consistency, interoperability, and compliance for{" "}
            <strong>architectural, structural, and MEP BIM projects</strong>.
          </sapn>
        ),
      },
      {
        id: 4,
        title: "Scalable BIM Solutions",
        desc: (
          <span>
            From individual components to large{" "}
            <strong>Revit family libraries</strong>, we support AEC firms in{" "}
            <strong>Europe, the Middle East, and the USA</strong> with scalable{" "}
            <strong>BIM outsourcing services</strong> that grow with your
            project demands.
          </span>
        ),
      },
      {
        id: 5,
        title: "Cross-Discipline Coordination",
        desc: (
          <span>
            Our <strong>BIM experts</strong> ensure smooth integration of{" "}
            <strong>Revit families</strong> across disciplines, bridging
            architectural, structural, and MEP systems for efficient{" "}
            <strong>BIM coordination</strong> and project delivery.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <p>
            <strong>Streamlined BIM modeling</strong> for faster and more
            efficient project delivery.
          </p>
        ),
      },
      {
        id: 2,
        desc: (
          <p>
            <strong>Consistent BIM documentation</strong> ensuring accuracy
            across all project stages.
          </p>
        ),
      },
      {
        id: 3,
        desc: (
          <p>
            <strong>Reduced modeling errors</strong> through intelligent{" "}
            <strong>BIM coordination</strong> and QA checks.
          </p>
        ),
      },
      {
        id: 4,
        desc: (
          <p>
            <strong>Improved collaboration</strong> between architectural,
            structural, and <strong>MEP BIM teams</strong>.
          </p>
        ),
      },
      {
        id: 5,
        desc: (
          <p>
            <strong>Faster design iterations</strong> enabled by{" "}
            <strong>parametric Revit family creation</strong> and adaptability.
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
  return <SubServiceTemplate data={serviceData} />;
};

export default RevitFamily;
