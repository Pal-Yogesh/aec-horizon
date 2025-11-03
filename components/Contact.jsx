"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    nameAndDesignation: "",
    description: "",
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
        source: "Contact Form"
      });
      
      if (response.data.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        
        // Reset form
        setFormData({
          phoneNumber: "",
          email: "",
          nameAndDesignation: "",
          description: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message. Please try again.",
        
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div>
          <div>
            {/* Contact Us Badge */}
            <div className="flex justify-center items-center gap-3 pt-14 pb-4">
              <div
                className="w-[194px] h-[30px] bg-[#EBEEF88F] rounded-[18px] text-center pt-[2px]"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <h1 className="text-[#4B336D] text-[16px]">Contact Us</h1>
              </div>
            </div>

            {/* Heading */}
            <div className="flex justify-center items-center gap-28 pt-8">
              <div>
                <div className="flex justify-center items-center">
                  <div>
                    <h2 className="gradient-text font-semibold text-[29px] leading-tight">
                      We are always ready to <br /> help you and answer all{" "}
                      <br />
                      your questions.
                    </h2>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="flex items-center gap-3 pt-10 pb-4">
                  <div>
                    <div
                      className="w-[243px] h-[124px] text-[16px] bg-[#EBEEF88F] backdrop-blur-[3.35px] border border-white rounded-[15px] text-[#4B336D]"
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      <div className="px-7 pt-2 leading-tight">
                        <h1 className=" font-semibold">Call us at</h1>
                        <h1 className=" font-semibold">874950450835</h1>
                        <h1 className=" font-semibold pt-7">Email us at</h1>
                        <h1 className=" font-semibold">ksdhkjsdj@gmail.com</h1>
                      </div>
                    </div>
                    <div
                      className="w-[243px] h-[124px] text-[16px] bg-[#EBEEF88F] border border-white backdrop-blur-[3.35px] rounded-[15px] text-[#4B336D] mt-7"
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      <div className="px-7 pt-2 leading-tight">
                        <h1 className=" font-semibold">Our Head Offices</h1>
                        <h1 className=" font-semibold">Dubai</h1>
                        <h1 className=" font-semibold pt-7">India</h1>
                        <h1 className=" font-semibold">Haryana, 5467009</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="">
                  <div
                    className="w-[335px] h-[42px] bg-[#EBEEF88F] backdrop-blur-[3.35px] rounded-[21.5px] text-center sheen-effect"
                    style={{
                      boxShadow: "0px 3.35px 3.35px 0px #00000040",
                    }}
                  >
                    <h1 className="gradient-text font-semibold text-[23px] pt-1">
                      Get in touch.
                    </h1>
                  </div>

                  <div className="mt-8">
                    <form onSubmit={handleSubmit}>
                      <div
                        className="w-[363px] h-[390px] rounded-[21.5px] bg-[#FFFFFF30] px-[25px] pt-[21px] space-y-8"
                        style={{
                          boxShadow: "0px 3.35px 3.35px 0px #00000040",
                        }}
                      >
                        <h1 className="text-[23px] text-[#4B336D]">
                          Submit the following:
                        </h1>

                        <div className="border-b border-[#000000] w-[307px]">
                          <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                            required
                          />
                        </div>
                        <div className="border-b border-[#000000] w-[307px]">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                            required
                          />
                        </div>
                        <div className="border-b border-[#000000] w-[307px]">
                          <input
                            type="text"
                            name="nameAndDesignation"
                            value={formData.nameAndDesignation}
                            onChange={handleChange}
                            placeholder="Name & designation"
                            className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                            required
                          />
                        </div>
                        <div className="border-b border-[#000000] w-[307px]">
                          <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent bg-transparent w-full"
                            required
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <button
                            type="submit"
                            disabled={loading}
                            className="text-white text-[12px] rounded-[13px] shadow-xl cursor-pointer w-[181px] h-[23px] sheen-effect disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                              background:
                                "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                              boxShadow: "0px 4px 4px 0px #00000040",
                            }}
                          >
                            {loading ? "Sending..." : "Send A Message"}
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
    </>
  );
};

export default Contact;
