import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const MarketingPresentation = () => {
  const serviceData = {
    category: "Digital Marketing & Branding",
    title: "Marketing",
    subtitle: "Presentation",
    description: "Professional marketing presentations and pitch decks that effectively communicate your value proposition to clients and stakeholders.",
    imagePath: "/s11.svg",
    bgColor: "from-[#FFD4A8] to-[#FFB366]",
    features: [
      {
        icon: "/bim1.svg",
        title: "Pitch Decks",
        description: "Compelling stories"
      },
      {
        icon: "/bim2.svg",
        title: "Visual Design",
        description: "Professional layouts"
      },
      {
        icon: "/bim3.svg",
        title: "Content Strategy",
        description: "Persuasive messaging"
      }
    ]
  };

  return <SubServiceTemplate data={serviceData} />;
};

export default MarketingPresentation;

