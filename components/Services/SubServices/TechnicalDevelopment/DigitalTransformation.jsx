import React from "react";
import TDTemplate from "./TDTemplate";

const DigitalTransformation = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Digital transformation consulting",
    heading:
      "Redefining AEC companies' design, delivery, and competitive strategies for the digital age.",
    desc1:
      "rom data integration to process automation and intelligent collaboration, we at AEC Horizon help businesses navigate the full range of digital evolution. Technology, people, and performance are all connected in our consulting practice, which guarantees that every transformation project improves operational effectiveness, boosts profitability, and speeds up decision-making.",
    desc2:
      " In order to build a linked digital environment that is suited to your company's strategic direction, we integrate cloud-based processes, analytics-driven governance, and BIM maturity insights.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Formulating a Digital Strategy",
        desc: "Outlining transformation plans that align with delivery methods, market expansion strategies, and corporate objectives.",
      },
      {
        id: 2,
        title: "Process Automation & Optimization",
        desc: "Using AI, BIM integration, and system-level synchronization to streamline repetitive procedures.",
      },
      {
        id: 3,
        title: "Creating Interoperable Environments",
        desc: "Linking project management software, CRMs, and design tools to build an efficient data ecosystem.",
      },
      {
        id: 4,
        title: "Technology Selection & Implementation",
        desc: "Assessing, setting up, and implementing software solutions most appropriate for your project's development stage.",
      },
      {
        id: 5,
        title: "Change Enablement Programs",
        desc: "Providing teams with structured onboarding and governance support to help them adapt to digital procedures.",
      },
    ],
    ourExpertiseCover: [
      {
        id: 1,
        desc: "Complete BIM deployment and ecosystems for information management.",
      },
      {
        id: 2,
        desc: "Integration of the CRM/ERP, Power BI, and Revit systems via API.",
      },
      {
        id: 3,
        desc: "Re-engineering processes for workflows in design, procurement, and construction.",
      },
      {
        id: 4,
        desc: "Forecasting, model validation, and project intelligence dashboards with AI assistance.",
      },
    ],
    whyChooseAec: [
      {
        id: 1,
        title: "AEC-centric knowledge",
        desc:
          "Decades of combined experience in design, engineering, and technology contexts make up AEC-Centric Knowledge.",
      },
      {
        id: 2,
        title: "Outcome-Driven Strategy",
        desc:
          "All digital projects are based on quantifiable ROI and efficiency indicators.",
      },
      {
        id: 3,
        title: "Smooth Implementation",
        desc:
          "Equilibrium attention to operational preparedness, cultural adoption, and technical setup.",
      },
      {
        id: 4,
        title: "Cross-Platform Mastery",
        desc:
          "Proficiency with Navisworks, Bentley iTwin, Autodesk Construction Cloud, and associated ecosystems.",
      },
      {
        id: 5,
        title: "Sustainable Digital Growth",
        desc:
          "Transformation models designed to change with emerging technology and market conditions are known as sustainable digital growth models.",
      },
    ],
    ourExpertiseCover2: [
      {
        id: 1,
        desc: "All projects and company tasks are connected by an integrated digital ecosystem.",
      },
      {
        id: 2,
        desc: "Decreased manual dependency and duplication across processes.",
      },
      {
        id: 3,
        desc: "Real-time insight into the consumption of resources, data accuracy, and project health.",
      },
      {
        id: 4,
        desc: "Shortened delivery times and a boost in teamwork.",
      },
      {
        id: 5,
        desc: "Scalable infrastructure set up for advanced analytics, automation, and artificial intelligence.",
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

export default DigitalTransformation;
