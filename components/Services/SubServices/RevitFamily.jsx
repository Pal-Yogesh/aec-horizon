import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const RevitFamily = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Revit Family Creation Services",
    heading: "Parametric Precision for Seamless BIM Workflows",
    desc1:
      "At AEC Horizon, we specialise in creating custom Revit Families that form the backbone of intelligent BIM workflows.Our families are built with precision, flexibility and performance in mind, ensuring they integrate flawlessly into your Revit projects and align with your firm’s unique design standards.",
    desc2:
      "Whether it's architectural components, structural elements or MEP Equipment, our expertly crafted Revit families empower your team to design, visulise and document projects more efficiently.",
    description:
      "Comprehensive BIM modeling and drafting services across all levels of development, from conceptual design to as-built documentation.",

    whatWeOffer: [
      {
        id: 1,
        title: "Custom Revit family creation",
        desc: "From generic models to manufacturer-specific components designed to your project geometry and behaviour.",
      },
      {
        id: 2,
        title: "Parametric Modelling",
        desc: "Families that adapt to design changed dynamically; maintaining consistency across project variations.",
      },
      {
        id: 3,
        title: "Revit family standardisation:",
        desc: "Establishing uniform naming conventions, parameters and category structures to enhance model organisation.",
      },
      {
        id: 4,
        title: "Product library development",
        desc: "Creation of comprehensive, reusable family libraries for architects, engineers and product manufacturers.",
      },
      {
        id: 5,
        title: "Family Conversion & Optimisation",
        desc: "Upgrading legacy CAD blocks or outdated content into efficient Revit-compatible families",
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
        desc: "Every family is built to behave intelligently with flexible parameters for geometry, materials, and visibility.",
      },
      {
        id: 2,
        title: "High Performance",
        desc: "Optimised for model efficiency — minimising file size while maintaining high visual and functional detail.",
      },
      {
        id: 3,
        title: "BIM Standards Compliance",
        desc: "Families are developed as per LOD, AIA, and ISO 19650 standards, ensuring consistency and cross-platform compatibility.",
      },
      {
        id: 4,
        title: "Scalable Solutions",
        desc: "From single component creation to enterprise-level family libraries, we support your firm’s evolving BIM ecosystem.",
      },
      {
        id: 5,
        title: "Cross-Discipline Coordination",
        desc: "Our BIM experts ensure seamless integration of families across architectural, structural, and MEP models.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Streamlined BIM modeling process",
      },
      {
        id: 2,
        desc: "Consistent documentation across projects",
      },
      {
        id: 3,
        desc: "Reduced modeling errors and rework",
      },
      {
        id: 4,
        desc: "Enhanced project collaboration and coordination",
      },
      {
        id: 5,
        desc: "Faster design iterations and visualisations",
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
