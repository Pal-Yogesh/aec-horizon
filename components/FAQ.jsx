"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqData = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide end-to-end AEC solutions including BIM modeling & drafting, technical business development consulting, and digital marketing strategies tailored for architecture, engineering, and construction firms.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us anytime via email or the contact form on our website. Our team usually replies within 24 hours.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! We collaborate with clients worldwide, providing digital and consulting services remotely.",
  },
  {
    question: "What is your project delivery process?",
    answer:
      "Our process includes requirement gathering, planning, execution, client feedback, and final delivery. We ensure transparency at every step.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[url('/faqbg.svg')] bg-cover bg-center w-full h-full">
        <div className="h-full w-full py-8 sm:py-12 lg:py-20 pb-20 sm:pb-28 lg:pb-40 px-4 sm:px-8 lg:px-20 flex justify-center items-center">
          <div
            className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 lg:gap-[15%] border-[2px] sm:border-[3px] lg:border-[3.5px] p-6 sm:p-10 lg:p-16 rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] border-white lg:pl-32 bg-gradient-to-b from-[#FFFFFF] to-[#7d88ff4f] max-w-7xl w-full"
            style={{
              backdropFilter: "blur(4px)",
              boxShadow: "0px 7px 21.3px 0px #00000040",
            }}
          >
            {/* Left Section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-[28px] sm:text-[35px] lg:text-[45px] font-semibold gradient-text-about  text-center lg:text-left">
                <span className="gradient-text-about">Frequently Asked</span>
                <br /> <span>Questions</span>
              </div>

              {/* Still Have Questions */}
              <div
                className="bg-[#FFFFFFA1] border-[3px] sm:border-[4px] border-[#FFFFFF] w-full max-w-[300px] sm:max-w-[320px] lg:w-[339px] h-auto min-h-[280px] sm:min-h-[300px] lg:h-[330px] px-6 sm:px-7 lg:px-8 py-8 sm:py-9 lg:py-10 rounded-[35px] sm:rounded-[40px] lg:rounded-[44px] mt-6 sm:mt-8 lg:mt-10"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <div className="text-[#4B336D] font-medium">
                  <p className="text-[22px] sm:text-[25px] lg:text-[29px]">Still have Questions?</p>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] pt-2">
                    Can&apos;t find the questions that you were looking
                    for? Email us now and we&apos;ll get right back to
                    you!
                  </p>
                </div>

                <div
                  className="border-[1px] mt-6 sm:mt-7 lg:mt-8 text-center flex items-center justify-center w-[115px] h-[42px] sm:w-[125px] sm:h-[46px] lg:w-[132px] lg:h-[49px] border-[#FFFFFF] rounded-[13px] sm:rounded-[14px] lg:rounded-[15.5px] cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                >
                  <button className="text-white text-[17px] sm:text-[19px] lg:text-[21px] font-medium">
                    Email Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:w-auto">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="relative w-full max-w-[350px] sm:max-w-[480px] lg:w-[532px] mx-auto lg:mx-0 bg-[#FFFFFF64] rounded-[35px] sm:rounded-[40px] lg:rounded-[44px] px-6 sm:px-7 lg:px-8 py-6 sm:py-7 lg:py-8 border-[1px] border-white font-semibold"
                  style={{ boxShadow: "0px 9px 10.4px 0px #A09DCA" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Question */}
                  <p className="text-[15px] sm:text-[17px] lg:text-[20px] text-[#4B336D] pr-8">
                    {faq.question}
                  </p>

                  {/* Answer with expand/collapse */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6D6D6D] mt-2 pr-6"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <motion.div
                    onClick={() => toggleFAQ(index)}
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 
                           bg-white rounded-full w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[42px] lg:h-[42px] flex items-center justify-center cursor-pointer"
                    style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.span
                      key={openIndex === index ? "minus" : "plus"}
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-bold text-[22px] sm:text-[25px] lg:text-[28px] gradient-text-about leading-none"
                    >
                      {openIndex === index ? "−" : "+"}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
