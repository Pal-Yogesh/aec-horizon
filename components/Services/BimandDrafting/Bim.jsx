import Image from "next/image";
import React from "react";

const Bim = () => {
  return (
    <div className="w-full pb-20 sm:pb-32 lg:pb-40 text-[#364483] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-12">
        <p
          className="bg-gradient-to-r from-[#7595FF] to-[#BACAFF] text-[9px] sm:text-[10px] text-white py-1.5 sm:py-2 px-3 sm:px-4 border-[1px] border-white rounded-[20px] sm:rounded-[24.18px]"
          style={{
            boxShadow: "0px 1.93px 7.09px 0px #00000040",
          }}
        >
          BIM & Drafting
        </p>
      </div>

      <div className="sm:px-8 lg:px-24 text-center text-[40px] sm:text-left md:hidden block">
        <p className="gradient-text">LiDar</p>
        <p className="-mt-4 sm:-mt-7 lg:-mt-10 gradient-text">Mapping</p>
      </div>
      <div className="mx-0 sm:mx-[3%] lg:mx-[7%]">
        <div className="flex items-center justify-center p-2 sm:p-3 bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px]">
          <div
            className="gradient-text  sm:text-[60px] lg:text-[90px] font-semibold h-[200px] sm:h-[280px] lg:h-[350px] flex flex-col sm:flex-row items-center justify-center bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px] my-4 sm:my-6 lg:my-8 px-4 sm:px-6"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="sm:px-8 lg:px-24 text-center sm:text-left md:block hidden">
              <p>LiDar</p>
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
              src="/bim1.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/bim2.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/bim3.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/bim4.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="my-8 sm:my-12 lg:my-14 pb-12 sm:pb-18 lg:pb-24 mx-[5%] sm:mx-[10%] lg:mx-[22%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              Value Engineering Consulting for
              <br className="hidden sm:block" /> Exceptional Global Results
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              At <strong>AEC Horizon</strong>, our experienced{" "}
              <strong>value engineering consultants</strong> support
              construction projects in major markets Netherlands, Sweden,
              Germany, Czech Republic, Denmark, Norway, United Kingdom, Saudi
              Arabia, UAE, Qatar, Oman, Lebanon, Virginia, California, and
              Texas. We help clients maximize project efficiency and achieve the
              best outcomes using advanced <strong>BIM solutions</strong> and
              expert cost analysis.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Value engineering for construction means delivering performance
              and quality at optimized costs. Our team collaborates across every
              project phase to ensure energy-efficient design, material
              selection, and workflow improvements tailored to meet local
              standards and regional project needs.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Leading companies in Amsterdam, Berlin, Stockholm, London, Dubai,
              Riyadh, Los Angeles, and more trust our BIM-based value
              engineering services to reduce costs, boost sustainability, and
              enable smarter building management.
              <br />
              Partner with AEC Horizon for expert value engineering consulting
              customized for your city, your region, and your goals.
            </p>
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
            className="absolute -left-[18%] bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] w-[80%] h-[250px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-6 absolute top-1/2 -translate-y-1/2 left-[62%] -translate-x-1/2">
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

          <div className="absolute -z-10 mt-2 left-[45%]">
            <Image
              src="/bims1.svg"
              alt="bim5"
              width={1000}
              height={1000}
              className="w-[540px] h-[660px]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-20 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40 mx-[5%] sm:mx-[10%] lg:mx-[22%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              BIM-Based Value Engineering Benefits for Modern Projects
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Every construction project aims for efficiency, but cost overruns
              often occur <strong>due to over-designed MEP systems</strong>,
              poor material selection, or inefficient planning. At{" "}
              <strong>AEC Horizon</strong>, our{" "}
              <strong>BIM-based value engineering services</strong> help
              identify and eliminate these issues early in the design stage,
              ensuring every element contributes to performance, not waste.
            </p>
            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Using advanced{" "}
              <strong>Building Information Modeling (BIM) </strong> tools, our
              experts perform in-depth <strong>design and cost analysis</strong>{" "}
              to enhance quality while minimizing expenses. Whether for
              large-scale developments in <strong>Europe</strong>, innovative
              projects in the <strong>Middle East</strong>, or modern builds in
              the <strong>USA</strong>, we help clients achieve smarter, more
              sustainable outcomes.
            </p>
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
            <ul className="list-disc list-inside text-[#304695] text-[14px] sm:text-[16px] space-y-2">
              <li className="font-normal">
                Improved system effectiveness and constructability
              </li>
              <li className="font-normal">
                Reduction in material and labor costs
              </li>
              <li className="font-normal">Short installation times</li>
              <li className="font-normal">Enhanced asset value and safety</li>
              <li className="font-normal">
                Ease in access during construction and post-construction
              </li>
              <li className="font-normal">Projects can attain higher ROI</li>
            </ul>
          </div>
        </div>

        {/* Desktop: Complex Overlapping Layout */}
        <div className="hidden lg:flex relative w-full justify-center items-center z-20">
          <div
            className="absolute -left-[18%] bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] w-[80%] h-[250px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-7 absolute left-[45%]">
              <ul className="list-disc space-y-1 text-[#304695] text-[18px]">
                <li className="font-normal">
                  Optimized <strong>MEP system design</strong> for better
                  efficiency and coordination
                </li>
                <li className="font-normal">
                  Significant{" "}
                  <strong>reduction in material and labor costs</strong>
                </li>
                <li className="font-normal">
                  Faster{" "}
                  <strong>installation and construction timelines</strong>
                </li>
                <li className="font-normal">
                  Enhanced <strong>safety and long-term asset value</strong>
                </li>
                <li className="font-normal">
                  Simplified <strong>maintenance and accessibility</strong>{" "}
                  post-construction{" "}
                </li>
                <li className="font-normal">
                  Improved <strong>ROI</strong> through performance-focused cost
                  optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute -z-10 mt-2 left-[45%]">
            <Image
              src="/bims1.svg"
              alt="bim5"
              width={1000}
              height={1000}
              className="w-[540px] h-[660px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bim;
