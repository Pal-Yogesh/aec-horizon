import React from "react";
import SubServiceTemplate from "./SubServiceTemplate";
import { faqData } from "@/components/FAQ/FaqData";

const Structural3D = () => {
  const serviceData = {
    category: "BIM & Drafting",
    title: "Structural 3D modeling services",
    heading:
      "Structural BIM Modeling Services for Accurate, Constructible Designs",
    desc1: (
      <>
        <span>
          At <strong>AEC Horizon</strong>, we provide{" "}
          <strong>structural 3D BIM modeling services</strong> that transform
          raw engineering concepts into highly detailed,{" "}
          <strong>constructible digital models</strong>.
        </span>
        <br />
        <span>
          Our models go beyond visual representation, they simulate how
          structures connect, behave, and perform in the real world, helping AEC
          professionals across <strong>Europe</strong>, the{" "}
          <strong>Middle East</strong>, and the <strong>USA</strong> achieve
          <strong>precision-driven project delivery</strong>.
        </span>
      </>
    ),
    desc2: (
      <>
        <span>
          Using advanced tools like{" "}
          <strong>Autodesk Revit, Tekla Structures</strong>, and
          <strong>Navisworks</strong>, our{" "}
          <strong>structural BIM specialists</strong> create intelligent models
          that enable seamless coordination with architectural and MEP teams,
          minimizing design conflicts and ensuring project constructability.
        </span>
        <br />
        <span>
          By combining engineering insight with <strong>BIM technology</strong>,
          we help clients visualize complex structural systems, detect design
          errors early, and improve communication throughout the
          design-to-construction lifecycle.
        </span>
      </>
    ),
    whatWeOffer: [
      {
        id: 1,
        title: "Comprehensive Structural BIM Modeling",
        desc: (
          <span>
            Creation of detailed 3D BIM models for{" "}
            <strong>steel, concrete, and composite structures</strong>,
            developed from design drawings or engineering intent.
          </span>
        ),
      },
      {
        id: 2,
        title: "Reinforcement and Detailing Modeling",
        desc: (
          <span>
            Precision <strong>rebar modeling</strong>, connection detailing, and
            embeds created to <strong>fabrication-level accuracy</strong> for
            reliable construction documentation.
          </span>
        ),
      },
      {
        id: 3,
        title: "LOD-Specific Model Development",
        desc: (
          <span>
            Models customized to <strong>LOD 200-500</strong>, covering
            schematic design, coordination, fabrication, and{" "}
            <strong>as-built documentation</strong>.
          </span>
        ),
      },
      {
        id: 4,
        title: "Structural Analysis Integration",
        desc: (
          <span>
            Models optimized for compatibility with tools like{" "}
            <strong>ETABS, STAAD.Pro, and Robot Structural Analysis</strong>,
            ensuring alignment between design intent and structural performance.
          </span>
        ),
      },
      {
        id: 5,
        title: "Coordination & Clash Management",
        desc: (
          <span>
            Interdisciplinary integration of{" "}
            <strong>
              structural BIM models with architectural and MEP models
            </strong>
            , detecting and resolving clashes before site execution.
          </span>
        ),
      },
    ],

    ourExpertiseCover: [
      {
        id: 1,
        desc: "Concrete structures (beams, columns, slabs, footings)",
      },
      {
        id: 2,
        desc: "Steel structures (frames, trusses, bracings, connections)",
      },
      {
        id: 3,
        desc: "Precast & Post-tensioned elements",
      },
      {
        id: 4,
        desc: "Reinforcement modeling & Bar bending schedules",
      },
      {
        id: 5,
        desc: "Structural documentation and shop drawings",
      },
      {
        id: 6,
        desc: "Coordination with architectural & MEPF models",
      },
    ],

    whyChooseAec: [
      {
        id: 1,
        title: "Engineering Precision",
        desc: (
          <span>
            Accurate <strong>structural BIM models</strong> designed for
            real-world constructibility.
          </span>
        ),
      },
      {
        id: 2,
        title: "Seamless Collaboration",
        desc: (
          <span>
            Smooth coordination between{" "}
            <strong>structural, architectural, and MEP teams.</strong>
          </span>
        ),
      },
      {
        id: 3,
        title: "Fabrication Ready Outputs",
        desc: (
          <span>
            Detail-rich <strong>3D outputs</strong> for rebar, steel, and
            concrete structures.
          </span>
        ),
      },
      {
        id: 4,
        title: "Global Standards",
        desc: (
          <span>
            Compliant with <strong>AIA, BS, ACI, and ISO 19650</strong> for
            international BIM projects.
          </span>
        ),
      },
    ],

    ourExpertiseCover2: [
      {
        id: 1,
        desc: (
          <span>
            <strong>Accurate, data-rich structural BIM models</strong> for
            better design visualization and interpretation.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            <strong>
              Faster coordination and clash-free construction planning
            </strong>{" "}
            across disciplines.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            <strong>Reduced structural rework and material waste</strong>{" "}
            through precision-driven BIM workflows.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            <strong>Improved collaboration</strong> between{" "}
            <strong>engineers, fabricators, and construction teams.</strong>
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <sapn>
            <strong>Easily updatable BIM documentation</strong> for complete{" "}
            <strong>project lifecycle management.</strong>
          </sapn>
        ),
      },
    ],

    imagePath: "/s11.svg",
    bgColor: "from-[#A8C8FF] to-[#6B9FFF]",
    features: [
      {
        icon: "/bim1.svg",
        title: "LOD 100-200",
        description: "Conceptual and schematic design models",
      },
      {
        icon: "/bim2.svg",
        title: "LOD 300-400",
        description: "Detailed design and construction documentation",
      },
      {
        icon: "/bim3.svg",
        title: "LOD 500",
        description: "As-built and facility management models",
      },
      {
        icon: "/bim4.svg",
        title: "LOD 600-700",
        description: "As-built and facility management models",
      },
    ],
  };

  return <SubServiceTemplate data={serviceData} faqData={faqData.bimServices.structural} />;
};

export default Structural3D;
