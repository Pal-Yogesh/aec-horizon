import React from "react";
import DMTemplate from "./DMTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const MarketingPresentation = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Marketing presentations",
    heading:
      "Transforming Technical Depth into Presentations That Support Project Success",
    desc1:
      "At AEC Horizon, we craft high-impact marketing presentations that turn complex architectural, engineering, and BIM concepts into clear, compelling visual stories. Our presentation design services help AEC brands communicate value with precision, boosting visibility, trust, and win rates across competitive markets.",
    desc2:
      "We develop presentations that align with your goals, bid requirements, and brand positioning. Every deck is designed to simplify technical content, improve audience engagement, and support stronger decision-making for proposals, pitches, and stakeholder communication.",
    desc3:
      "Whether you need bid-winning decks, investor presentations, or capability showcases, our team blends visual design with AEC-specific messaging to deliver presentations that improve recall, clarity, and response.",

    whatWeOffer: [
      {
        id: 1,
        title: "Corporate & Capability Decks:",
        desc: "Professionally designed presentations that highlight your firm's strengths, service expertise, and differentiation in the AEC/BIM marketplace.",
      },
      {
        id: 2,
        title: "Bid & Tender Presentations:",
        desc: "Visual, persuasive decks tailored for RFPs, prequalifications, and procurement submissions.",
      },
      {
        id: 3,
        title: "BIM & Technical Visualizations:",
        desc: "3D models, process diagrams, and data-driven graphics that bring your technical workflows to life.",
      },
      {
        id: 4,
        title: "Investor & Stakeholder Decks:",
        desc: "Presentations aligned with financial data, market insights, and operational performance.",
      },
      {
        id: 5,
        title: "Marketing Collateral Design:",
        desc: "Branded templates, icons, infographics, and digital assets for consistent communication across all platforms.",
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
        title: "AEC-Focused Storytelling:",
        desc: "Presentation decks crafted by specialists who understand construction workflows, BIM processes, and technical project communication.",
      },
      {
        id: 2,
        title: "Visual Precision:",
        desc: "Designs built with accuracy, clarity, and brand alignment, ensuring every slide presents technical information in a simple, high-impact format.",
      },
      {
        id: 3,
        title: "Strategic Positioning:",
        desc: "Messaging shaped to highlight your firm's value proposition, project strengths, and differentiators in competitive evaluations.",
      },
      {
        id: 4,
        title: "Consistent Branding:",
        desc: "Unified visuals and layout systems that maintain brand consistency across capability decks, bid presentations, and marketing materials.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Stronger client and stakeholder engagement through clear, compelling visuals.",
      },
      {
        id: 2,
        desc: "Easier communication of technical capability and project experience.",
      },
      {
        id: 3,
        desc: "Improved proposal and RFP success rates with presentation-ready decks.",
      },
      {
        id: 4,
        desc: "Consistent brand presence across marketing, sales, and digital touchpoints.",
      },
      {
        id: 5,
        desc: "Higher recall value and better visual impact in competitive submissions.",
      },
    ],
    imagePath: "/dmmarketing.svg",
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

  return <DMTemplate data={serviceData} faqData={faqData.digitalMarketing.marketingPresentation} />;
};

export default MarketingPresentation;
