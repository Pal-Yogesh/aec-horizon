import React from 'react'
import TD from './TechnicalDevelopment/TD'
import TDProjects from './TechnicalDevelopment/TDProjects'
import TDServiceLocation from './TechnicalDevelopment/TDServiceLocation'

const DigitalMarketing = () => {
  return (
    <div className="bg-gradient-to-b from-[#BCC8F2] to-[#E1E8FF] w-full pb-32  ">
      <TD />
      <TDProjects />
      <TDServiceLocation />
    </div>
  )
}

export default DigitalMarketing