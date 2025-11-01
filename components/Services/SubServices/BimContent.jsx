import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const BimContent = () => {
  const serviceData = {
    category: "Digital Marketing & Branding",
    title: "BIM Content",
    subtitle: "Creation",
    description: "Create compelling BIM-focused content including technical articles, case studies, and educational materials to establish thought leadership.",
    imagePath: "/s11.svg",
    bgColor: "from-[#FFD4A8] to-[#FFB366]",
    features: [
      {
        icon: "/bim1.svg",
        title: "Technical Writing",
        description: "Expert content"
      },
      {
        icon: "/bim2.svg",
        title: "Case Studies",
        description: "Project showcases"
      },
      {
        icon: "/bim3.svg",
        title: "Educational Content",
        description: "Thought leadership"
      }
    ]
  };

  return <SubServiceTemplate data={serviceData} />;
};

export default BimContent;

