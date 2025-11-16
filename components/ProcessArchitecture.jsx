"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProcessArchitecture = () => {
  return (
    <>
      <div className="block lg:hidden">
        <div className="flex justify-center items-center pt-20 pb-10 ">
          <div>
            <h2 className="gradient-text font-bold text-[22px] lg:text-[29px]">
              Process From Drafts To Deals
            </h2>
            <h1 className="text-[#4B336D] font-semibold text-[22px] lg:text-[29px]">
              We&apos;ve always got you covered
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

        <div className="relative w-full h-[80vh] flex items-center justify-center  ">
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
              className="absolute top-[-38.5%] left-[48%] -translate-x-1/2 flex flex-col items-center"
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
                <div className="text-center">
                  <span className="gradient-text">
                    BIM & Drafting Services → For precise
                  </span>
                  <br />
                  <span className="gradient-text">
                    design documentation, 3D modeling,
                  </span>
                  <br />
                  <span className="gradient-text">
                    and construction-ready plans.
                  </span>
                </div>
              </div>
              {/* g1 SVG */}
              <Image
                src="/g1.svg"
                width={1000}
                height={1000}
                alt="group"
                className=" w-[90px] h-[90px] max-w-[90px] object-contain mt-[25.5%]"
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
                    className="w-[120px] py-1 bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[12px]"
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
                      Technical Business Development → To
                    </span>
                    <br />
                    <span className="gradient-text">
                      secure projects, create proposals.
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
              className="absolute bottom-[-32.5%] right-[-21.5%]  "
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
              <div className="mt-[12%] flex justify-center items-center gap-1 pt-3 ">
                <div
                  className="w-7 h-7 bg-[#FFFFFF] rounded-full text-center font-bold text-[12px] pt-1"
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text">3</h1>
                </div>
                <div
                  className="py-1 px-3 bg-[#FFFFFF] rounded-[19px] text-center font-bold text-[12px] "
                  style={{ boxShadow: "0px 2.29px 2.29px 0px #00000040" }}
                >
                  <h1 className="gradient-text ">C: Construction</h1>
                </div>
              </div>
              <div className="flex justify-center items-center text-[8px] pt-2">
                <div className="text-center">
                  <span className="gradient-text">
                    Needs: Branding & Digital Marketing →
                  </span>
                  <br />
                  <span className="gradient-text">
                    To attract clients, showcase completed
                  </span>
                  <br />
                  <span className="gradient-text">projects.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-center items-center pt-20 pb-10 ">
          <div>
            <h2 className="gradient-text font-bold text-[29px]">
              Process From Drafts To Deals
            </h2>
            <h1 className="text-[#4B336D] font-semibold text-[29px]">
              We&apos;ve always got you covered
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
              <div className="flex justify-center items-center text-[11px] pb-6">
                <div className="text-center">
                  <span className="gradient-text">
                    BIM & Drafting Services → For precise
                  </span>
                  <br />
                  <span className="gradient-text">
                    design documentation, 3D modeling,
                  </span>
                  <br />
                  <span className="gradient-text">
                    and construction-ready plans.
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

              <div className="absolute right-[-32%] top-[93%]">
                <div className="mt-[17%] flex justify-center items-center gap-3  pt-3 ">
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
                      Technical Business Development → To
                    </span>
                    <br />
                    <span className="gradient-text">
                      secure projects, create proposals.
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
              className="absolute bottom-[-26%] right-[-21.2%]  "
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
              <div className="mt-[12%] flex justify-center items-center gap-3 pt-3 ">
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
                    To attract clients, showcase completed
                  </span>
                  <br />
                  <span className="gradient-text">projects.</span>
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
