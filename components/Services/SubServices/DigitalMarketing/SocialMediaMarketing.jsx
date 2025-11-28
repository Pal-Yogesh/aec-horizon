import React from "react";
import DMTemplate from "./DMTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const SocialMediaMarketing = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Social Media Marketing ",
    heading:
      "Shaping Digital Influence for AEC Brands Across Europe, the Middle East & the USA",
    desc1:
      "At AEC Horizon, we build high-impact social media ecosystems that elevate architecture, engineering, and construction firms across Amsterdam, Rotterdam, Stockholm, Berlin, Prague, Dubai, Riyadh, London, Virginia, California, Texas, and more. Our goal is simple, boost trust, increase visibility, and position your AEC brand as an industry leader in every regional market.",
    desc2:
      "We combine technical communication with compelling visual storytelling to help design, engineering, and construction companies turn their on-site expertise into digital authority. Our AEC-focused social media strategies consistently deliver measurable results, including up to 3× higher engagement and a 40% increase in qualified B2B inquiries across global regions.",
    desc3:
      "Whether your firm serves European consultants, Middle East mega-projects, or US-based contractors, we create content frameworks that build influence where your next opportunity begins.",
    whatWeOffer: [
      {
        id: 1,
        title: "Strategic Campaign Architecture:",
        desc: "Platform-specific social media strategies tailored for architects, engineers, contractors, and BIM firms, optimised for markets such as UAE, Saudi Arabia, UK, Scandinavia, Germany, and the US.",
      },
      {
        id: 2,
        title: "Thought Leadership & Industry Positioning:",
        desc: "Creating high-value AEC thought leadership content, BIM-focused narratives, and expert-driven insights to strengthen your authority in competitive regions like NEOM, London, Amsterdam, and California.",
      },
      {
        id: 3,
        title: "Creative Content Development:",
        desc: "Technical reels, project showcases, case-driven stories, and design-centric visuals crafted to resonate with global AEC audiences.",
      },
      {
        id: 4,
        title: "Performance Analytics:",
        desc: "Real-time tracking and optimisation of engagement, conversions, audience segments, and content reach across all platforms.",
      },
      {
        id: 5,
        title: "Paid Campaign Management:",
        desc: "High-quality paid ad setups designed to generate project leads and procurement visibility in regions such as Dubai, Riyadh, Stockholm, Munich, Texas, and Northern Virginia.",
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
        title: "AEC-Specialised Strategy:",
        desc: "Social campaigns built by experts in BIM, LOD workflows, and construction communication, tailored for markets in Europe, the Middle East, and the USA.",
      },
      {
        id: 2,
        title: "Authentic Industry Storytelling:",
        desc: "We turn technical project data into clear, engaging narratives for audiences in Amsterdam, Stockholm, Berlin, Dubai, Riyadh, London, and Virginia.",
      },
      {
        id: 3,
        title: "Performance Transparency:",
        desc: "Metric-driven reporting that tracks real engagement and qualified inquiries across all regions.",
      },
      {
        id: 4,
        title: "Global Reach, Local Relevance:",
        desc: "Campaigns adapted to regional behaviour, from NEOM and UAE to UK and US states, for maximum impact.",
      },
      {
        id: 5,
        title: "Consistent Branding:",
        desc: "Unified visuals and messaging to strengthen your AEC identity across international social platforms.",
      },
    ],
    

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Stronger brand credibility and higher recall across AEC and BIM-focused audiences.",
      },
      {
        id: 2,
        desc: "Better engagement from clients, collaborators, and industry talent.",
      },
      {
        id: 3,
        desc: "Increased inbound visibility for architecture, engineering, BIM, and construction services.",
      },
      {
        id: 4,
        desc: "Higher-quality project leads through precise, targeted social outreach.",
      },
      {
        id: 5,
        desc: "Consistent, data-backed digital presence that supports long-term growth.",
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

  return <DMTemplate data={serviceData} faqData={faqData.digitalMarketing.socialMedia} />;
};

export default SocialMediaMarketing;
