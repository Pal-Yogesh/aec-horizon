// "use client";
// import { useParams } from "next/navigation";
// import Image from "next/image";

// const blogData = [
//   {
//     id: 1,
//     title: "Reimagining Workflows with BIM",
//     desc: "Discover how Building Information Modeling (BIM) is revolutionizing collaboration, reducing errors, and accelerating timelines across multidisciplinary teams.",
//     img: "/img.png",
//   },
//   {
//     id: 2,
//     title: "The Future of Sustainable Structures",
//     desc: "Explore next-gen green building solutions, from carbon-neutral materials to energy-positive designs that redefine what's possible.",
//     img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
//   },
// {
//   id: 3,
//   title: "Bridging the Gap Between Design & Execution",
//   desc: "Understand why aligning design intent with technical precision early on can prevent costly delays and elevate project outcomes.",
//   img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
// },
// {
//   id: 4,
//   title: "Marketing in the Built World",
//   desc: "Uncover the power of digital branding, storytelling, and outreach strategies to position your firm as a market leader in the AEC space.",
//   img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
// },
// {
//   id: 5,
//   title: "Top Tech Tools for AEC Teams",
//   desc: "Get a curated list of cutting-edge platforms driving productivity, accuracy, and seamless communication on complex projects.",
//   img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
// },
// {
//   id: 6,
//   title: "The Power of Interdisciplinary Collaboration",
//   desc: "See how uniting architects, engineers, and business strategists creates stronger teams and breakthrough project results.",
//   img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
// },
// ];

// export default function BlogDetail() {
//   const { id } = useParams();
//   const blog = blogData.find((b) => b.id === Number(id));

//   if (!blog) return <p className="p-10">Blog not found</p>;

//   return (
//     <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full pb-20">
//       <div className="pt-40 px-32 ">
//         <div
//           className="border-[4px] rounded-[30px] w-[210px] text-center py-2 font-semibold text-[25px] border-white"
//           style={{
//             background:
//               "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//           }}
//         >
//           <p className="gradient-text-about">Read Blogs</p>
//         </div>
//         <span className="gradient-text font-bold text-[65px]">Blogs</span>

//         <div className="mt-10 flex justify-center items-center flex-col space-y-5">
//           <div
//             className="border-[4px] rounded-[30px] w-[210px] text-center py-2 font-semibold text-[25px] border-white"
//             style={{
//               background:
//                 "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//             }}
//           >
//             <p className="gradient-text-about">BIM & Drafting</p>
//           </div>
//           <h1 className="text-[50px] text-center font-bold gradient-text">
//             {blog.title}
//           </h1>
//           <div
//             className="border-[4px] rounded-[30px] w-[484px] text-center py-2 font-semibold text-[25px] border-white"
//             style={{
//               background:
//                 "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//             }}
//           >
//             <p className="gradient-text-about">
//               22nd January | 2:32 am | AEC Horizon
//             </p>
//           </div>
//           <div
//             className="max-w-7xl bg-[#FFFFFF70] w-full h-[588px] rounded-[58px] border-[4px] border-white flex justify-center items-center"
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             <Image
//               src={blog.img}
//               width={800}
//               height={400}
//               alt={blog.title}
//               className="rounded-lg my-6"
//             />
//           </div>

//           <div></div>
//           <p className="text-lg text-[#6D6D6D]">{blog.desc}</p>
//         </div>

//         <div>
//           <div
//             className="w-[355px] bg-[#FFFFFF70] border-[2px] border-white  rounded-[58px]"
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             <div
//               className="text-black bg-[#FFFFFF] font-bold text-[20px] w-[121px] rounded-[58px] text-center p-2"
//               style={{
//                 boxShadow: "0px 4px 4px 0px #00000040",
//               }}
//             >
//               INDEX
//             </div>

