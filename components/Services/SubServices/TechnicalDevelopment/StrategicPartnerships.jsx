import React from "react";
import TDTemplate from "./TDTemplate";

const StrategicPartnerships = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Strategic partnerships & Alliances",
    heading: "Building systems that expand capability & credibility",
    desc1:
      "At AEC Horizon, we specialise in forming strategic collaborations that amplify technical expertise, extend market access and strengthen project credentials. Our partnership frameworks connect architecture, engineering, construction and technical firms through structured alliance models designed for mutual growth and cross disciplinary innovation.",
    desc2:
      "Whether the goal is regional expansion, consortium-based bidding or integrated delivery alignement, we establish relationships that unlock scale, trust and continuity across the built environment value chain.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Partner identification & Vetting",
        desc: "Evaluating potential collaborators based on domain expertise, digital maturity and project relevance.",
      },
      {
        id: 2,
        title: "Consortium structuring",
        desc: "Developing compliant joint venture and design build alliance models for multi disciplinary pursuits.",
      },
      {
        id: 3,
        title: "Collaboration governance frameworks",
        desc: "Defining shared accountability structures, data protocols and decision hierarchies.",
      },
      {
        id: 4,
        title: "Technology & Knowledge Alliances",
        desc: "Connecting firms with BIM solution providers, digital twin experts and smart construction innovators.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Consortium modeling for PPP, EPC and design build procurement structures.",
      },
      {
        id: 2,
        desc: "Partnership due diligence, capability evaluation and digital readiness audits.",
      },
      {
        id: 3,
        desc: "Intellectual property frameworks for co-developed BIM or automation solutions.",
      },
      {
        id: 4,
        desc: "Global representation and partner negotiation for market entry and delivery alignment.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC domain specialisation",
        desc: "Partnerships structured around real project life cycles, not generic business templates.",
      },
      {
        id: 2,
        title: "Risk responsive design",
        desc: "Alliances engineered with compliance, liability and contractual balance in mind.",
      },
      {
        id: 3,
        title: "Network leverage",
        desc: "Access to a global ecosystem of AEC, BIM and technology collaborators.",
      },
      {
        id: 4,
        title: "Operational clarity",
        desc: "Defined governance models that minimise friction across disciplines and geographies.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Accelerated entry into international markets and procurement networks.",
      },
      {
        id: 2,
        desc: "Strengthened technical delivery through complementary capabilities.",
      },
      {
        id: 3,
        desc: "Enhanced pre-qualification success with combined portfolios.",
      },
      {
        id: 4,
        desc: "Long term collaborative frameworks fostering continuous innovation.",
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

export default StrategicPartnerships;
