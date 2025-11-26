import React from "react";
import TDTemplate from "./TDTemplate";

const DigitalTransformation = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Digital transformation consulting",
    heading:
      "Driving AEC Digital Transformation for Smarter, Connected Workflows",
    desc1:
      "At AEC Horizon, we empower architecture, engineering, and construction (AEC) firms to transform traditional processes through digital transformation consulting that integrates people, technology, and performance. Our expertise spans from BIM-driven automation to intelligent data management, ensuring your business adapts seamlessly to today’s digital-first environment.",
    desc2:
      "Through tailored AEC digital transformation strategies, we help firms boost profitability, improve project coordination, and accelerate decision-making using AI, cloud-based collaboration tools, and analytics-backed insights. Every transformation plan we develop is designed to optimize workflows, strengthen operational efficiency, and ensure your teams stay aligned with long-term business goals.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Digital Strategy Formulation",
        desc: "Crafting custom transformation roadmaps that align with your firm's delivery models, market growth plans, and business objectives.",
      },
      {
        id: 2,
        title: "Process Automation & Optimization",
        desc: "Leveraging AI, BIM integration, and connected systems to eliminate manual work and speed up project delivery.",
      },
      {
        id: 3,
        title: "Interoperable Ecosystem Design",
        desc: "Connecting CRMs, project management software, and design tools to create a unified, data-driven environment.",
      },
      {
        id: 4,
        title: "Technology Selection & Implementation",
        desc: "Evaluating and deploying construction technology solutions that fit your specific project stage and team needs.",
      },
      {
        id: 5,
        title: "Change Enablement & Governance",
        desc: "Guiding teams with structured onboarding, training, and digital adoption programs to achieve long-term sustainability.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Complete BIM deployment and ecosystems for information management.",
      },
      {
        id: 2,
        desc: "Integration of the CRM/ERP, Power BI, and Revit systems via API.",
      },
      {
        id: 3,
        desc: "Re-engineering processes for workflows in design, procurement, and construction.",
      },
      {
        id: 4,
        desc: "Forecasting, model validation, and project intelligence dashboards with AI assistance.",
      },
    ],
    whyChooseAec: [
      {
        id: 1,
        title: "AEC-Centric Digital Expertise",
        desc: "With decades of experience across architecture, engineering, and construction (AEC), we specialize in crafting digital transformation strategies that enhance efficiency and profitability through BIM and cloud-based innovation.",
      },
      {
        id: 2,
        title: "ROI-Focused Digital Strategy",
        desc: "Every AEC digital transformation project we undertake is backed by measurable return on investment (ROI) and operational performance benchmarks.",
      },
      {
        id: 3,
        title: "Seamless Implementation",
        desc: "We ensure smooth adoption of construction technology and automation systems, balancing technical deployment with team readiness and organizational alignment.",
      },
      {
        id: 4,
        title: "Cross-Platform Integration",
        desc: "Our expertise spans Autodesk Construction Cloud, Navisworks, Bentley iTwin, and other digital ecosystems, enabling unified, data-driven workflows.",
      },
      {
        id: 5,
        title: "Sustainable Digital Growth",
        desc: "We design adaptive transformation frameworks that evolve with emerging technologies, ensuring your business remains competitive in the global AEC marketplace.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <strong>Connected Digital Ecosystem:</strong> Seamlessly integrate
            every AEC project and operational workflow through a unified digital
            ecosystem powered by BIM and cloud technology.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong>Reduced Manual Workload:</strong> Automate repetitive tasks
            to minimize human dependency, eliminate duplication, and increase
            team productivity.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Real-Time Data Intelligence:</strong> Access accurate,
            real-time insights into project, resource utilization,
            and cost efficiency for data-backed decision-making.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Accelerated Project Delivery:</strong> Shorten delivery
            timelines while enhancing collaboration across design, engineering,
            and construction teams.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            <strong>Future-Ready Infrastructure:</strong> Build a scalable,
            AI-driven foundation that supports advanced analytics, automation,
            and digital transformation initiatives.
          </>
        ),
      },
    ],

    imagePath: "/s11.svg",
    bgColor: "from-[#D5CBF0] to-[#E3DDFF]",
    features: [
      {
        icon: "/dm1.svg",
        title: "LOD 100-200",
        description: "Conceptual and schematic design models",
      },
      {
        icon: "/dm2.svg",
        title: "LOD 300-400",
        description: "Detailed design and construction documentation",
      },
      {
        icon: "/dm3.svg",
        title: "LOD 500",
        description: "As-built and facility management models",
      },
      {
        icon: "/dm4.svg",
        title: "LOD 600-700",
        description: "As-built and facility management models",
      },
    ],
  };

  return <TDTemplate data={serviceData} />;
};

export default DigitalTransformation;
