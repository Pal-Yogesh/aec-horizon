import React from "react";
import DMTemplate from "./DMTemplate";

const ProjectPlanning = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Project planning & scheduling",
    heading: "Accurate Project Schedules for Greater Informed Delivery",
    desc1:
      "We at AEC Horizon convert intricate building projects into organized, data-driven schedules. ",
    desc2:
      "To guarantee accuracy from conception to completion, our project planning and scheduling services incorporate AI-assisted forecasting, 4D simulation, and BIM intelligence. Every resource, dependency, and milestone is planned to provide control, clarity, and cost effectiveness over the course of your project.",
    desc3: "",
    whatWeOffer: [
      {
        id: 1,
        title: "Creating baseline, look-ahead, and resource-loaded schedules",
        desc: "in Primavera P6 or MS Project is known as comprehensive project scheduling.",
      },
      {
        id: 2,
        title: "Connecting design models to construction schedules",
        desc: "for clash-free sequencing and visible progress simulation is known as BIM 4D integration.",
      },
      {
        id: 3,
        title: "Finding dependencies and limitations",
        desc: "for proactive risk management and delay avoidance is known as critical path analysis.",
      },
      {
        id: 4,
        title: "Progress tracking and forecasting:",
        desc: "Using data-driven observation to keep things transparent and anticipate delays.",
      },
      {
        id: 5,
        title: "Earned Value Management:",
        desc: "Using productivity indicators and time-cost analytics to measure performance metrics.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: (
          <>
           Integration of LOD-based schedules for BIM collaboration.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            Simulation of construction phasing for high-rise and infrastructure projects.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
           Sequencing of procurement and logistics in digital twins.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            Syncing design, MEP, and structural workflows across disciplines.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            Automated reporting systems and predictive scheduling analytics.
          </>
        ),
      },
      
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Data-Driven Precision:",
        desc: "We align schedules with real-time project data to deliver actionable intelligence and improve project predictability.",
      },
      {
        id: 2,
        title: "Multi-Platform Proficiency:",
        desc: "Expert integration across BIM 360, MS Project, Primavera, and Synchro 4D for seamless cross-platform coordination.",
      },
      {
        id: 3,
        title: "Performance Visibility:",
        desc: "Dashboards that offer real-time insights into productivity, delays, and performance KPIs for informed decision-making.",
      },
      {
        id: 4,
        title: "Collaborative Planning:",
        desc: "Encouraging transparent communication and collaboration between owners, contractors, and consultants to ensure optimal project outcomes.",
      },
    ],
    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <strong className="text-[#6C3612]">Project schedules and optimum resource utilization</strong> that are of top-notch quality.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong className="text-[#6C3612]">Reduced rework </strong> thanks to planning connected to BIM.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong className="text-[#6C3612]">Proactive decision-making</strong> fand increased visibility.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong className="text-[#6C3612]">Construction sequencing</strong> and logistics control optimization.
          </>
        ),
      },
      
    ],
    imagePath: "/s11.svg",
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

  return <DMTemplate data={serviceData} />;
};

export default ProjectPlanning;
