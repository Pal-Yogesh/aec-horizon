import React from "react";
import DMTemplate from "./DMTemplate";

const SocialMediaMarketing = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Social Media Marketing ",
    heading: "Shaping Digital Influence in the Global AEC Community",
    desc1:
      "At AEC Horizon, we create social media ecosystems that boost trust, increase interaction, and establish AEC enterprises as industry leaders.",
    desc2:
      "Our campaigns combine technical communication with visual storytelling, assisting design, engineering, and construction firms in transforming their on-the-ground experience into digital authority.",
    desc3:
      "Our social media marketing methods go beyond posting, with clients reporting up to 3x engagement growth and a 40% boost in qualifying B2B inquiries. We build influence, trust, and visibility where your next opportunity begins.",
    whatWeOffer: [
      {
        id: 1,
        title: "Strategic Campaign Architecture:",
        desc: "Platform-specific frameworks designed for architects, engineers, and contractors to maximize digital reach and engagement.",
      },
      {
        id: 2,
        title: "Thought Leadership Programs:",
        desc: "Positioning your firm as an industry voice through consistent insights, BIM-focused articles, and expert-driven content.",
      },
      {
        id: 3,
        title: "Creative Content Development:",
        desc: "Visual storytelling using project highlights, technical reels, and case-driven narratives to showcase expertise effectively.",
      },
      {
        id: 4,
        title: "Performance Analytics:",
        desc: "Real-time tracking and optimization of engagement, conversions, and audience reach across all campaign platforms.",
      },
      {
        id: 5,
        title: "Paid Campaign Management:",
        desc: "Targeted ad setups focused on attracting high-quality project leads and procurement attention globally.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "LinkedIn Growth Strategy for Construction and BIM Service Providers.",
      },
      {
        id: 2,
        desc: "Brand storytelling using 3D visualization, sustainability tales, and project milestones.",
      },
      {
        id: 3,
        desc: "Schedule and automate content across several platforms.",
      },
      {
        id: 4,
        desc: "Audience intelligence for lead creation and prequalification visibility.",
      },
      {
        id: 5,
        desc: " Video-first content planning, highlighting workflows, successes, and people",
      },
      {
        id: 6,
        desc: "Analytics dashboards are integrated with CRM systems to provide measurable ROI.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC-Aware Strategy",
        desc: "Created by industry experts who understand BIM procedures, LOD workflows, and project communications.",
      },
      {
        id: 2,
        title: "Authentic Narrative",
        desc: "development involves converting data and project success into relatable stories that engage decision-makers.",
      },
      {
        id: 3,
        title: "Performance Transparency",
        desc: "Metric-driven outcomes, from impressions to customer acquisition.",
      },
      {
        id: 4,
        title: "Global Positioning",
        desc: "Campaigns designed for international scalability within a regional setting.",
      },
      {
        id: 5,
        title: "Brand Continuity",
        desc: "Consistent consistency with corporate identity, tone, and business development objectives.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: <>Improved brand credibility and recall among AEC audiences. </>,
      },
      {
        id: 2,
        desc: (
          <>
            Increased involvement among clients, collaborators, and talent
            networks{" "}
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>Improved inbound visibility for BIM and construction services. </>
        ),
      },
      {
        id: 4,
        desc: <>Enhanced project lead generation through targeted outreach.</>,
      },
      {
        id: 5,
        desc: (
          <>
            Consistent, data-driven digital presence leads to sustained success.
          </>
        ),
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

export default SocialMediaMarketing;
