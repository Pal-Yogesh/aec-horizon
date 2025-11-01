import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const PdfCadToBim = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "PDF/CAD to BIM conversion services",
    heading: "Bridging 2D drawings and intelligent 3D BIM workflows",
    desc1:
      "At AEC Horizon, we specialise in transforming additional PDFs, CAD files and legacy drawings into intelligent BIM models that bring design data to life. Our PDF/CAD to BIM conversion services empower firms to move beyond static documentation and adopt a dynamic, information rich environment where design, coordination and visualisation converge seamlessly.",
    desc2:
      "We dont just convert drawings, we reconstruct intent, embedding parameteres, accuracy and structure that allow your teams to work smarter, not harder.",
    whatWeOffer: [
      {
        id: 1,
        title: "2D to 3D BIM Conversion",
        desc: "Conversion of AutoCAD DWGs, PDFs, and hand-drafted drawings into intelligent Revit BIM models, complete with accurate geometry, data attributes, and discipline-specific details.",
      },
      {
        id: 2,
        title: "Architecture, Structure, and MEPF Model Development",
        desc: "Creation of coordinated Revit models that reflect real-world design intent across architectural, structural, and MEPF domains.",
      },
      {
        id: 3,
        title: "LOD-Based Modeling",
        desc: "Development of BIM models tailored to LOD 100-500, suitable for conceptual design, coordination, documentation, or facility management.",
      },
      {
        id: 4,
        title: "Legacy Drawing Digitization",
        desc: "Modernization of outdated CAD archives into reusable BIM assets that align with today’s BIM standards and workflows.",
      },
      {
        id: 5,
        title: "Model Validation & Quality Assurance",
        desc: "Every converted model undergoes a rigorous accuracy check to ensure alignment with reference drawings and adherence to project standards.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "BIM conversion (PDF/DWG to Revit)",
      },
      {
        id: 2,
        desc: "Structural modeling & reinforcement detailing",
      },
      {
        id: 3,
        desc: "MEPF system reconstruction from 2D plans",
      },
      {
        id: 4,
        desc: "Heritage, retrofit and renovation projects",
      },
      {
        id: 5,
        desc: "LOD specific BIM outputs for design or construction",
      },
      {
        id: 6,
        desc: "BIM templates and standards integration",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "True to Design Reproduction",
        desc: "We ensure every element—from walls to conduits—mirrors the original drawing’s design logic and proportions.",
      },
      {
        id: 2,
        title: "Enhanced Data Intelligence",
        desc: "Each model is enriched with parameters and metadata that enhance usability across design, documentation, and facility management stages.",
      },
      {
        id: 3,
        title: "Interdisciplinary Coordination",
        desc: "Our teams ensure seamless alignment between all trades for conflict-free integration during later project stages.",
      },
      {
        id: 4,
        title: "Efficient Turnaround",
        desc: "A streamlined workflow backed by automation tools enables us to deliver large-scale conversions quickly, without compromising precision.",
      },
      {
        id: 5,
        title: "BIM Ready for the Future",
        desc: "We deliver models that fit directly into your BIM ecosystem—ready for collaboration, coordination, and analysis.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Rapid digital transformation of legacy 2D assets",
      },
      {
        id: 2,
        desc: "Increased project accuracy and design clarity",
      },
      {
        id: 3,
        desc: "Improved team collaboration through unified 3D environments",
      },
      {
        id: 4,
        desc: "Reduced manual drafting and coordination time",
      },
      {
        id: 5,
        desc: "Enhanced decision making with intelligent, data driven models",
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

export default PdfCadToBim;
