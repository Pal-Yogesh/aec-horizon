import React from "react";
import TDTemplate from "./TDTemplate";

const ProposalDevelopment = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Proposal Development & Estimation",
    heading: "Transforming bid documents into wins",
    desc1:
      "At AEC Horizon, we specialise in making technically robust, commercially persuasive proposals that elevate your competitive standing in the global AEC marketplace. Our approach fused BIM-centric intelligence, cost forecasting expertise and strategic storytelling, ensuring every submission not only meets compliance but commands attention.",
    desc2:
      "From multidisciplinary design tenders to infrastructure mega-project bids, our team ensures your proposal is as refined, quantified and credible as your technical capability.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Technical documentation support",
        desc: "Authoring and formatting design narratives, BIM execution plans and methodology reports.",
      },
      {
        id: 2,
        title: "Estimation & cost planning",
        desc: "Accurate take-offs, quantity analysis and cost benchmarking aligned with global pricing indices.",
      },
      {
        id: 3,
        title: "Bid coordination & compliance management",
        desc: "Structuring submissions that satisfy all pre-qualification, QA/QC and legal requirements.",
      },
      {
        id: 4,
        title: "Visual and content enhancement",
        desc: "Professionally designed layouts, infographics and digital-ready presentation assets.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Bid documentation combining LOD references, BIM data and execution strategies.",
      },
      {
        id: 2,
        desc: "Cost forecasting and comparative estimation across disciplines and project scales.",
      },
      {
        id: 3,
        desc: "Multi-region RFP management with localised pricing and regulatory alignment.",
      },
      {
        id: 4,
        desc: "Rapid response proposal support for tight deadlines and global tenders.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "BIM driven accuracy",
        desc: "We align your proposal narrative with data-rich modeling and precise LOD definitions.",
      },
      {
        id: 2,
        title: "Strategic commercial framing",
        desc: "Every section articulates not just compliance but tangible project value and delivery capability.",
      },
      {
        id: 3,
        title: "Global tender expertise",
        desc: "Deep experience across FIDIC, NEC and regional procurement frameworks.",
      },
      {
        id: 4,
        title: "High impact presentation",
        desc: "Visual consistency and professional formatting that strengthen perception and clarity.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Elevated win ratios through precise, persuasive proposal content.",
      },
      {
        id: 2,
        desc: "Transparent cost modeling for client confidence.",
      },
      {
        id: 3,
        desc: "Enhanced brand authority across public and private tenders.",
      },
      {
        id: 4,
        desc: "Reduced internal turnaround time for high-stakes bids.",
      },
      {
        id: 5,
        desc: "Consistent submission quality across global sectors.",
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

export default ProposalDevelopment;
