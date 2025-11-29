import React from "react";
import TDTemplate from "./TDTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const SalesEnablement = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Sales enablement tools",
    heading:
      "Empowering AEC Firms with Data-Driven Sales Systems for Smarter Pursuit Management",
    desc1:
      "At AEC Horizon, we design and implement data-driven sales enablement systems that empower architecture, engineering, and construction (AEC) firms to streamline lead management, track pursuits, and enhance proposal performance. Our tools integrate seamlessly with CRM, ERP, and BIM data environments, creating a unified workflow that improves decision-making and cross-department collaboration.",
    desc2:
      "We help AEC and BIM service providers automate their pursuit lifecycle, reduce manual processes, and gain real-time visibility across sales pipelines, ensuring precision selling and measurable growth in competitive global markets like Europe, the Middle East, and the USA.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Sales Intelligence Platforms",
        desc: "Configure connected systems to track pipelines, prequalification progress, and client engagement data.",
      },
      {
        id: 2,
        title: "Proposal Lifecycle Automation",
        desc: "Digitize opportunity tracking, document versioning, and submission workflows for AEC business development.",
      },
      {
        id: 3,
        title: "Integration with BIM & ERP Systems",
        desc: "Connect design, costing, and commercial data for unified project pursuit management.",
      },
      {
        id: 4,
        title: "Analytics & Dashboards",
        desc: "Create visual dashboards and KPIs to monitor conversion rates, revenue projections, and pursuit performance.",
      },
      {
        id: 5,
        title: "Real-Time Insights",
        desc: "Deliver transparent sales intelligence to align technical, marketing, and leadership teams for improved outcomes.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Gain unified insight into all pursuits, leads, and active tenders through integrated AEC sales enablement tools.",
      },
      {
        id: 2,
        desc: "Automate workflows to streamline bid management and improve turnaround time for BIM and AEC tenders.",
      },
      {
        id: 3,
        desc: "Strengthen coordination between technical, sales, and commercial teams for improved pursuit success rates.",
      },
      {
        id: 4,
        desc: "Maintain consistent quality and data-backed insights that drive measurable improvements in AEC business development performance.",
      },
    ],
    

    whyChooseAec: [
      {
        id: 1,
        title: "AEC-Focused Sales Systems",
        desc: "Purpose-built solutions tailored to the pursuit workflows of architecture, engineering, and construction firms, ensuring sales processes align with real project lifecycles.",
      },
      {
        id: 2,
        title: "Actionable Performance Insights",
        desc: "Gain measurable and data-driven intelligence that improves BIM pursuit strategies and overall business growth.",
      },
      {
        id: 3,
        title: "Seamless CRM Integration",
        desc: "Connect effortlessly with platforms like HubSpot, Salesforce, Procore, and Autodesk Construction Cloud, creating a unified AEC sales ecosystem.",
      },
      {
        id: 4,
        title: "Scalable Business Architecture",
        desc: "Flexible, multi-office compatible platforms that support AEC firms expanding into global markets such as the UK, UAE, and USA.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Unified data visibility across pursuits, leads and active tenders.",
      },
      {
        id: 2,
        desc: "Faster proposal cycles through automated workflows.",
      },
      {
        id: 3,
        desc: "Enhanced collaboration between technical and commercial departments.",
      },
      {
        id: 4,
        desc: "Consistent pursuit quality and improved win ratios.",
      },
    ],

    imagePath: "/tdsales.svg",
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

  return <TDTemplate data={serviceData} faqData={faqData.technicalBusinessDev.salesEnablement} />;
};

export default SalesEnablement;
