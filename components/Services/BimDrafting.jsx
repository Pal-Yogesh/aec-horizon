import React from "react";
import Bim from "./BimandDrafting/Bim";
import BimProjects from "./BimandDrafting/BimProjects";
import BimServiceLocation from "./BimandDrafting/BimServiceLocation";

const BimDrafting = () => {
  return (
    <div className="bg-gradient-to-b from-[#BCC8F2] to-[#E1E8FF] w-full pb-32  ">
      <Bim />
      <BimProjects />
      <BimServiceLocation />
    </div>
  );
};

export default BimDrafting;
