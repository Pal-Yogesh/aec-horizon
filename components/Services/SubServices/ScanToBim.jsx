import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const ScanToBim = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Scan to BIM Services",
    heading: "Converting Real-World Structures into Intelligent BIM Models",
    desc1: (
      <span>
        At <strong>AEC Horizon</strong>, we deliver{" "}
        <strong>precise and reliable Scan to BIM services</strong>
        that convert <strong>point cloud data</strong> into intelligent,
        data-rich <strong>3D BIM models</strong>. Our expertise helps AEC firms
        across <strong>Europe</strong>, the <strong>Middle East</strong>, and
        the <strong>USA</strong> bridge the gap between existing structures and
        digital construction, enabling informed renovation, retrofitting, and
        design decisions with confidence.
      </span>
    ),
    desc2: (
      <span>
        Using advanced tools like <strong>Autodesk ReCap, Revit</strong>, and{" "}
        <strong>Navisworks</strong>, our <strong>BIM experts</strong> develop
        highly detailed
        <strong>as-built BIM models</strong> that capture every architectural,
        structural, and MEPF element, creating an accurate digital replica of
        your built environment. These models support seamless coordination,
        efficient project planning, and long-term facility management.
      </span>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Comprehensive Scan to BIM Modeling",
        desc: (
          <span>
            Conversion of <strong>laser-scanned point cloud data</strong> into
            accurate <strong>BIM models</strong>, maintaining spatial precision
            and real-world geometry.
          </span>
        ),
      },
      {
        id: 2,
        title: "As-Built BIM Services",
        desc: (
          <span>
            Creation of detailed <strong>as-built 3D models</strong> for
            renovation, refurbishment, and facility documentation.
          </span>
        ),
      },
      {
        id: 3,
        title: "Clash Detection & Validation",
        desc: (
          <span>
            Identifying design inconsistencies through{" "}
            <strong>Navisworks clash detection</strong> to ensure conflict-free,
            constructible models.
          </span>
        ),
      },
      {
        id: 4,
        title: "Architectural, Structural & MEPF Modeling",
        desc: (
          <span>
            Delivering coordinated <strong>Revit BIM models</strong> for
            architectural, structural, and <strong>MEP BIM systems</strong>{" "}
            within a single environment.
          </span>
        ),
      },
      {
        id: 5,
        title: "Point Cloud Optimization & Data Cleaning",
        desc: (
          <span>
            Filtering and aligning scanned data to enhance modeling accuracy and
            reduce file complexity.
          </span>
        ),
      },
      {
        id: 6,
        title: "Renovation & Facility Management Support",
        desc: (
          <span>
            Providing intelligent <strong>BIM models</strong> that support{" "}
            <strong>facility maintenance</strong>, space management, and{" "}
            <strong>as-built documentation</strong>.
          </span>
        ),
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
        desc: (
          <span>
            Our <strong>Scan to BIM models</strong> achieve{" "}
            <strong>millimeter-level precision</strong>, ensuring complete
            alignment between digital as-built data and on-site conditions for
            accurate renovation and documentation.
          </span>
        ),
      },
      {
        id: 2,
        title: "Multi Discipline Capability",
        desc: (
          <span>
            We deliver coordinated <strong>architectural, structural</strong>,
            and <strong>MEPF BIM models</strong>, enabling AEC firms across{" "}
            <strong>Europe</strong>, the <strong>Middle East</strong>, and the{" "}
            <strong>USA</strong> to manage complex projects through a single,
            unified BIM USA to manage complex projects through a single, unified
            BIM environment.
          </span>
        ),
      },
      {
        id: 3,
        title: "Optimised for Revit Workflows",
        desc: (
          <span>
            Our <strong>as-built BIM models</strong> are developed using{" "}
            <strong>Autodesk Revit</strong> for seamless integration into
            design, coordination, and{" "}
            <strong>facility management workflows</strong>.
          </span>
        ),
      },
      {
        id: 4,
        title: "Standards Based Modeling",
        desc: (
          <span>
            All deliverables comply with{" "}
            <strong>AIA LOD 100-500, ISO 19650</strong>, and client-specific{" "}
            <strong>BIM Execution Plans (BEP)</strong>, ensuring consistency,
            compliance, and <strong>global BIM standards</strong>.
          </span>
        ),
      },
      {
        id: 5,
        title: "End-to-End Support",
        desc: (
          <span>
            From <strong>3D laser scanning</strong> to{" "}
            <strong>BIM modeling</strong> and final documentation, we manage the
            entire <strong>Scan to BIM process</strong>, delivering accuracy,
            speed, and quality across every project stage.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            <strong>
              Accurate visualization of existing building conditions
            </strong>{" "}
            through high-precision <strong>point cloud to BIM modeling</strong>.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Reduced design risks and rework</strong> during{" "}
            <strong>renovation and retrofit projects</strong> using detailed{" "}
            <strong>as-built BIM models</strong>.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Enhanced coordination and efficiency</strong> for{" "}
            <strong>facility management and MEPF BIM workflows</strong>.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Faster project turnaround</strong> from{" "}
            <strong>3D laser scanning to Revit modeling</strong>
            with streamlined digital workflows.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>Improved data-driven decision-making</strong> and{" "}
            <strong>project planning</strong> through intelligent{" "}
            <strong>Scan to BIM services</strong>.
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

export default ScanToBim;
