import Image from "next/image";
import React from "react";

const DM = () => {
  return (
    <div className="w-full pb-20 sm:pb-32 lg:pb-40 text-[#364483] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-12">
        <p
          className="bg-gradient-to-r from-[#FFC375] to-[#FFF2C6] text-[#905D20] text-[9px] sm:text-[10px] py-1.5 sm:py-2 px-3 sm:px-4 border-[1px] border-white rounded-[20px] sm:rounded-[24.18px]"
          style={{
            boxShadow: "0px 1.93px 7.09px 0px #00000040",
          }}
        >
          Digital Marketing & Branding
        </p>
      </div>

      <div className="sm:px-8 lg:px-24 text-center text-[40px] sm:text-left md:hidden block">
        <p className="gradient-text">LiDar</p>
        <p className="-mt-4 sm:-mt-7 lg:-mt-10 gradient-text">Mapping</p>
      </div>
      <div className="mx-0 sm:mx-[3%] lg:mx-[7%]">
        <div
          className="flex items-center justify-center p-2 sm:p-3 bg-[#FDF9EE] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px]"
          style={{
            boxShadow: "0px 4px 12.3px 0px #00000040",
          }}
        >
          <div
            className="gradient-text sm:text-[60px] lg:text-[90px] font-semibold h-[200px] sm:h-[280px] lg:h-[350px] flex flex-col sm:flex-row items-center justify-center border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px] my-4 sm:my-6 lg:my-8 px-4 sm:px-6"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
              background: "#FED59F",
            }}
          >
            <div className="sm:px-8 lg:px-24 text-center sm:text-left md:block hidden">
              <p className="gradient-text">LiDar</p>
              <p className="-mt-4 sm:-mt-7 lg:-mt-10 gradient-text">Mapping</p>
            </div>
            <div className="">
              <Image
                src="/s11.svg"
                alt="s11"
                width={1000}
                height={1000}
                className="w-[250px] h-[155px] sm:w-[350px] sm:h-[218px] lg:w-[500px] lg:h-[311px]"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 -mt-[9%] sm:-mt-[9%] lg:-mt-[9%]">
          <div>
            <Image
              src="/td1.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/td2.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/td3.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/td4.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="my-8 sm:my-12 lg:my-14 pb-12 sm:pb-18 lg:pb-24 mx-[5%] sm:mx-[10%] lg:mx-[16%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              Digital Marketing & Branding Solutions for
              <br className="hidden sm:block" /> AEC Firms Driving Visibility
              and Growth
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              At AEC Horizon, we specialize in helping architecture,
              engineering, and construction (AEC) firms build a powerful online
              presence through strategic digital marketing and branding
              services. Our expert team combines industry knowledge with digital
              expertise to create marketing frameworks that boost brand
              visibility, generate qualified leads, and strengthen client
              relationships across global markets.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              We understand that every AEC firm has its own strengths and
              technical expertise. That&apos;s why our strategies are tailored
              to communicate your firm&apos;s unique value through targeted
              campaigns, data-driven content marketing, and BIM-aligned digital
              branding initiatives that attract the right clients and
              opportunities.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Our digital marketing approach goes beyond traditional promotion,
              it integrates search engine optimization (SEO), social media
              marketing, content strategy, and brand storytelling to ensure
              consistent growth and lasting digital credibility.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet: Simple Card Layout */}
        <div className="lg:hidden mx-[5%] sm:mx-[10%]">
          <div
            className="bg-gradient-to-r from-[#DADFF100] to-[#FFEDD2] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <ul className="list-disc list-inside text-[#304695] text-[14px] sm:text-[16px] space-y-2">
              <p className="mb-3 font-semibold text-[16px] sm:text-[18px]">
                Our Value Engineering Services Assure:
              </p>
              <li className="font-normal">Low Material Costs</li>
              <li className="font-normal">Low Operational Costs</li>
              <li className="font-normal">Easy Operations & Maintenance</li>
              <li className="font-normal">Short Installation Time</li>
              <li className="font-normal">Low Labor Costs</li>
            </ul>
          </div>
        </div>

        {/* Desktop: Complex Overlapping Layout */}
        <div className="hidden lg:flex relative w-full justify-center items-center z-20">
          <div
            className="absolute -left-[18%] backdrop-blur-2xl bg-gradient-to-r from-[#DADFF100] to-[#FFEDD2] w-[80%] h-[250px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-6 absolute  left-[38.5%] ">
              <ul className="list-disc list-inside text-[#304695] text-[18px]">
                <p className="mb-3">Our Value Engineering Services Assure:</p>
                <li className="font-normal">Low Material Costs</li>
                <li className="font-normal">Low Operational Costs</li>
                <li className="font-normal">Easy Operations & Maintenance</li>
                <li className="font-normal">Short Installation Time</li>
                <li className="font-normal">Low Labor Costs</li>
              </ul>
            </div>
          </div>

          <div className="absolute -z-10 mt-2 left-[40%]">
            <Image
              src="/td.svg"
              alt="bim5"
              width={1000}
              height={1000}
              className="w-[660px] h-[660px]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-20 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40 mx-[5%] sm:mx-[10%] lg:mx-[16%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              Digital Marketing & Branding Benefits for AEC Firms
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Most AEC companies struggle with low online visibility and
              inconsistent brand communication. In competitive regions like the
              UK, UAE, and USA, the absence of a strong digital identity can
              lead to missed projects, weak client engagement, and low
              conversion rates. <br /> <br /> Our AEC-focused digital marketing
              and branding services help firms build a recognizable online
              presence, attract qualified leads, and maintain consistent brand
              authority across all digital touchpoints.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet: Simple Card Layout */}
        <div className="lg:hidden mx-[5%] sm:mx-[10%]">
          <div
            className="bg-gradient-to-r from-[#DADFF100] to-[#FFEDD2] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <ul className="list-disc text-[#304695] text-[14px] sm:text-[16px] space-y-2">
            <li className="font-normal">
                  Stronger online visibility and higher search rankings for
                  AEC-specific keywords.
                </li>
                <li className="font-normal">
                  Increased brand credibility that supports proposal wins and
                  client trust.
                </li>
                <li className="font-normal">
                  Faster lead generation cycles through targeted campaigns and
                  optimized content.
                </li>
                <li className="font-normal">
                  Clear and consistent brand messaging across digital platforms.
                </li>
                <li className="font-normal">
                  Higher engagement from architects, engineers, contractors, and
                  project owners.
                </li>
                <li className="font-normal">
                  Improved ROI with data-driven marketing aligned to AEC
                  industry trends.
                </li>
            </ul>
          </div>
        </div>

        {/* Desktop: Complex Overlapping Layout */}
        <div className="hidden lg:flex relative w-full justify-center items-center z-20">
          <div
            className="absolute -left-[18%] backdrop-blur-2xl bg-gradient-to-r from-[#DADFF100] to-[#FFEDD2] w-[80%] h-[250px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-5 absolute left-[40%]">
              <ul className="list-disc text-[#304695] text-[17.8px]">
                <li className="font-normal">
                  Stronger online visibility and higher search rankings for
                  AEC-specific keywords.
                </li>
                <li className="font-normal">
                  Increased brand credibility that supports proposal wins and
                  client trust.
                </li>
                <li className="font-normal">
                  Faster lead generation cycles through targeted campaigns and
                  optimized content.
                </li>
                <li className="font-normal">
                  Clear and consistent brand messaging across digital platforms.
                </li>
                <li className="font-normal">
                  Higher engagement from architects, engineers, contractors, and
                  project owners.
                </li>
                <li className="font-normal">
                  Improved ROI with data-driven marketing aligned to AEC
                  industry trends.
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute -z-10 mt-2 left-[40%]">
            <Image
              src="/td.svg"
              alt="bim5"
              width={1000}
              height={1000}
              className="w-[660px] h-[660px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DM;
