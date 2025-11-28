import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const MepfCoordination = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "MEPF Coordination",
    heading: "MEPF Coordination Services for Smarter, Clash-Free Construction",
    desc1: (
      <span>
        At AEC Horizon, we deliver{" "}
        MEPF coordination services that ensure seamless
        integration of{" "}
        mechanical, electrical, plumbing, and fire protection systems{" "}
        within complex BIM environments.
      </span>
    ),
    desc2: (
      <>
        <span>
          Our goal is to help design and construction teams across{" "}
          Europe, the
          Middle East, and the USA achieve
          spatial accuracy, system efficiency, and constructability, minimizing
          costly site conflicts and delays.
        </span>
        <br />
        <span>
          Using industry-leading tools like{" "}
          Autodesk Revit, Navisworks Manage, and{" "}
          BIM 360, our BIM specialists create
          coordinated MEP BIM models
          that improve collaboration among architects, engineers, and
          contractors. The result, precise, installation-ready, and
          performance-driven designs optimized for construction.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Comprehensive MEPF Model Coordination",
        desc: (
          <span>
            Integration of{" "}
            mechanical, electrical, plumbing, and fire protection BIM models{" "}
            into a unified platform ensuring alignment, space optimization, and
            system performance.
          </span>
        ),
      },
      {
        id: 2,
        title: "Clash Detection & Resolution",
        desc: (
          <span>
            Early detection and categorization of{" "}
            MEP system clashes using
            Navisworks Clash Detective and{" "}
            Revit coordination workflows, followed by
            actionable resolution strategies.
          </span>
        ),
      },
      {
        id: 3,
        title: "System Optimisation & Routing",
        desc: (
          <span>
            Intelligent BIM-based rerouting to maximize ceiling
            space, improve service access, and ensure compliance with project
            design standards.
          </span>
        ),
      },
      {
        id: 4,
        title: "Constructability & Installation Review",
        desc: (
          <span>
            Validation of MEPF layouts for constructability,
            accessibility, and safety before on-site execution.
          </span>
        ),
      },
      {
        id: 5,
        title: "BIM Driven Collaboration",
        desc: (
          <span>
            Conducting BIM coordination meetings, issue
            tracking, and design reviews via BIM 360, ensuring
            clear communication across multidisciplinary project teams.
          </span>
        ),
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
        desc: (
          <span>
            We ensure seamless coordination between{" "}
            MEP, architectural, and structural BIM systems,
            preventing design conflicts and achieving efficient{" "}
            BIM coordination across all project stages.
          </span>
        ),
      },
      {
        id: 2,
        title: "Precision & Efficiency",
        desc: (
          <span>
            Our team delivers{" "}
            accurate, data-rich MEPF BIM models that are
            optimized for space, functionality, and constructability, helping
            AEC firms across Europe, the{" "}
            Middle East, and the USA improve
            design accuracy and on-site performance.
          </span>
        ),
      },
      {
        id: 3,
        title: "Reduced Reworks and Delays",
        desc: (
          <span>
            Through proactive clash detection using{" "}
            Navisworks and Revit MEP
            tools, we identify and resolve issues during the virtual modeling
            stage, reducing costly site-level changes.
          </span>
        ),
      },
      {
        id: 4,
        title: "Field Ready Deliverables",
        desc: (
          <span>
            We provide fabrication-level MEP BIM models and
            detailed coordination drawings that support streamlined
            installation, improved planning, and field execution.
          </span>
        ),
      },
      {
        id: 5,
        title: "Global Standards Compliances",
        desc: (
          <span>
            Our MEPF coordination services align with{" "}
            ISO 19650, AIA LOD, and
            ASHRAE standards, ensuring all deliverables meet
            international BIM compliance
            and best practices.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            Early detection of design and routing conflicts{" "}
            through advanced BIM clash detection using{" "}
            Navisworks and Revit MEP tools.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Optimized space utilization across all{" "}
            mechanical, electrical, plumbing, and fire protection (MEPF){" "}
            systems.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Reduced construction delays and material wastage{" "}
            with accurate, coordination-driven MEP BIM models.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Enhanced collaboration and communication between{" "}
            architectural, structural, and MEP BIM teams.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Improved project quality, safety, and cost efficiency{" "}
            through globally compliant{" "}
            MEPF coordination workflows.
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.mepf} />;
};

export default MepfCoordination;
