import Image from "next/image";
import React from "react";
import BimProjects from "../BimandDrafting/BimProjects";
import BimServiceLocation from "../BimandDrafting/BimServiceLocation";

const SubServiceTemplate = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-[#BCC8F2] to-[#E1E8FF] w-full pb-32">
      <div className="w-full pb-40 text-[#364483] text-[20px] font-semibold">
        <div className="flex items-center justify-center pt-40 pb-12">
          <p
            className="bg-gradient-to-r from-[#7595FF] to-[#BACAFF] text-[10px] text-white py-2 px-4 border-[1px] border-white rounded-[24.18px]"
            style={{
              boxShadow: "0px 1.93px 7.09px 0px #00000040",
            }}
          >
            {data.category}
          </p>
        </div>

        <div className="mx-[7%]">
          <div className="flex items-center justify-center p-3 bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[43px]">
            <div
              className="gradient-text text-[58px] mx-8 font-semibold h-[350px] flex items-center justify-between bg-[#EEF1FD] border-[1px] border-[#FFFFFF] rounded-[43px] my-8"
              style={{
                boxShadow: "0px 4px 15.5px 0px #00000040",
              }}
            >
              <div className="px-10 w-[60%] ">
                <p>{data.title}</p>
              </div>
              <div className="w-[50%]">
                <Image
                  src={data.imagePath}
                  alt={data.title}
                  width={1000}
                  height={1000}
                  className="w-[500px] h-[311px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          {data.features && data.features.length > 0 && (
            <div className="flex items-center justify-center gap-10 -mt-[9%]">
              {data.features.map((feature, index) => (
                <div key={index}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="w-[152px] h-[197px]"
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <div className="my-14 pb-24 mx-[13%] ">
              <div className="space-y-9 ">
                <h2 className="text-[35px] w-[100%] px-[12%] text-center gradient-text-about">
                  {data.heading}
                </h2>

                <p className="font-normal">{data.desc1}</p>

                <p className="font-normal">{data.desc2}</p>
              </div>
              <div className="text-[20px] py-12">
                <h2 className="font-semibold ">What we offer</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2">
                      {data.whatWeOffer.map((p) => (
                        <li key={p.id} className="flex items-start gap-3">
                          <span className="mt-[14px] w-[4px] h-[4px] bg-[#364483] inline-block"></span>

                          <p className=" leading-relaxed">
                            <span className="font-semibold ">{p.title}:</span>{" "}
                            <span className="font-normal ">{p.desc}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full flex justify-center items-center z-20">
              <div
                className=" absolute -left-[18%] bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] w-[80%] h-[313px] border border-white rounded-[43px] "
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                {/* <div className="p-6 absolute top-1/2 -translate-y-1/2 left-[55%] -translate-x-1/2"> */}
                <div className="ml-[39%] pt-5">
                  {" "}
                  <ul className="list-disc list-inside   ">
                    <p className=" mb-3">Our Expertise Covers:</p>
                    {data.ourExpertiseCover.map((p) => (
                      <li key={p.id} className="font-normal">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute  -z-10 mt-3 left-[45%]">
                <Image
                  src="/bims1.svg"
                  alt="bim5"
                  width={1000}
                  height={1000}
                  className="w-[680px] h-[600px]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pt-40  pb-40 mx-[13%] ">
              <div className="text-[20px] py-12">
                <h2 className="font-semibold ">Why choose AEC Horizon?</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2">
                      {data.whyChooseAec.map((p) => (
                        <li key={p.id} className="flex items-start gap-3">
                          <span className="mt-[14px] w-[4px] h-[4px] bg-[#364483] inline-block"></span>

                          <p className=" leading-relaxed">
                            <span className="font-semibold ">{p.title}:</span>{" "}
                            <span className="font-normal ">{p.desc}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-[35px] w-[100%] px-[12%] text-center gradient-text-about">
                Key Benefits Offered
              </h2>
            </div>

            <div className="relative w-full flex justify-center items-center z-20">
              <div
                className=" absolute -left-[18%] bg-gradient-to-r from-[#DADFF1] to-[#EEF1FD] w-[80%] h-[250px] border border-white rounded-[43px] "
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                }}
              >
                <div className=" absolute left-[39%] py-5">
                  <ul className="list-disc list-inside  ">
                    {data.ourExpertiseCover2.map((p) => (
                      <li key={p.id} className="font-normal">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute  -z-10 mt-2 left-[45%]">
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
      </div>

      <BimProjects />
      <BimServiceLocation />
    </div>
  );
};

export default SubServiceTemplate;
