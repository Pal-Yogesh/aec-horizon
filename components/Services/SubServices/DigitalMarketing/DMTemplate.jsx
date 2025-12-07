import Image from "next/image";
import React from "react";
import ReusableFAQ from "@/components/FAQ/ReusableFAQ";

const DMTemplate = ({ data, faqData }) => {
  return (
    <div
      className="text-[#905D20] w-full pb-20 sm:pb-32 lg:pb-0 px-4 sm:px-6 lg:px-0"
      style={{
        background:
          "linear-gradient(179.59deg, #FFF5EC 10.54%, #FDEAB2 68.04%)",
      }}
    >
      <div className="w-full pb-7 sm:pb-32 lg:pb-0 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">
        <div className="flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-12">
          <p
            className="bg-gradient-to-r from-[#FFC375] to-[#FFF2C6] text-[#905D20] text-[9px] sm:text-[10px] py-1.5 sm:py-2 px-3 sm:px-4 border-[1px] border-white rounded-[20px] sm:rounded-[24.18px]"
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

        <div className="">
          <div
            className="mx-0 sm:mx-[3%] lg:mx-[7%] flex items-center justify-center p-2 sm:p-3 bg-[#FDF9EE] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px]"
            style={{
              boxShadow: "0px 4px 12.3px 0px #00000040",
            }}
          >
            <div
              className="gradient-text sm:text-[40px] lg:mx-10 lg:text-[58px] font-semibold h-[200px] sm:h-[280px] lg:h-[350px] flex flex-col sm:flex-row items-center justify-center border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px] my-4 sm:my-6 lg:my-8 px-4 sm:px-6"
              style={{
                boxShadow: "0px 4px 15.5px 0px #00000040",
                background: "#FED59F",
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
                  className="w-[250px] h-[155px] sm:w-[350px] sm:h-[218px] lg:w-[500px] lg:h-[311px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          {data.features && data.features.length > 0 && (
            <div className="mx-0 sm:mx-[3%] lg:mx-[7%] flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 -mt-[9%] sm:-mt-[9%] lg:-mt-[9%]">
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
            <div className=" my-8 sm:my-12 lg:my-14  sm:pb-18 lg:pb-0 mx-[5%] sm:mx-[10%] lg:mx-[17%]">
              <div className="space-y-5 sm:space-y-7 lg:space-y-9">
                <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] w-[100%] text-center gradient-text-about leading-tight">
                  {data.heading}
                </h2>

                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                  {data.desc1}
                </p>

                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                  {data.desc2}
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                  {data.desc3}
                </p>
              </div>
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] py-8 sm:py-10 lg:py-12">
                <h2 className="font-semibold text-[#6C3612]">What we offer:</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2">
                      {data.whatWeOffer.map((p) => (
                        <li key={p.id} className="flex items-start gap-3">
                          <p className="leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px]">
                            <span className="font-semibold text-[#6C3612]">
                              {p.title}
                            </span>{" "}
                            <span className="font-normal">{p.desc}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords Section */}
            {data.keywords && data.keywords.length > 0 && (
              <div className="bg-[url('/yellowline.svg')] bg-cover bg-center">
                <div className="mx-[10%] mb-10 sm:mb-20 ">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
                    {data.keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="bg-[#FFFAF3] text-[#6C3612] text-[12px] sm:text-[14px] lg:text-[20px] font-bold w-[295px] h-[70px] border border-white rounded-[23px] 
                    flex justify-center items-center text-center"
                        style={{
                          boxShadow: "0px 4px 9.2px 0px #00000040",
                        }}
                      >
                        {keyword}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile/Tablet: Simple Card Layout */}
            <div className="lg:hidden mx-[5%] sm:mx-[10%]">
              <div
                className="bg-gradient-to-r from-[#DADFF100] to-[#FFEDD2] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <ul className="list-disc  text-[#6C3612] text-[14px] sm:text-[16px] space-y-2">
                  <p className="mb-3 font-semibold text-[16px] sm:text-[18px]">
                    Our Expertise Includes:
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
            <div className="mx-0 sm:mx-[3%] lg:mx-[4%] hidden lg:flex relative w-full items-center z-20">
              {/* LEFT CONTENT BOX */}
              <div
                className="relative -left-[18%] w-[90%] pr-24 z-10 h-auto min-h-[200px] flex items-center py-10 border backdrop-blur-2xl border-white rounded-[43px]"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                  background:
                    "linear-gradient(90deg, rgba(218, 223, 241, 0) 0%, #FFEDD2 81.25%)",
                }}
              >
                <div className="ml-[39%] w-full">
                  <ul className="list-disc  text-[18px]">
                    <p className="mb-3">Our Expertise Includes:</p>
                    {data.ourExpertiseCover.map((p) => (
                      <li key={p.id} className="font-normal">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT GRADIENT RECTANGLE */}
              <div
                className="absolute right-32 z-0 w-[45%] h-full rounded-[43px] border border-white"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(218, 223, 241, 0) 0%, #FFC074 81.25%);",
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="pt-10 sm:pt-20 lg:pt-16 mx-[5%] sm:mx-[10%] lg:mx-[16%]">
              {/* Title Pill */}
              <div className="flex justify-start mb-6">
                <div className="bg-white shadow-[0px_4px_4px_0px_#00000040] px-10 py-2.5 rounded-[25px]">
                  <h2 className=" text-[#6C3612] text-[16px] font-bold sm:text-[18px] lg:text-[20px]">
                    Why choose AEC Horizon:
                  </h2>
                </div>
              </div>

              {/* Content Box */}
              <div
                className="bg-[#FFF6E8] rounded-[35px] sm:rounded-[43px] px-8  py-7 border border-white"
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <div className="space-y-3">
                  {data.whyChooseAec.map((p) => (
                    <div key={p.id} className="leading-relaxed text-[#6C3612]">
                      <p className="text-[15px] sm:text-[17px] lg:text-[20px]">
                        <span className="font-bold">{p.title}</span>
                        <span className="font-normal"> {p.desc}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <DMProjects />
      <DMServiceLocation /> */}

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

export default DMTemplate;
