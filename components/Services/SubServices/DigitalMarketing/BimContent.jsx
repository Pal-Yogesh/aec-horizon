import React from "react";
import DMTemplate from "./DMTemplate";

const BimContent = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "BIM Content creation",
    heading:
      "High-Performing Digital Assets for Smarter Coordination and Design",
    desc1:
      "At AEC Horizon, we provide intelligent BIM content that promotes design communication across disciplines, precision, and interoperability. Every component, from manufacturer-specific parts to parametric Revit families, has been optimized for performance, functionality, and data integrity, enabling contractors, engineers, and architects to work together effectively in dynamic digital ecosystems.",
    desc2: "",
    desc3: "",

    whatWeOffer: [
      {
        id: 1,
        title: "Creating geometry-rich, data-driven components",
        desc: "that adhere to project criteria and LOD standards is known as custom BIM object development.",
      },
      {
        id: 2,
        title: "Library Standardization:",
        desc: "Using uniform characteristics and metadata to organize and classify BIM content for smooth integration.",
      },
      {
        id: 3,
        title: "Manufacturer-Specific Models:",
        desc: "Converting physical goods into digital format for online BIM object platforms and design libraries.",
      },
      {
        id: 4,
        title: "File optimization:",
        desc: "Minimizing file size without sacrificing accuracy and streamlining material for performance.",
      },
      {
        id: 5,
        title: "Quality Assurance & Compliance:",
        desc: "Making sure that COBie, AIA, and ISO 19650 data exchange standards are followed.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: (
          <>
            Development of <strong>LOD 100–500</strong> model content for the
            disciplines of architecture, structural, and MEP
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            Converting <strong>CAD or IFC formats</strong> to the BIM family
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Parametric modeling</strong> for rule-based, flexible design
            components
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            Connectivity to <strong>asset management systems</strong> and
            digital twins
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            Making templates for BIM environments such as{" "}
            <strong>Revit and Navisworks</strong>
          </>
        ),
      },
      {
        id: 6,
        desc: (
          <>
            Validation of performance in <strong>multidisciplinary</strong> BIM
            processes
          </>
        ),
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "BIM-Centric Approach:",
        desc: "A thorough understanding of design data, object behavior, and coordination logic.",
      },
      {
        id: 2,
        title: "Interoperable Solutions:",
        desc: "Content that works effortlessly across Revit, ArchiCAD, and Bentley systems.",
      },
      {
        id: 3,
        title: "Detail with Efficiency: ",
        desc: "Achieving best usefulness by balancing visual correctness with model performance.",
      },
      {
        id: 4,
        title: "Future-Ready Assets:",
        desc: "Libraries designed for automation, AI processes, and scalable BIM ecosystems.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            Streamlined <strong>BIM coordination and documentation.</strong>
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            Consistent and <strong>standardized data</strong> across all models
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Shorter modeling and design</strong> visualization cycles
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Improved collaboration</strong> across multidisciplinary
            teams.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            improved project efficiency and{" "}
            <strong>digital asset reusability.</strong>
          </>
        ),
      },
      {
        id: 6,
        desc: (
          <>
            <strong>Dashboards for analytics</strong> and structured reporting
            that are tailored for executive review.
          </>
        ),
      },
    ],
    imagePath: "/s11.svg",
    bgColor: "from-[#D5CBF0] to-[#E3DDFF]",
    features: [
      {
        icon: "/td1.svg",
        title: "LOD 100-200",
        description: "Conceptual and schematic design models",
      },
      {
        icon: "/td2.svg",
        title: "LOD 300-400",
        description: "Detailed design and construction documentation",
      },
      {
        icon: "/td3.svg",
        title: "LOD 500",
        description: "As-built and facility management models",
      },
      {
        icon: "/td4.svg",
        title: "LOD 600-700",
        description: "As-built and facility management models",
      },
    ],
  };

  return <DMTemplate data={serviceData} />;
};

export default BimContent;
