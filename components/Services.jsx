import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="px-[116px] pt-24 bg-[#DBE0F3]">
        <div>
          <div>
            <h1 className="font-bold text-[45px] tet-[#4B336D]">
              Our <span className="gradient-text">Services</span>
            </h1>
          </div>

          <div className="relative">
            <div>
              <Image
                src="/service1.svg"
                className="w-full h-full"
                alt="service"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute top-10 right-[33%]">
              <h1 className="gradient-textsm text-[23px]">BIM Services</h1>
              <ul className="list-disc list-inside text-[#4B336D] text-[23px] ml-10">
                <li>
                  <span className="gradient-textli">
                    BIM Modeling (LOD 100–500)
                  </span>
                </li>
                <li>
                  <span className="gradient-textli">
                    Revit Family & Template Creation
                  </span>
                </li>
                <li>
                  <span className="gradient-textli">
                    Clash Detection, Coordination
                  </span>
                </li>
                <li>
                  <span className="gradient-textli">Scan-to-BIM & As-Built</span>
                </li>
                <li>
                  <span className="gradient-textli">
                    Automation & MEPF modeling
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
