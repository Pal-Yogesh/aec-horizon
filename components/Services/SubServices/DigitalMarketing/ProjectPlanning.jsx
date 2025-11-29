import React from "react";
import DMTemplate from "./DMTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const ProjectPlanning = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Project planning & scheduling",
    heading: "Data-Driven Project Scheduling for Faster, Predictable Delivery",
    desc1:
      "At AEC Horizon, we transform complex construction workflows into clear, data-driven project schedules that improve predictability, resource planning, and overall delivery performance.",
    desc2:
      "To ensure accuracy from concept to completion, our project planning and scheduling services incorporate AI-powered forecasting, 4D BIM simulation, critical path analysis, and intelligent resource planning. Every activity, dependency, and milestone is carefully mapped to give your team complete clarity, control, and cost efficiency throughout the entire project lifecycle.",
    desc3: "",
    whatWeOffer: [
      {
        id: 1,
        title: "Creating baseline, look-ahead, and resource-loaded schedules:",
        desc: "Comprehensive scheduling developed in Primavera P6 or MS Project to support planning, coordination, and timely delivery.",
      },
      {
        id: 2,
        title: "Connecting design models to construction schedules:",
        desc: "4D BIM-driven sequencing that enables clash-free execution and transparent progress simulation.",
      },
      {
        id: 3,
        title: "Finding dependencies and limitations:",
        desc: " Proactive risk assessment and delay prevention through detailed critical path and constraint analysis.",
      },
      {
        id: 4,
        title: "Progress Tracking & Forecasting:",
        desc: "Real-time data insights that help monitor performance, maintain transparency, and anticipate schedule deviations before they occur.",
      },
      {
        id: 5,
        title: "Earned Value Management (EVM):",
        desc: "Time-cost performance tracking using productivity indicators and analytical metrics to support informed decision-making.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: <>Integration of LOD-based schedules for BIM collaboration.</>,
      },
      {
        id: 2,
        desc: (
          <>
            Simulation of construction phasing for high-rise and infrastructure
            projects.
          </>
        ),
      },
      {
        id: 3,
        desc: <>Sequencing of procurement and logistics in digital twins.</>,
      },
      {
        id: 4,
        desc: (
          <>Syncing design, MEP, and structural workflows across disciplines.</>
        ),
      },
      {
        id: 5,
        desc: (
          <>Automated reporting systems and predictive scheduling analytics.</>
        ),
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Data-Driven Scheduling:",
        desc: "We use real-time project data to deliver accurate, predictable schedules for AEC teams across Europe, the Middle East, and the USA.",
      },
      {
        id: 2,
        title: "Multi-Platform Expertise:",
        desc: "Seamless scheduling integration with BIM 360, MS Project, Primavera, and Synchro 4D for clients in Amsterdam, Berlin, Stockholm, Dubai, Riyadh, London, Virginia, Texas, and California.",
      },
      {
        id: 3,
        title: "Full Project Visibility:",
        desc: "Clear dashboards showing delays, resource status, and progress KPIs to support faster decisions.",
      },
      {
        id: 4,
        title: "Collaborative Planning:",
        desc: "Transparent coordination between owners, contractors, and consultants, ideal for major public and private projects.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Optimized project schedules and better resource use across global regions.",
      },
      {
        id: 2,
        desc: "Reduced rework with BIM-connected planning.",
      },
      {
        id: 3,
        desc: "Faster, more confident decision-making.",
      },
      {
        id: 4,
        desc: "Stronger construction sequencing and logistics control.",
      },
    ],

    imagePath: "/dmproject.svg",
    bgColor: "from-[#D5CBF0] to-[#E3DDFF]",
    features: [
      {
        icon: "/td1.svg",
        title: "LOD 100-200",
        description: "Conceptual and schematic design models",
      },
      {
        icon: "/td2.svg",
        title: "LOD 300-400",
        description: "Detailed design and construction documentation",
      },
      {
        icon: "/td3.svg",
        title: "LOD 500",
        description: "As-built and facility management models",
      },
      {
        icon: "/td4.svg",
        title: "LOD 600-700",
        description: "As-built and facility management models",
      },
    ],
  };

  return <DMTemplate data={serviceData} faqData={faqData.digitalMarketing.projectPlanning} />;
};

export default ProjectPlanning;
