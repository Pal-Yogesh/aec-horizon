import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const Structural3D = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Structural 3D modeling services",
    heading: "Bridging 2D drawings and intelligent 3D BIM workflows",
    desc1:
      "At AEC Horizon, we deliver structural 3D modeling services that transform raw engineering concepts into highly detailed, constructible digital models. Our focus goes beyond simple representation; we model how structures behave, connect and perform in the real world.",
    desc2:
      "By combining advanced BIM technology with engineering insight, we help structural teams visualise complexity, detect design conflicts early, and coordinate effortlessly with architects and MEP consultants. The result? Structures that are strong on paper, and even stronger in reality.",
    whatWeOffer: [
      {
        id: 1,
        title: "Comprehensive Structural BIM Modeling",
        desc: "Creation of precise 3D models for steel, concrete, and composite structures, developed directly from design drawings or engineering intent.",
      },
      {
        id: 2,
        title: "Reinforcement and Detailing Modeling",
        desc: "Modeling of rebar layouts, connections, and embeds to fabrication-level accuracy, ensuring clarity between design and site execution.",
      },
      {
        id: 3,
        title: "LOD-Specific Model Development",
        desc: "Deliverables customized to LOD 200-500, supporting every stage from schematic design and coordination to fabrication and construction documentation.",
      },
      {
        id: 4,
        title: "Structural Analysis Integration",
        desc: "Models prepared for seamless export to structural analysis tools such as ETABS, STAAD.Pro, or Robot, ensuring design alignment between BIM and analysis.",
      },
      {
        id: 5,
        title: "Coordination & Clash Management",
        desc: "Interdisciplinary integration with architectural and MEP models to identify and resolve clashes before they reach the construction site.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Concrete structures (beams, columns, slabs, footings)",
      },
      {
        id: 2,
        desc: "Steel structures (frames, trusses, bracings, connections)",
      },
      {
        id: 3,
        desc: "Precast & Post-tensioned elements",
      },
      {
        id: 4,
        desc: "Reinforcement modeling & Bar bending schedules",
      },
      {
        id: 5,
        desc: "Structural documentation and shop drawings",
      },
      {
        id: 6,
        desc: "Coordination with architectural & MEPF models",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Engineering Precision Meets BIM Intelligence",
        desc: "Our models are not just visual; they’re technically robust, designed with engineering accuracy and BIM interoperability in mind.",
      },
      {
        id: 2,
        title: "Seamless Collaboration",
        desc: "We ensure that structural models integrate perfectly with other trades, minimizing field conflicts and rework.",
      },
      {
        id: 3,
        title: "Fabrication Ready Outputs",
        desc: "From rebar layouts to steel connections, every detail is modeled for real-world constructability.",
      },
      {
        id: 4,
        title: "Adaptive Standards",
        desc: "Deliverables are aligned with AIA, BS, ACI, or client-specific structural standards, ensuring compliance and clarity.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Clear, data-rich models that enhance design interpretation",
      },
      {
        id: 2,
        desc: "Faster coordination and clash-free construction planning",
      },
      {
        id: 3,
        desc: "Reduced structural design revisions and material waste",
      },
      {
        id: 4,
        desc: "Enhanced communication between engineers, fabricators and site teams",
      },
      {
        id: 5,
        desc: "Accurate and easily updatable documentation for project lifecycle management",
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

export default Structural3D;
