import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";

const ProjectPlanning = () => {
  const serviceData = {
    category: "Digital Marketing & Branding",
    title: "Project Planning",
    subtitle: "& Scheduling",
    description: "Comprehensive project planning and scheduling services to ensure timely delivery and efficient resource utilization.",
    imagePath: "/s11.svg",
    bgColor: "from-[#FFD4A8] to-[#FFB366]",
    features: [
      {
        icon: "/bim1.svg",
        title: "Timeline Development",
        description: "Realistic schedules"
      },
      {
        icon: "/bim2.svg",
        title: "Resource Planning",
        description: "Optimal allocation"
      },
      {
        icon: "/bim3.svg",
        title: "Progress Tracking",
        description: "Milestone monitoring"
      }
    ]
  };

  return <SubServiceTemplate data={serviceData} />;
};

export default ProjectPlanning;

