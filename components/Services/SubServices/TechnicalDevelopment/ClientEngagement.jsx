import React from "react";
import TDTemplate from "./TDTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const ClientEngagement = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Client engagement strategies",
    heading:
      "Building Strong Client Relationships with Strategic Engagement Frameworks",
    desc1:
      "At AEC Horizon, we help AEC firms design client engagement strategies that combine digital intelligence and human connection to build long-lasting, trust-based relationships. Our tailored frameworks empower architecture, engineering, and construction companies to enhance visibility, strengthen client confidence, and anticipate project needs well before the procurement stage.",
    desc2:
      "By leveraging behavioral analytics, structured feedback systems, and process alignment, we help teams convert short-term interactions into sustainable partnerships that drive repeat business and measurable growth.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Engagement Strategy Design",
        desc: "Developing relationship roadmaps that align with every stage of the client lifecycle, from pre-bid awareness to long-term retention.",
      },
      {
        id: 2,
        title: "Client Feedback and Sentiment Analysis",
        desc: "Capturing and analyzing client experience data to drive continuous service improvement and satisfaction.",
      },
      {
        id: 3,
        title: "Key Account Management Frameworks",
        desc: "Structuring client management systems that enhance visibility, efficiency, and responsiveness for high-value accounts.",
      },
      {
        id: 4,
        title: "Digital Interaction Systems",
        desc: "Integrating CRMs, email automation, and performance dashboards to improve communication and engagement across every touchpoint.",
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
        title: "Strategic Relationship Engineering",
        desc: "We approach every AEC client engagement with a data-driven and structured strategy, ensuring purposeful and measurable communication across every stage of the relationship.",
      },
      {
        id: 2,
        title: "Evidence-Based Insights",
        desc: "Our recommendations are built on analytics and client behavior trends, helping design, engineering, and construction firms make informed engagement decisions.",
      },
      {
        id: 3,
        title: "Integrated Delivery Approach",
        desc: "We align client experience management with project execution and quality workflows to ensure seamless coordination and consistent outcomes.",
      },
      {
        id: 4,
        title: "Proactive Retention Strategies",
        desc: "Our AEC engagement experts identify early warning signs and apply predictive methods to maintain long-term partnerships and reduce client attrition.",
      },
      {
        id: 5,
        title: "Continuous Value Optimization",
        desc: "We evolve your client engagement model with shifting market trends, enabling consistent business growth and improved project pipeline visibility.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <>
            <strong>Higher Client Retention and Referrals:</strong> Strengthen
            AEC client loyalty through structured engagement strategies that
            encourage repeat business and long-term partnerships.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong>Improved Communication Efficiency:</strong> Enable faster,
            more transparent communication between design, construction, and
            client teams, ensuring clarity throughout the project lifecycle.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Predictable and Measurable Outcomes:</strong> Achieve
            data-backed engagement performance with clear metrics for
            satisfaction, responsiveness, and project alignment.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Boosted Client Satisfaction Levels:</strong> Enhance trust
            across every project stage, leading to increased repeat business and
            stronger client relationships.
          </>
        ),
      },
      // {
      //   id: 5,
      //   desc: (
      //     <>
      //       <strong>Aligned Internal Collaboration:</strong> Streamline
      //       communication between business development and delivery teams for a
      //       unified, client-focused workflow.
      //     </>
      //   ),
      // },
    ],

    imagePath: "/tdclient.svg",
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

  return <TDTemplate data={serviceData} faqData={faqData.technicalBusinessDev.clientEngagement} />;
};

export default ClientEngagement;
