import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "../../FAQ/FaqData";

const BimTemplate = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Template & Content Creation Services",
    heading: "BIM Templates and Standards for Streamlined Project Delivery",
    desc1: (
      <>
        <span>
          At AEC Horizon, we provide{" "}
          BIM Template and Content Creation services
          designed to bring accuracy, consistency, and scalability to your
          Building Information Modeling (BIM) workflows. Our
          team develops
          custom BIM templates and libraries that align with
          your firm&apos;s project standards, ensuring smooth collaboration and
          optimized model performance from design to construction.
        </span>
      </>
    ),
    desc2: (
      <span>
        Whether your focus is architecture, structure, or MEP,
        our BIM templates enable your teams to model faster, maintain data
        integrity, and achieve efficient coordination across every project
        phase.
        <br />
        Serving clients across Europe, the{" "}
        Middle East, and the USA, AEC Horizon
        delivers professional BIM services that strengthen
        workflows and enhance productivity for design firms, contractors, and
        consultants worldwide.
      </span>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Custom BIM Template Development",
        desc: (
          <span>
            Creation of project-specific and discipline-based templates with
            preloaded Revit families, view templates, and title
            blocks for faster and standardized project setup.
          </span>
        ),
      },
      {
        id: 2,
        title: "BIM Standards Implementation",
        desc: (
          <span>
            Establishment of naming conventions, shared
            parameters, and view configurations in line with{" "}
            AIA, ISO 19650, and LOD standards{" "}
            for global consistency.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Content Library Creation",
        desc: (
          <span>
            Development of standardized and reusable{" "}
            BIM components for architectural, structural, and{" "}
            MEP BIM services, promoting model uniformity and
            speed.
          </span>
        ),
      },
      {
        id: 4,
        title: "Project Environment Setup",
        desc: (
          <span>
            Comprehensive configuration of{" "}
            worksharing environments, linked model templates,
            and coordinate systems for enhanced{" "}
            BIM coordination.
          </span>
        ),
      },
      {
        id: 5,
        title: "Template Optimisation & Version Upgrades",
        desc: (
          <span>
            Upgrading outdated Revit templates to meet new
            standards, improving performance, usability, and file management
          </span>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architectural Templates: Predefined views, schedules, and sheets.",
      },
      {
        id: 2,
        desc: "Structural Templates: Reinforcement schedules, steel connections, and section configurations.",
      },
      {
        id: 3,
        desc: "MEP Templates: System-based views, connectors, and family category settings for MEP designs.",
      },
      {
        id: 4,
        desc: "Multi-discipline BIM Content Libraries: Unified libraries ensuring coordinated and compliant modeling across all trades.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "BIM Workflow Efficiency",
        desc: (
          <span>
            Our BIM templates are structured to minimize setup
            time, improve team productivity, and ensure consistent{" "}
            Revit modeling practices across projects in{" "}
            Europe, the Middle East, and the USA.
          </span>
        ),
      },
      {
        id: 2,
        title: "Standardized Project Delivery",
        desc: (
          <span>
            We implement uniform{" "}
            BIM documentation, naming conventions, and
            parameter standards that enhance coordination and maintain quality
            throughout every design and construction phase.
          </span>
        ),
      },
      {
        id: 3,
        title: "Cross Platform Compatibility",
        desc: (
          <span>
            All content and templates are developed for seamless integration
            with Autodesk Revit, Navisworks, and other major{" "}
            BIM coordination tools, ensuring interoperability
            across disciplines
          </span>
        ),
      },
      {
        id: 4,
        title: "Scalable BIM Solutions",
        desc: (
          <span>
            Whether your firm needs a single-discipline{" "}
            Revit template or a complete enterprise-level{" "}
            BIM standardization solution, our services scale to
            meet the needs of architectural, structural, and{" "}
            MEP BIM projects.
          </span>
        ),
      },
      {
        id: 5,
        title: "Globally Compliant Standards",
        desc: (
          <span>
            Our BIM templates are developed in compliance with{" "}
            AIA E203, LOD 100-500, and{" "}
            ISO 19650 frameworks, ensuring your projects meet
            global BIM standards for quality and performance.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: <p>
          Faster BIM project setup with structured templates that minimize startup time and reduce setup errors.
        </p>,
      },
      {
        id: 2,
        desc: <p>
        Consistent BIM documentation and standardized Revit models ensuring accuracy across all disciplines
        </p>,
      },
      {
        id: 3,
        desc: <p>
          Improved multidisciplinary coordination through unified BIM workflows and shared project standards.
        </p>,
      },
      {
        id: 4,
        desc:<p>
          Reduced rework and modeling inconsistencies with globally compliant BIM templates and libraries.
        </p> ,
      },
      {
        id: 5,
        desc: <p>
          Enhanced collaboration and productivity across architectural, structural, and MEP BIM teams.
        </p>,
      },
    ],

    imagePath: "/bimtemplate.svg",
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.template} />;
};

export default BimTemplate;
