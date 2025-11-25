import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const BimCoordination = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM Coordination and Clash Detection Services",
    heading: "Seamless BIM Coordination for Conflict-Free Project Delivery",
    desc1: (
      <span>
        At <strong>AEC Horizon</strong>, we offer advanced{" "}
        <strong>BIM coordination and clash detection services</strong> that help
        AEC firms eliminate design conflicts, enhance collaboration, and ensure{" "}
        <strong>error-free project delivery</strong>.
      </span>
    ),
    desc2: (
      <>
        <span>
          Using tools like <strong>Autodesk Navisworks, Revit</strong>, and{" "}
          <strong>BIM 360</strong>, we identify potential clashes early in the
          design phase, helping clients across
          <strong>Europe</strong>, the <strong>Middle East</strong>, and the{" "}
          <strong>USA</strong> minimize rework, reduce costs, and improve
          construction efficiency.
        </span>
        <br /> <br />
        <span>
          Our <strong>BIM experts </strong>bring together architectural,
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
            <strong>architectural, structural, and MEP BIM models</strong> into
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
            <strong>hard, soft, and workflow clashes</strong> using{" "}
            <strong>Navisworks Manage or Revit Interference Check</strong>,
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
            <strong>LOD, naming, and parameter standards</strong> to maintain
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
            Conducting <strong>BIM coordination sessions</strong>, issue
            tracking, and progress monitoring through{" "}
            <strong>BIM 360, Revizto, and Navisworks Clash Detective</strong>.
          </span>
        ),
      },
      {
        id: 5,
        title: "Pre-construction Simulation",
        desc: (
          <span>
            Delivering <strong>4D and 5D BIM simulations</strong> for
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
            Our <strong>BIM coordination experts</strong> use advanced tools
            like <strong>Navisworks</strong> and
            <strong>Revit</strong> to identify and resolve design conflicts
            early, helping AEC firms across <strong>Europe</strong>, the{" "}
            <strong>Middle East</strong>, and the <strong>USA</strong> minimize
            costly on-site issues and delays
          </span>
        ),
      },
      {
        id: 2,
        title: "Accurate, Data-Driven Coordination",
        desc: (
          <span>
            We implement structured <strong>BIM workflows</strong> and{" "}
            <strong>clash detection processes</strong>
            to ensure model alignment, documentation accuracy, and consistency
            across{" "}
            <strong>architectural, structural, and MEP BIM models</strong>.
          </span>
        ),
      },
      {
        id: 3,
        title: "Collaborative BIM Environment",
        desc: (
          <span>
            Through <strong>cloud-based platforms</strong> such as{" "}
            <strong>BIM 360</strong> and <strong>Revizto</strong>, we deliver
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
            <strong>ISO 19650, AIA BIM Execution Plan</strong>, and LOD 100-500
            standards, ensuring that every
            <strong> BIM coordination model</strong> meets international
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
            <strong>fully coordinated and clash-free BIM models</strong> ready
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
            <strong>Reduced rework and coordination delays</strong> through
            proactive <strong>BIM clash detection</strong> and resolution.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Early identification of design conflicts</strong> using{" "}
            <strong>Navisworks</strong> and{" "}
            <strong>Revit coordination tools</strong>
            for seamless project delivery
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Enhanced collaboration and communication</strong> among{" "}
            <strong>architectural, structural, and MEP BIM teams</strong> across
            global projects.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Improved construction sequencing and planning</strong> with
            data-driven <strong>4D and 5D BIM simulations.</strong>
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>Significant cost and time savings</strong> through accurate{" "}
            <strong>pre-construction BIM modeling</strong> and streamlined
            workflows.
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

export default BimCoordination;
