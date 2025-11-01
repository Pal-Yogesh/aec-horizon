import React from "react";
import DMTemplate from "./DMTemplate";

const SeoConstruction = () => {
  const serviceData = {
    category: "Digital Marketing",
    title: "SEO for construction and BIM",
    heading: "Creating Digital Influence for AEC Brands that Design the Future",
    desc1:
      "AEC Horizon develops social media strategies that translate architectural vision and engineering precision into shareable impact.",
    desc2:
      "Our ads combine technical storytelling with digital visibility, resulting in over 300% average engagement gain on LinkedIn and Instagram for AEC clients and a 40% increase in qualifying B2B inquiries.",
    desc3:
      "We don't just publish; we position your company as a thought leader by creating storylines that highlight expertise, showcase innovation, and foster trust in the global built-environment community.",

    whatWeOffer: [
      {
        id: 1,
        title: "Technical SEO Audit",
        desc: "A thorough evaluation of the information structure, website architecture, and BIM keyword relevancy.",
      },
      {
        id: 2,
        title: "Industry Keyword Mapping",
        desc: "Finding high-intent terms associated with AEC workflows, Revit modeling, and BIM outsourcing.",
      },
      {
        id: 3,
        title: "On-Page & Structural Optimization",
        desc: "Improving user flow, load speed, and content readability to satisfy international SERP guidelines.",
      },
      {
        id: 4,
        title: "Off-Page SEO & Authority Building",
        desc: "Using digital magazines, engineering blogs, and BIM-focused websites to strategically build backlinks.",
      },
      {
        id: 5,
        title: "Analytics & Reporting",
        desc: "Data-driven insights that monitor lead generation, engagement, and visibility across regions.",
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
        title: "AEC-Driven Search Strategy",
        desc: "A thorough understanding of how contractors, consultants, and purchasers in the construction industry search for solutions, ensuring high-intent visibility.",
      },
      {
        id: 2,
        title: "Technical Precision",
        desc: "Focused on CAD environments, LOD, Revit, and BIM coordination keywords rather than general marketing terms, driving technical relevance and authority.",
      },
      {
        id: 3,
        title: "Holistic Integration",
        desc: "SEO strategies that work seamlessly with lead nurturing funnels, PPC advertising, and CRM data for unified growth performance.",
      },
      {
        id: 4,
        title: "Performance Intelligence",
        desc: "Clear dashboards that directly link measurable business results with search visibility and digital reach.",
      },
      {
        id: 5,
        title: "Global Reach",
        desc: "Scalable SEO strategies tailored for international markets while maintaining contextual depth and regional authenticity.",
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: "Elevated market perception and brand authority.",
      },
      {
        id: 2,
        desc: "Clear differentiation in RFP evaluations and partner discussions.",
      },
      {
        id: 3,
        desc: "Cohesive identity across all client-facing material.",
      },
      {
        id: 4,
        desc: "Improved visibility in prequalification and digital procurement systems.",
      },
      {
        id: 5,
        desc: "Strengthened internal alignment between leadership, marketing, and technical teams.",
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
