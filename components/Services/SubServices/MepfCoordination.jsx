import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const MepfCoordination = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "MEPF Coordination",
    heading: "Integrated MEPF Solutions for smarter, clash-free construction",
    desc1:
      "At AEC Horizon, we specialise in MEPF coordination services that ensure seamless integration of mechanical, electrical, plumbing and fire protection systems within complex BIM environments. Our goal is to help design and construction teams achieve spatial accuracy, system efficiency and constructability; eliminating costly site conflicts before they occur",
    desc2:
      "Using tools like Autodesk Revit, Navisworks Manage, and BIM 360 our BIM specialists deliver coordinated MEPF models that enhance collaboration across architecture, structure and building systems ensuring your projects are installation-ready and performance driven.",

    whatWeOffer: [
      {
        id: 1,
        title: "Comprehensive MEPF Model Coordination",
        desc: "Integration of mechanical, electrical, plumbing, and fire protection systems into a unified BIM model to ensure proper alignment and space utilization.",
      },
      {
        id: 2,
        title: "Clash Detection & Resolution",
        desc: "Identification of system clashes and spatial conflicts through automated tools like Navisworks Clash Detective, along with detailed clash reports and resolution strategies.",
      },
      {
        id: 3,
        title: "System Optimisation & Routing",
        desc: "Intelligent rerouting of services to maximize ceiling space, improve service access, and maintain compliance with design standards.",
      },
      {
        id: 4,
        title: "Constructability & Installation Review",
        desc: "Validation of MEPF layouts for constructability, clearance, and maintenance accessibility before site execution.",
      },
      {
        id: 5,
        title: "BIM Driven Collaboration",
        desc: "Regular model coordination meetings and issue tracking using BIM 360, ensuring smooth communication among contractors, consultants, and engineers.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "HVAC Duct and Equipment Coordination",
      },
      {
        id: 2,
        desc: "Electrical Cable Tray and Conduit Modeling",
      },
      {
        id: 3,
        desc: "Plumbing and Drainage Layouts",
      },
      {
        id: 4,
        desc: "Fire Protection Systems and Sprinkler Coordination",
      },
      {
        id: 5,
        desc: "Plant Room Coordination and Space Planning",
      },
      {
        id: 6,
        desc: "Fabrication Ready MEPF Models (LOD 400-500)",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Cross Discipline Integration",
        desc: "Coordinating MEPF systems seamlessly with architectural and structural elements to avoid conflicts.",
      },
      {
        id: 2,
        title: "Precision & Efficiency",
        desc: "Delivering accurate, well-structured models optimized for space and functionality.",
      },
      {
        id: 3,
        title: "Reduced Reworks",
        desc: "Detecting and resolving clashes during the virtual model phase to prevent costly site-level issues.",
      },
      {
        id: 4,
        title: "Field Ready Deliverables",
        desc: "Providing fabrication-level models and coordinated drawings that streamline installation.",
      },
      {
        id: 5,
        title: "Compliance & Standards",
        desc: "MEPF coordination developed in line with ISO 19650, AIA LOD, and ASHRAE guidelines for global best practices.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Early detection of design and routing conflicts",
      },
      {
        id: 2,
        desc: "Optimised space utilisation across all MEPF systems",
      },
      {
        id: 3,
        desc: "Reduced construction delays and material wastage",
      },
      {
        id: 4,
        desc: "Enhanced collaboration between trades",
      },
      {
        id: 5,
        desc: "Improved project quality, safety and cost efficiency",
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

export default MepfCoordination;
