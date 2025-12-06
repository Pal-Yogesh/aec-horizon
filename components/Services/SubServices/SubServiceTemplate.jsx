import Image from "next/image";
import React from "react";
import BimProjects from "../BimandDrafting/BimProjects";
import BimServiceLocation from "../BimandDrafting/BimServiceLocation";
import ReusableFAQ from "@/components/FAQ/ReusableFAQ";

const SubServiceTemplate = ({ data, faqData }) => {
  return (
    <div className="bg-gradient-to-b from-[#BCC8F2] to-[#E1E8FF] w-full pb-20 md:pb-0 px-4 sm:px-6 lg:px-0">
      <div className="w-full pb-20 sm:pb-32 lg:pb-0 text-[#364483] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">
        <div className="flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-12">
          <p
            className="bg-gradient-to-r from-[#7595FF] to-[#BACAFF] text-[9px] sm:text-[10px] text-white py-1.5 sm:py-2 px-3 sm:px-4 border-[1px] border-white rounded-[20px] sm:rounded-[24.18px]"
            style={{
              boxShadow: "0px 1.93px 7.09px 0px #00000040",
            }}
          >
            {data.category}
          </p>
        </div>

        {/* Mobile Title - Shows before image on mobile */}
        <div className="sm:px-8 lg:px-24 text-center text-[40px] sm:text-left md:hidden block">
          <p className="gradient-text">{data.title}</p>
        </div>

        <div className="mx-0 sm:mx-[3%] lg:mx-[7%]">
          <div className="flex items-center justify-center p-2 sm:p-3 bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px]">
            <div
              className="gradient-text lg:mx-10 sm:text-[40px] lg:text-[58px] font-semibold h-[200px] sm:h-[280px] lg:h-[350px] flex flex-col sm:flex-row items-center justify-center bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px] my-4 sm:my-6 lg:my-8 px-4 sm:px-6"
              style={{
                boxShadow: "0px 4px 15.5px 0px #00000040",
              }}
            >
              {/* Desktop Title - Shows on desktop */}
              <div className="sm:px-8 lg:px-10 text-center sm:text-left md:block hidden w-full sm:w-[60%]">
                <p className="gradient-text">{data.title}</p>
              </div>
              <div className="w-full sm:w-[50%]">
                <Image
                  src={data.imagePath}
                  alt={data.title}
                  width={1000}
                  height={1000}
                  className="w-[250px] h-[155px] sm:w-[350px] sm:h-[218px] lg:w-[500px] lg:h-[311px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          {data.features && data.features.length > 0 && (
            <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 -mt-[9%] sm:-mt-[9%] lg:-mt-[9%]">
              {data.features.map((feature, index) => (
                <div key={index}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <div className="mt-8 sm:mt-0 sm:my-12 lg:my-14 pb-5 sm:pb-18 lg:pb-0 mx-[5%] sm:mx-[10%] lg:mx-[13%]">
              <div className="space-y-5 sm:space-y-7 lg:space-y-9">
                <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] w-[100%] px-0 sm:px-[8%] lg:px-[12%] text-center gradient-text-about leading-tight">
                  {data.heading}
                </h2>

                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                  {data.desc1}
                </p>

                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                  {data.desc2}
                </p>
              </div>
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] py-8 sm:py-10 lg:py-12">
                <h2 className="font-semibold">What we offer</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2 pl-3">
                      {data.whatWeOffer.map((p) => (
                        
                        <li key={p.id} className="list-disc ">
                          <span className="leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px]">
                            <span className="font-semibold">{p.title}:</span>{" "}
                            <span className="font-normal">{p.desc}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet: Simple Card Layout */}
            <div className="lg:hidden mx-[5%] sm:mx-[10%]">
              <div
                className="bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <ul className="list-disc  text-[#364483] text-[14px] sm:text-[16px] space-y-2">
                  <p className="mb-3 font-semibold text-[16px] sm:text-[18px]">
                    Our Expertise Covers:
                  </p>
                  {data.ourExpertiseCover.map((p) => (
                    <li key={p.id} className="font-normal">
                      {p.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop: Complex Overlapping Layout */}

            <div className="hidden lg:flex relative w-full items-center z-20">
              <div
                className="absolute right-32 z-0 h-full w-[45%] rounded-[43px] border border-white"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(218, 223, 241, 0) 0%, #93A9FF 81.25%)",
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              ></div>

              <div
                className="relative z-10 -ml-[18%] bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] w-[80%] h-auto min-h-[313px] flex items-center py-10 border border-white rounded-[43px]"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <div className="ml-[39%] pr-12 w-full">
                  <ul className="list-disc text-[18px]">
                    <p className="mb-3 font-semibold">Our Expertise Covers:</p>
                    {data.ourExpertiseCover.map((p) => (
                      <li key={p.id} className="font-normal">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-8 sm:pt-32 lg:pt-0 pb-10 sm:pb-32 lg:pb-0 mx-[5%] sm:mx-[10%] lg:mx-[13%]">
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] py-8 sm:py-10 lg:py-12">
                <h2 className="font-semibold">Why choose AEC Horizon?</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2 pl-3">
                      {data.whyChooseAec.map((p) => (
                        <li key={p.id} className="list-disc">
                          <div className="flex items-start gap-3">
                            <span className="leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px]">
                              <span className="font-semibold">{p.title}:</span>{" "}
                              <span className="font-normal">{p.desc}</span>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] w-[100%] px-0 sm:px-[8%] lg:px-[12%] text-center gradient-text-about  sm:mb-8">
                Key Benefits Offered
              </h2>
            </div>

            {/* Mobile/Tablet: Simple Card Layout */}
            <div className="lg:hidden mx-[5%] sm:mx-[10%]">
              <div
                className="bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <ul className="list-disc  text-[#364483] text-[14px] sm:text-[16px] space-y-2">
                  {data.ourExpertiseCover2.map((p) => (
                    <li key={p.id} className="font-normal">
                      {p.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop: Complex Overlapping Layout */}
            <div className="hidden lg:flex relative w-full items-center z-20">
              {/* RIGHT GRADIENT BOX (REPLACES IMAGE) */}
              <div
                className="absolute right-32 z-0 w-[45%] h-full rounded-[43px] border border-white"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(218, 223, 241, 0) 0%, #93A9FF 81.25%)",
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              ></div>

              {/* LEFT CONTENT BOX */}
              <div
                className="relative -ml-[18%] z-10 bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] w-[80%] h-auto min-h-[100px] flex items-center py-10 border border-white rounded-[43px]"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <div className="ml-[40%] pr-16 w-full">
                  <ul className="list-disc text-[18px]">
                    {data.ourExpertiseCover2.map((p) => (
                      <li key={p.id} className="font-normal">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <BimProjects />
      <BimServiceLocation />
       */}
      {/* FAQ Section */}
      {faqData && (
        <ReusableFAQ
          faqData={faqData}
          title="Frequently Asked Questions"
          showContactCard={true}
        />
      )}
    </div>
  );
};

export default SubServiceTemplate;
