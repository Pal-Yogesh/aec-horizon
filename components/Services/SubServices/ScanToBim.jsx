import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const ScanToBim = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Scan to BIM Services",
    heading: "Converting Real-World Structures into Intelligent BIM Models",
    desc1: (
      <span>
        At AEC Horizon, we deliver{" "}
        precise and reliable Scan to BIM services
        that convert point cloud data into intelligent,
        data-rich 3D BIM models. Our expertise helps AEC firms
        across Europe, the Middle East, and
        the USA bridge the gap between existing structures and
        digital construction, enabling informed renovation, retrofitting, and
        design decisions with confidence.
      </span>
    ),
    desc2: (
      <span>
        Using advanced tools like Autodesk ReCap, Revit, and{" "}
        Navisworks, our BIM experts develop
        highly detailed
        as-built BIM models that capture every architectural,
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
            Conversion of laser-scanned point cloud data into
            accurate BIM models, maintaining spatial precision
            and real-world geometry.
          </span>
        ),
      },
      {
        id: 2,
        title: "As-Built BIM Services",
        desc: (
          <span>
            Creation of detailed as-built 3D models for
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
            Navisworks clash detection to ensure conflict-free,
            constructible models.
          </span>
        ),
      },
      {
        id: 4,
        title: "Architectural, Structural & MEPF Modeling",
        desc: (
          <span>
            Delivering coordinated Revit BIM models for
            architectural, structural, and MEP BIM systems{" "}
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
            Providing intelligent BIM models that support{" "}
            facility maintenance, space management, and{" "}
            as-built documentation.
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
            Our Scan to BIM models achieve{" "}
            millimeter-level precision, ensuring complete
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
            We deliver coordinated architectural, structural,
            and MEPF BIM models, enabling AEC firms across{" "}
            Europe, the Middle East, and the{" "}
            USA to manage complex projects through a single,
            unified BIM environment.
          </span>
        ),
      },
      {
        id: 3,
        title: "Optimised for Revit Workflows",
        desc: (
          <span>
            Our as-built BIM models are developed using{" "}
            Autodesk Revit for seamless integration into
            design, coordination, and{" "}
            facility management workflows.
          </span>
        ),
      },
      {
        id: 4,
        title: "Standards Based Modeling",
        desc: (
          <span>
            All deliverables comply with{" "}
            AIA LOD 100-500, ISO 19650, and client-specific{" "}
            BIM Execution Plans (BEP), ensuring consistency,
            compliance, and global BIM standards.
          </span>
        ),
      },
      {
        id: 5,
        title: "End-to-End Support",
        desc: (
          <span>
            From 3D laser scanning to{" "}
            BIM modeling and final documentation, we manage the
            entire Scan to BIM process, delivering accuracy,
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
            Accurate visualization of existing building conditions{" "}
            through high-precision point cloud to BIM modeling.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Reduced design risks and rework during{" "}
            renovation and retrofit projects using detailed{" "}
            as-built BIM models.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Enhanced coordination and efficiency for{" "}
            facility management and MEPF BIM workflows.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Faster project turnaround from{" "}
            3D laser scanning to Revit modeling
            with streamlined digital workflows.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Improved data-driven decision-making and{" "}
            project planning through intelligent{" "}
            Scan to BIM services.
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
  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.scanToBim} />;
};

export default ScanToBim;
