import React from "react";
import DMTemplate from "./DMTemplate";

const SeoConstruction = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "SEO for construction and BIM",
    heading: "SEO for Construction & BIM Firms that Lead the Built Environment",
    desc1:
      "At AEC Horizon, we provide specialized SEO services designed exclusively for construction companies, BIM consultants, engineering firms, and architecture practices. Our strategies turn your technical expertise into high-ranking, discoverable digital content that attracts qualified project inquiries in regions like the US, UK, UAE, and India.",
    desc2:
      "Our SEO approach blends BIM-focused keyword intelligence, construction industry search trends, and technical content structuring to ensure your firm appears when project owners, contractors, and AEC leaders search for solutions.",
    desc3:
      "We don't just optimize pages, we position your company as a trusted authority in the digital AEC landscape through compelling technical storytelling and visibility-focused campaigns.",

    whatWeOffer: [
      {
        id: 1,
        title: "Technical SEO Audit:",
        desc: "Comprehensive analysis of website structure, BIM keyword relevance, site architecture, and industry-specific ranking gaps.",
      },
      {
        id: 2,
        title: "High-Intent Keyword Research for Construction & BIM:",
        desc: "Identifying profitable search terms related to BIM services, Revit modeling, construction documentation, CAD outsourcing, project management, and engineering workflows.",
      },
      {
        id: 3,
        title: "On-Page & Structural Optimization:",
        desc: "Enhancing page speed, UX flow, metadata, and technical content quality aligned with global search engine standards.",
      },
      {
        id: 4,
        title: "Off-Page SEO & AEC Authority Building:",
        desc: "Strategic backlink development through engineering publications, construction portals, BIM blogs, and industry directories.",
      },
      {
        id: 5,
        title: "Analytics, Tracking & Reporting:",
        desc: "Real-time reporting dashboards to track rankings, lead quality, regional visibility, and SEO-driven project inquiries.",
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: (
          <>
            <strong>Content indexing and BIM keyword strategy</strong> or design
            and modeling companies.
          </>
        ),
      },
      {
        id: 2,
        desc: (
          <>
            <strong>LOD-based deliverables,</strong> AEC documentation services,
            and SEO optimization for Revit service providers.
          </>
        ),
      },
      {
        id: 3,
        desc: (
          <>
            <strong>Geo-targeted search results</strong> for the construction
            markets in the USA, UK, and MENA.
          </>
        ),
      },
      {
        id: 4,
        desc: (
          <>
            <strong>Schema markup integration</strong> for case studies,
            portfolio sites, and BIM objects.
          </>
        ),
      },
      {
        id: 5,
        desc: (
          <>
            <strong>Landing page optimization</strong> for the RFP, tendering,
            and outsourcing categories.
          </>
        ),
      },
      {
        id: 6,
        desc: (
          <>
            <strong>Dashboards for analytics</strong> and structured reporting
            that are tailored for executive review.
          </>
        ),
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC-Focused SEO Expertise:",
        desc: "Our strategies are tailored to how architects, engineers, contractors, and BIM consultants search and evaluate digital partners across the US, UK, UAE, and India, ensuring you rank for high-intent industry terms.",
      },
      {
        id: 2,
        title: "Technical Keyword Precision:",
        desc: "We optimize for construction, CAD, Revit, BIM coordination, LOD, and project management search queries, helping your firm appear for the exact services decision-makers look for.",
      },
      {
        id: 3,
        title: "Integrated Growth Framework:",
        desc: "SEO efforts are aligned with PPC, CRM insights, and lead nurturing workflows to support consistent, measurable growth for AEC and BIM businesses.",
      },
      {
        id: 4,
        title: "Performance-Driven Insights:",
        desc: "Clear dashboards map search visibility, keyword movement, and lead quality to support strategic decisions and targeted regional marketing.",
      },
      {
        id: 5,
        title: "Global AEC Reach:",
        desc: "Scalable SEO strategies built to suit firms expanding into North America, Europe, the Middle East, and Asia while maintaining local relevance and technical accuracy.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Higher visibility among construction managers, architects, engineers, and BIM decision-makers.",
      },
      {
        id: 2,
        desc: "A steady pipeline of project-ready leads from qualified technical audiences.",
      },
      {
        id: 3,
        desc: "Improved rankings for BIM modeling, Revit services, CAD drafting, and construction technology keywords.",
      },
      {
        id: 4,
        desc: "Stronger digital credibility and trust across international AEC markets.",
      },
      {
        id: 5,
        desc: "SEO frameworks that scale easily with new regions, new service lines, and business expansion.",
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

export default SeoConstruction;
