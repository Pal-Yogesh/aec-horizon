import React from "react";
import DMTemplate from "./DMTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const BimContent = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "BIM Content creation",
    heading:
      "High-Performing BIM Content for Smarter Coordination and Stronger AEC Branding",
    desc1:
      "At AEC Horizon, we create high-quality BIM content and Revit families that enhance design coordination and strengthen your digital presence across global AEC markets. Our geometry-rich, data-driven components help architects, engineers, and contractors in Europe, the Middle East, and the USA work with better accuracy, consistency, and interoperability.",
    desc2:
      "Every BIM object, from parametric Revit families to manufacturer-specific components, is optimized for performance, functionality, and compliance, ensuring smooth integration into project workflows and online BIM platforms.",
    desc3: "",

    whatWeOffer: [
      {
        id: 1,
        title: "Geometry-Rich, Data-Driven BIM Components:",
        desc: "We develop precise, LOD-aligned Revit families and BIM objects that meet project standards and improve coordination on architectural, structural, and MEP models.",
      },
      {
        id: 2,
        title: "Library Standardization:",
        desc: "Uniform naming conventions, metadata, and classifications for BIM content libraries, making digital assets easy to manage and integrate across multiple platforms.",
      },
      {
        id: 3,
        title: "Manufacturer-Specific Models:",
        desc: "Conversion of physical products into digital BIM-ready components for online product catalogs, BIM object libraries, and AEC marketplaces, ideal for brands targeting global audiences.",
      },
      {
        id: 4,
        title: "File Optimization for High Performance:",
        desc: "Lightweight yet accurate BIM objects optimized for fast loading, smooth performance, and cross-platform usage without compromising detail.",
      },
      {
        id: 5,
        title: "Quality Assurance & Compliance:",
        desc: "Every BIM component is tested for accuracy and compliant with COBie, AIA, ISO 19650, and regional BIM standards across Europe, Middle East, and the USA.",
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
        title: "BIM-Focused Expertise:",
        desc: " Specialized in BIM content creation and Revit family development for global AEC standards.",
      },
      {
        id: 2,
        title: "Interoperable BIM Assets:",
        desc: " Content compatible with Revit, ArchiCAD, and Bentley, ensuring smooth integration across Europe, Middle East, and USA markets.",
      },
      {
        id: 3,
        title: "Detail + Performance: ",
        desc: " High-quality BIM objects optimized for accuracy, lightweight performance, and efficient coordination.",
      },
      {
        id: 4,
        title: "Future-Ready Libraries:",
        desc: "Digital assets designed for automation, AI workflows, and scalable BIM ecosystems, supporting strong AEC branding.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Streamlined BIM coordination and standardized documentation across all teams.",
      },
      {
        id: 2,
        desc: "Consistent, data-rich BIM content aligned with global project standards.",
      },
      {
        id: 3,
        desc: "Faster modeling, visualization, and design cycles with optimized Revit families.",
      },
      {
        id: 4,
        desc: "Improved multidisciplinary collaboration for architects, engineers, and contractors.",
      },
      {
        id: 5,
        desc: "Higher project efficiency through reusable digital assets and structured libraries.",
      },
      {
        id: 6,
        desc: "Insightful BIM dashboards and analytics for better decision-making and reporting.",
      },
    ],

    imagePath: "/dmbim.svg",
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

  return <DMTemplate data={serviceData} faqData={faqData.digitalMarketing.bimContent} />;
};

export default BimContent;
