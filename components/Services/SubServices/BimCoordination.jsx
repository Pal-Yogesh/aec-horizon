import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "../../FAQ/FaqData";

const BimCoordination = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Coordination and Clash Detection Services",
    heading: "Seamless BIM Coordination for Conflict-Free Project Delivery",
    desc1: (
      <span>
        At AEC Horizon, we offer advanced{" "}
        BIM coordination and clash detection services that help
        AEC firms eliminate design conflicts, enhance collaboration, and ensure{" "}
        error-free project delivery.
      </span>
    ),
    desc2: (
      <>
        <span>
          Using tools like Autodesk Navisworks, Revit, and{" "}
          BIM 360, we identify potential clashes early in the
          design phase, helping clients across
          Europe, the Middle East, and the{" "}
          USA minimize rework, reduce costs, and improve
          construction efficiency.
        </span>
        <br /> <br />
        <span>
          Our BIM experts bring together architectural,
          structural, and MEP models into a single coordinated environment,
          ensuring every project milestone is met with precision and
          consistency.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Multi-discipline BIM Coordination",
        desc: (
          <span>
            Integration of{" "}
            architectural, structural, and MEP BIM models into
            a unified digital environment for seamless coordination and review.
          </span>
        ),
      },
      {
        id: 2,
        title: "Clash Detection & Resolution",
        desc: (
          <span>
            Early identification and categorization of{" "}
            hard, soft, and workflow clashes using{" "}
            Navisworks Manage or Revit Interference Check,
            followed by actionable clash reports.
          </span>
        ),
      },
      {
        id: 3,
        title: "Model Review & Validation",
        desc: (
          <span>
            Ensuring models meet{" "}
            LOD, naming, and parameter standards to maintain
            cross-disciplinary accuracy and compliance with project
            specifications.
          </span>
        ),
      },
      {
        id: 4,
        title: "Coordination Meetings & Issue Tracking",
        desc: (
          <span>
            Conducting BIM coordination sessions, issue
            tracking, and progress monitoring through{" "}
            BIM 360, Revizto, and Navisworks Clash Detective.
          </span>
        ),
      },
      {
        id: 5,
        title: "Pre-construction Simulation",
        desc: (
          <span>
            Delivering 4D and 5D BIM simulations for
            construction sequencing, cost forecasting, and project timeline
            optimization.
          </span>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Architectural, Structural and MEP Model coordination",
      },
      {
        id: 2,
        desc: "Navisworks clash detection & reporting",
      },
      {
        id: 3,
        desc: "Revit coordination models & view templates",
      },
      {
        id: 4,
        desc: "Model health checks and quality audits",
      },
      {
        id: 5,
        desc: "4D construction sequencing and BIM 360 coordination",
      },
      {
        id: 6,
        desc: "Issue tracking and resolution management",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Proactive Clash Management",
        desc: (
          <span>
            Our BIM coordination experts use advanced tools
            like Navisworks and
            Revit to identify and resolve design conflicts
            early, helping AEC firms across Europe, the{" "}
            Middle East, and the USA minimize
            costly on-site issues and delays
          </span>
        ),
      },
      {
        id: 2,
        title: "Accurate, Data-Driven Coordination",
        desc: (
          <span>
            We implement structured BIM workflows and{" "}
            clash detection processes
            to ensure model alignment, documentation accuracy, and consistency
            across{" "}
            architectural, structural, and MEP BIM models.
          </span>
        ),
      },
      {
        id: 3,
        title: "Collaborative BIM Environment",
        desc: (
          <span>
            Through cloud-based platforms such as{" "}
            BIM 360 and Revizto, we deliver
            centralized coordination environments that enable real-time updates,
            transparent communication, and seamless collaboration between global
            project teams.
          </span>
        ),
      },
      {
        id: 4,
        title: "Compliance with Global BIM Standards",
        desc: (
          <span>
            All coordination is carried out in accordance with{" "}
            ISO 19650, AIA BIM Execution Plan, and LOD 100-500
            standards, ensuring that every
            BIM coordination model meets international
            compliance and quality benchmarks.
          </span>
        ),
      },
      {
        id: 5,
        title: "Optimized for Construction Readiness",
        desc: (
          <span>
            We provide{" "}
            fully coordinated and clash-free BIM models ready
            for construction, empowering teams to improve on-site efficiency,
            reduce rework, and achieve faster project delivery.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            Reduced rework and coordination delays through
            proactive BIM clash detection and resolution.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Early identification of design conflicts using{" "}
            Navisworks and{" "}
            Revit coordination tools
            for seamless project delivery
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Enhanced collaboration and communication among{" "}
            architectural, structural, and MEP BIM teams across
            global projects.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Improved construction sequencing and planning with
            data-driven 4D and 5D BIM simulations.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Significant cost and time savings through accurate{" "}
            pre-construction BIM modeling and streamlined
            workflows.
          </span>
        ),
      },
    ],

    imagePath: "/bimcoordination.svg",
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.coordination} />;
};

export default BimCoordination;
