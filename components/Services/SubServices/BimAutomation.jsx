import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const BimAutomation = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "BIM automation Services",
    heading: "Accelerating BIM Workflows with smart automation solutions",
    desc1:
      "At AEC Horizon, we empower AEC firms with BIM automation services that simplify repetitive tasks, enhance data accuracy and unlock higher productivity across projects. By integrating custom scripts, Dynamo workflows and Revit API based tools, we help teams move from manual modeling to intelligent automation; saving time, reducing errors and improving overall project outcomes.",
    desc2:
      "Our automation solutions are create for architectural, structural and MEP disciplines, ensuring that your BIM processes are not just faster, but smarter and more consistent across every project phase",
    whatWeOffer: [
      {
        id: 1,
        title: "Custom BIM Automation Tools",
        desc: "Development of Revit plug-ins and scripts using Dynamo, Python or Revit API to automate design tasks, data management and documentation workflows.",
      },
      {
        id: 2,
        title: "Parametric Workflow Automation",
        desc: "Automating repetitive modeling tasks such as sheet creation, view setup, dimensioning and quantity extraction with precision and flexibility.",
      },
      {
        id: 3,
        title: "BIM Data Management Automation",
        desc: "Streamlining parameter updates, schedules and shared data environments to maintain accuracy across large scale projects.",
      },
      {
        id: 4,
        title: "Design to Documentation Automation",
        desc: "End-to-end workflows that link design inputs directly to construction documentation, reducing time spent on manual updates.",
      },
      {
        id: 5,
        title: "Quality Control and Model Validation",
        desc: "Automated model audits to check naming conventions, family usage and LOD compliance ensuring BIM standards are met consistently.",
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
        title: "Enhanced Efficiency",
        desc: "Automation reduces manual tasks and frees up your team for high-value design and coordination work.",
      },
      {
        id: 2,
        title: "Consistency and Accuracy",
        desc: "Eliminates human error through rule-based automation for modeling, documentation, and data control.",
      },
      {
        id: 3,
        title: "Custom Built Solutions",
        desc: "Tools and scripts designed around your firm’s workflows — not one-size-fits-all templates.",
      },
      {
        id: 4,
        title: "Seamless Integration",
        desc: "Works within existing Revit and BIM 360 environments for smooth deployment and scalability.",
      },
      {
        id: 5,
        title: "Future Ready BIM",
        desc: "Our automation solutions evolve with your firm’s digital transformation goals, paving the way for AI-integrated BIM.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Up to 60% reduction in manual modeling effort",
      },
      {
        id: 2,
        desc: "Improved project accuracy and consistency",
      },
      {
        id: 3,
        desc: "Faster design to documentation cycles",
      },
      {
        id: 4,
        desc: "Minimised rework and coordination errors",
      },
      {
        id: 5,
        desc: "Scalable automation across multiple projects and teams",
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
