import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const SeoConstruction = () => {
  const serviceData = {
    category: "Digital Marketing & Branding",
    title: "SEO for",
    subtitle: "Construction & BIM",
    description: "Specialized SEO services tailored for construction and BIM companies to improve online visibility and generate qualified leads.",
    imagePath: "/s11.svg",
    bgColor: "from-[#FFD4A8] to-[#FFB366]",
    features: [
      {
        icon: "/bim1.svg",
        title: "Keyword Research",
        description: "Industry-specific"
      },
      {
        icon: "/bim2.svg",
        title: "Technical SEO",
        description: "Site optimization"
      },
      {
        icon: "/bim3.svg",
        title: "Content Strategy",
        description: "Ranking content"
      }
    ]
  };

  return <SubServiceTemplate data={serviceData} />;
};

export default SeoConstruction;

