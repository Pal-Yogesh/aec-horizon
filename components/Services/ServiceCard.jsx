// import React from "react";

// const ServiceCard = () => {
//   return (
//     <div
//       className="w-[312px] h-[380px] border-[4px] border-white rounded-[23px] mx-auto mt-10 p-5 relative overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(215, 215, 255, 0.4) 100%)",
//         boxShadow: "0px 8px 4px 0px #00000040",
//         backdropFilter: "blur(10px)",
//       }}
//     >
//       {/* Title */}
//       <div
//         className="border-[4px] rounded-[30px] w-[220px] text-center py-2 font-semibold text-[15px] border-white mx-auto"
//         style={{
//           background:
//             "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//         }}
//       >
//         <p className="gradient-text-about">BIM & Drafting</p>
//       </div>

//       {/* Scrollable Content */}
//       <div
//         className="relative h-[250px] overflow-y-scroll px-4 custom-scroll mt-7"
//         style={{ direction: "rtl" }}
//       >
//         <div
//           className="text-[#656565] text-[15px]  font-medium"
//           style={{ direction: "ltr" }}
//         >
//           BIM Modeling & Drafting (LOD 100-500) <br />
//           BIM Template & Content Creation <br />
//           BIM Coordination & Clash Detection <br />
//           Scan to BIM <br />
//           PDF/CAD to BIM <br />
//           Revit Family Creation <br />
//           BIM Automation <br />
//           MEPF Coordination <br />
//           Construction Documentation Set / As-built Drawings <br />
//           Structural 3D Modeling <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import Link from "next/link";
import React from "react";

const cardsData = [
  {
    href: "/services/bim-drafting",
    heading: "BIM & Drafting",
    points: [
      "BIM Modeling & Drafting (LOD 100-500)",
      "BIM Template & Content Creation",
      "BIM Coordination & Clash Detection",
      "Scan to BIM",
      "PDF/CAD to BIM",
      "Revit Family Creation",
      "BIM Automation",
      "MEPF Coordination",
      "Construction Documentation Set / As-built Drawings",
      "Structural 3D Modeling",
    ],
  },
  {
    href: "/services/technical-development",
    heading: "Technical Development",
    points: [
      "Go-to-Market Strategy for AEC Services",
      "Proposal and RFP Support",
      "Lead Generation & CRM Setup",
      "Proposal Development & Estimation",
      "Market Research & Analysis",
      "Strategic Partnerships",
      "Sales Enablement Tools",
      "Branding & Positioning",
      "Client Engagement Strategies",
      "Digital Transformation Consulting",
    ],
  },
  {
    href: "/services/digital-marketing",
    heading: "Digital Marketing",
    points: [
      "SEO for Construction & BIM",
      "Project Planning & Scheduling",
      "BIM Content Creation",
      "Marketing Presentations",
      "Social Media Marketing",
      "Email Campaigns, Pitch decks",
    ],
  },
];

const ServiceCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 mt-20">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="w-[312px] h-[380px] border-[4px] border-white rounded-[23px] px-3 py-5 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(215, 215, 255, 0.4) 100%)",
            boxShadow: "0px 8px 4px 0px #00000040",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Title */}
          <Link href={card.href}>
            <div
              className="border-[4px] rounded-[30px] w-[100%] text-center py-2 font-semibold text-[15px] border-white mx-auto"
              style={{
                background:
                  "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
                boxShadow: "0px 4px 6.8px 0px #00000040",
              }}
            >
              <p className="gradient-text-about">{card.heading}</p>
            </div>
          </Link>
          {/* Scrollable Content */}
          <div
            className="relative h-[200px] overflow-y-scroll px-4 pl-8 custom-scroll mt-7"
            style={{ direction: "rtl" }}
          >
            <div
              className="text-[#656565] text-[13px] font-medium "
              style={{ direction: "ltr" }}
            >
              {card.points.map((point, i) => (
                <li className="list-disc " key={i}>
                  {point}
                </li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
