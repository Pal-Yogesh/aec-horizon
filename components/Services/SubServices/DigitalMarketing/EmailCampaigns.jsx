import React from "react";
import DMTemplate from "./DMTemplate";

const EmailCampaigns = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "Email Campaigns & Pitch Decks",
    heading: "Targeted communication that converts expertise into opportunity",
    desc1:
      "At AEC Horizon, we create data-driven email campaigns and appealing pitch decks to assist AEC firms increase exposure, trust, and conversion in highly specialized markets.Our strategy combines strategic messaging with technical articulation to ensure that every communication, from a cold outreach to a tender presentation, reflects your company's precision, dependability, and creativity.",
    desc2:
      " With proven campaign engagement rates that exceed 35% average open rates and high bid-stage conversion, our technologies enable business development teams to communicate clearly and impactfully with decision-makers.",
    desc3: "",
    whatWeOffer: [
      {
        id: 1,
        title: "B2B Email Campaigns:",
        desc: "Use targeted outreach campaigns to interact with architects, developers, contractors, and consultants.",
      },
      {
        id: 2,
        title: "Automated Lead Nurturing:",
        desc: "CRM-integrated drip sequences designed to maintain engagement across protracted project cycles.",
      },
      {
        id: 3,
        title: "Personalized Pitch Deck Design:",
        desc: "Professionally organized presentations that highlight technical knowledge and project distinction.",
      },
      {
        id: 4,
        title: "Client Re-engagement Campaigns:",
        desc: "Revitalize dormant prospects with tailored and insight-driven marketing.",
      },
      {
        id: 5,
        title: " Performance tracking:",
        desc: "That provides real-time metrics for open rates, click-throughs, and response analytics.",
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
        title: "AEC-Centric Messaging::",
        desc: "All communications are based on BIM correctness, LOD clarity, and project value articulation.",
      },
      {
        id: 2,
        title: " Integrated Strategy:",
        desc: "Campaigns are coordinated with social media, SEO, and CRM pipelines.",
      },
      {
        id: 3,
        title: "Business-Oriented Design: ",
        desc: "Decks designed to persuade, organized for procurement panels, stakeholders, and investors.",
      },
      {
        id: 4,
        title: "Data-Driven Insights:",
        desc: "Continuous optimization through marketing analytics and audience behavior tracking.",
      },
      {
        id: 5,
        title: "Professional Consistency:",
        desc: "Consistent branding throughout emails, presentations, and company communications.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: <>Streamlined lead generation with sophisticated targeting.</>,
      },
      {
        id: 2,
        desc: (
          <>Higher open and response rates among qualified AEC audiences.</>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            Increased brand authority in professional emails and presentations.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            Increased deal conversion through continuous, effective
            communication.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            Better connection between marketing outreach and business
            development objectives.{" "}
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

export default EmailCampaigns;
