import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const BimTemplate = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Template & Content Creation Services",
    heading: "Smart Standards for consistent, efficient BIM projects",
    desc1:
      "At AEC Horizon, we deliver BIM Template and content creation services designed to bring structure, consistency and scalability to your building information modeling workflows. Our BIM templates and content libraries are designed to match your firm’s project standards, workflows and discipline specific requirements, ensuring that every model starts on a strong efficient foundation.",
    desc2:
      "Whether you are an architectural, structural or MEP firm, our BIM templates and content systems empower your team to model faster, collaborate better and maintain data integrity across every project stage.",
   
      whatWeOffer: [
        {
          id: 1,
          title: "Custom BIM Template Development",
          desc: "Creation of project-specific and discipline-based templates complete with preloaded families, view templates, schedules, and title blocks for faster project setup.",
        },
        {
          id: 2,
          title: "BIM Standards Implementation",
          desc: "Establishing standard naming conventions, shared parameters, worksets, and view configurations aligned with AIA, ISO 19650, and LOD standards.",
        },
        {
          id: 3,
          title: "BIM Content Library Creation",
          desc: "Development of standardised, reusable BIM components and families for architectural, structural, and MEP disciplines to ensure uniformity and speed in modeling.",
        },
        {
          id: 4,
          title: "Project Environment Setup",
          desc: "Comprehensive setup of worksharing environments, linked model templates, and coordinate systems for efficient collaboration.",
        },
        {
          id: 5,
          title: "Template Optimisation & Version Upgrades",
          desc: "Upgrading outdated Revit or BIM templates to new standards, optimising performance, file size, and usability across projects.",
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
        desc: "Templates structured to reduce setup time and ensure consistent modeling practices across teams.",
      },
      {
        id: 2,
        title: "Standardised Project Delivery",
        desc: "Uniform documentation, naming, and parameter conventions that enhance project quality and coordination.",
      },
      {
        id: 3,
        title: "Cross Platform Compatibility",
        desc: "Content and templates developed for seamless integration with Autodesk Revit, Navisworks, and other BIM tools.",
      },
      {
        id: 4,
        title: "Scalable to Your Needs",
        desc: "Whether you need a single discipline template or a complete enterprise-wide BIM standardisation solution, we scale with your requirements.",
      },
      {
        id: 5,
        title: "Industry Compliant Standards",
        desc: "Developed to comply with AIA E203, LOD 100-500, and ISO 19650 frameworks for global BIM compliance.",
      },
    ],
    
    

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Faster project startup and reduced setup errors",
      },
      {
        id: 2,
        desc: "Consistent BIM documentation and model standards",
      },
      {
        id: 3,
        desc: "Improved multidisciplinary coordination",
      },
      {
        id: 4,
        desc: "Reduced rework and modeling inconsistencies",
      },
      {
        id: 5,
        desc: "Enhanced collaboration and productivity across teams",
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

export default BimTemplate;

