import React from "react";
import TDTemplate from "./TDTemplate";

const SalesEnablement = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Sales enablement tools",
    heading:
      "Entrusting AEC teams with data driven systems for precision selling & pursuit intelligence",
    desc1:
      "At AEC Horizon, we design and implement intelligent sales enablement ecosystems that streamline how architecture, engineering and construction firms manage pursuits, evaluate opportunities and communicate value. Our tools integrate seamlessly with your existing CRM, ERP and BIM data environments, enabling business development and technical teams to work with real-time insights instead of fragmented spreadsheets.",
    desc2:
      "From bid readiness dashboards to pursuit lifecycle tracking, every framework we build enhances accountability, transparency and performance visibility across the sales pipeline.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Sales intelligence platforms",
        desc: "Configuring connected systems to monitor project pipelines, prequalification status and client engagement data.",
      },
      {
        id: 2,
        title: "Proposal lifecycle automation",
        desc: "Digitizing opportunity tracking, document versioning and submission workflows.",
      },
      {
        id: 3,
        title: "Integration with BIM & ERP systems",
        desc: "Linking design, costing and commercial data sets for unified decision making.",
      },
      {
        id: 4,
        title: "Interactive dashboards & KPIs",
        desc: "Developing visual analytics to assess pursuit velocity, conversion ratios and revenue projections.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Intelligent pursuit-tracking architecture and data pipeline automation.",
      },
      {
        id: 2,
        desc: "Integration between CRM, BIM and project delivery platforms.",
      },
      {
        id: 3,
        desc: "Configurable dashboards for bid analytics and prequalification monitoring.",
      },
      {
        id: 4,
        desc: "Predictive modeling to assess opportunity win likelihood and resource allocation.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC driven design logic",
        desc: "Systems engineered around the pursuit patterns of design and construction firms.",
      },
      {
        id: 2,
        title: "Performance insight",
        desc: "Every module built to reveal measurable, actionable intelligence; not static reports.",
      },
      {
        id: 3,
        title: "Seamless interoperability",
        desc: "Solutions that sync with tools like HubSpot, Salesforce, Procore and Autodesk Construction Cloud.",
      },
      {
        id: 4,
        title: "Adaptive architecture",
        desc: "Platforms scalable for multi-office operations and expanding business portfolios.",
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

export default SalesEnablement;
