import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const EmailCampaigns = () => {
  const serviceData = {
    category: "Digital Marketing & Branding",
    title: "Email Campaigns",
    subtitle: "& Pitch Decks",
    description: "Develop effective email marketing campaigns and professional pitch decks to nurture leads and close deals in the AEC sector.",
    imagePath: "/s11.svg",
    bgColor: "from-[#FFD4A8] to-[#FFB366]",
    features: [
      {
        icon: "/bim1.svg",
        title: "Campaign Strategy",
        description: "Targeted messaging"
      },
      {
        icon: "/bim2.svg",
        title: "Email Design",
        description: "Professional templates"
      },
      {
        icon: "/bim3.svg",
        title: "Pitch Decks",
        description: "Winning presentations"
      }
    ]
  };

  return <SubServiceTemplate data={serviceData} />;
};

export default EmailCampaigns;

