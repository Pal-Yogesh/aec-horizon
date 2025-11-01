import React from "react";
import TDTemplate from "./TDTemplate";

const BrandingPositioning = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Branding & positioning strategies",
    heading: "Defining perception through clarity and technical distinction",
    desc1:
      "At AEC Horizon, we help AEC organisations articulate who they are and why they matte. Our brand positioning frameworks are built on deep industry understanding, aligning your firm’s technical competence, project experience and innovation capacity with how the market evaluates expertise.",
    desc2:
      "We go beyond design and language; we engineer positioning systems that communicate value, authority and trust across every interaction, from proposal documents to client presentations.",
    ourValuesInclude: [
      {
        id: 1,
        title: "Positioning architecture",
        desc: "Structuring your brand’s narrative around discipline strengths, delivery models, and technical differentiation.",
      },
      {
        id: 2,
        title: "Visual & verbal identity systems",
        desc: "Establishing consistent representation across proposals, websites, and digital touchpoints.",
      },
      {
        id: 3,
        title: "Competitive messaging frameworks",
        desc: "Defining how your firm’s expertise contrasts with peer benchmarks and global standards.",
      },
      {
        id: 4,
        title: "BIM aligned communication strategy",
        desc: "Translating digital capability, workflows, and innovation into client-relevant storytelling.",
      },
    ],
    ourExpertiseCover: [
      {
        id: 1,
        desc: "Strategic differentiation across architectural, engineering and EPC domains.",
      },
      {
        id: 2,
        desc: "Message frameworks integrating technical, operational and sustainability pillars.",
      },
      {
        id: 3,
        desc: "Visual hierarchy designed aligned with ISO 19650 documentation and BIM standards.",
      },
      {
        id: 4,
        desc: "Brand architecture structuring for multi-entity or multi-region organisations.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Industry fluency",
        desc: "We understand the nuances of AEC communication — from prequalification forms to digital portfolios.",
      },
      {
        id: 2,
        title: "Strategic Coherence",
        desc: "Every element, from narrative tone to graphic systems, serves a unified brand objective.",
      },
      {
        id: 3,
        title: "Data backed insight",
        desc: "Positioning decisions informed by competitor research and market sentiment mapping.",
      },
      {
        id: 4,
        title: "Global consistency",
        desc: "Cohesive representation across international tenders, conferences, and digital platforms.",
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

export default BrandingPositioning;
