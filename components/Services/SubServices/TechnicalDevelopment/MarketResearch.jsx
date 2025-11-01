import React from "react";
import TDTemplate from "./TDTemplate";

const MarketResearch = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Market research & Analysis",
    heading: "Converting AEC trends into actionable foresight",
    desc1:
      "At AEC Horizon, we provide data driven market intelligence that empowers architecture, engineering and construction firms to navigate shifting procurement landscapes with confidence. Our research integrates quantitative analytics, BIM adoption metrics and project trend mapping to uncover opportunities, risks and emerging demand corridors across regions and sectors.",
    desc2:
      "From infrastructure pipelines and developer insights, our analysis ensures your firm’s strategy aligns with where the market is heading; not where it’s been.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Sector wide market analysis",
        desc: "Insight into regional project volumes, tender activities and investment patterns.",
      },
      {
        id: 2,
        title: "Competitor benchmarking",
        desc: "Evaluation of positioning, service scope and pricing trends within the AEC ecosystem.",
      },
      {
        id: 3,
        title: "Procurement intelligence reports",
        desc: "Tracking of live and upcoming tenders, framework agreements and pre-qualification lists.",
      },
      {
        id: 4,
        title: "Client behaviour insights",
        desc: "Studying decision drivers, pain points and procurement criteria across design and construction stakeholders.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Quantitative data modeling and forecasting for AEC demand cycles",
      },
      {
        id: 2,
        desc: "Global infrastructure pipeline monitoring across public and private sectors",
      },
      {
        id: 3,
        desc: "Market maturity assessment for BIM implementation and ISO 19650 compliance",
      },
      {
        id: 4,
        desc: "Region based trend mapping for architectures, engineering and EPC firms",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Predictive Accuracy",
        desc: "Proprietary data frameworks that identify emerging project clusters before they enter the bid stage.",
      },
      {
        id: 2,
        title: "Strategic depth",
        desc: "Insights that connect market data with commercial strategy and business development priorities.",
      },
      {
        id: 3,
        title: "Decision-ready outputs",
        desc: "Reports structured for board level presentation and quick execution.",
      },
      {
        id: 4,
        title: "Global perspective",
        desc: "Experience across North America, Europe and the Middle East with localised market understanding.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Early identification of profitable project and tender opportunities",
      },
      {
        id: 2,
        desc: "Data backed strategy formulation for business expansion",
      },
      {
        id: 3,
        desc: "Enhanced visibility into competitor movements and client expectations",
      },
      {
        id: 4,
        desc: "Improved bid targeting and qualification accuracy",
      },
      {
        id: 5,
        desc: "Informed investment and resource allocation across geographies",
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

export default MarketResearch;
