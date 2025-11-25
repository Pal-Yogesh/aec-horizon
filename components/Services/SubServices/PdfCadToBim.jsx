import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const PdfCadToBim = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "PDF/CAD to BIM conversion services",
    heading: "Transforming 2D Drawings into Intelligent 3D BIM Models",
    desc1: (
      <>
        <span>
          At <strong>AEC Horizon</strong>, we specialize in{" "}
          <strong>PDF to BIM</strong> and <strong>CAD to BIM</strong> conversion
          services that transform 2D drawings, legacy CAD files, and scanned
          PDFs into intelligent, data-rich <strong>3D BIM models</strong>.
        </span>
        <br />
        <span>
          Our goal is to help AEC firms across <strong>Europe</strong>, the{" "}
          <strong>Middle East</strong>, and the <strong>USA</strong> move beyond
          static documentation and adopt{" "}
          <strong>smart, parametric BIM workflows</strong> that improve
          coordination, accuracy, and project visualization.
        </span>
      </>
    ),
    desc2: (
      <>
        <span>
          Using tools like <strong>Autodesk Revit, Navisworks</strong>, and{" "}
          <strong>AutoCAD</strong>, our experts convert traditional drawings
          into <strong>information-rich BIM models</strong> that accurately
          represent design intent, supporting better decision-making, faster
          collaboration, and reduced rework.
        </span>
        <br />
        <span>
          We don&apos;t just convert drawings, we{" "}
          <strong>reconstruct design intelligence</strong>, embedding geometry,
          parameters, and discipline-specific data to deliver truly{" "}
          <strong>constructible BIM models</strong>.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "2D to 3D BIM Conversion",
        desc: (
          <span>
            Transforming <strong>AutoCAD DWGs, PDFs</strong>, and hand-drafted
            drawings into
            <strong>Revit BIM models</strong> with precise geometry and
            discipline-specific details.
          </span>
        ),
      },
      {
        id: 2,
        title: "Architecture, Structure, and MEPF Model Development",
        desc: (
          <span>
            Delivering <strong>coordinated BIM models</strong> across all
            disciplines to ensure design accuracy and integration.
          </span>
        ),
      },
      {
        id: 3,
        title: "LOD-Based Modeling",
        desc: (
          <span>
            Creating BIM models tailored to <strong>LOD 100-500</strong>, ideal
            for conceptual design, coordination, and{" "}
            <strong>as-built documentation</strong>.
          </span>
        ),
      },
      {
        id: 4,
        title: "Legacy Drawing Digitization",
        desc: (
          <span>
            Upgrading outdated <strong>CAD archives</strong> into reusable,
            standards-compliant
            <strong>BIM assets</strong> for modern workflows.
          </span>
        ),
      },
      {
        id: 5,
        title: "Model Validation & Quality Assurance",
        desc: (
          <span>
            Every converted model undergoes <strong>accuracy checks</strong> and{" "}
            <strong>QA/QC validation</strong>
            to align with <strong>ISO 19650</strong> and project standards.
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
            We ensure every detail, from <strong>walls to conduits</strong>, is
            precisely replicated in our{" "}
            <strong>CAD to BIM and PDF to BIM models</strong>, maintaining
            original design intent and proportions with{" "}
            <strong>millimeter-level accuracy</strong>.
          </span>
        ),
      },
      {
        id: 2,
        title: "Enhanced BIM Data Intelligence",
        desc: (
          <span>
            Each converted <strong>Revit BIM model</strong> is enriched with{" "}
            <strong>metadata and parameters</strong>, supporting better
            usability across{" "}
            <strong>
              design, documentation, and facility management workflows
            </strong>
            .
          </span>
        ),
      },
      {
        id: 3,
        title: "Seamless Multi-Discipline Coordination",
        desc: (
          <span>
            Our team delivers <strong>coordinated BIM models</strong> across{" "}
            <strong>architectural, structural, and MEPF systems</strong>,
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
            <strong>Revit workflows</strong>, we handle
            <strong>large-scale CAD and PDF to BIM conversions</strong>{" "}
            efficiently for clients across{" "}
            <strong>Europe, the Middle East, and the USA</strong>.
          </span>
        ),
      },
      {
        id: 5,
        title: "Future-Ready BIM Integration",
        desc: (
          <span>
            We deliver <strong>BIM-ready models</strong> that integrate smoothly
            into your firm&apos;s digital ecosystem, optimized for{" "}
            <strong>
              clash detection, coordination, and BIM data analysis
            </strong>
            .
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            <strong>Fast digital conversion of 2D CAD and PDF drawings</strong> into intelligent
            <strong>3D BIM models</strong>.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Improved project accuracy and design clarity</strong> through <strong>data-rich Revit
            BIM modeling</strong>.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Enhanced collaboration</strong> with <strong>unified 3D BIM environments</strong> for
            multidisciplinary teams.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Reduced manual drafting time</strong> through automated <strong>CAD to BIM workflows</strong>.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>Better decision-making</strong> supported by intelligent, <strong>data-driven BIM models</strong>
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

  return <SubServiceTemplate data={serviceData} />;
};

export default PdfCadToBim;
