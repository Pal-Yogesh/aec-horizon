import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const ConstructionDoc = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Construction documentation set/ as-built drawings",
    heading:
      "Precision documentation for smarter construction and project handover",
    desc1:
      "At AEC Horizon, we deliver construction documentation and as built drawing services that ensure every project milestone is captured with accuracy, clarity and compliance. Our BIM based documentation workflows help architects, engineers and contractors translate design intent into detailed, build ready drawings; minimising on-site confusion and ensuring seamless project execution.",
    desc2:
      "From construction document sets to post construction as-built deliverables, we bring clarity, coordination and consistency to every drawing pakcage, empowering teams to build with confidence.",

    whatWeOffer: [
      {
        id: 1,
        title: "Construction Documentation Set (CD Set)",
        desc: "Preparation of detailed construction drawings directly from coordinated BIM models, including plans, sections, elevations, schedules, and details tailored to your project phase and LOD requirements.",
      },
      {
        id: 2,
        title: "As-Built Drawing Creation",
        desc: "Accurate representation of the final built condition, developed using redline markups, site scans, or point cloud data; ensuring that your documentation matches on-site reality.",
      },
      {
        id: 3,
        title: "BIM Integrated Documentation",
        desc: "Generation of fully coordinated drawings and schedules from BIM models for architecture, structure, and MEPF disciplines ensuring precision across all trades.",
      },
      {
        id: 4,
        title: "Shop & Fabrication Drawings",
        desc: "Detailed fabrication-level documentation for HVAC, plumbing, electrical, and structural systems, aligned with contractor specifications.",
      },
      {
        id: 5,
        title: "Drawing Standardisation & Template Setup",
        desc: "Customisation of drawing standards, title blocks, and annotation styles to align with your firm’s visual identity and documentation standards.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architecture construction drawings",
      },
      {
        id: 2,
        desc: "Structural detailing & reinforcement drawings",
      },
      {
        id: 3,
        desc: "MEPF construction documentation",
      },
      {
        id: 4,
        desc: "As-built drawings from BIM or Point Cloud",
      },
      {
        id: 5,
        desc: "Shop & Fabrication Drawings (LOD 400-500)",
      },
      {
        id: 6,
        desc: "Drawing sheet standardisation & Template setup",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Accuracy You Can Build On",
        desc: "Every drawing is derived from verified, clash-free BIM models, ensuring dimensional precision and constructibility.",
      },
      {
        id: 2,
        title: "Time Efficient Delivery",
        desc: "Automated BIM workflows streamline documentation, reducing manual drafting time and errors.",
      },
      {
        id: 3,
        title: "Compliance & Standards",
        desc: "All deliverables conform to AIA, NBIMS, and ISO 19650 standards, ensuring professional and regulatory compliance.",
      },
      {
        id: 4,
        title: "End-to-End Support",
        desc: "From design to drawings to as-built records, our team manages the full documentation lifecycle.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Highly accurate and consistent drawing deliverables",
      },
      {
        id: 2,
        desc: "Shortened documentation timelines with fewer revisions",
      },
      {
        id: 3,
        desc: "Enhanced collaboration across project stakeholders",
      },
      {
        id: 4,
        desc: "Clear construction intent for site teams",
      },
      {
        id: 5,
        desc: "Reliable as-built archives for facility management and future retrofits",
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

export default ConstructionDoc;
