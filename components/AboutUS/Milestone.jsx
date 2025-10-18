"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Handshake, Rocket } from "lucide-react";

const TimelineNode = ({
  icon: Icon,
  label,
  position = "top",
  delay = 0,
  index,
}) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={nodeRef}
      className="relative flex flex-col items-center justify-center"
      style={{ minWidth: "120px" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay, type: "spring" }}
    >
      {/* Content positioned above the line */}
      {position === "top" && label && (
        <motion.div
          className="flex flex-col items-center absolute"
          style={{ bottom: "12px" }} // Position above the dot
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <motion.div
            className="relative mb-3"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div
              className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ACBAFF] to-[#8a9dff61] bg-transparent border-[1.68px] border-white flex items-center justify-center shadow-xl relative z-10"
              style={{
                boxShadow: "0px 5.9px 15.17px 0px #8499FF",
              }}
            >
              <Icon className="w-8 h-8 text-[#4B336D]" strokeWidth={2.5} />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-300 blur-2xl"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: isHovered ? [0.4, 0.6, 0.4] : [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          {/* <motion.span
            className="text-[#4B336D] font-bold text-[12px]  text-center whitespace-nowrap"
            whileHover={{ scale: 1.05, color: "#6B46A0" }}
          >
            {label}
          </motion.span> */}
          {/* Vertical connecting line going down to the dot */}
          <motion.div
            className="w-[3px] h-24 bg-gradient-to-b from-transparent via-[#5B6DCF] to-[#4B336D] rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            style={{ transformOrigin: "bottom" }}
          />
        </motion.div>
      )}

      {position === "bottom" && label && (
        <motion.div
          className="flex flex-col items-center absolute"
          style={{ bottom: "30px" }} // Position below the dot
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <motion.span
            className="text-[#4B336D] font-bold text-[12px] text-center whitespace-nowrap"
            whileHover={{ scale: 1.05, color: "#6B46A0" }}
          >
            {label}
          </motion.span>
        </motion.div>
      )}
      {/* Dot on the middle line */}
      <motion.div
        className="relative z-20"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
      >
        <div className="w-5 h-5 rounded-full bg-[#738AFF] border-3 border-white shadow-lg" />
        {/* Pulsing/blinking animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
      </motion.div>
      {position === "top" && label && (
        <motion.div
          className="flex flex-col items-center absolute"
          style={{ top: "30px" }} // Position above the dot
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <motion.span
            className="text-[#4B336D] font-bold text-[12px]  text-center whitespace-nowrap"
            whileHover={{ scale: 1.05, color: "#6B46A0" }}
          >
            {label}
          </motion.span>
        </motion.div>
      )}

      {/* Content positioned below the line */}
      {position === "bottom" && label && (
        <motion.div
          className="flex flex-col items-center absolute"
          style={{ top: "12px" }} // Position below the dot
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {/* Vertical connecting line going up from the dot */}
          <motion.div
            className="w-[3px] h-24 bg-gradient-to-b from-[#5B6DCF] via-[#4B336D] to-transparent rounded-full mb-3"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            style={{ transformOrigin: "top" }}
          />
          <motion.div
            className="relative mb-3"
            whileHover={{ scale: 1.15, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div
              className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ACBAFF] to-[#8a9dff61] bg-transparent border-[1.68px] border-white flex items-center justify-center shadow-xl relative z-10"
              style={{
                boxShadow: "0px 5.9px 15.17px 0px #8499FF",
              }}
            >
              <Icon className="w-8 h-8 text-[#4B336D]" strokeWidth={2.5} />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-300 blur-2xl"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: isHovered ? [0.4, 0.6, 0.4] : [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          {/* <motion.span
            className="text-[#4B336D] font-bold text-[12px] text-center whitespace-nowrap"
            whileHover={{ scale: 1.05, color: "#6B46A0" }}
          >
            {label}
          </motion.span> */}
        </motion.div>
      )}
    </motion.div>
  );
};

const Timeline = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // 3 items above, 3 items below the middle line
  const timelineData = [
    { icon: Eye, label: "The Vision", position: "top" },
    { icon: Handshake, label: "The Breakthrough", position: "bottom" },
    { icon: Handshake, label: "The Launch", position: "top" },
    { icon: Rocket, label: "The Breakthrough", position: "bottom" },
    { icon: Handshake, label: "The Launch", position: "top" },
    { icon: Rocket, label: "The Launch", position: "bottom" },
  ];

  return (
    <div className=" py-20 px-[14%] overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-block border-[2px] rounded-[44px] px-12 py-3 font-semibold text-[25px] border-[#FFFFFF4D]"
            style={{
              background:
                "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
              boxShadow: "0px 2.96px 5.03px 0px #00000040",
            }}
          >
            <p className="gradient-text-about text-[30px]">
              View Our Milestones
            </p>
          </div>
        </motion.div>

        <div className="relative py-32">
          {/* Main horizontal dashed timeline - positioned in the middle */}
          <motion.div
            ref={lineRef}
            className="absolute bg-[#ACBAFF] left-0 right-0 top-1/2 transform -translate-y-1/2 z-10"
            style={{
              height: "3.5px",
              boxShadow: "0px 1.82px 1.82px 0px #00000040 inset",
            }}
          >
            <svg width="100%" height="4" className="absolute top-0 left-0">
              <motion.line
                x1="0"
                y1="2"
                x2="100%"
                y2="2"
                stroke="url(#timelineGradient)"
                strokeWidth="4"
                strokeDasharray="12 8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />
              <defs>
                <linearGradient
                  id="timelineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
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

          {/* Timeline nodes positioned along the middle line */}
          <div className="flex justify-between items-center relative gap-4">
            {/* Starting circle - 2023 */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, x: -30, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -30, scale: 0.8 }
              }
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.08, rotate: 5 }}
            >
              <div className="w-[98px] h-[98px] rounded-full bg-gradient-to-b from-[#ACBAFF] to-[#8A9DFF] border-[1.68px] border-white shadow-2xl flex flex-col items-center justify-center relative z-20">
                <span className="text-[12px] font-semibold text-[#1D2966] bg-[#FFFFFF] border-[0.42px] border-white rounded-[7px]  px-2 ">
                  2023
                </span>
                <span className="text-[12px] text-[#1D2966] font-semibold">
                  we started
                </span>
                <span className="text-[12px] text-[#1D2966] font-semibold">
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
            {timelineData.map((item, index) => (
              <TimelineNode
                key={index}
                icon={item.icon}
                label={item.label}
                position={item.position}
                delay={1 + index * 0.2}
                index={index}
              />
            ))}

            {/* End circle on the middle line */}
            <motion.div
              className="w-4 h-4 rounded-full bg-[#ACBAFF]  shadow-xl relative z-20 flex-shrink-0"
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

export default Timeline;
