"use client";
import Image from "next/image";
import React from "react";
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

const TDProjects
 = () => {
  return (
    <div className="z-20 relative">
      <div className="relative">
        <div className="absolute top-80 -z-10 ">
          <Image
            src="/yellowline.svg"
            alt="line"
            width={1000}
            height={1000}
            className="w-[100vw] object-cover h-full  "
          />
        </div>
      </div>
      <div className=" h-full w-full pb-20 flex justify-center items-center">
        <div className="pt-20 px-[20%] ">
          {/* Header */}
          <div className="flex justify-center items-center">
            <div
              className=" rounded-[43px] w-[700px] h-[70px] bg-[#F6D7A9] border-[1px]  text-center py-1 font-semibold text-[25px] border-white"
              style={{
                boxShadow: "0px 4px 15.5px 0px #00000040",
              }}
            >
              <p className=" text-[35px] font-semibold text-[#374688] text-center">
                Projects with this BIM Service
              </p>
            </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
                    className="w-[270px] h-full bg-[#ffffffd7] border-[1px] border-white rounded-[34px] flex flex-col justify-between"
                    style={{
                      boxShadow: "0px 9px 10.4px 0px #A09DCA",
                    }}
                  >
                    <div>
                      <Image
                        src={blog.img}
                        width={1000}
                        height={1000}
                        alt={blog.title}
                        className="w-full h-[84px] object-cover rounded-[26px] border-[9px] border-white"
                        style={{ boxShadow: "0px 9px 10.4px 0px #A09DCA" }}
                      />
                    </div>

                    <div className="p-5 flex flex-col space-y-6 flex-grow">
                      <p className="text-[15px] text-[#4B336D] font-semibold">
                        {blog.title}
                      </p>
                      <p className="text-[11px] text-[#6D6D6D] font-semibold flex-grow">
                        {blog.desc}
                      </p>

                      <div className=" flex justify-start">
                        <Link href={`/blog/${blog.id}`}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-center w-[90px] h-[19.34px] text-[#6D6D6D] rounded-[9.67px] cursor-pointer border-[0.39px] border-[#BCBCBC]  hover:bg-[#6D6D6D] hover:text-white transition duration-300"
                            style={{ boxShadow: "0px 1px 4px 0px #00000040" }}
                          >
                            <p className="text-[11px] pt-[0.5px]">Read More</p>
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

      <div className="relative">
        <div className="absolute -top-64 -z-10 ">
          <Image
            src="/yellowline.svg"
            alt="line"
            width={1000}
            height={1000}
            className="w-[100vw] object-cover h-full  "
          />
        </div>
      </div>

      <div className="flex justify-center items-center  relative z-10">
        <button
          className="text-white text-[21px] rounded-[34px] shadow-xl cursor-pointer w-[272px] h-[50px] sheen-effect"
          style={{
            background:
              "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default TDProjects
;
