import React from "react";
import TDTemplate from "./TDTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const ProposalRfp = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Proposal & RFP Support",
    heading: "Proposal and RFP Support Services for AEC and BIM Firms",
    desc1:
      "At AEC Horizon, we specialize in helping architecture, engineering, and construction (AEC) firms create technically strong, visually polished, and evaluation-ready proposals that increase win rates. Our Proposal and RFP Support Services blend BIM expertise, strategic storytelling, and regulatory compliance to help firms stand out in competitive bids across international markets.",
    desc2:
      "We ensure that every proposal reflects your firm strengths, from technical precision to design clarity, giving decision-makers confidence in your capability and delivery approach.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Tender Strategy & Compliance Review",
        desc: "Clear interpretation of RFPs with focus on evaluation scoring alignment and BIM compliance.",
      },
      {
        id: 2,
        title: "Technical Content Structuring",
        desc: "Converting BIM workflows, LOD frameworks, and project methodologies into compelling deliverables.",
      },
      {
        id: 3,
        title: "Design & Formatting Support",
        desc: "Developing on-brand, standards-compliant proposals with strong visual hierarchy and readability.",
      },
      {
        id: 4,
        title: "Bid Storyline Development",
        desc: "Crafting persuasive narratives that align your strengths with client procurement goals.",
      },
      {
        id: 5,
        title: "Post-Submission Feedback Analysis",
        desc: "Reviewing feedback and refining future proposals for improved RFP success rates.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "BIM aligned proposal documentation and LOD standardisation",
      },
      {
        id: 2,
        desc: "Technical storytelling and scope definition",
      },
      {
        id: 3,
        desc: "Visual and structural formatting for RFP submissions",
      },
      {
        id: 4,
        desc: "Integrated cost and schedule rationalisation",
      },
      {
        id: 5,
        desc: "International tender compliance and certification support",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC-Focused Expertise",
        desc: "Purpose-built solutions designed for BIM-based, project-driven AEC business models.",
      },
      {
        id: 2,
        title: "Automation-Enabled Efficiency",
        desc: "Streamlined proposal workflows that minimize manual effort and improve submission speed.",
      },
      {
        id: 3,
        title: "Strategic Growth Orientation",
        desc: "Tailored proposal strategies built to increase conversion and win rates across Europe, the Middle East, and the USA.",
      },
      {
        id: 4,
        title: "End-to-End Enablement",
        desc: "Complete support from proposal planning to submission and training, ensuring smooth delivery.",
      },
      {
        id: 5,
        title: "Data Integrity & Compliance",
        desc: "Structured, transparent, and compliant proposal documentation for global AEC standards.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Consistent flow of qualified BIM and AEC leads from targeted international markets like Europe, the Middle East, and the USA.",
      },
      {
        id: 2,
        desc: "Centralized and automated proposal workflows for faster client communication and submission management.",
      },
      {
        id: 3,
        desc: "Reduced sales cycles with improved RFP conversion rates through data-backed proposal strategies.",
      },
      {
        id: 4,
        desc: "Actionable insights and analytics to refine AEC business development performance continuously.",
      },
      {
        id: 5,
        desc: "Scalable framework for sustainable growth, helping AEC and BIM firms expand globally with measurable results.",
      },
    ],

    imagePath: "/tdrpf.svg",
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

  return <TDTemplate data={serviceData} faqData={faqData.technicalBusinessDev.proposalRfp} />;
};

export default ProposalRfp;
