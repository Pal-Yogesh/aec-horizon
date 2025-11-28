import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "../../FAQ/FaqData";

const BimAutomation = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM automation Services",
    heading: "BIM Automation Services for Smarter and Faster Project Delivery",
    desc1: (
      <span>
        At AEC Horizon, we help AEC firms enhance efficiency
        with intelligent
        BIM automation services. Our automation tools
        streamline repetitive design and modeling tasks, improve data accuracy,
        and accelerate documentation processes, allowing teams to focus on
        creativity and precision.
      </span>
    ),
    desc2: (
      <>
        <span>
          By integrating custom Dynamo scripts,{" "}
          Revit API-based tools, and
          Python automation, we empower firms across{" "}
          Europe, the Middle East, and the USA{" "}
          to transition from manual workflows to automated{" "}
          BIM processes, reducing time, errors, and costs
          across the entire project lifecycle.
        </span>
        <br /> <br />
        <span>
          Our solutions are designed for{" "}
          architectural, structural, and{" "}
          MEP BIM
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
            Development of Revit plug-ins and automation
            scripts using Dynamo, Python, or{" "}
            Revit API to simplify design workflows,
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
            creation, and quantity take-offs, ensuring
            flexibility and accuracy across complex BIM projects.
          </span>
        ),
      },
      {
        id: 3,
        title: "BIM Data Management Automation",
        desc: (
          <span>
            Streamlining parameter updates, schedules, and{" "}
            shared data environments to maintain consistency
            across multi-disciplinary teams.
          </span>
        ),
      },
      {
        id: 4,
        title: "Design to Documentation Automation",
        desc: (
          <span>
            Creating end-to-end workflows that connect design
            inputs to construction documentation, reducing manual work and
            improving BIM coordination.
          </span>
        ),
      },
      {
        id: 5,
        title: "Quality Control and Model Validation",
        desc: (
          <span>
            Automated model audits to check{" "}
            LOD compliance, BIM standards, and
            Revit family accuracy for improved reliability.
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
            Our BIM automation services streamline repetitive
            design and modeling tasks, helping AEC firms in{" "}
            Europe, the Middle East, and the{" "}
            USA save time and focus on high-value coordination
            and design work.
          </span>
        ),
      },
      {
        id: 2,
        title: "Consistency and Accuracy",
        desc: (
          <span>
            Through rule-based automation and{" "}
            Revit API workflows, we eliminate manual errors in
            documentation, data control, and{" "}
            BIM model validation, ensuring consistent project
            output.
          </span>
        ),
      },
      {
        id: 3,
        title: "Custom Built BIM Solutions",
        desc: (
          <span>
            We develop tailored Revit automation tools and{" "}
            Dynamo scripts
            customized to your firm&apos;s workflows no generic templates, only
            scalable BIM automation solutions built for real
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
            Autodesk Revit, BIM 360, and other platforms,
            enabling teams to maintain BIM coordination and
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
            AI-integrated BIM automation by developing smart,
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
            Up to 60% reduction in manual modeling effort{" "}
            through advanced BIM automation tools and{" "}
            Revit API workflows.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Improved project accuracy and consistency using
            data-driven BIM coordination and quality
            validation.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Faster design-to-documentation cycles with
            automated Revit modeling
            and intelligent task execution
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Minimized rework and coordination errors by
            integrating rule-based BIM workflows across
            disciplines.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Scalable automation solutions adaptable for{" "}
            architecture, structure, and MEP BIM teams across
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

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.automation} />;
};

export default BimAutomation;
