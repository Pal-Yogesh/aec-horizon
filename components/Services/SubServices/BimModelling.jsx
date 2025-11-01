import React from "react";
import SubServiceTemplate from "@/components/Services/SubServices/SubServiceTemplate";

const BimModelling = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Modelling & Drafting",
    heading: "Precision, collaboration and efficiency all in one model",
    desc1:
      "At AEC Horizon, we deliver comprehensive BIM Modelling and Drafting services across all Levels of development (LOD 100-500) to support architects, engineers, contractors and facility managers throughout the entire Building life-cycle.",
    desc2:
      "Our experienced BIM professionals develop accurate 3D models, construction-ready documentation and as-built models that help clients make informed decisions, reduce rework and improve project efficiency ",

    whatWeOffer: [
      {
        id: 1,
        title: "LOD 100-200 – Conceptual & Design Models",
        desc: "Early-stage BIM models with accurate massing, space allocation, and schematic layouts to aid design coordination.",
      },
      {
        id: 2,
        title: "LOD 300 – Detailed Design & Coordination",
        desc: "Models with precise geometry and spatial relationships for MEP, architectural, and structural systems, ensuring seamless interdisciplinary collaboration.",
      },
      {
        id: 3,
        title: "LOD 400 – Fabrication & Construction Models",
        desc: "Highly detailed construction models with fabrication-level data for shop drawings, quantity take-offs, and on-site coordination.",
      },
      {
        id: 4,
        title: "LOD 500 – As-built & Facility Management Models",
        desc: "Fully verified models representing the final built condition, enabling efficient facility maintenance and operations.",
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
        desc: "Our team leverages the latest Autodesk technologies to deliver models of unmatched accuracy.",
      },
      {
        id: 2,
        title: "Quality Driven Approach",
        desc: "Every model goes through stringent QA/QC processes ensuring coordination, constructability, and compliance.",
      },
      {
        id: 3,
        title: "End-to-End Support",
        desc: "From design intent to final handover, our BIM models serve as a single source of truth for all project stakeholders.",
      },
      {
        id: 4,
        title: "Cost & Time Optimisation",
        desc: "Through precise detailing, clash-free coordination, and automated quantity take-offs, we help clients save both time and resources.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Reduced rework and RFIs",
      },
      {
        id: 2,
        desc: "Faster project delivery timelines",
      },
      {
        id: 3,
        desc: "Improved stakeholder collaboration",
      },
      {
        id: 4,
        desc: "Accurate quantity estimation",
      },
      {
        id: 5,
        desc: "Enhanced facility management post-construction",
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

export default BimModelling;
