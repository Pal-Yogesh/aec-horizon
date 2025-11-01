import React from "react";
import TDTemplate from "./TDTemplate";

const ClientEngagement = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Client engagement strategies",
    heading:
      "Converting connections into quantifiable, long-term company growth.",
    desc1:
      "At AEC Horizon, we create spaces for client interaction that combine digital intelligence and human connections.",
    desc2:
      " Our tactics assist engineering, construction, and design firms in building confidence, being visible, and anticipating client demands far in advance of the procurement process. With the help of behavioral analytics, process alignment, and structured feedback systems, we help your teams turn short-term partnerships into long-term alliances based on understanding, openness, and reliable performance.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Engagement Strategy Design",
        desc: "Creating relationship roadmaps that align with the phases of the client lifecycle—from pre-bid awareness to post-project retention.",
      },
      {
        id: 2,
        title: "Client Feedback and Sentiment Analysis",
        desc: "Gathering and analyzing client experience data to drive continuous improvement in delivery and service quality.",
      },
      {
        id: 3,
        title: "Key Account Management Frameworks",
        desc: "Systematizing interactions for high-value clients through tailored service models and structured engagement processes.",
      },
      {
        id: 4,
        title: "Digital Interaction Systems",
        desc: "Integrating dashboards, email automation, and CRMs to enable seamless client communication and visibility across touchpoints.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Client segmentation and engagement modeling based on lifecycles.",
      },
      {
        id: 2,
        desc: "Predictive analytics for trends in customer satisfaction, retention, and behavior.",
      },
      {
        id: 3,
        desc: "Automation of CRM-driven engagement with notifications and performance scoring.",
      },
      {
        id: 4,
        desc: "Combining feedback loops with QA and BIM coordinating systems.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Relationship Engineering",
        desc: "We view interaction as a methodical process rather than haphazard outreach, ensuring every engagement is structured and purposeful.",
      },
      {
        id: 2,
        title: "Practical Advice",
        desc: "All suggestions are grounded in data interpretation and evidence, not conjecture or assumptions.",
      },
      {
        id: 3,
        title: "Integrated Delivery",
        desc: "Our client experience is tightly connected to project execution and quality control procedures for seamless outcomes.",
      },
      {
        id: 4,
        title: "Proactive Retention",
        desc: "We implement techniques designed to identify and address potential issues before clients disengage.",
      },
      {
        id: 5,
        title: "Constant Value Creation",
        desc: "Our engagement strategies evolve continuously with your market focus, portfolio, and business growth.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Enhanced possibility for referrals and client loyalty.",
      },
      {
        id: 2,
        desc: "Enhanced responsiveness and flow of communication.",
      },
      {
        id: 3,
        desc: "Measurable performance results with predictable engagement cycles.",
      },
      {
        id: 4,
        desc: "Increased rates of repeat business and client satisfaction.",
      },
      {
        id: 5,
        desc: "Streamlined communication between the delivery and business development teams.",
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

export default ClientEngagement;
