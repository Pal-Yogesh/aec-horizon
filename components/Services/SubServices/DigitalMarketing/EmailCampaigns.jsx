import React from "react";
import DMTemplate from "./DMTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const EmailCampaigns = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Email Campaigns & Pitch Decks",
    heading: "Targeted Communication That Drives AEC Business Growth",
    desc1:
      "At AEC Horizon, we craft data-driven email campaigns, outreach sequences, and high-impact pitch decks designed specifically for AEC and BIM firms. Our messaging blends technical clarity with persuasive communication, helping you build trust, improve visibility, and convert high-value opportunities across global markets.",
    desc2:
      "With strong engagement performance and industry-specific positioning, we help business development teams present their expertise confidently to architects, engineers, contractors, developers, and investors.",
    desc3: "",
    whatWeOffer: [
      {
        id: 1,
        title: "B2B Email Campaigns:",
        desc: "Targeted outreach to connect with architects, developers, contractors, consultants, and AEC decision-makers across Europe, the Middle East, and the USA.",
      },
      {
        id: 2,
        title: "Automated Lead Nurturing:",
        desc: "CRM-powered drip sequences that keep long project cycles engaged and move prospects closer to conversion.",
      },
      {
        id: 3,
        title: "Personalized Pitch Deck Design:",
        desc: "Professionally structured pitch decks that highlight your technical strengths, BIM capabilities, and project expertise for bids and presentations.",
      },
      {
        id: 4,
        title: "Client Re-engagement Campaigns:",
        desc: "Revive dormant leads with tailored, insight-driven communication designed for AEC buying behavior.",
      },
      {
        id: 5,
        title: "Performance Tracking & Analytics:",
        desc: "Real-time email metrics, engagement dashboards, and reporting to refine messaging and improve conversion rates.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "CRM-integrated workflows with HubSpot, Salesforce, or Zoho Campaigns.",
      },
      {
        id: 2,
        desc: "Email segmentation in the AEC business according to geography, project type, and service category.",
      },
      {
        id: 3,
        desc: "Pitch decks in various formats for tenders, capabilities demos, and investor presentations.",
      },
      {
        id: 4,
        desc: "Visual storytelling using BIM images, diagrams, and infographics..",
      },
      {
        id: 5,
        desc: "Technical copywriting that combines design innovation and business consequences.",
      },
      {
        id: 6,
        desc: "Adaptive layouts for both digital and print bid submissions.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC-Centric Messaging:",
        desc: "All communications are crafted with industry accuracy, BIM terminology, LOD clarity, and project value positioning tailored for AEC and BIM firms.",
      },
      {
        id: 2,
        title: "Integrated Digital Strategy:",
        desc: "Email campaigns are aligned with SEO, social media, and CRM workflows, ensuring consistent communication across all marketing channels.",
      },
      {
        id: 3,
        title: "Business-Oriented Pitch Decks: ",
        desc: "Presentations designed to persuade procurement teams, stakeholders, and investors with clear technical articulation and project impact.",
      },
      {
        id: 4,
        title: "Data-Driven Optimization:",
        desc: "Real-time analytics and engagement insights help refine messaging for stronger outreach and higher conversion rates across global regions.",
      },
      {
        id: 5,
        title: "Consistent Professional Branding:",
        desc: "Uniform tone, structure, and design across emails, decks, and company communications to reinforce trust and credibility in international markets.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Streamlined lead generation through precise targeting for architects, engineers, contractors, and developers.",
      },
      {
        id: 2,
        desc: "Higher open and response rates from qualified AEC and BIM audiences in international markets.",
      },
      {
        id: 3,
        desc: "Stronger brand authority with professional, well-structured emails and pitch decks.",
      },
      {
        id: 4,
        desc: "Improved deal conversion through consistent, value-driven communication.",
      },
      {
        id: 5,
        desc: "Better alignment between marketing outreach and AEC business development goals.",
      },
    ],
    
    imagePath: "/dmemail.svg",
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

  return <DMTemplate data={serviceData} faqData={faqData.digitalMarketing.emailCampaigns} />;
};

export default EmailCampaigns;
