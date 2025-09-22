// "use client";
// import Image from "next/image";
// import React from "react";

// const AboutUs = () => {
//   return (
//     <div>
//       <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full">
//         <div className="pt-40 px-10">
//           <div
//             className="border-[4px] rounded-[30px] w-[210px] text-center py-2 font-semibold text-[25px] border-white"
//             style={{
//               background:
//                 "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
//             }}
//           >
//             <p className="gradient-text-about">Resources</p>
//           </div>

//           <span className="gradient-text font-bold text-[65px]">Blogs</span>

//           <div>
//             <div>
//               <div
//                 className="w-[337px] h-full bg-[#FFFFFFA1]   rounded-[44px]"
//                 style={{
//                   boxShadow: "0px 9px 10.4px 0px #A09DCA",
//                 }}
//               >
//                 <div className=" ">
//                   <Image
//                     src="https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
//                     width={1000}
//                     height={1000}
//                     alt="blog1"
//                     className="w-full  h-[109px] object-cover rounded-[40px] border-[9px] border-white"
//                     style={{ boxShadow: "0px 9px 10.4px 0px #A09DCA" }}
//                   />
//                 </div>

//                 <div className="p-5 space-y-6 ">
//                   <p className="text-[20px] text-[#4B336D] font-semibold">
//                     Reimagining Workflows with BIM
//                   </p>

//                   <p className="text-[15px] text-[#6D6D6D] font-semibold ">
//                     Discover how Building Information Modeling (BIM) is
//                     revolutionizing collaboration, reducing errors, and
//                     accelerating timelines across multidisciplinary teams.
//                   </p>

//                   <div className="flex justify-start">
//                     <div
//                       className="text-center w-[117px]  text-[#6D6D6D] rounded-[12.5px] cursor-pointer border-[0.5px] border-[#BCBCBC] py-1 hover:bg-[#6D6D6D] hover:text-white transition duration-300"
//                       style={{
//                         boxShadow: "0px 1px 4px 0px #00000040",
//                       }}
//                     >
//                       <button className="text-[15px] cursor-pointer ">
//                         Read More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "Reimagining Workflows with BIM",
    desc: "Discover how Building Information Modeling (BIM) is revolutionizing collaboration, reducing errors, and accelerating timelines across multidisciplinary teams.",
    img: "/img.png",
  },
  {
    id: 2,
    title: "The Future of Sustainable Structures",
    desc: "Explore next-gen green building solutions, from carbon-neutral materials to energy-positive designs that redefine what's possible.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Bridging the Gap Between Design & Execution",
    desc: "Understand why aligning design intent with technical precision early on can prevent costly delays and elevate project outcomes.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Marketing in the Built World",
    desc: "Uncover the power of digital branding, storytelling, and outreach strategies to position your firm as a market leader in the AEC space.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Top Tech Tools for AEC Teams",
    desc: "Get a curated list of cutting-edge platforms driving productivity, accuracy, and seamless communication on complex projects.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "The Power of Interdisciplinary Collaboration",
    desc: "See how uniting architects, engineers, and business strategists creates stronger teams and breakthrough project results.",
    img: "https://plus.unsplash.com/premium_photo-1757343190565-3b99182167e3?w=500&auto=format&fit=crop&q=60",
  },
];

const AboutUs = () => {
  // const [visibleBlogs, setVisibleBlogs] = useState(blogData);

  return (
    <div>
      <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full pb-20">
        <div className="pt-40 px-32 ">
          {/* Header */}
          <div
            className="border-[4px] rounded-[30px] w-[210px] text-center py-2 font-semibold text-[25px] border-white"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
            }}
          >
            <p className="gradient-text-about">Resources</p>
          </div>
          <span className="gradient-text font-bold text-[65px]">Blogs</span>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <AnimatePresence>
              {blogData.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div
                    className="w-[337px] h-full bg-[#FFFFFFA1] rounded-[44px] flex flex-col justify-between"
                    style={{
                      boxShadow: "0px 9px 10.4px 0px #A09DCA",
                    }}
                  >
                    {/* Image */}
                    <div>
                      <Image
                        src={blog.img}
                        width={1000}
                        height={1000}
                        alt={blog.title}
                        className="w-full h-[109px] object-cover rounded-[40px] border-[9px] border-white"
                        style={{ boxShadow: "0px 9px 10.4px 0px #A09DCA" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col space-y-6 flex-grow">
                      <p className="text-[20px] text-[#4B336D] font-semibold">
                        {blog.title}
                      </p>
                      <p className="text-[15px] text-[#6D6D6D] font-semibold flex-grow">
                        {blog.desc}
                      </p>

                      {/* Button fixed at bottom */}
                      <div className="mt-4 flex justify-start">
                        <Link href={`/blog/${blog.id}`}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-center w-[117px] text-[#6D6D6D] rounded-[12.5px] cursor-pointer border-[0.5px] border-[#BCBCBC] py-1 hover:bg-[#6D6D6D] hover:text-white transition duration-300"
                            style={{ boxShadow: "0px 1px 4px 0px #00000040" }}
                          >
                            <button className="text-[15px] cursor-pointer">
                              Read More
                            </button>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
