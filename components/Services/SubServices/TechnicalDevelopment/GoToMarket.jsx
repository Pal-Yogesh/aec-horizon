import React from "react";
import TDTemplate from "./TDTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const GoToMarket = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Go-to-market Strategy for AEC Services",
    heading: "Strategic Go-to-Market Solutions for AEC & BIM Firms Worldwide",
    desc1: (
      <span>
        At AEC Horizon, we specialize in helping{" "}
        architecture, engineering, and construction (AEC) firms
        establish a strong global presence through
        data-driven go-to-market (GTM) strategies. Our approach
        combines{" "}
        BIM industry insights, competitive benchmarking, and{" "}
        regional market intelligence to position your brand
        effectively in international markets, including{" "}
        Europe, the Middle East, and the USA.
      </span>
    ),
    desc2: (
      <span>
        We help AEC consultancies and BIM service providers{" "}
        define their market positioning, craft compelling value propositions,
        and align their business goals with profitable market opportunities.
        From brand visibility to{" "}
        partner network development, our GTM strategies are
        designed to accelerate growth and attract high-value clients in a
        digitally driven construction ecosystem.
      </span>
    ),
    ourValuesInclude: [
      {
        id: 1,
        title: "Market Opportunity Assessment",
        desc: (
          <span>
            In-depth research on global BIM and AEC markets,
            identifying growth clusters and region-specific opportunities.
          </span>
        ),
      },
      {
        id: 2,
        title: "Value Proposition Development",
        desc: (
          <span>
            Crafting narratives that communicate technical expertise and
            ROI-driven project outcomes.
          </span>
        ),
      },
      {
        id: 3,
        title: "Competitive Positioning Strategy",
        desc: (
          <span>
            Building differentiation strategies to make your firm stand out in
            the AEC consulting landscape.
          </span>
        ),
      },
      {
        id: 4,
        title: "Brand & Channel Strategy",
        desc: (
          <span>
            Designing go-to-market frameworks across{" "}
            digital platforms, partnerships, and{" "}
            BIM marketplaces.
          </span>
        ),
      },
      {
        id: 5,
        title: "Global Expansion Roadmapping",
        desc: (
          <span>
            Aligning business objectives with market execution
            plans for sustainable international growth.
          </span>
        ),
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
        title: "AEC Industry Expertise",
        desc: (
          <span>
            In-depth understanding of{" "}
            architecture, engineering, and construction markets
            , ensuring tailored go-to-market strategies for
            your firm.
          </span>
        ),
      },
      {
        id: 2,
        title: "Data-Driven Approach",
        desc: (
          <span>
            Every AEC business development plan is guided by{" "}
            market analytics, BIM demand trends, and measurable
            growth insights.
          </span>
        ),
      },
      {
        id: 3,
        title: "Collaborative Execution",
        desc: (
          <span>
            We work closely with your leadership and marketing teams to align
            brand strategy with business goals
            .
          </span>
        ),
      },
      {
        id: 4,
        title: "Global Reach",
        desc: (
          <span>
            Trusted by{" "}
            AEC firms across Europe, the Middle East, and the USA
            {" "}
            for delivering sustainable growth and international visibility.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            Enhanced global visibility and brand positioning{" "}
            for AEC and BIM service firms in Europe, the Middle
            East, and the USA.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Stronger alignment with high-value clients through
            targeted AEC business development strategies.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Streamlined project acquisition and partner engagement
            {" "}
            via data-backed go-to-market planning.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Competitive differentiation in BIM-led markets,
            helping your firm stand out among international competitors.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Sustainable business growth trajectory supported by
            strategic AEC firm growth frameworks and market
            insights.
          </span>
        ),
      },
    ],

    imagePath: "/tdgoto.svg",
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

  return <TDTemplate data={serviceData} faqData={faqData.technicalBusinessDev.marketingStrategy} />;
};

export default GoToMarket;
