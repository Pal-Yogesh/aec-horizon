import React from "react";
import TDTemplate from "./TDTemplate";

const LeadGeneration = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Lead Generation & CRM Setup",
    heading: "Turning qualified data into long term project opportunities",
    desc1:
      "At AEC Horizon, we empower AEC firms to modernise their business development with precision-engineered lead generation systems and intelligently architected CRM infrastructures. Our approach bridges the gap between technical delivery and commercial growth, helping your teams move from reactive pursuits to predictive, relationship driven engagement.",
    desc2:
      "Through data integration, automation and strategic insight, we create a unified ecosystem where every interaction is traceable, measurable and optimised for conversion.",
      ourValuesInclude : [
        {
          id: 1,
          title: "Lead Intelligence Frameworks",
          desc: "Mapping qualified prospects across architecture, engineering, and construction markets.",
        },
        {
          id: 2,
          title: "CRM Architecture & Implementation",
          desc: "Configuring HubSpot, Zoho, or Salesforce to align with your firm’s AEC workflows.",
        },
        {
          id: 3,
          title: "Automated Engagement Systems",
          desc: "Nurturing prospects through targeted, behavior-based email and communication sequences.",
        },
        {
          id: 4,
          title: "Pipeline Structuring & Reporting Dashboards",
          desc: "Enabling live tracking of pursuits, conversions, and project values.",
        },
        {
          id: 5,
          title: "Data Governance & Integration",
          desc: "Ensuring your contact base is structured, clean, and seamlessly linked to proposal workflows.",
        },
      ],
      ourExpertiseCover : [
        {
          id: 1,
          desc: "Qualified opportunity sourcing from global AEC and BIM ecosystems.",
        },
        {
          id: 2,
          desc: "Custom CRM architecture designed for multi-discipline project pipelines.",
        },
        {
          id: 3,
          desc: "Automation-driven nurturing and client reactivation workflows.",
        },
        {
          id: 4,
          desc: "Real-time analytics and conversion intelligence dashboards.",
        },
        {
          id: 5,
          desc: "Unified data architecture linking leads, proposals, and contracts.",
        },
      ],
      
    whyChooseAec :[
      {
        id: 1,
        title: "AEC Focused Precision",
        desc: "Every strategy is designed for the dynamics of design, construction, and BIM consulting firms.",
      },
      {
        id: 2,
        title: "Technology with Intent",
        desc: "CRMs aren’t just configured — they’re engineered for success and revenue visibility.",
      },
      {
        id: 3,
        title: "Automation Meets Human Insight",
        desc: "Smart workflows that empower your teams without replacing their expertise.",
      },
      {
        id: 4,
        title: "Scalable & Future Ready",
        desc: "Systems built to evolve with your firm’s markets, clients, and service diversification.",
      },
    ],

     ourExpertiseCover2 : [
      {
        id: 1,
        desc: "Continuous inflow of pre-qualified, project-aligned leads.",
      },
      {
        id: 2,
        desc: "Centralized client intelligence and transparent sales tracking.",
      },
      {
        id: 3,
        desc: "Actionable insights for leadership and bid teams.",
      },
      {
        id: 4,
        desc: "Long-term scalability with minimal manual intervention.",
      },
      {
        id: 5,
        desc: "Shorter conversion cycles and higher efficiency.",
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

export default LeadGeneration;
