"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProcessArchitecture = () => {
  return (
    <>
      <div className="block lg:hidden">
        <div className="flex justify-center items-center pt-20 px-7 md:px-0">
          <div>
            <h2 className="gradient-text font-bold text-[22px] lg:text-[29px]">
              Partner for success
            </h2>
            <h1 className="text-[#4B336D] font-semibold text-[22px] lg:text-[29px]">
              We guide your project from early concept to final closeout.
            </h1>
          </div>
        </div>
        <div className="relative z-0 ">
          <div className="absolute -top-40 right-0 z-[1] ">
            <Image
              src="/yellowblur.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[650px] h-[100%]"
            />
          </div>
        </div>

        <div className="relative w-full h-[75vh] flex items-center justify-center  ">
          {/* Container for background and overlay images */}
          <div className="relative w-[260px] max-w-[260px] aspect-[260/260] mr-4">
            {/* Background group image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/newgroup.svg"
                fill
                alt="group"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Top circle (g1) with text above */}
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-[-42.5%] left-[48%] -translate-x-1/2 flex flex-col items-center"
            >
              {/* Text above g1 */}
              <div className="flex justify-center items-center gap-1 pb-3">
                <div
                  className=" px-3 py-1 lg:px-0 lg:py-0 bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[12px] lg:text-[20px] lg:pt-1"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">A: Architecture</h1>
                </div>
                <div
                  className="lg:w-[48px] lg:h-[48px] bg-[#FFFFFF] rounded-full text-center font-bold text-[12px] px-2 py-1 lg:px-0 lg:py-0 lg:text-[20px] lg:pt-2"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">1</h1>
                </div>
              </div>
              <div className="flex justify-center items-center text-[8px] w-[160px]">
                {/* <div className="text-center"> */}
                <span className="gradient-text text-center">
                  BIM & Drafting Services → Precise design documentation, 3D BIM
                  modeling, and construction-ready plans ensure your vision
                  becomes a buildable reality.
                </span>

                {/* </div> */}
              </div>
              {/* g1 SVG */}
              <Image
                src="/g1.svg"
                width={1000}
                height={1000}
                alt="group"
                className=" w-[90px] h-[90px] max-w-[90px] object-contain mt-[18%]  lg:mt-[25.5%]"
              />
            </motion.div>

            {/* Bottom left circle (g2) with text below */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="absolute bottom-[7%] left-[4%] "
            >
              {/* g2 SVG */}
              <Image
                src="/g2.svg"
                width={1000}
                height={1000}
                alt="group"
                className=" w-[90px] h-[90px] max-w-[90px] object-contain mt-[26%] lg:mt-[12%]"
              />
              {/* Text below g2 */}

              <div className="absolute right-[-32%] top-[93%]">
                <div className="mt-[17%] flex justify-center items-center gap-1  pt-3 ">
                  <div
                    className="w-[120px] lg:w-[175px] py-1 bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[12px]"
                    style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                  >
                    <h1 className="gradient-text">E: Engineering</h1>
                  </div>
                  <div
                    className="w-7 h-7 bg-[#FFFFFF] rounded-full text-center font-bold text-[12px] pt-1"
                    style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                  >
                    <h1 className="gradient-text">2</h1>
                  </div>
                </div>
                <div className="flex justify-center items-center text-[8px] pt-2">
                  <div className="text-center">
                    <span className="gradient-text">
                      Technical Business Development → Secure new projects and
                      streamline proposals with industry-focused business
                      intelligence, proposal management, and workflow automation
                      for engineering teams.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom right circle (g3) with text below */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              // viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="absolute bottom-[-41%] md:bottom-[-38%] right-[-42%]   "
            >
              {/* g3 SVG */}
              <Image
                src="/g3.svg"
                width={1000}
                height={1000}
                alt="group"
                className=" w-[90px] h-[90px] max-w-[90px] object-contain "
              />
              {/* Text below g3 */}
              <div className="mt-[8%] flex justify-center items-center gap-1 pt-3 mr-[10%] sm:mr-0">
                <div
                  className="w-7 h-7 bg-[#FFFFFF] rounded-full text-center font-bold text-[12px] pt-1"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">3</h1>
                </div>
                <div
                  className="py-1 px-3 bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[12px] mr-[10%] sm:mr-0"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text ">C: Construction</h1>
                </div>
              </div>
              <div className="flex justify-center items-center text-[8px] pt-2 mr-[10%] sm:mr-0">
                <div className="text-center">
                  <span className="gradient-text">
                    Branding & Digital Marketing → Attract
                  </span>
                  <br />
                  <span className="gradient-text">
                    clients, showcase completed projects,
                  </span>
                  <br />
                  <span className="gradient-text">
                    and strengthen your reputation with specialized{" "}
                  </span>
                  <br />
                  <span className="gradient-text">
                    AEC marketing strategies that drive business growth.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <h2 className="gradient-text font-bold text-[29px]">
              Partner for success
            </h2>
            <h1 className="text-[#4B336D] font-semibold text-[29px]">
              We guide your project from early concept to final closeout.
            </h1>
          </div>
        </div>

        <div className="relative z-0 ">
          <div className="absolute -top-40 right-0 z-[1] ">
            <Image
              src="/yellowblur.svg"
              width={1000}
              height={1000}
              alt="blur"
              className="w-[650px] h-[100%]"
            />
          </div>
        </div>

        <div className="relative w-full h-[80vh] flex items-center justify-center ">
          {/* Container for background and overlay images */}
          <div className="relative w-[400px] max-w-[400px] aspect-[400/400]">
            {/* Background group image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/newgroup.svg"
                fill
                alt="group"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Top circle (g1) with text above */}
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-[-33%] left-[48%] -translate-x-1/2 flex flex-col items-center"
            >
              {/* Text above g1 */}
              <div className="flex justify-center items-center gap-3 pb-3">
                <div
                  className="w-[175px] h-[38px] bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[20px] pt-1"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">A: Architecture</h1>
                </div>
                <div
                  className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-full text-center font-bold text-[20px] pt-2"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">1</h1>
                </div>
              </div>
              <div className="flex justify-center items-center text-[11px] pb-2 ">
                <div className="text-center">
                  <span className="gradient-text">
                    BIM & Drafting Services → Precise
                  </span>
                  <br />
                  <span className="gradient-text">
                    design documentation, 3D BIM modeling,
                  </span>
                  <br />
                  <span className="gradient-text">
                    and construction-ready plans ensure your vision becomes a
                    buildable reality.
                  </span>
                </div>
              </div>
              {/* g1 SVG */}
              <Image
                src="/g1.svg"
                width={1000}
                height={1000}
                alt="group"
                className="w-[123px] h-[123px] max-w-[123px] object-contain mt-[12%]"
              />
            </motion.div>

            {/* Bottom left circle (g2) with text below */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="absolute bottom-[8%] left-[5%] "
            >
              {/* g2 SVG */}
              <Image
                src="/g2.svg"
                width={1000}
                height={1000}
                alt="group"
                className="w-[123px] h-[123px] max-w-[123px] object-contain mt-[12%]"
              />
              {/* Text below g2 */}

              <div className="absolute right-[-10%] top-[98%]">
                <div className="mt-[17%] lg:mt-[6%] flex justify-center items-center gap-3  pt-3 ">
                  <div
                    className="w-[175px] h-[38px] bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[20px] pt-1"
                    style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                  >
                    <h1 className="gradient-text">E: Engineering</h1>
                  </div>
                  <div
                    className="w-[48px] h-[48px] bg-[#FFFFFF] rounded-full text-center font-bold text-[20px] pt-2"
                    style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                  >
                    <h1 className="gradient-text">2</h1>
                  </div>
                </div>
                <div className="flex justify-center items-center text-[11px] pt-2">
                  <div className="text-center">
                    <span className="gradient-text">
                      Technical Business Development → Secure new projects and
                      streamline proposals with industry-focused business
                      intelligence, proposal management, and workflow automation
                      for engineering teams.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom right circle (g3) with text below */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="absolute bottom-[-28%] right-[-34%]  "
            >
              {/* g3 SVG */}
              <Image
                src="/g3.svg"
                width={1000}
                height={1000}
                alt="group"
                className="w-[123px] h-[123px] max-w-[123px] object-contain mt-[12%]"
              />
              {/* Text below g3 */}
              <div className=" flex justify-center items-center gap-3 mt-[12%] ">
                <div
                  className="w-[40px] h-[40px] bg-[#FFFFFF] rounded-full text-center font-bold text-[20px] pt-1"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">3</h1>
                </div>
                <div
                  className="w-[175px] h-[38px] bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[20px] pt-1"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">C: Construction</h1>
                </div>
              </div>
              <div className="flex justify-center items-center text-[11px] pt-2">
                <div className="text-center">
                  <span className="gradient-text">
                    Needs: Branding & Digital Marketing →
                  </span>
                  <br />
                  <span className="gradient-text">
                    Attract clients, showcase completed projects,
                  </span>
                  <br />
                  <span className="gradient-text">
                    and strengthen your reputation with specialized{" "}
                  </span>
                  <br />
                  <span className="gradient-text">
                    AEC marketing strategies that drive business growth.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessArchitecture;
