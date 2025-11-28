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
          At <strong>AEC Horizon</strong>, we provide{" "}
          <strong>BIM Template and Content Creation services</strong>
          designed to bring accuracy, consistency, and scalability to your
          <strong> Building Information Modeling (BIM) workflows</strong>. Our
          team develops
          <strong>custom BIM templates and libraries</strong> that align with
          your firm&apos;s project standards, ensuring smooth collaboration and
          optimized model performance from design to construction.
        </span>
      </>
    ),
    desc2: (
      <span>
        Whether your focus is <strong>architecture, structure, or MEP</strong>,
        our BIM templates enable your teams to model faster, maintain data
        integrity, and achieve efficient coordination across every project
        phase.
        <br />
        Serving clients across <strong>Europe</strong>, the{" "}
        <strong>Middle East</strong>, and the <strong>USA</strong>, AEC Horizon
        delivers <strong>professional BIM services</strong> that strengthen
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
            preloaded <strong>Revit families</strong>, view templates, and title
            blocks for faster and standardized project setup.
          </span>
        ),
      },
      {
        id: 2,
        title: "BIM Standards Implementation",
        desc: (
          <span>
            Establishment of <strong>naming conventions</strong>, shared
            parameters, and view configurations in line with{" "}
            <strong> AIA, ISO 19650</strong>, and <strong>LOD standards</strong>{" "}
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
            <strong>BIM components </strong>for architectural, structural, and{" "}
            <strong>MEP BIM services</strong>, promoting model uniformity and
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
            <strong>worksharing environments</strong>, linked model templates,
            and coordinate systems for enhanced{" "}
            <strong>BIM coordination</strong>.
          </span>
        ),
      },
      {
        id: 5,
        title: "Template Optimisation & Version Upgrades",
        desc: (
          <span>
            Upgrading outdated <strong>Revit templates</strong> to meet new
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
            Our <strong>BIM templates</strong> are structured to minimize setup
            time, improve team productivity, and ensure consistent{" "}
            <strong>Revit modeling practices</strong> across projects in{" "}
            <strong>Europe, the Middle East, and the USA</strong>.
          </span>
        ),
      },
      {
        id: 2,
        title: "Standardized Project Delivery",
        desc: (
          <span>
            We implement uniform{" "}
            <strong>BIM documentation, naming conventions</strong>, and
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
            with <strong>Autodesk Revit, Navisworks</strong>, and other major{" "}
            <strong>BIM coordination tools</strong>, ensuring interoperability
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
            <strong>Revit template</strong> or a complete enterprise-level{" "}
            <strong>BIM standardization solution</strong>, our services scale to
            meet the needs of architectural, structural, and{" "}
            <strong>MEP BIM projects</strong>.
          </span>
        ),
      },
      {
        id: 5,
        title: "Globally Compliant Standards",
        desc: (
          <span>
            Our BIM templates are developed in compliance with{" "}
            <strong>AIA E203, LOD 100-500</strong>, and{" "}
            <strong>ISO 19650</strong> frameworks, ensuring your projects meet
            global <strong>BIM standards</strong> for quality and performance.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: <p>
          <strong>Faster BIM project setup</strong> with structured templates that minimize startup time and reduce setup errors.
        </p>,
      },
      {
        id: 2,
        desc: <p>
        <strong>Consistent BIM documentation</strong> and <strong>standardized Revit models</strong> ensuring accuracy across all disciplines
        </p>,
      },
      {
        id: 3,
        desc: <p>
          <strong>Improved multidisciplinary coordination</strong> through unified <strong>BIM workflows</strong> and shared project standards.
        </p>,
      },
      {
        id: 4,
        desc:<p>
          <strong>Reduced rework and modeling inconsistencies</strong> with globally compliant <strong>BIM templates</strong> and libraries.
        </p> ,
      },
      {
        id: 5,
        desc: <p>
          <strong>Enhanced collaboration and productivity</strong> across architectural, structural, and <strong>MEP BIM teams</strong>.
        </p>,
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.template} />;
};

export default BimTemplate;
