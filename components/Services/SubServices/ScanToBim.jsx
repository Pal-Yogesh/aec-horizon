import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const ScanToBim = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Scan to BIM Services",
    heading: "Transforming real world structures into intelligent BIM models",
    desc1:
      "At AEC Horizon, we offer precise and reliable scan to BIM services that convert point cloud sata into intelligent, data rich BIM models. Our process bridges the gap between existing conditions and digital construction, enabling architects, engineers and contractors to make informed design and renovation decisions with confidence.",
    desc2:
      "Using advanced tools like Autodesk ReCap, Revit and Navisworks, our BIM expers create accurate 3D as-built models that capture every detail from architectural and structural elements to complex MEPF systems; ensuring a true digital replica of your built environment.",

    whatWeOffer: [
      {
        id: 1,
        title: "Comprehensive MEPF Model Coordination",
        desc: "Integration of mechanical, electrical, plumbing, and fire protection systems into a unified BIM model to ensure proper alignment and space utilization.",
      },
      {
        id: 2,
        title: "Clash Detection & Resolution",
        desc: "Identification and categorization of system clashes and spatial conflicts through tools like Navisworks Clash Detective, followed by detailed clash reports and resolution strategies.",
      },
      {
        id: 3,
        title: "System Optimisation & Routing",
        desc: "Intelligent rerouting of MEPF services to maximize ceiling space, improve accessibility, and ensure compliance with project and design standards.",
      },
      {
        id: 4,
        title: "Constructability & Installation Review",
        desc: "Validation of coordinated MEPF layouts for constructability, clearance, and maintenance accessibility prior to site execution to minimize installation challenges.",
      },
      {
        id: 5,
        title: "BIM Driven Collaboration",
        desc: "Facilitation of regular coordination meetings and issue tracking using BIM 360, promoting seamless communication among contractors, consultants, and engineers.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architectural as-built modeling",
      },
      {
        id: 2,
        desc: "Structural as-built modeling",
      },
      {
        id: 3,
        desc: "MEPF as-built modeling",
      },
      {
        id: 4,
        desc: "Heritage and retrofit BIM models",
      },
      {
        id: 5,
        desc: "Facility management ready BIM models",
      },
      {
        id: 6,
        desc: "Point cloud to Revit conversion (RCP/RCS formats)",
      },
    ],
    

    whyChooseAec: [
      {
        id: 1,
        title: "High Accuracy Deliverables",
        desc: "Our models achieve millimeter-level precision, ensuring complete alignment with on-site conditions.",
      },
      {
        id: 2,
        title: "Multi Discipline Capability",
        desc: "Coordinated BIM outputs covering architecture, structure, and MEPF systems in a single unified model.",
      },
      {
        id: 3,
        title: "Optimised for Revit Workflows",
        desc: "Models are developed for seamless integration into design, coordination, and facility management workflows.",
      },
      {
        id: 4,
        title: "Standards Based Modeling",
        desc: "Deliverables fully comply with AIA LOD 100–500, ISO 19650, and client-specific BIM Execution Plans (BEP).",
      },
      {
        id: 5,
        title: "End-to-End Support",
        desc: "From scanning to modeling to documentation, we manage every stage of the Scan to BIM lifecycle efficiently.",
      },
    ],
    

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Accurate visualisation of existing building conditions",
      },
      {
        id: 2,
        desc: "Reduced design risks and rework during renovation",
      },
      {
        id: 3,
        desc: "Enhanced coordination for retrofits and facility management",
      },
      {
        id: 4,
        desc: "Faster project turn around from scan to model",
      },
      {
        id: 5,
        desc: "Improved data-driven decision making and project planning",
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

export default ScanToBim;
