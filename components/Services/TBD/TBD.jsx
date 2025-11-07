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
        <div className="flex items-center justify-center p-2 sm:p-3 bg-[#FDF9EE] border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px]"
        style={{
          boxShadow: "0px 4px 12.3px 0px #00000040",
        }}>
          <div
            className="gradient-text sm:text-[60px] lg:text-[90px] font-semibold h-[200px] sm:h-[280px] lg:h-[350px] flex flex-col sm:flex-row items-center justify-center border-[1px] border-[#FFFFFF] rounded-[30px] sm:rounded-[40px] lg:rounded-[43px] my-4 sm:my-6 lg:my-8 px-4 sm:px-6"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
              background: "#E8D4FF",
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
        <div className="my-8 sm:my-12 lg:my-14 pb-12 sm:pb-18 lg:pb-24 mx-[5%] sm:mx-[10%] lg:mx-[22%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              Value Engineering Consulting Company Ensuring{" "}
              <br className="hidden sm:block" /> Optimum Project Outcomes
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              At <strong>AEC Horizon</strong>, we have a competent team of
              experts who are well-equipped to analyze construction designs to
              make them more process-efficient and practicable through
              proficient value engineering services.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Although the word is frequently used,{" "}
              <strong>VE or Value Engineering for Construction</strong> is not
              always clearly understood or properly executed. It isn&apos;t a
              design review process, nor does it involve lowering the cost at
              the expense of the quality and integrity of the project. When
              applied ideally, value engineering is exercised collaboratively by
              every stakeholder to deliver a project at the lowest possible cost
              without compromising on design quality.
            </p>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Our expert team of construction planners and engineers brainstorm
              to design the building layout enabling functional efficiency while
              reducing the cost of operation and maintenance to minimal levels.
              Our BIM-based value engineering services focus on model designs
              that implement energy-efficient building workflows and material
              selection to optimize the performance and cost of the asset.
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
            className="absolute -left-[18%] bg-gradient-to-r from-[#DADFF100] to-[#BBA0FF] w-[80%] h-[250px] border border-white rounded-[43px]"
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

          <div className="absolute -z-10 mt-2 left-[40%]">
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
        <div className="pt-20 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40 mx-[5%] sm:mx-[10%] lg:mx-[22%]">
          <div className="space-y-5 sm:space-y-7 lg:space-y-9">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] text-center gradient-text-about leading-tight">
              Value Engineering Benefits for Construction Project
            </h2>

            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
              Most construction projects go over their budgets for different
              reasons.{" "}
              <strong>
                The most common out of these are the ones related to the MEP
                system.
              </strong>{" "}
              Getting the wrong size or over-engineering designs can result in
              adding to the project costs. Our value engineers use BIM to
              eliminate all kinds of redundancies in the design without
              compromising quality, enhancing the output of the project in
              several ways, as cited below:
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
            className="absolute -left-[18%] bg-gradient-to-r from-[#DADFF100] to-[#BBA0FF] w-[80%] h-[250px] border border-white rounded-[43px]"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-7 absolute left-[45%]">
              <ul className="list-disc list-inside text-[#304695] text-[18px]">
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

          <div className="absolute -z-10 mt-2 left-[40%]">
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
    </div>
  );
};

export default TBD;
