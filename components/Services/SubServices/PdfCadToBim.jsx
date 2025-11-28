import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const PdfCadToBim = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "PDF/CAD to BIM conversion services",
    heading: "Transforming 2D Drawings into Intelligent 3D BIM Models",
    desc1: (
      <>
        <span>
          At AEC Horizon, we specialize in{" "}
          PDF to BIM and CAD to BIM conversion
          services that transform 2D drawings, legacy CAD files, and scanned
          PDFs into intelligent, data-rich 3D BIM models.
        </span>
        <br />
        <span>
          Our goal is to help AEC firms across Europe, the{" "}
          Middle East, and the USA move beyond
          static documentation and adopt{" "}
          smart, parametric BIM workflows that improve
          coordination, accuracy, and project visualization.
        </span>
      </>
    ),
    desc2: (
      <>
        <span>
          Using tools like Autodesk Revit, Navisworks, and{" "}
          AutoCAD, our experts convert traditional drawings
          into information-rich BIM models that accurately
          represent design intent, supporting better decision-making, faster
          collaboration, and reduced rework.
        </span>
        <br />
        <span>
          We don&apos;t just convert drawings, we{" "}
          reconstruct design intelligence, embedding geometry,
          parameters, and discipline-specific data to deliver truly{" "}
          constructible BIM models.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "2D to 3D BIM Conversion",
        desc: (
          <span>
            Transforming AutoCAD DWGs, PDFs, and hand-drafted
            drawings into
            Revit BIM models with precise geometry and
            discipline-specific details.
          </span>
        ),
      },
      {
        id: 2,
        title: "Architecture, Structure, and MEPF Model Development",
        desc: (
          <span>
            Delivering coordinated BIM models across all
            disciplines to ensure design accuracy and integration.
          </span>
        ),
      },
      {
        id: 3,
        title: "LOD-Based Modeling",
        desc: (
          <span>
            Creating BIM models tailored to LOD 100-500, ideal
            for conceptual design, coordination, and{" "}
            as-built documentation.
          </span>
        ),
      },
      {
        id: 4,
        title: "Legacy Drawing Digitization",
        desc: (
          <span>
            Upgrading outdated CAD archives into reusable,
            standards-compliant
            BIM assets for modern workflows.
          </span>
        ),
      },
      {
        id: 5,
        title: "Model Validation & Quality Assurance",
        desc: (
          <span>
            Every converted model undergoes accuracy checks and{" "}
            QA/QC validation
            to align with ISO 19650 and project standards.
          </span>
        ),
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
        desc: (
          <span>
            We ensure every detail, from walls to conduits, is
            precisely replicated in our{" "}
            CAD to BIM and PDF to BIM models, maintaining
            original design intent and proportions with{" "}
            millimeter-level accuracy.
          </span>
        ),
      },
      {
        id: 2,
        title: "Enhanced BIM Data Intelligence",
        desc: (
          <span>
            Each converted Revit BIM model is enriched with{" "}
            metadata and parameters, supporting better
            usability across{" "}
            design, documentation, and facility management workflows.
          </span>
        ),
      },
      {
        id: 3,
        title: "Seamless Multi-Discipline Coordination",
        desc: (
          <span>
            Our team delivers coordinated BIM models across{" "}
            architectural, structural, and MEPF systems,
            ensuring conflict-free integration and improved project
            collaboration.
          </span>
        ),
      },
      {
        id: 4,
        title: "Efficient Conversion Turnaround",
        desc: (
          <span>
            With automated tools and standardized{" "}
            Revit workflows, we handle
            large-scale CAD and PDF to BIM conversions{" "}
            efficiently for clients across{" "}
            Europe, the Middle East, and the USA.
          </span>
        ),
      },
      {
        id: 5,
        title: "Future-Ready BIM Integration",
        desc: (
          <span>
            We deliver BIM-ready models that integrate smoothly
            into your firm&apos;s digital ecosystem, optimized for{" "}
            clash detection, coordination, and BIM data analysis.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            Fast digital conversion of 2D CAD and PDF drawings into intelligent
            3D BIM models.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Improved project accuracy and design clarity through data-rich Revit
            BIM modeling.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Enhanced collaboration with unified 3D BIM environments for
            multidisciplinary teams.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Reduced manual drafting time through automated CAD to BIM workflows.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Better decision-making supported by intelligent, data-driven BIM models
             for project planning and analysis.
          </span>
        ),
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.conversion} />;
};

export default PdfCadToBim;
