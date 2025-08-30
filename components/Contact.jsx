import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="bg-[url('/footer.svg')] bg-cover bg-center w-full h-full pb-12">
          <div>
            {/* Contact Us Badge */}
            <div className="flex justify-center items-center gap-3 pt-14 pb-4">
              <div
                className="w-[232px] h-[36px] bg-[#FFFFFF] rounded-[18px] text-center"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <h1 className="text-[#4B336D] text-[20px]">Contact Us</h1>
              </div>
            </div>

            {/* Heading */}

            <div className="flex justify-center items-center gap-28 pt-8">
              <div>
                <div className="flex justify-center items-center">
                  <div>
                    <h2 className="gradient-text font-semibold text-[35px] leading-tight">
                      We are always ready to <br /> help you and answer all{" "}
                      <br />
                      your questions.
                    </h2>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="flex  items-center gap-3 pt-10 pb-4">
                  <div>
                    <div
                      className="w-[300px] h-[150px] bg-[#FFFFFF] rounded-[18px] text-[#4B336D]"
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      <div className="px-7 pt-2 leading-tight">
                        <h1 className="text-[20px] font-semibold">
                          Call us at
                        </h1>
                        <h1 className="text-[20px] font-semibold">
                          874950450835
                        </h1>
                        <h1 className="text-[20px] font-semibold pt-7">
                          Email us at
                        </h1>
                        <h1 className="text-[20px] font-semibold">
                          ksdhkjsdj@gmail.com
                        </h1>
                      </div>
                    </div>
                    <div
                      className="w-[300px] h-[150px] bg-[#FFFFFF] rounded-[18px] text-[#4B336D] mt-7"
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      <div className="px-7 pt-2 leading-tight">
                        <h1 className="text-[20px] font-semibold">
                          Our Head Offices
                        </h1>
                        <h1 className="text-[20px] font-semibold">Dubai</h1>
                        <h1 className="text-[20px] font-semibold pt-7">
                          India
                        </h1>
                        <h1 className="text-[20px] font-semibold">
                          Haryana, 5467009
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="">
                  <div
                    className="w-[400px] h-[51px] bg-[#FFFFFF] rounded-[25.5px] text-center " 
                    style={{
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    <h1 className="gradient-text font-semibold text-[28px] pt-1">
                      Get in touch.
                    </h1>
                  </div>

                  <div className="mt-8">
                    <div
                      className="w-[434px] h-[450px] rounded-[25.5px] bg-[#FFFFFF18] px-[25px] pt-[21px] space-y-10"
                      style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                      }}
                    >
                      <h1 className="text-[28px] text-[#4B336D]">
                        Submit the following:
                      </h1>

                      <div className="border-b border-[#000000] w-[367px]">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="placeholder:text-[#4B336D45] placeholder:text-[18px] pb-2 px-1 focus:outline-none focus:border-transparent"
                        />
                      </div>
                      <div className="border-b border-[#000000] w-[367px]">
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="placeholder:text-[#4B336D45] placeholder:text-[18px] pb-2 px-1 focus:outline-none focus:border-transparent"
                        />
                      </div>
                      <div className="border-b border-[#000000] w-[367px]">
                        <input
                          type="text"
                          placeholder="Name & designation"
                          className="placeholder:text-[#4B336D45] placeholder:text-[18px] pb-2 px-1 focus:outline-none focus:border-transparent"
                        />
                      </div>
                      <div className="border-b border-[#000000] w-[367px]">
                        <input
                          type="text"
                          placeholder="Description"
                          className="placeholder:text-[#4B336D45] placeholder:text-[18px] pb-2 px-1 focus:outline-none focus:border-transparent"
                        />
                      </div>

                      <div className="flex justify-center items-center">
                        <button
                          className="text-white text-[13px]  rounded-[13px] shadow-xl cursor-pointer  w-[217px] h-[28px] "
                          style={{
                            background:
                              "linear-gradient(-106.4deg, #47099F 0.28%, #F8AD1D 158.99%)",
                            boxShadow: "0px 4px 4px 0px #00000040",
                          }}
                        >
                          Send A Message
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

export default Contact;
