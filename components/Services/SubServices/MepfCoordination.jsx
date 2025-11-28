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
        At <strong>AEC Horizon</strong>, we deliver{" "}
        <strong>MEPF coordination services</strong> that ensure seamless
        integration of{" "}
        <strong>
          mechanical, electrical, plumbing, and fire protection systems
        </strong>{" "}
        within complex <strong>BIM environments</strong>.
      </span>
    ),
    desc2: (
      <>
        <span>
          Our goal is to help design and construction teams across{" "}
          <strong>Europe</strong>, the
          <strong>Middle East</strong>, and the <strong>USA</strong> achieve
          spatial accuracy, system efficiency, and constructability, minimizing
          costly site conflicts and delays.
        </span>
        <br />
        <span>
          Using industry-leading tools like{" "}
          <strong>Autodesk Revit, Navisworks Manage</strong>, and{" "}
          <strong>BIM 360</strong>, our <strong>BIM specialists</strong> create
          coordinated <strong>MEP BIM models</strong>
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
            <strong>
              mechanical, electrical, plumbing, and fire protection BIM models
            </strong>{" "}
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
            <strong>MEP system clashes</strong> using
            <strong>Navisworks Clash Detective</strong> and{" "}
            <strong>Revit coordination workflows</strong>, followed by
            actionable resolution strategies.
          </span>
        ),
      },
      {
        id: 3,
        title: "System Optimisation & Routing",
        desc: (
          <span>
            Intelligent <strong>BIM-based rerouting</strong> to maximize ceiling
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
            Validation of <strong>MEPF layouts</strong> for constructability,
            accessibility, and safety before on-site execution.
          </span>
        ),
      },
      {
        id: 5,
        title: "BIM Driven Collaboration",
        desc: (
          <span>
            Conducting <strong>BIM coordination meetings</strong>, issue
            tracking, and design reviews via <strong>BIM 360</strong>, ensuring
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
            <strong>MEP, architectural, and structural BIM systems</strong>,
            preventing design conflicts and achieving efficient{" "}
            <strong>BIM coordination</strong> across all project stages.
          </span>
        ),
      },
      {
        id: 2,
        title: "Precision & Efficiency",
        desc: (
          <span>
            Our team delivers{" "}
            <strong>accurate, data-rich MEPF BIM models</strong> that are
            optimized for space, functionality, and constructability, helping
            AEC firms across <strong>Europe</strong>, the{" "}
            <strong>Middle East</strong>, and the <strong>USA</strong> improve
            design accuracy and on-site performance.
          </span>
        ),
      },
      {
        id: 3,
        title: "Reduced Reworks and Delays",
        desc: (
          <span>
            Through proactive <strong>clash detection</strong> using{" "}
            <strong>Navisworks</strong> and <strong>Revit MEP</strong>
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
            We provide <strong>fabrication-level MEP BIM models</strong> and
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
            Our <strong>MEPF coordination services</strong> align with{" "}
            <strong>ISO 19650, AIA LOD</strong>, and
            <strong>ASHRAE standards</strong>, ensuring all deliverables meet
            international <strong>BIM compliance</strong>
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
            <strong>Early detection of design and routing conflicts</strong>{" "}
            through advanced <strong>BIM clash detection</strong> using{" "}
            <strong>Navisworks</strong> and <strong>Revit MEP tools</strong>.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Optimized space utilization</strong> across all{" "}
            <strong>
              mechanical, electrical, plumbing, and fire protection (MEPF)
            </strong>{" "}
            systems.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Reduced construction delays and material wastage</strong>{" "}
            with accurate, coordination-driven <strong>MEP BIM models</strong>.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Enhanced collaboration and communication</strong> between{" "}
            <strong>architectural, structural, and MEP BIM teams</strong>.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>
              Improved project quality, safety, and cost efficiency
            </strong>{" "}
            through globally compliant{" "}
            <strong>MEPF coordination workflows</strong>.
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
