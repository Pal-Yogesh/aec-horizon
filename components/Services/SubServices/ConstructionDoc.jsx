import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const ConstructionDoc = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Construction documentation set/ as-built drawings",
    heading:
      "Accurate BIM Documentation for Efficient Construction and Handover",
    desc1: (
      <span>
        At AEC Horizon, we deliver{" "}
        construction documentation and{" "}
        as-built drawing services that ensure every project
        milestone is recorded with
        accuracy, clarity, and BIM compliance.
      </span>
    ),
    desc2: (
      <>
        <span>
          Our BIM documentation workflows help architects,
          engineers, and contractors across Europe, the{" "}
          Middle East, and the USA convert
          design intent into detailed, build-ready drawings,
          minimizing on-site confusion and ensuring smooth project execution.
        </span>
        <br />
        <span>
          From initial construction documentation to final{" "}
          as-built deliverables, we bring consistency,
          coordination, and precision to every drawing package, empowering teams
          to build with confidence and
          handover efficiently.
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
            coordinated BIM-based construction drawings,
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
            final built condition, developed using{" "}
            redline markups, site scans, and{" "}
            point cloud to BIM workflows for true on-site
            accuracy.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Integrated Documentation",
        desc: (
          <span>
            Generation of multi-disciplinary documentation{" "}
            across{" "}
            architectural, structural, and MEPF BIM systems,
            ensuring precise coordination between trades.
          </span>
        ),
      },
      {
        id: 4,
        title: "Shop & Fabrication Drawings",
        desc: (
          <span>
            Production of fabrication-level documentation for
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
            Customization of drawing templates, title blocks,
            and annotation styles as per{" "}
            ISO 19650 and{" "}
            AIA documentation standards for global consistency.
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
            Verified BIM-based documentation ensures precision,
            constructability, and alignment with site conditions.
          </span>
        ),
      },
      {
        id: 2,
        title: "Faster Delivery",
        desc: (
          <span>
            Automated Revit workflows reduce manual drafting
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
            AIA, NBIMS, and ISO 19650 BIM standards for
            international projects.
          </span>
        ),
      },
      {
        id: 4,
        title: "Complete Support",
        desc: (
          <span>
            From design documentation to as-built BIM models,
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
            Highly accurate and coordinated BIM drawings that
            align perfectly with on-site conditions.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Faster documentation timelines through automated{" "}
            Revit and BIM workflows.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Improved collaboration among{" "}
            architects, engineers, and contractors
            across global projects.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Clear construction intent for field teams, reducing
            rework and confusion.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Reliable as-built archives supporting{" "}
            facility management and future renovations.
          </span>
        ),
      },
    ],

    imagePath: "/bimconstruction.svg",
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.constructionDoc} />;
};

export default ConstructionDoc;
