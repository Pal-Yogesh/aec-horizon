import React from "react";
import TDTemplate from "./TDTemplate";

const ProposalDevelopment = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Proposal Development & Estimation",
    heading: "Transforming Bid Proposals into Winning Submissions",
    desc1:
      "At AEC Horizon, we deliver comprehensive proposal development and estimation services that help architecture, engineering, and construction (AEC) firms craft persuasive, technically sound, and visually compelling bids.",
    desc2:
      " Our BIM-integrated estimation workflows combine technical precision with commercial storytelling, ensuring every submission aligns with client expectations and stands out in competitive tender evaluations. We bring together cost forecasting expertise, quantity analysis, and structured documentation to help firms reduce risk, maintain compliance, and secure more projects with confidence.",
    ourValuesInclude: [
      {
        id: 1,
        title: "BIM-Based Technical Documentation",
        desc: "Preparing detailed design narratives, BIM execution plans, and methodology reports that meet client and compliance standards.",
      },
      {
        id: 2,
        title: "Accurate Estimation & Cost Planning",
        desc: "Delivering precise quantity take-offs, benchmarked cost analysis, and global pricing alignment for design and construction projects.",
      },
      {
        id: 3,
        title: "Bid Coordination & Compliance Management",
        desc: "Structuring proposals that fulfil RFP, QA/QC, and legal requirements while ensuring clarity and credibility.",
      },
      {
        id: 4,
        title: "Content & Visual Enhancement",
        desc: "Developing professionally designed layouts, infographics, and digital proposal assets that highlight your technical excellence.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Bid documentation combining LOD references, BIM data and execution strategies.",
      },
      {
        id: 2,
        desc: "Cost forecasting and comparative estimation across disciplines and project scales.",
      },
      {
        id: 3,
        desc: "Multi-region RFP management with localised pricing and regulatory alignment.",
      },
      {
        id: 4,
        desc: "Rapid response proposal support for tight deadlines and global tenders.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "BIM-Driven Accuracy",
        desc: "Our proposal and estimation experts integrate data-rich BIM models and precise Level of Detail (LOD) definitions to ensure complete technical clarity and consistency across all bid documents.",
      },
      {
        id: 2,
        title: "Strategic Commercial Framing",
        desc: "We craft AEC proposals that go beyond compliance, highlighting measurable project value, delivery excellence, and ROI-driven outcomes for clients.",
      },
      {
        id: 3,
        title: "Global Tender Expertise",
        desc: "With deep understanding of FIDIC, NEC, and regional procurement frameworks, we help AEC firms prepare bids that align with international standards and local compliance.",
      },
      {
        id: 4,
        title: "High-Impact Presentation",
        desc: "Every proposal is structured for visual clarity and persuasive storytelling, ensuring your submission leaves a lasting impression with clients and evaluators.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            <strong>Higher Bid Success Rates:</strong> Improve your win ratios
            with technically precise, data-backed, and persuasive proposal
            documentation.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>Accurate Cost Transparency:</strong> Deliver clear and
            reliable cost modeling that strengthens client trust and financial
            clarity.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Stronger Brand Positioning:</strong> Build AEC brand
            authority across global public and private tender markets with
            quality-driven submissions.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Faster Proposal Delivery:</strong> Achieve reduced
            turnaround times for complex bids through automated estimation and
            documentation workflows.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            <strong>Consistent Global Standards:</strong> Maintain uniform
            proposal quality across international AEC sectors and regulatory
            frameworks.
          </span>
        ),
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

export default ProposalDevelopment;
