import React from "react";

const GetaQuote = () => {
  return (
    <>
      <div>
        <div
        // id="contact"
        // className="bg-[url('/contact.svg')] bg-cover bg-center w-full h-[200vh] pt-28 pb-12"
        >
          <div>
            {/* Contact Us Badge */}
            <div className="flex justify-center items-center gap-3 pt-14 pb-4">
              <div
                className="w-[194px] h-[30px] bg-[#EBEEF88F] rounded-[18px] text-center pt-[2px]"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <h1 className="text-[#4B336D] text-[16px]">Get a Quote </h1>
              </div>
            </div>

            {/* Heading */}
            <div className="flex justify-center items-center gap-28 pt-8">
              <div>
                <div className="flex justify-center items-center">
                  <div>
                    <h2 className="gradient-text font-semibold text-[29px] leading-tight">
                      Request A Quote.
                    </h2>
                    <p className="text-[#4B336D] text-[19px] w-[290px]">
                      Have a project in mind? Tell us what you need, and
                      we&apos;ll design a custom quote just for you.
                    </p>
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
                  <div className="mt-8">
                    <div
                      className="w-[631px] h-[454px] rounded-[21.5px] bg-[#FFFFFF30] px-[25px] pt-[21px] space-y-8"
                      style={{
                        boxShadow: "0px 3.35px 3.35px 0px #00000040",
                      }}
                    >
                      <h1 className="text-[23px] text-[#4B336D]">
                        Submit the following:
                      </h1>

                      <div className="flex justify-between items-center gap-3">
                        <div className="space-y-8">
                          <div className="border-b border-[#000000] w-[307px]">
                            <input
                              type="text"
                              placeholder="Phone Number"
                              className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent"
                            />
                          </div>
                          <div className="border-b border-[#000000] w-[307px]">
                            <input
                              type="text"
                              placeholder="Email Address"
                              className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent"
                            />
                          </div>
                          <div className="border-b border-[#000000] w-[307px]">
                            <input
                              type="text"
                              placeholder="Name & designation"
                              className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent"
                            />
                          </div>
                          <div className="border-b border-[#000000] w-[307px]">
                            <input
                              type="text"
                              placeholder="Description"
                              className="placeholder:text-[#4B336D45] placeholder:text-[15px] pb-2 px-1 focus:outline-none focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                        <div>
  <textarea
    placeholder="Write down your message"
    className="placeholder:text-[#4B336D45] w-[243px] h-[267px] placeholder:text-[15px] p-3 border border-white rounded-[18px] focus:outline-none resize-none"
    style={{
      boxShadow: "0px 4px 18.4px 0px #6989FF",
    }}
  ></textarea>
</div>

                        </div>
                      </div>

                      <div className="flex justify-center items-center">
                        <button
                          className="text-white text-[12px] rounded-[13px] shadow-xl cursor-pointer w-[181px] h-[23px] sheen-effect"
                          style={{
                            background:
                              "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                            boxShadow: "0px 4px 4px 0px #00000040",
                          }}
                        >
                          Request A Quote
                        </button>
                      </div>
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
