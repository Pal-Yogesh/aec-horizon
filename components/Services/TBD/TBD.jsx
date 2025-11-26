import Image from "next/image";
import React from "react";

const TBD = () => {
  return (
    <div className="w-full pb-20 sm:pb-32 lg:pb-40 text-[#364483] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-10 lg:pb-12">
        <p
          className="bg-gradient-to-r from-[#E8D4FF] to-[#D2ACFF] text-[#62228B] text-[9px] sm:text-[10px] py-1.5 sm:py-2 px-3 sm:px-4 border-[1px] border-white rounded-[20px] sm:rounded-[24.18px]"
          style={{
            boxShadow: "0px 1.93px 7.09px 0px #00000040",
          }}
        >
          Technical Business Development
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
              background: "#E8D4FF",
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
              src="/dm1.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/dm2.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/dm3.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[80px] h-[104px] sm:w-[120px] sm:h-[155px] lg:w-[152px] lg:h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/dm4.svg"
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
              Value Engineering Consulting Services for Cost-Effective,
              <br className="hidden sm:block" /> High-Performance Construction
              Projects
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              At <strong>AEC Horizon</strong>, we deliver{" "}
              <strong>Value Engineering (VE) Consulting Services</strong> that
              help AEC firms and construction professionals achieve{" "}
              <strong>optimized project outcomes</strong> with enhanced
              efficiency, functionality, and cost savings. Our expert engineers
              and planners analyze each design component to ensure the project
              is both{" "}
              <strong>economically viable and technically superior</strong>.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Unlike conventional design reviews,{" "}
              <strong>Value Engineering for Construction</strong> is a
              structured, data-driven process that evaluates design alternatives
              without compromising on performance or quality. We collaborate
              closely with architects, MEP engineers, and contractors to
              identify opportunities that{" "}
              <strong>
                reduce construction costs, streamline material use
              </strong>
              , and <strong>improve sustainability</strong>, all while
              maintaining the highest design standards.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Our <strong>BIM-integrated Value Engineering services</strong>{" "}
              empower teams to make informed decisions at every stage, ensuring{" "}
              <strong>
                energy-efficient and cost-effective building designs
              </strong>{" "}
              across global markets including{" "}
              <strong>Europe, the Middle East, and the USA</strong>.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet: Simple Card Layout */}
        <div className="lg:hidden mx-[5%] sm:mx-[10%]">
          <div
            className="bg-gradient-to-r from-[#DADFF100] to-[#BBA0FF] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <ul className="list-disc  text-[#304695] text-[14px] sm:text-[16px] space-y-2">
              <p className="mb-3 font-semibold text-[16px] sm:text-[18px]">
                Our Value Engineering Services Assure:
              </p>
              <li className="font-normal">
                <strong>Lower Material and Labor Costs</strong> through precise
                design planning.
              </li>

              <li className="font-normal">
                <strong>Reduced Operational and Maintenance Expenses</strong>{" "}
                for long-term savings.
              </li>
              <li className="font-normal">
                <strong>Faster Installation Timelines</strong> with simplified
                construction sequences.
              </li>
              <li className="font-normal">
                <strong>Improved Energy Efficiency</strong> via optimized
                building performance models.
              </li>
              <li className="font-normal">
                <strong>Increased ROI</strong> by balancing cost, quality, and
                functionality effectively
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop: Complex Overlapping Layout */}
        <div className="hidden lg:flex relative w-full justify-center items-center z-20 ">
          <div
            className="absolute -left-[18%] bg-gradient-to-r from-[#DADFF100] backdrop-blur-3xl to-[#BBA0FF] z-10 w-[80%] h-[250px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-6 absolute  left-[41%] ">
              <ul className="list-disc text-[#304695] text-[18px]">
                <p className="mb-3">Our Value Engineering Services Assure:</p>
                <li className="font-normal">
                  <strong>Lower Material and Labor Costs</strong> through
                  precise design planning.
                </li>

                <li className="font-normal">
                  <strong>Reduced Operational and Maintenance Expenses</strong>{" "}
                  for long-term savings.
                </li>
                <li className="font-normal">
                  <strong>Faster Installation Timelines</strong> with simplified
                  construction sequences.
                </li>
                <li className="font-normal">
                  <strong>Improved Energy Efficiency</strong> via optimized
                  building performance models.
                </li>
                <li className="font-normal">
                  <strong>Increased ROI</strong> by balancing cost, quality, and
                  functionality effectively.
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute z-0 mt-2 left-[40%]">
            <Image
              src="/dm.svg"
              alt="bim5"
              width={1000}
              height={1000}
              className="w-[660px] h-[660px]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-20 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-48 mx-[5%] sm:mx-[10%] lg:mx-[16%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              Value Engineering Benefits for Construction Projects
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              In today&apos;s competitive AEC landscape, many projects exceed
              budgets due to design inefficiencies, especially within{" "}
              <strong>MEP systems</strong>. At
              <strong>AEC Horizon</strong>, our{" "}
              <strong>BIM-based Value Engineering Services</strong> help
              eliminate design redundancies, optimize performance, and reduce
              unnecessary costs while maintaining design integrity and
              constructability.
            </p>
            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              By leveraging <strong>Building Information Modeling (BIM)</strong>{" "}
              and data-driven analysis, our experts deliver{" "}
              <strong>
                cost-efficient, high-performance construction solutions
              </strong>{" "}
              for firms across{" "}
              <strong>Europe, the Middle East, and the USA</strong>, helping
              projects achieve maximum value and long-term sustainability.
            </p>
          </div>
        </div>

        {/* Mobile/Tablet: Simple Card Layout */}
        <div className="lg:hidden mx-[5%] sm:mx-[10%]">
          <div
            className="bg-gradient-to-r from-[#DADFF100] to-[#BBA0FF] border border-white rounded-[25px] sm:rounded-[35px] p-6 sm:p-8"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <ul className="list-disc  text-[#304695] text-[14px] sm:text-[16px] space-y-2">
              <li className="font-normal">
                <strong>Improved system efficiency and constructability</strong>{" "}
                through optimized BIM workflows.
              </li>
              <li className="font-normal">
                <strong>Reduced material and labor costs</strong> using precise
                quantity estimation and design optimization.{" "}
              </li>
              <li className="font-normal">
                <strong>Shorter installation cycles</strong> with coordinated{" "}
                <strong>BIM-based design execution</strong>.
              </li>
              <li className="font-normal">
                <strong>Enhanced asset value and safety</strong> through
                performance-driven design evaluation.
              </li>
              <li className="font-normal">
                <strong>Better accessibility and maintenance efficiency</strong>
                post-construction.
              </li>
              <li className="font-normal">
                <strong>Higher ROI</strong> with cost savings and improved
                project lifecycle performance.
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop: Complex Overlapping Layout */}
        <div className="hidden lg:flex relative w-full justify-center items-center z-20">
          <div
            className="absolute -left-[18%] backdrop-blur-2xl bg-gradient-to-r from-[#DADFF100] to-[#BBA0FF] w-[80%] h-[300px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-[22px] absolute left-[41%]">
              <ul className="list-disc  text-[#304695] text-[18px]">
                <li className="font-normal">
                  <strong>
                    Improved system efficiency and constructability
                  </strong>{" "}
                  through optimized BIM workflows.
                </li>
                <li className="font-normal">
                  <strong>Reduced material and labor costs</strong> using
                  precise quantity estimation and design optimization.{" "}
                </li>
                <li className="font-normal">
                  <strong>Shorter installation cycles</strong> with coordinated{" "}
                  <strong>BIM-based design execution</strong>.
                </li>
                <li className="font-normal">
                  <strong>Enhanced asset value and safety</strong> through
                  performance-driven design evaluation.
                </li>
                <li className="font-normal">
                  <strong>
                    Better accessibility and maintenance efficiency
                  </strong>
                  post-construction.
                </li>
                <li className="font-normal">
                  <strong>Higher ROI</strong> with cost savings and improved
                  project lifecycle performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute -z-10 mt-2 left-[30%]">
            <Image
              src="/dm.svg"
              alt="bim5"
              width={1000}
              height={1000}
              className="w-[800px] h-[360px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBD;
