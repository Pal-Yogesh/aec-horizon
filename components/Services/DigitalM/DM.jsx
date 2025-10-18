import Image from "next/image";
import React from "react";

const DM = () => {
  return (
    <div className=" w-full pb-40  text-[#364483] text-[20px] font-semibold">
      
      <div className=" flex items-center justify-center pt-40 pb-12">
        <p
          className="bg-gradient-to-r from-[#FFC375] to-[#FFF2C6] text-[#905D20]   text-[10px] py-2 px-4  border-[1px] border-white rounded-[24.18px]"
          style={{
            boxShadow: "0px 1.93px 7.09px 0px #00000040",
          }}
        >
          BIM & Drafting
        </p>
      </div>
 
      <div className="mx-[7%]">
        <div className="flex items-center justify-center p-3 bg-[#FDF9EE] border-[1px] border-[#FFFFFF] rounded-[43px] "
        style={{
          boxShadow: "0px 4px 12.3px 0px #00000040",

        }}>
          <div
            className="gradient-text  text-[90px] font-semibold  h-[350px] flex items-center justify-center  border-[1px] border-[#FFFFFF] rounded-[43px] my-4 mb-8"
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
              background: "#FED59F",
            }}
          >
            <div className="px-24 z-10" >
              <p className="gradient-text">LiDar</p>
              <p className="-mt-10  gradient-text">Mapping</p>
            </div>
            <div>
              <Image
                src="/s11.svg"
                alt="s11"
                width={1000}
                height={1000}
                className="w-[500px] h-[311px]"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 -mt-[9%]">
          <div>
            <Image
              src="/td1.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[152px] h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/td2.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[152px] h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/td3.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[152px] h-[197px]"
            />
          </div>
          <div>
            <Image
              src="/td4.svg"
              alt="s13"
              width={1000}
              height={1000}
              className="w-[152px] h-[197px]"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="my-14 pb-24 mx-[22%] ">
          <div className="space-y-9">
            <h2 className="text-[35px]  text-center gradient-text-about">
              Value Engineering Consulting Company Ensuring <br /> Optimum
              Project Outcomes
            </h2>

            <p className="font-normal">
              At <strong>AEC Horizon</strong>, we have a competent team of
              experts who are well-equipped to analyze construction designs to
              make them more process-efficient and practicable through
              proficient value engineering services.
            </p>

            <p className="font-normal">
              Although the word is frequently used,{" "}
              <strong>VE or Value Engineering for Construction</strong> is not
              always clearly understood or properly executed. It isn&apos;t a
              design review process, nor does it involve lowering the cost at
              the expense of the quality and integrity of the project. When
              applied ideally, value engineering is exercised collaboratively by
              every stakeholder to deliver a project at the lowest possible cost
              without compromising on design quality.
            </p>

            <p className="font-normal">
              Our expert team of construction planners and engineers brainstorm
              to design the building layout enabling functional efficiency while
              reducing the cost of operation and maintenance to minimal levels.
              Our BIM-based value engineering services focus on model designs
              that implement energy-efficient building workflows and material
              selection to optimize the performance and cost of the asset.
            </p>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center z-20">
          <div
            className=" absolute -left-[18%] bg-gradient-to-r from-[#DADFF100] to-[#FFEDD2] w-[80%] h-[250px] border border-white rounded-[43px] "
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-6 absolute top-1/2 -translate-y-1/2 left-[62%] -translate-x-1/2">
              <ul className="list-disc list-inside text-[#304695] text-[18px] ">
                <p className=" mb-3">Our Value Engineering Services Assure:</p>
                <li className="font-normal">Low Material Costs</li>
                <li className="font-normal">Low Operational Costs</li>
                <li className="font-normal">Easy Operations & Maintenance</li>
                <li className="font-normal">Short Installation Time</li>
                <li className="font-normal">Low Labor Costs</li>
              </ul>
            </div>
          </div>

          <div className="absolute  -z-10 mt-2 left-[40%]">
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
        <div className="pt-40  pb-40 mx-[22%] ">
          <div className="space-y-9">
            <h2 className="text-[35px]  text-center gradient-text-about">
              Value Engineering Benefits for Construction Project
            </h2>

            <p className="font-normal">
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

        <div className="relative w-full flex justify-center items-center z-20">
          <div
            className=" absolute -left-[18%] bg-gradient-to-r rom-[#DADFF100] to-[#FFEDD2] w-[80%] h-[250px] border border-white rounded-[43px] "
            style={{
              boxShadow: "0px 4px 15.5px 0px #00000040",
            }}
          >
            <div className="p-7 absolute left-[45%]">
              <ul className="list-disc list-inside text-[#304695] text-[18px] ">
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

          <div className="absolute  -z-10 mt-2 left-[40%]">
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
