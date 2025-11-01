import Image from "next/image";
import React from "react";
import DMProjects from "../../DigitalM/DMProjects";
import DMServiceLocation from "../../DigitalM/DMServiceLocation";

const DMTemplate = ({ data }) => {
  return (
    <div
      className=" text-[#905D20]   w-full pb-32"
      style={{
        background:
          "linear-gradient(179.59deg, #FFF5EC 10.54%, #FDEAB2 68.04%)",
      }}
    >
      <div className="w-full pb-40  text-[20px] font-semibold">
        <div className="flex items-center justify-center pt-40 pb-12">
          <p
            className="bg-gradient-to-r from-[#FFC375] to-[#FFF2C6] text-[#905D20] text-[10px]  py-2 px-4 border-[1px] border-white rounded-[24.18px]"
            style={{
              boxShadow: "0px 1.93px 7.09px 0px #00000040",
            }}
          >
            {data.category}
          </p>
        </div>

        <div className="mx-[7%]">
          <div
            className="flex items-center justify-center p-3 bg-[#FDF9EE] border-[1px] border-[#FFFFFF] rounded-[43px]"
            style={{
              boxShadow: "0px 4px 12.3px 0px #00000040",
            }}
          >
            <div
              className=" bg-[#FED59F]  text-[58px] font-semibold  h-[350px] mx-8 flex items-center justify-center  border-[1px] border-[#FFFFFF] rounded-[43px] my-8"
              style={{
                boxShadow: "0px 4px 15.5px 0px #00000040",
              }}
            >
              <div className="px-10 w-[60%] gradient-text">
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
            <div className="my-14 pb-40 mx-[13%] ">
              <div className="space-y-9 ">
                <h2 className="text-[35px] w-[100%] text-center gradient-text-about">
                  {data.heading}
                </h2>

                <p className="font-normal">{data.desc1}</p>

                <p className="font-normal">{data.desc2}</p>
                <p className="font-normal">{data.desc3}</p>
              </div>
              <div className="text-[20px] py-12">
                <h2 className="font-semibold  text-[#6C3612]">What we offer:</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2">
                      {data.whatWeOffer.map((p) => (
                        <li key={p.id} className="flex items-start gap-3">
                          {/* <span className="mt-[14px] w-[4px] h-[4px] bg-[#FFC074] inline-block"></span> */}

                          <p className=" leading-relaxed">
                            <span className="font-semibold text-[#6C3612] ">{p.title}</span>{" "}
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
                className=" absolute -left-[18%]  w-[90%] pr-24 h-[450px] border backdrop-blur-2xl border-white rounded-[43px] "
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                  background:
                    "linear-gradient(90deg, rgba(218, 223, 241, 0) 0%, #FFEDD2 81.25%)",
                }}
              >
                <div className="ml-[39%] pt-5 ">
                  {" "}
                  <ul className="list-disc list-inside  ">
                    <p className=" mb-3">Our Expertise Covers:</p>
                    {data.ourExpertiseCover.map((p) => (
                      <li key={p.id} className="font-normal ">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute  -z-10 left-[45%]">
                <Image
                  src="/newtd.svg"
                  alt="dm"
                  width={1000}
                  height={1000}
                  className=" w-[700px] h-[478px] mt-2  "
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pt-52  pb-40 mx-[13%] ">
              <div className="text-[20px] py-12">
                <h2 className="font-semibold ">Why choose AEC Horizon?</h2>

                <div>
                  <div>
                    <ul className="pt-5 space-y-2">
                      {data.whyChooseAec.map((p) => (
                        <li key={p.id} className="flex items-start gap-3">
                          {/* <span className="mt-[14px] w-[4px] h-[4px] bg-[#FFC074] inline-block"></span> */}

                          <p className=" leading-relaxed">
                            <span className="font-semibold  text-[#6C3612]">{p.title}</span>{" "}
                            <span className="font-normal ">{p.desc}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-[35px] w-[100%] px-[12%] text-center gradient-text-about mb-8">
                Key Benefits Offered
              </h2>
            </div>

            <div className="relative w-full flex justify-center items-center z-20">
              <div
                className=" absolute -left-[25%]   w-[98%]  h-[320px] border  backdrop-blur-2xl border-white rounded-[43px] "
                style={{
                  boxShadow: "0px 4px 15.5px 0px #00000040",
                  background:
                    "linear-gradient(90deg, rgba(218, 223, 241, 0) 0%, #FFEDD2 81.25%)",
                }}
              >
                <div className=" absolute left-[39%] py-5 pr-20">
                  <ul className="list-disc list-inside  ">
                    <p className=" mb-3">Our Expertise Covers:</p>
                    {data.ourExpertiseCover2.map((p) => (
                      <li key={p.id} className="font-normal">
                        {p.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute  -z-10 left-[60%]">
                <Image
                  src="/newtd.svg"
                  alt="dm"
                  width={1000}
                  height={1000}
                  className="w-[800px] mt-2  h-[337px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DMProjects />
      <DMServiceLocation />
    </div>
  );
};

export default DMTemplate;
