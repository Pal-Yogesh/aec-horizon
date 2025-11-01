import React from "react";
import DMTemplate from "./DMTemplate";

const MarketingPresentation = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Marketing presentations",
    heading:
      "Turning Technical Expertise into Visual Narratives That Win Projects",
    desc1:
      "At AEC Horizon we create engaging marketing presentations that transform complicated design, engineering, and BIM skills into visually appealing business stories.Our team combines strategic communication, data visualization, and brand precision to help AEC organizations communicate their value with clarity and conviction.",
    desc2:
      "Each deck is designed to correspond with the client's objectives, bidding requirements, and investor expectations, combining technical depth with narrative flow to capture both technical and non-tech audiences.",
    desc3:
      "Whether for bid proposals, client pitches, or portfolio showcases, our presentations use design intelligence and communication strategy to improve perception, recall, and response.",

    whatWeOffer: [
      {
        id: 1,
        title: "Corporate and capability decks",
        desc: "that are professionally prepared presentations that highlight the organization's strengths, core services, and differentiators.",
      },
      {
        id: 2,
        title: "Bid and Tender Presentations:",
        desc: "Visually accompanied narratives tailored to RFPs, prequalifications, and procurement submissions.",
      },
      {
        id: 3,
        title: "BIM and technical visualizations:",
        desc: "Using 3D models, data-driven graphics, and process diagrams to create dynamic narrative.",
      },
      {
        id: 4,
        title: "Investor and stakeholder decks",
        desc: "include presentations that align your project vision with financial and operational data.",
      },
      {
        id: 5,
        title: "Marketing collateral design",
        desc: "comprises of branded templates, icons, and infographics that remain consistent across digital and print mediums.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "BIM-enabled visual communication and technical data visualization.",
      },
      {
        id: 2,
        desc: "RFP presentation frameworks customized to align with tender evaluation criteria.",
      },
      {
        id: 3,
        desc: "Cross-platform interoperability ensuring smooth use across PowerPoint, Keynote, and cloud-based decks.",
      },
      {
        id: 4,
        desc: "Integration of motion graphics and 4D construction visuals.",
      },
      {
        id: 5,
        desc: "Narrative structure for design, implementation, and sustainability",
      },
      {
        id: 6,
        desc: "Refine content for global procurement and investor presentations.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Industry-Aware Storytelling:",
        desc: "Presentations created by experts who understand AEC workflows and BIM processes.",
      },
      {
        id: 2,
        title: "Visual Precision:",
        desc: "Each presentation is carefully curated to strike a balance between aesthetics, accuracy, and data integrity.",
      },
      {
        id: 3,
        title: "Strategic Positioning",
        desc: "that implies messaging that emphasizes value propositions and project credentials.",
      },
      {
        id: 4,
        title: "Consistent Branding:",
        desc: "that entails unified design approaches that ensure visual coherence throughout presentations.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: <>Improved client and stakeholder engagement </>,
      },
      {
        id: 2,
        desc: (
          <>
            Simpler expression of technical competence and project expertise.{" "}
          </>
        ),
      },
      {
        id: 3,
        desc: <>Increased proposal and RFP success rates. </>,
      },
      {
        id: 4,
        desc: (
          <>Brand consistency across marketing and sales touchpoints. teams.</>
        ),
      },
      {
        id: 5,
        desc: <>Better recall and visual impact in competitive offers.</>,
      },
      
    ],
    imagePath: "/s11.svg",
    bgColor: "from-[#D5CBF0] to-[#E3DDFF]",
    features: [
      {
        icon: "/td1.svg",
        title: "LOD 100-200",
        description: "Conceptual and schematic design models",
      },
      {
        icon: "/td2.svg",
        title: "LOD 300-400",
        description: "Detailed design and construction documentation",
      },
      {
        icon: "/td3.svg",
        title: "LOD 500",
        description: "As-built and facility management models",
      },
      {
        icon: "/td4.svg",
        title: "LOD 600-700",
        description: "As-built and facility management models",
      },
    ],
  };

  return <DMTemplate data={serviceData} />;
};

export default MarketingPresentation;
