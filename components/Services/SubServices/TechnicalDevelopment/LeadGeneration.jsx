import React from "react";
import TDTemplate from "./TDTemplate";

const LeadGeneration = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Lead Generation & CRM Setup",
    heading: "Turning Qualified Leads into Scalable AEC Project Opportunities",
    desc1:
      "At AEC Horizon, we help architecture, engineering, and construction (AEC) firms strengthen their business development with advanced lead generation systems and customized CRM setups. Our goal is to transform disconnected data into actionable insights, helping your teams move from reactive selling to proactive, relationship-driven growth.",
    desc2:
      "Our BIM-integrated CRM solutions connect your marketing, sales, and project delivery teams in one ecosystem, ensuring every client interaction is measurable, traceable, and optimized for conversion.",
    ourValuesInclude: [
      {
        id: 1,
        title: "AEC Lead Intelligence Frameworks",
        desc: "Identify and map high-value project leads across architecture, engineering, and construction sectors using targeted data analytics.",
      },
      {
        id: 2,
        title: "Custom CRM Setup & Integration",
        desc: "Configure and align platforms like HubSpot, Salesforce, or Zoho with your firm's AEC and BIM workflows.",
      },
      {
        id: 3,
        title: "Automated Client Engagement",
        desc: "Use smart automation to nurture leads with behavior-based communication and personalized follow-ups.",
      },
      {
        id: 4,
        title: "Pipeline Structuring & Analytics",
        desc: "Gain real-time visibility into pursuits, proposal performance, and project value through structured dashboards.",
      },
      {
        id: 5,
        title: "Data Integrity & Governance",
        desc: "Maintain a clean, unified database that enhances both lead management and sales forecasting accuracy.",
      },
    ],

    ourExpertiseCover: [
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

    whyChooseAec: [
      {
        id: 1,
        title: "AEC Industry Expertise",
        desc: "Our lead generation and CRM solutions are tailored for the unique workflows of architecture, engineering, and construction (AEC) firms, ensuring precision and measurable growth.",
      },
      {
        id: 2,
        title: "Strategic CRM Implementation",
        desc: "We don't just set up CRMs, we engineer data-driven systems that boost client relationships, revenue visibility, and project tracking efficiency.",
      },
      {
        id: 3,
        title: "Smart Automation with Human Insight",
        desc: "Empower your sales and business development teams with automated engagement tools that complement expertise, not replace it.",
      },
      {
        id: 4,
        title: "Scalable and Future-Ready Systems",
        desc: "Our CRM setups evolve with your firm's expansion across global markets like the UK, UAE, and USA, ensuring long-term sustainability and scalability.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <strong>Steady Flow of Qualified AEC Leads:</strong> Generate and
            manage pre-qualified, project-aligned leads through advanced AEC
            lead generation systems.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong>Centralized CRM & Client Intelligence:</strong> Gain a
            unified view of client data with transparent tracking for AEC and
            BIM business development teams.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Actionable Insights for Sales Teams:</strong> Access
            real-time analytics and automated dashboards to strengthen
            decision-making and pursuit strategies.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Scalable, Automated Frameworks:</strong> Minimize manual
            effort with CRM automation tools designed for long-term scalability
            and multi-office operations.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            <strong>Higher Conversion Ratios:</strong> Accelerate proposal
            cycles, enhance engagement, and improve win rates across
            architecture, engineering, and construction markets.
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

export default LeadGeneration;
