import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const ConstructionDoc = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Construction documentation set/ as-built drawings",
    heading:
      "Accurate BIM Documentation for Efficient Construction and Handover",
    desc1: (
      <span>
        At <strong>AEC Horizon</strong>, we deliver{" "}
        <strong>construction documentation</strong> and{" "}
        <strong>as-built drawing services</strong> that ensure every project
        milestone is recorded with
        <strong>accuracy, clarity, and BIM compliance</strong>.
      </span>
    ),
    desc2: (
      <>
        <span>
          Our <strong>BIM documentation workflows</strong> help architects,
          engineers, and contractors across <strong>Europe</strong>, the{" "}
          <strong>Middle East</strong>, and the <strong>USA</strong> convert
          design intent into <strong>detailed, build-ready drawings</strong>,
          minimizing on-site confusion and ensuring smooth project execution.
        </span>
        <br />
        <span>
          From initial construction documentation to final{" "}
          <strong>as-built deliverables</strong>, we bring consistency,
          coordination, and precision to every drawing package, empowering teams
          to <strong>build with confidence</strong> and
          <strong>handover efficiently</strong>.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Construction Documentation Set (CD Set)",
        desc: (
          <span>
            Preparation of{" "}
            <strong>coordinated BIM-based construction drawings</strong>,
            including plans, sections, elevations, schedules, and details
            aligned with project LOD and design phase requirements.
          </span>
        ),
      },
      {
        id: 2,
        title: "As-Built Drawing Creation",
        desc: (
          <span>
            Accurate digital representation of the{" "}
            <strong>final built condition</strong>, developed using{" "}
            <strong>redline markups, site scans</strong>, and{" "}
            <strong>point cloud to BIM workflows</strong> for true on-site
            accuracy.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Integrated Documentation",
        desc: (
          <span>
            Generation of <strong>multi-disciplinary documentation</strong>{" "}
            across{" "}
            <strong>architectural, structural, and MEPF BIM systems</strong>,
            ensuring precise coordination between trades.
          </span>
        ),
      },
      {
        id: 4,
        title: "Shop & Fabrication Drawings",
        desc: (
          <span>
            Production of <strong>fabrication-level documentation</strong> for
            HVAC, plumbing, electrical, and structural systems, ensuring
            compliance with contractor and fabrication standards.
          </span>
        ),
      },
      {
        id: 5,
        title: "Drawing Standardisation & Template Setup",
        desc: (
          <span>
            Customization of <strong>drawing templates, title blocks</strong>,
            and <strong>annotation styles</strong> as per{" "}
            <strong>ISO 19650</strong> and{" "}
            <strong>AIA documentation standards</strong> for global consistency.
          </span>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architecture construction drawings",
      },
      {
        id: 2,
        desc: "Structural detailing & reinforcement drawings",
      },
      {
        id: 3,
        desc: "MEPF construction documentation",
      },
      {
        id: 4,
        desc: "As-built drawings from BIM or Point Cloud",
      },
      {
        id: 5,
        desc: "Shop & Fabrication Drawings (LOD 400-500)",
      },
      {
        id: 6,
        desc: "Drawing sheet standardisation & Template setup",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "High Accuracy Drawings",
        desc: (
          <span>
            Verified <strong>BIM-based documentation</strong> ensures precision,
            constructability, and alignment with site conditions.
          </span>
        ),
      },
      {
        id: 2,
        title: "Faster Delivery",
        desc: (
          <span>
            <strong>Automated Revit workflows</strong> reduce manual drafting
            time and speed up documentation.
          </span>
        ),
      },
      {
        id: 3,
        title: "Global Standards Compliance",
        desc: (
          <span>
            All deliverables meet{" "}
            <strong>AIA, NBIMS, and ISO 19650 BIM standards</strong> for
            international projects.
          </span>
        ),
      },
      {
        id: 4,
        title: "Complete Support",
        desc: (
          <span>
            From <strong>design documentation to as-built BIM models</strong>,
            we manage every stage for seamless project handover.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            <strong>Highly accurate and coordinated BIM drawings</strong> that
            align perfectly with on-site conditions.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Faster documentation timelines</strong> through automated{" "}
            <strong>Revit and BIM workflows</strong>.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Improved collaboration</strong> among{" "}
            <strong>architects, engineers, and contractors</strong>
            across global projects.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Clear construction intent</strong> for field teams, reducing
            rework and confusion.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>Reliable as-built archives</strong> supporting{" "}
            <strong>facility management</strong> and future renovations.
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

export default ConstructionDoc;
