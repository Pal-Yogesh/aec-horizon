import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const BimCoordination = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Coordination and Clash Detection Services",
    heading: "Seamless integration for error-free Project Delivery",
    desc1:
      "At AEC Horizon, we provide BIM coordination and clash detection services that eliminate conflicts, enhance collaboration and ensure smooth project execution across all disciplines. By leveraging advanced BIM tools like Navisworks, Revit and BIM 360, we identify design inconsistencies early helping AEC teams save time, reduce rework and deliver constructible models with precision.",
    desc2:
      "Our expert BIM coordinators ensure that architectural, structural and MEP models work in perfect harmony paving the way for efficient construction and data driven decision making.",
    whatWeOffer: [
      {
        id: 1,
        title: "Multi-discipline BIM Coordination",
        desc: "Integration of architectural, structural, and MEP models into a unified environment for comprehensive coordination and clash review.",
      },
      {
        id: 2,
        title: "Clash Detection & Resolution",
        desc: "Identification and categorization of hard, soft, and workflow clashes using Navisworks Manage or Revit Interference Check, followed by actionable coordination reports.",
      },
      {
        id: 3,
        title: "Model Review & Validation",
        desc: "Ensuring models meet LOD, naming, and parameter standards while maintaining geometric accuracy and cross-disciplinary consistency.",
      },
      {
        id: 4,
        title: "Coordination Meetings & Issue Tracking",
        desc: "Facilitation of BIM coordination sessions, clash-to-issue mapping, and progress tracking via BIM 360, Revizto, or Navisworks Clash Detective.",
      },
      {
        id: 5,
        title: "Pre-construction Simulation",
        desc: "4D and 5D simulations to visualize sequencing and detect time or cost-related conflicts before construction begins.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architectural, Structural and MEP Model coordination",
      },
      {
        id: 2,
        desc: "Navisworks clash detection & reporting",
      },
      {
        id: 3,
        desc: "Revit coordination models & view templates",
      },
      {
        id: 4,
        desc: "Model health checks and quality audits",
      },
      {
        id: 5,
        desc: "4D construction sequencing and BIM 360 coordination",
      },
      {
        id: 6,
        desc: "Issue tracking and resolution management",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Proactive Clash Management",
        desc: "Early identification and resolution of conflicts to prevent costly on-site issues.",
      },
      {
        id: 2,
        title: "Accurate, Data-Driven Coordination",
        desc: "Our teams use structured BIM workflows for precise model alignment and documentation consistency.",
      },
      {
        id: 3,
        title: "Collaborative BIM Environment",
        desc: "Centralized coordination through CDEs like BIM 360 ensures real-time model updates and transparent communication.",
      },
      {
        id: 4,
        title: "Industry Standards Compliance",
        desc: "Coordination performed in accordance with ISO 19650, AIA BIM Execution Plan, and LOD 100-500 standards.",
      },
      {
        id: 5,
        title: "Optimised for Construction Readiness",
        desc: "Delivering fully coordinated, constructible BIM models that enhance efficiency on-site.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Reduced rework and coordination delays",
      },
      {
        id: 2,
        desc: "Early detection of design and system conflicts",
      },
      {
        id: 3,
        desc: "Enhanced team collaboration and communication",
      },
      {
        id: 4,
        desc: "Improved construction sequencing and planning",
      },
      {
        id: 5,
        desc: "Cost and time savings through accurate preconstruction modeling",
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

export default BimCoordination;