//             <div className="text-[#88799C] text-[20px] text-medium hover:bg-white hover:text-[#4B336D] hover:rounded-[58px] w-[232px]">
//               blog content 1
//             </div>
//             <div className="text-[#88799C] text-[20px] text-medium">
//               blog content 2
//             </div>
//             <div className="text-[#88799C] text-[20px] text-medium">
//               blog content 3
//             </div>
//             <div className="text-[#88799C] text-[20px] text-medium">
//               blog content 4
//             </div>
//             <div className="text-[#88799C] text-[20px] text-medium">
//               blog content 5
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Understanding BIM in Conceptualization and Design",
    desc: "Explore how Building Information Modeling (BIM) enhances conceptualization and design phases in construction projects.",
    img: "/img.png",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Future of Sustainable Structures",
    desc: "Explore next-gen green building solutions, from carbon-neutral materials to energy-positive designs that redefine what's possible.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Bridging the Gap Between Design & Execution",
    desc: "Understand why aligning design intent with technical precision early on can prevent costly delays and elevate project outcomes.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Marketing in the Built World",
    desc: "Uncover the power of digital branding, storytelling, and outreach strategies to position your firm as a market leader in the AEC space.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Top Tech Tools for AEC Teams",
    desc: "Get a curated list of cutting-edge platforms driving productivity, accuracy, and seamless communication on complex projects.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "The Power of Interdisciplinary Collaboration",
    desc: "See how uniting architects, engineers, and business strategists creates stronger teams and breakthrough project results.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
    content: [
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
      {
        heading: "Conceptualization",
        items: [
          "Idea Development: BIM tools provide the capability to visually represent and analyze initial design concepts, giving stakeholders the opportunity to thoroughly explore different design options, evaluate feasibility, and enhance ideas at an early stage of the project.",
          "Early Cost Estimation: Even at the conceptual stage, BIM provides cost estimations based on preliminary models, offering a more informed basis for budget decisions.",
        ],
      },
      {
        heading: "Design and Modeling",
        items: [
          "Detailed Design: BIM facilitates the creation of detailed 3D models that encompass architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) elements, allowing for a comprehensive and integrated design.",
          "Collaboration: Designers and engineers can collaborate seamlessly, ensuring that all aspects of the building are aligned and integrated within the model.",
        ],
      },
    ],
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  if (!blog) return <p className="p-10">Blog not found</p>;

  return (
    <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full pb-20">
      <div className="pt-40 px-[20%] ">
        <div
          className="border-[4px] rounded-[30px] w-[210px] text-center py-1 font-semibold text-[25px] border-white"
          style={{
            background:
              "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
              boxShadow: "0px 4px 6.8px 0px #00000040",

          }}
        >
          <p className="gradient-text-about text-[25px] ">Read Blogs</p>
        </div>
        <span className="gradient-text font-bold text-[65px]">Blogs</span>

        <div className="mt-10 flex justify-center items-center flex-col  space-y-5">
          <div
            className="border-[4px] rounded-[30px] w-[210px] text-center py-2 font-semibold text-[25px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            }}
          >
            <p className="gradient-text-about">BIM & Drafting</p>
          </div>
          <h1 className="text-[50px] text-center font-bold gradient-text">
            {blog.title}
          </h1>
          <div
            className="border-[4px] rounded-[30px] w-[484px] text-center py-2 font-semibold text-[25px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            }}
          >
            <p className="gradient-text-about">
              22nd January | 2:32 am | AEC Horizon
            </p>
          </div>
          <div
            className="max-w-7xl bg-[#FFFFFF70] w-full h-[588px] rounded-[58px] border-[4px] border-white flex justify-center items-center"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <Image
              src={blog.img}
              width={800}
              height={400}
              alt={blog.title}
              className="rounded-lg my-6"
            />
          </div>

          {/* Main Content Section */}
          <div className="flex mt-10 space-x-10">
            {/* INDEX */}
            <div
              className="w-[355px] bg-[#FFFFFF70] border-[2px] border-white rounded-[58px] p-4"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <div className="flex justify-center items-center">

              <div
                className="text-black   bg-[#FFFFFF] font-bold text-[20px] w-[121px] rounded-[58px] text-center p-2 mb-4"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                >
                INDEX
              </div>
                </div>
              {blog.content.map((c, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedContentIndex(index)}
                  className={`text-[20px] cursor-pointer mb-2 p-2 rounded-[58px] text-center ${
                    selectedContentIndex === index
                      ? "bg-white text-[#4B336D]"
                      : "text-[#88799C]"
                  } hover:bg-white hover:text-[#4B336D]`}
                >
                  {c.heading}
                </div>
              ))}
            </div>

            {/* Selected Content Display */}
            <div
              className="flex-1 bg-[#FFFFFF70] rounded-[58px] p-6  text-[#4B336D] "
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <h2 className=" mb-5 text-[45px] font-medium">
                {blog.content[selectedContentIndex].heading}
              </h2>
              <ul className="list-disc  text-[25px] pl-6">
                {blog.content[selectedContentIndex].items.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
