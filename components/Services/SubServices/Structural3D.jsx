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
          At AEC Horizon, we provide{" "}
          structural 3D BIM modeling services that transform
          raw engineering concepts into highly detailed,{" "}
          constructible digital models.
        </span>
        <br />
        <span>
          Our models go beyond visual representation, they simulate how
          structures connect, behave, and perform in the real world, helping AEC
          professionals across Europe, the{" "}
          Middle East, and the USA achieve
          precision-driven project delivery.
        </span>
      </>
    ),
    desc2: (
      <>
        <span>
          Using advanced tools like{" "}
          Autodesk Revit, Tekla Structures, and
          Navisworks, our{" "}
          structural BIM specialists create intelligent models
          that enable seamless coordination with architectural and MEP teams,
          minimizing design conflicts and ensuring project constructability.
        </span>
        <br />
        <span>
          By combining engineering insight with BIM technology,
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
            steel, concrete, and composite structures,
            developed from design drawings or engineering intent.
          </span>
        ),
      },
      {
        id: 2,
        title: "Reinforcement and Detailing Modeling",
        desc: (
          <span>
            Precision rebar modeling, connection detailing, and
            embeds created to fabrication-level accuracy for
            reliable construction documentation.
          </span>
        ),
      },
      {
        id: 3,
        title: "LOD-Specific Model Development",
        desc: (
          <span>
            Models customized to LOD 200-500, covering
            schematic design, coordination, fabrication, and{" "}
            as-built documentation.
          </span>
        ),
      },
      {
        id: 4,
        title: "Structural Analysis Integration",
        desc: (
          <span>
            Models optimized for compatibility with tools like{" "}
            ETABS, STAAD.Pro, and Robot Structural Analysis,
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
            structural BIM models with architectural and MEP models, detecting and resolving clashes before site execution.
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
            Accurate structural BIM models designed for
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
            structural, architectural, and MEP teams.
          </span>
        ),
      },
      {
        id: 3,
        title: "Fabrication Ready Outputs",
        desc: (
          <span>
            Detail-rich 3D outputs for rebar, steel, and
            concrete structures.
          </span>
        ),
      },
      {
        id: 4,
        title: "Global Standards",
        desc: (
          <span>
            Compliant with AIA, BS, ACI, and ISO 19650 for
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
            Accurate, data-rich structural BIM models for
            better design visualization and interpretation.
          </span>
        ),
      },
      {
        id: 2,
        desc: (
          <span>
            Faster coordination and clash-free construction planning{" "}
            across disciplines.
          </span>
        ),
      },
      {
        id: 3,
        desc: (
          <span>
            Reduced structural rework and material waste{" "}
            through precision-driven BIM workflows.
          </span>
        ),
      },
      {
        id: 4,
        desc: (
          <span>
            Improved collaboration between{" "}
            engineers, fabricators, and construction teams.
          </span>
        ),
      },
      {
        id: 5,
        desc: (
          <span>
            Easily updatable BIM documentation for complete{" "}
            project lifecycle management.
          </span>
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
