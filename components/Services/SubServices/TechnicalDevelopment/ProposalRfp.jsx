import React from "react";
import TDTemplate from "./TDTemplate";

const ProposalRfp = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Proposal & RFP Support",
    heading:
      "Winning proposals built on clarity, compliance and commercial impact.",
    desc1:
      "At AEC Horizon, we help AEC and BIM firms design technically sound, visually refined and evaluation ready proposals.",
    desc2:
      "Our proposal and RFP support services are built to elevate your win rate by blending compliance, precision and narrative excellence; ensuring your submissions stand out both technically and strategically.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Tender strategy & compliance review",
        desc: "Decoding RFPs for clear scoring alignment.",
      },
      {
        id: 2,
        title: "Technical content structuring",
        desc: "Translating BIM workflows, methodologies and LOD frameworks into clear deliverables.",
      },
      {
        id: 3,
        title: "Design and formatting support",
        desc: "Building visually cohesive, on-brand and standards-compliant submissions.",
      },
      {
        id: 4,
        title: "Bid storyline development",
        desc: "Aligning your capabilities with the client’s procurement vision.",
      },
      {
        id: 5,
        title: "Post submission analysis",
        desc: "Tracking feedback to refine future proposals.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "BIM aligned proposal documentation and LOD standardisation",
      },
      {
        id: 2,
        desc: "Technical storytelling and scope definition",
      },
      {
        id: 3,
        desc: "Visual and structural formatting for RFP submissions",
      },
      {
        id: 4,
        desc: "Integrated cost and schedule rationalisation",
      },
      {
        id: 5,
        desc: "International tender compliance and certification support",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC exclusive systems",
        desc: "Built specifically for project-driven, BIM-based business models.",
      },
      {
        id: 2,
        title: "Automation driven efficiency",
        desc: "Reduce manual work and enhance response times.",
      },
      {
        id: 3,
        title: "Strategic growth focus",
        desc: "Designed for measurable conversion improvement.",
      },
      {
        id: 4,
        title: "End to end enablement",
        desc: "From setup to configuration to training and support.",
      },
      {
        id: 5,
        title: "Data integrity first",
        desc: "Structured, transparent and compliant information management.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Consistent stream of qualified BIM/AEC leads",
      },
      {
        id: 2,
        desc: "Centralised and automated client communication",
      },
      {
        id: 3,
        desc: "Shorter sales cycles with higher conversion ratios",
      },
      {
        id: 4,
        desc: "Actionable insights for continuous improvement",
      },
      {
        id: 5,
        desc: "Scalable framework for business development growth",
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

export default ProposalRfp;
