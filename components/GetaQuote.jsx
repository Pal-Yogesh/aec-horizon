"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const GetaQuote = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    nameAndDesignation: "",
    description: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/send-email", {
        ...formData,
        source: "Get a Quote"
      });
      
      if (response.data.success) {
        toast.success("Quote request sent successfully! We'll get back to you soon.");
        
        // Reset form
        setFormData({
          phoneNumber: "",
          email: "",
          nameAndDesignation: "",
          description: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send quote request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            {/* Get a Quote Badge */}
            <div className="flex justify-center items-center gap-3 pt-10 sm:pt-12 lg:pt-14 pb-3 sm:pb-4">
              <div
                className="w-[160px] sm:w-[180px] lg:w-[194px] h-[26px] sm:h-[28px] lg:h-[30px] bg-[#EBEEF88F] rounded-[15px] sm:rounded-[18px] text-center pt-[2px]"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <h1 className="text-[#4B336D] text-[14px] sm:text-[15px] lg:text-[16px]">Get a Quote</h1>
              </div>
            </div>

            {/* Heading */}
            <div className="flex justify-center items-center">

            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-28 pt-6 sm:pt-8">
              <div className="mb-8 lg:mb-0">
                <div className="flex justify-center lg:justify-start items-center">
                  <div>
                    <h2 className="gradient-text font-semibold text-[22px] sm:text-[25px] md:text-[27px] lg:text-[29px] leading-tight text-center lg:text-left">
                      Request A Quote.
                    </h2>
                    <p className="text-[#4B336D] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] w-full max-w-[320px] sm:max-w-[290px] mt-2 text-center lg:text-left">
                      Have a project in mind? Tell us what you need, and
                      we&apos;ll design a custom quote just for you.
                    </p>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="flex flex-row lg:flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-3 pt-6 sm:pt-8 lg:pt-10 pb-4">
                  <div
                    className="w-full max-w-[280px] sm:w-[220px] md:w-[243px] h-[124px] text-[14px] sm:text-[15px] md:text-[16px] bg-[#EBEEF88F] backdrop-blur-[3.35px] border border-white rounded-[15px] text-[#4B336D]"
                    style={{
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    <div className="px-2 sm:px-6 md:px-7 pt-2 leading-tight">
                      <h1 className="font-semibold">Call us at</h1>
                      <h1 className="font-semibold">874950450835</h1>
                      <h1 className="font-semibold pt-7">Email us at</h1>
                      <h1 className="font-semibold">ksdhkjsdj@gmail.com</h1>
                    </div>
                  </div>
                  <div
                    className="w-full max-w-[280px] sm:w-[220px] md:w-[243px] h-[124px] text-[14px] sm:text-[15px] md:text-[16px] bg-[#EBEEF88F] border border-white backdrop-blur-[3.35px] rounded-[15px] text-[#4B336D]"
                    style={{
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    <div className="px-2 sm:px-6 md:px-7 pt-2 leading-tight">
                      <h1 className="font-semibold">Our Head Offices</h1>
                      <h1 className="font-semibold">Dubai</h1>
                      <h1 className="font-semibold pt-7">India</h1>
                      <h1 className="font-semibold">Haryana, 5467009</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                  <div className="mt-5 sm:mt-7 lg:mt-8 w-full flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-[320px] sm:max-w-[580px] lg:w-auto">
                      <div
                        className="w-full lg:w-[631px] h-auto lg:h-[454px] rounded-[18px] sm:rounded-[20px] lg:rounded-[21.5px] bg-[#FFFFFF30] px-[20px] sm:px-[22px] lg:px-[25px] pt-[18px] sm:pt-[20px] lg:pt-[21px] pb-6 space-y-6 sm:space-y-7 lg:space-y-8"
                        style={{
                          boxShadow: "0px 3.35px 3.35px 0px #00000040",
                        }}
                      >
                        <h1 className="text-[19px] sm:text-[21px] lg:text-[23px] text-[#4B336D]">
                          Submit the following:
                        </h1>

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-3">
                          <div className="space-y-6 sm:space-y-7 lg:space-y-8 w-full lg:w-auto">
                            <div className="border-b border-[#000000] w-full lg:w-[307px]">
                              <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="placeholder:text-[#4B336D45] placeholder:text-[14px] sm:placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                                required
                              />
                            </div>
                            <div className="border-b border-[#000000] w-full lg:w-[307px]">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="placeholder:text-[#4B336D45] placeholder:text-[14px] sm:placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                                required
                              />
                            </div>
                            <div className="border-b border-[#000000] w-full lg:w-[307px]">
                              <input
                                type="text"
                                name="nameAndDesignation"
                                value={formData.nameAndDesignation}
                                onChange={handleChange}
                                placeholder="Name & designation"
                                className="placeholder:text-[#4B336D45] placeholder:text-[14px] sm:placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                                required
                              />
                            </div>
                            <div className="border-b border-[#000000] w-full lg:w-[307px]">
                              <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className="placeholder:text-[#4B336D45] placeholder:text-[14px] sm:placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                                required
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-auto">
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Write down your message (optional)"
                              className="placeholder:text-[#4B336D45] w-full lg:w-[243px] h-[200px] sm:h-[220px] lg:h-[267px] placeholder:text-[14px] sm:placeholder:text-[15px] p-3 border border-white rounded-[15px] sm:rounded-[18px] focus:outline-none resize-none bg-transparent"
                              style={{
                                boxShadow: "0px 4px 18.4px 0px #6989FF",
                              }}
                            ></textarea>
                          </div>
                        </div>

                        <div className="flex justify-center items-center pt-2">
                          <button
                            type="submit"
                            disabled={loading}
                            className="text-white text-[11px] sm:text-[12px] rounded-[12px] sm:rounded-[13px] shadow-xl cursor-pointer w-[160px] sm:w-[170px] lg:w-[181px] h-[21px] sm:h-[22px] lg:h-[23px] sheen-effect disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-300"
                            style={{
                              background:
                                "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                              boxShadow: "0px 4px 4px 0px #00000040",
                            }}
                          >
                            {loading ? "Sending..." : "Request A Quote"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetaQuote;
