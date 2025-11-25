import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const BimAutomation = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM automation Services",
    heading: "BIM Automation Services for Smarter and Faster Project Delivery",
    desc1: (
      <span>
        At <strong>AEC Horizon</strong>, we help AEC firms enhance efficiency
        with intelligent
        <strong>BIM automation services</strong>. Our automation tools
        streamline repetitive design and modeling tasks, improve data accuracy,
        and accelerate documentation processes, allowing teams to focus on
        creativity and precision.
      </span>
    ),
    desc2: (
      <>
        <span>
          By integrating <strong>custom Dynamo scripts</strong>,{" "}
          <strong>Revit API-based tools</strong>, and
          <strong>Python automation</strong>, we empower firms across{" "}
          <strong>Europe, the Middle East</strong>, and the <strong>USA</strong>{" "}
          to transition from manual workflows to automated{" "}
          <strong>BIM processes</strong>, reducing time, errors, and costs
          across the entire project lifecycle.
        </span>
        <br /> <br />
        <span>
          Our solutions are designed for{" "}
          <strong>architectural, structural,</strong> and{" "}
          <strong>MEP BIM</strong>
          disciplines, ensuring every model is coordinated, compliant, and
          optimized for performance.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Custom BIM Automation Tools",
        desc: (
          <span>
            Development of <strong>Revit plug-ins</strong> and automation
            scripts using <strong>Dynamo, Python, </strong> or{" "}
            <strong>Revit API</strong> to simplify design workflows,
            documentation, and data management.
          </span>
        ),
      },
      {
        id: 2,
        title: "Parametric Workflow Automation",
        desc: (
          <span>
            Automating repetitive modeling tasks like sheet setup, view
            creation, and <strong>quantity take-offs</strong>, ensuring
            flexibility and accuracy across complex BIM projects.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Data Management Automation",
        desc: (
          <span>
            Streamlining <strong>parameter updates, schedules,</strong> and{" "}
            <strong>shared data environments</strong> to maintain consistency
            across multi-disciplinary teams.
          </span>
        ),
      },
      {
        id: 4,
        title: "Design to Documentation Automation",
        desc: (
          <span>
            Creating <strong>end-to-end workflows</strong> that connect design
            inputs to construction documentation, reducing manual work and
            improving <strong>BIM coordination.</strong>
          </span>
        ),
      },
      {
        id: 5,
        title: "Quality Control and Model Validation",
        desc: (
          <span>
            Automated model audits to check{" "}
            <strong>LOD compliance, BIM standards</strong>, and
            <strong>Revit family accuracy</strong> for improved reliability.
          </span>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Revit Dynamo Automation Workflows",
      },
      {
        id: 2,
        desc: "Custom Revit Add-ins and API development",
      },
      {
        id: 3,
        desc: "Automated Quantity take-offs and schedules",
      },
      {
        id: 4,
        desc: "BIM model health and QA scripts",
      },
      {
        id: 5,
        desc: "Clash detection and coordination automation",
      },
      {
        id: 6,
        desc: "Data driven Revit parameter management",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Enhanced BIM Efficiency",
        desc: (
          <span>
            Our <strong>BIM automation services</strong> streamline repetitive
            design and modeling tasks, helping AEC firms in{" "}
            <strong>Europe</strong>, the <strong>Middle East</strong>, and the{" "}
            <strong>USA</strong> save time and focus on high-value coordination
            and design work.
          </span>
        ),
      },
      {
        id: 2,
        title: "Consistency and Accuracy",
        desc: (
          <span>
            Through <strong>rule-based automation</strong> and{" "}
            <strong>Revit API workflows</strong>, we eliminate manual errors in
            documentation, data control, and{" "}
            <strong>BIM model validation</strong>, ensuring consistent project
            output.
          </span>
        ),
      },
      {
        id: 3,
        title: "Custom Built BIM Solutions",
        desc: (
          <span>
            We develop <strong>tailored Revit automation tools</strong> and{" "}
            <strong>Dynamo scripts</strong>
            customized to your firm&apos;s workflows no generic templates, only
            scalable <strong>BIM automation solutions</strong> built for real
            project needs.
          </span>
        ),
      },
      {
        id: 4,
        title: "Seamless Integration",
        desc: (
          <span>
            Our automation tools integrate smoothly with{" "}
            <strong>Autodesk Revit, BIM 360</strong>, and other platforms,
            enabling teams to maintain <strong>BIM coordination</strong> and
            workflow continuity across multi-discipline projects.
          </span>
        ),
      },
      {
        id: 5,
        title: "Future Ready BIM Systems",
        desc: (
          <span>
            We help firms advance toward{" "}
            <strong>AI-integrated BIM automation</strong> by developing smart,
            data-driven processes that support digital transformation and
            long-term efficiency.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            <strong>Up to 60% reduction in manual modeling effort</strong>{" "}
            through advanced <strong>BIM automation tools</strong> and{" "}
            <strong>Revit API workflows</strong>.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Improved project accuracy and consistency</strong> using
            data-driven <strong>BIM coordination</strong> and quality
            validation.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Faster design-to-documentation cycles</strong> with
            automated <strong>Revit modeling</strong>
            and intelligent task execution
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Minimized rework and coordination errors</strong> by
            integrating <strong>rule-based BIM workflows</strong> across
            disciplines.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>Scalable automation solutions</strong> adaptable for{" "}
            <strong>architecture, structure, and MEP BIM teams</strong> across
            global projects.
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

export default BimAutomation;
