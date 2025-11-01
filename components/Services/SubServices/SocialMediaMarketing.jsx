import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const SocialMediaMarketing = () => {
  const serviceData = {
    category: "Digital Marketing & Branding",
    title: "Social Media",
    subtitle: "Marketing",
    description: "Strategic social media marketing services to build brand awareness, engage your audience, and generate leads in the AEC industry.",
    imagePath: "/s11.svg",
    bgColor: "from-[#FFD4A8] to-[#FFB366]",
    features: [
      {
        icon: "/bim1.svg",
        title: "Content Creation",
        description: "Engaging posts"
      },
      {
        icon: "/bim2.svg",
        title: "Platform Management",
        description: "Multi-channel presence"
      },
      {
        icon: "/bim3.svg",
        title: "Analytics",
        description: "Performance tracking"
      }
    ]
  };

  return <SubServiceTemplate data={serviceData} />;
};

export default SocialMediaMarketing;

