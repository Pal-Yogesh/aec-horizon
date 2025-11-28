import React from "react";
import TDTemplate from "./TDTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const BrandingPositioning = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Branding & positioning strategies",
    heading:
      "Shaping AEC Brands with Clarity, Credibility, and Technical Authority",
    desc1:
      "At AEC Horizon, we help architecture, engineering, and construction (AEC) organizations define who they are and communicate their expertise with precision. Our brand positioning and identity frameworks are built on deep industry knowledge, aligning your firm’s technical competence, project experience, and innovation with how global markets perceive value.",
    desc2:
      "We go beyond visuals and messaging; we create strategic brand systems that strengthen trust, consistency, and recognition across every client interaction, from proposal decks to digital platforms.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Brand Positioning Architecture",
        desc: "Structuring your brand narrative around technical strengths, delivery expertise, and market differentiation.",
      },
      {
        id: 2,
        title: "Visual & Verbal Identity Systems",
        desc: "Building a consistent AEC brand identity across websites, proposals, and marketing materials.",
      },
      {
        id: 3,
        title: "Competitive Messaging Frameworks",
        desc: "Positioning your firm's expertise to stand out against global industry benchmarks and competitors.",
      },
      {
        id: 4,
        title: "BIM-Aligned Communication Strategy",
        desc: "Translating BIM workflows and digital innovation into meaningful, client-focused storytelling.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Strategic differentiation across architectural, engineering and EPC domains.",
      },
      {
        id: 2,
        desc: "Message frameworks integrating technical, operational and sustainability pillars.",
      },
      {
        id: 3,
        desc: "Visual hierarchy designed aligned with ISO 19650 documentation and BIM standards.",
      },
      {
        id: 4,
        desc: "Brand architecture structuring for multi-entity or multi-region organisations.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC Industry Expertise",
        desc: "With deep understanding of architecture, engineering, and construction (AEC) communication, we design branding systems that work seamlessly across proposals, tenders, and digital touchpoints.",
      },
      {
        id: 2,
        title: "Strategic Brand Alignment",
        desc: "Every visual, verbal, and technical element is built around a unified brand goal, enhancing recognition and credibility across all client interactions.",
      },
      {
        id: 3,
        title: "Data-Driven Brand Insights",
        desc: "Our positioning strategies are powered by market analysis, competitor benchmarking, and audience research to deliver measurable impact.",
      },
      {
        id: 4,
        title: "Global Brand Consistency",
        desc: "We ensure your brand maintains a strong, cohesive presence across international AEC markets, tenders, conferences, and digital platforms.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <strong>Enhanced Market Positioning:</strong> Strengthen your firm's
            visibility and credibility with expert AEC branding and positioning
            strategies tailored for global markets.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong>Distinct Competitive Edge:</strong> Achieve clear
            differentiation in RFP submissions, partner evaluations, and
            business proposals.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Consistent Brand Experience:</strong> Maintain a cohesive
            brand identity across proposals, presentations, and digital
            marketing assets.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Improved Prequalification Visibility:</strong> Boost
            recognition in AEC tenders and procurement systems through
            technically aligned communication.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            <strong>Aligned Internal Branding:</strong> Bridge leadership,
            marketing, and technical teams to build a unified brand direction
            that supports AEC business growth.
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

  return <TDTemplate data={serviceData} faqData={faqData.technicalBusinessDev.branding} />;
};

export default BrandingPositioning;
