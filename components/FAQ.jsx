"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="bg-[url('/faq.svg')] bg-cover bg-center h-full w-full py-40 pb-32 px-20 flex justify-center items-center">
      <div
        className="flex justify-center gap-[10%] border-[2px] p-16 rounded-[80px] border-white 
        bg-[linear-gradient(180deg,rgba(255,255,255,0.39)_0%,rgba(125,135,255,0.3042)_100%)] max-w-7xl"
        style={{
          backdropFilter: "blur(4px)",
          boxShadow: "0px 7px 21.3px 0px #0000004",
        }}
      >
        {/* Left Section */}
        <div>
          <div className="text-[65px] font-semibold gradient-text-about">
            <span className="gradient-text-about">Frequently Asked</span>
            <br /> <span>Questions</span>
          </div>

          {/* Still Have Questions */}
          <div
            className="bg-[#FFFFFFA1] border-[4px] border-[#FFFFFF] w-[532px] px-8 py-10 rounded-[44px] mt-10"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <div className="text-[#4B336D] font-semibold">
              <p className="text-[35px]">Still have Questions?</p>
              <p className="text-[20px] pt-2">
                Can&apos;t find the questions that you <br /> were looking for?
                Email us now and <br /> we&apos;ll get right back to you!
              </p>
            </div>

            <div
              className="bg-[linear-gradient(102.52deg,#CCD5FB_37.02%,#4B6EFF_104.17%)] border-[1px] mt-32 text-center py-5 w-[203px] border-[#FFFFFF] rounded-xl"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            >
              <button className="text-[#000000] text-[25px] font-semibold">
                Email Us
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="relative w-[532px] bg-[#FFFFFF64] rounded-[44px] px-8 py-8 border-[1px] border-white font-semibold"
              style={{ boxShadow: "0px 9px 10.4px 0px #A09DCA" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Question */}
              <p className="text-[20px] text-[#4B336D]">{faq.question}</p>

              {/* Answer with expand/collapse */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="text-[15px] text-[#6D6D6D] mt-2"
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
                           bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center cursor-pointer"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.span
                  key={openIndex === index ? "minus" : "plus"}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-bold text-[28px] gradient-text-about leading-none"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
