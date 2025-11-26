import React from "react";
import TDTemplate from "./TDTemplate";

const StrategicPartnerships = () => {
  const serviceData = {
    category: "Technical Business Development",
    title: "Strategic partnerships & Alliances",
    heading: "Strategic Partnerships for AEC and BIM Industry Growth",
    desc1: (
      <span>
        At AEC Horizon, we help{" "}
        architecture, engineering, and construction (AEC) firms
        build strong, future-ready partnerships that enhance
        technical expertise, market reach, and{" "}
        brand credibility. Our{" "}
        BIM-driven collaboration models connect AEC
        professionals, contractors, and technology partners to drive innovation
        and achieve shared project success.
      </span>
    ),
    desc2: (
      <span>
        We design structured partnership frameworks that foster
        trust, scalability, and long-term cooperation across multidisciplinary
        teams. Whether your goal is international expansion,{" "}
        consortium-based bidding, or{" "}
        integrated delivery alliances, AEC Horizon enables you
        to form partnerships that strengthen your position in the{" "}
        global BIM ecosystem, across{" "}
        Europe, the Middle East, and the USA.
      </span>
    ),
    ourValuesInclude: [
      {
        id: 1,
        title: "Partner Identification & Evaluation",
        desc: (
          <span>
            Assessing potential collaborators based on{" "}
            domain expertise, digital maturity, and{" "}
            project relevance.
          </span>
        ),
      },
      {
        id: 2,
        title: "Consortium Structuring",
        desc: (
          <span>
            Developing compliant joint venture and{" "}
            design-build alliance models
            tailored for AEC and BIM projects.
          </span>
        ),
      },
      {
        id: 3,
        title: "Collaboration Frameworks",
        desc: (
          <span>
            Establishing shared governance, data exchange standards, and
            transparent accountability structures.
          </span>
        ),
      },
      {
        id: 4,
        title: "Technology & Knowledge Alliances",
        desc: (
          <span>
            Connecting AEC firms with{" "}
            BIM technology partners, digital twin experts, and{" "}
            smart construction innovators.
          </span>
        ),
      },
      {
        id: 5,
        title: "Global Collaboration Enablement",
        desc: (
          <span>
            Supporting partnerships for cross-border BIM projects, ensuring
            compliance with regional standards and market dynamics.
          </span>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Consortium modeling for PPP, EPC and design build procurement structures.",
      },
      {
        id: 2,
        desc: "Partnership due diligence, capability evaluation and digital readiness audits.",
      },
      {
        id: 3,
        desc: "Intellectual property frameworks for co-developed BIM or automation solutions.",
      },
      {
        id: 4,
        desc: "Global representation and partner negotiation for market entry and delivery alignment.",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "AEC Industry Expertise",
        desc: (
          <span>
            We build strategic partnerships tailored to the
            unique life cycles of{" "}
            architecture, engineering, and construction (AEC){" "}
            projects, not generic business templates.
          </span>
        ),
      },
      {
        id: 2,
        title: "Risk-Responsive Partnership Design",
        desc: (
          <span>
            Our alliances are structured with{" "}
            compliance, liability, and
            contractual balance, ensuring security and trust in
            every collaboration.
          </span>
        ),
      },
      {
        id: 3,
        title: "Global Network Leverage",
        desc: (
          <span>
            Access a robust ecosystem of{" "}
            AEC firms, BIM consultants, and
            technology partners across{" "}
            Europe, the Middle East, and the USA.
          </span>
        ),
      },
      {
        id: 4,
        title: "Operational Clarity",
        desc: (
          <span>
            We establish governance frameworks that reduce
            friction across teams, disciplines, and international markets,
            enabling seamless project delivery.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            Faster global market access through strategic{" "}
            AEC and BIM partnerships across{" "}
            Europe, the Middle East, and the USA.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Enhanced technical delivery with{" "}
            complementary expertise from cross-disciplinary
            collaborators.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Higher pre-qualification and bidding success by
            combining portfolio strengths and{" "}
            global credentials. strengths and global
            credentials.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Sustainable collaboration frameworks that promote{" "}
            innovation and long-term project scalability.
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

export default StrategicPartnerships;
