import React from "react";
import TDTemplate from "./TDTemplate";

const GoToMarket = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Go-to-market Strategy for AEC Services",
    heading: "Positioning AEC firms for global growth",
    desc1:
      "At AEC Horizon, we help architecture, engineering and construction companies design go-to-market strategies that unlock international visibility and attract high value clients. Our approach merges industry intelligence, competitive benchmarking, and BIM driven insights to ensure your firm stands out in an increasingly digital built environment.",
    desc2:
      "From market entry roadmaps to partner alignment and brand positioning, we guide you through every phase; ensuring your capabilities are presented strategically to the right audiences, across the right regions.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Market Opportunity Assessment",
        desc: "In-depth research on global AEC and BIM demand, identifying lucrative verticals and geographic clusters.",
      },
      {
        id: 2,
        title: "Value Proposition Development",
        desc: "Translating your technical expertise into a compelling narrative that resonates with decision makers and project owners.",
      },
      {
        id: 3,
        title: "Competitive Differentiation Strategy",
        desc: "Defining unique market positioning to set your firm apart in a crowded consultancy landscape.",
      },
      {
        id: 4,
        title: "Brand & Channel Strategy",
        desc: "Creating high-impact go-to-market frameworks spanning digital platforms, industry partnerships, and BIM marketplaces.",
      },
      {
        id: 5,
        title: "Growth Roadmapping",
        desc: "Aligning business objectives with execution timelines for sustainable expansion.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Fixing fragmented positioning and unclear service relevance across tender categories.",
      },
      {
        id: 2,
        desc: "Strategic market entry for AEC and BIM consultancies.",
      },
      {
        id: 3,
        desc: "Region-specific brand visibility and client access.",
      },
      {
        id: 4,
        desc: "BIM-driven marketing collateral and digital outreach.",
      },
      {
        id: 5,
        desc: "Value-based pricing and lifecycle proposal modeling.",
      },
      {
        id: 6,
        desc: "Global visibility through BIM directories and tender platforms.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC Specific Insight",
        desc: "Deep familiarity with architecture, engineering, and construction procurement ecosystems.",
      },
      {
        id: 2,
        title: "Data Backed Strategy",
        desc: "Every recommendation is grounded in industry metrics and market dynamics.",
      },
      {
        id: 3,
        title: "Collaborative Process",
        desc: "Seamless integration with your internal leadership and marketing teams.",
      },
      {
        id: 4,
        title: "Proven Global Experience",
        desc: "Trusted by AEC firms across the US, UK, GCC, and Europe.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Increased international visibility and brand recognition.",
      },
      {
        id: 2,
        desc: "Stronger alignment with high-value client segments.",
      },
      {
        id: 3,
        desc: "Streamlined project acquisition process.",
      },
      {
        id: 4,
        desc: "Competitive differentiation in BIM-led markets.",
      },
      {
        id: 5,
        desc: "Predictable, sustainable growth trajectory.",
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

export default GoToMarket;
