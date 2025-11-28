import React from "react";
import TDTemplate from "./TDTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const MarketResearch = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Market research & Analysis",
    heading: "Turning AEC Market Insights into Actionable Growth Strategies",
    desc1:
      "At AEC Horizon, we deliver data-driven market research and analysis that helps architecture, engineering, and construction (AEC) firms make informed strategic decisions. Our analytics-driven approach empowers your teams to understand market trends, procurement dynamics, and emerging opportunities with clarity and confidence.",
    desc2:
      "By combining BIM adoption metrics, quantitative analytics, and project trend forecasting, we uncover insights that support smarter investments, competitive positioning, and sustainable business growth across global markets. From infrastructure pipelines to regional project intelligence, our AEC market research services ensure your strategy aligns with where the industry is heading, not where it's been.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Sector-Wide Market Analysis",
        desc: "Comprehensive insight into regional project pipelines, tender activities, and investment trends within the AEC sector.",
      },
      {
        id: 2,
        title: "Competitor Benchmarking",
        desc: "Detailed evaluation of industry positioning, service portfolios, and pricing trends for stronger market differentiation.",
      },
      {
        id: 3,
        title: "Procurement Intelligence Reports",
        desc: "Real-time tracking of live tenders, framework agreements, and pre-qualification lists to identify new project opportunities.",
      },
      {
        id: 4,
        title: "Client Behavior Insights",
        desc: "Data-backed understanding of decision drivers, pain points, and procurement patterns across construction and engineering stakeholders.",
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
        title: "Predictive Market Intelligence",
        desc: "Our proprietary AEC data frameworks identify emerging construction and engineering project clusters before they reach the tender stage, giving your firm a competitive head start.",
      },
      {
        id: 2,
        title: "Strategic Market Insights",
        desc: "We connect real-time market data with your business development and commercial strategy, helping you make informed growth decisions across global AEC sectors.",
      },
      {
        id: 3,
        title: "Decision-Ready Analysis",
        desc: "Our AEC market reports are structured for quick review and presentation, ideal for leadership teams seeking actionable intelligence and immediate execution.",
      },
      {
        id: 4,
        title: "Global Industry Expertise",
        desc: "With experience across North America, Europe, and the Middle East, we deliver localized market analysis that aligns with regional procurement patterns and investment opportunities.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <strong>Early Detection of Lucrative AEC Opportunities:</strong>{" "}
            Identify profitable construction and engineering projects before
            they enter the bidding stage through precise market data insights.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong>Data-Driven Growth Strategies:</strong> Formulate business
            expansion plans supported by reliable market analytics and real-time
            AEC performance indicators.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Enhanced Competitor and Client Intelligence:</strong> Gain
            deeper visibility into industry movements, client expectations, and
            regional demand patterns to stay ahead of the curve.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Smarter Bid Targeting and Qualification:</strong> Improve
            tender success rates with accurate project qualification and
            opportunity prioritization.
          </>
        ),
      },
      // {
      //   id: 5,
      //   desc: (
      //     <>
      //       <strong>Optimized Resource Allocation:</strong> Make informed
      //       investment and regional planning decisions with clear insights into
      //       market potential across global AEC geographies.
      //     </>
      //   ),
      // },
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

  return <TDTemplate data={serviceData} faqData={faqData.technicalBusinessDev.marketResearch} />;
};

export default MarketResearch;
