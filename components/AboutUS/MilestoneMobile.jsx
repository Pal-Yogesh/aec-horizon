"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Handshake, Rocket } from "lucide-react";
import SectionBg2 from "../Background/SectionBG2";

const VerticalTimelineNode = ({
  icon: Icon,
  label,
  position = "left",
  delay = 0,
  index,
}) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={nodeRef}
      className="relative flex items-center justify-center my-8"
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: position === "left" ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: delay, type: "spring" }}
    >
      {/* Content positioned left */}
      {position === "left" && (
        <motion.div
          className="flex items-center absolute right-0 "
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {/* Horizontal connecting line */}
          <div
            className="w-[45px] h-[45px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-b from-[#ACBAFF] to-[#8a9dff61] bg-transparent border-[1.68px] border-white flex items-center justify-center shadow-xl relative z-10"
            style={{
              boxShadow: "0px 5.9px 15.17px 0px #8499FF",
            }}
          >
            <Icon
              className="w-6 h-6 sm:w-8 sm:h-8 text-[#4B336D]"
              strokeWidth={2.5}
            />
          </div>
          <motion.div
            className="w-12 sm:w-16 h-[3px] bg-gradient-to-r from-transparent via-[#5B6DCF] to-[#4B336D] rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            style={{ transformOrigin: "right" }}
          />

          <motion.div
            className="relative ml-3"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-300 blur-2xl"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: isHovered ? [0.4, 0.6, 0.4] : [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Dot on the middle line */}
      <motion.div
        className="relative z-20"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#738AFF] border-3 border-white shadow-lg" />
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
      </motion.div>

      {/* Content positioned right */}
      {position === "right" && (
        <motion.div
          className="flex items-center absolute left-0"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <motion.div
            className="relative mr-3"
            whileHover={{ scale: 1.15, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-300 blur-2xl"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: isHovered ? [0.4, 0.6, 0.4] : [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Horizontal connecting line */}
          <motion.div
            className="w-12 sm:w-16 h-[3px] bg-gradient-to-r from-[#4B336D] via-[#5B6DCF] to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            style={{ transformOrigin: "left" }}
          />
          <div
            className="w-[45px] h-[45px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-b from-[#ACBAFF] to-[#8a9dff61] bg-transparent border-[1.68px] border-white flex items-center justify-center shadow-xl relative z-10"
            style={{
              boxShadow: "0px 5.9px 15.17px 0px #8499FF",
            }}
          >
            <Icon
              className="w-6 h-6 sm:w-8 sm:h-8 text-[#4B336D]"
              strokeWidth={2.5}
            />
          </div>

          {/* <motion.span
            className="text-[#4B336D] font-bold text-[11px] sm:text-[12px] text-left whitespace-nowrap ml-3"
            whileHover={{ scale: 1.05, color: "#6B46A0" }}
          >
            {label}
          </motion.span> */}
        </motion.div>
      )}

      {position === "left" && (
        <motion.div
          className="text-[#4B336D] absolute top-0 -right-24  font-bold text-[11px] sm:text-[12px] text-right whitespace-nowrap mr-3"
          whileHover={{ scale: 1.05, color: "#6B46A0" }}
        >
          {label}
        </motion.div>
      )}

      {position === "right" && (
        <motion.div
          className="text-[#4B336D] absolute top-0 -left-32  font-bold text-[11px] sm:text-[12px] text-left whitespace-nowrap ml-3"
          whileHover={{ scale: 1.05, color: "#6B46A0" }}
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
};

const MilestoneMobile = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true});

  const verticalTimelineData = [
    { icon: Eye, label: "The Vision", position: "left" },
    { icon: Handshake, label: "The Breakthrough", position: "right" },
    { icon: Handshake, label: "The Launch", position: "left" },
    { icon: Rocket, label: "The Breakthrough", position: "right" },
    { icon: Handshake, label: "The Launch", position: "left" },
    { icon: Rocket, label: "The Launch", position: "right" },
  ];

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <SectionBg2 />
      </div>
      <div className=" sm:px-8">
        <div ref={containerRef} className="max-w-2xl mx-auto ">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block border-[2px] rounded-[35px] sm:rounded-[44px] px-6 sm:px-10 py-2 sm:py-3 font-semibold border-[#FFFFFF4D]"
              style={{
                background:
                  "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
                boxShadow: "0px 2.96px 5.03px 0px #00000040",
              }}
            >
              <p className="gradient-text-about text-[20px] sm:text-[25px]">
                View Our Milestones
              </p>
            </div>
          </motion.div>

          <div className="relative flex flex-col items-center py-8">
            {/* Main vertical dashed timeline */}
            <motion.div
              className="absolute bg-[#ACBAFF] top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
              style={{
                width: "3.5px",
                height: "600px",
                marginTop: "50px",
                boxShadow: "0px 1.82px 1.82px 0px #00000040 inset",
              }}
            >
              <svg width="4" height="100%" className="absolute top-0 left-0">
                <motion.line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="100%"
                  stroke="url(#timelineGradientVertical)"
                  strokeWidth="4"
                  strokeDasharray="12 8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient
                    id="timelineGradientVertical"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="25%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="75%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Starting circle - 2023 */}
            <motion.div
              className="relative z-20 mb-6"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -30, scale: 0.8 }
              }
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.08, rotate: 5 }}
            >
              <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-full bg-gradient-to-b from-[#ACBAFF] to-[#8A9DFF] border-[1.68px] border-white shadow-2xl flex flex-col items-center justify-center relative z-20">
                <span className="text-[11px] sm:text-[12px] font-semibold text-[#1D2966] bg-[#FFFFFF] border-[0.42px] border-white rounded-[7px] px-2">
                  2023
                </span>
                <span className="text-[10px] sm:text-[12px] text-[#1D2966] font-semibold">
                  we started
                </span>
                <span className="text-[10px] sm:text-[12px] text-[#1D2966] font-semibold">
                  here
                </span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-300 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Timeline milestone nodes */}
            {verticalTimelineData.map((item, index) => (
              <VerticalTimelineNode
                key={index}
                icon={item.icon}
                label={item.label}
                position={item.position}
                delay={1 + index * 0.2}
                index={index}
              />
            ))}

            {/* End circle */}
            <motion.div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#ACBAFF] shadow-xl relative z-20 mt-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 2.5, type: "spring" }}
              whileHover={{ scale: 1.25, rotate: 180 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400 blur-xl"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneMobile;
