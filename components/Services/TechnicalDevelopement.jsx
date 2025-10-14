import React from 'react'
import TD from './TechnicalDevelopment/TD'
import TDProjects from './TechnicalDevelopment/TDProjects'
import TDServiceLocation from './TechnicalDevelopment/TDServiceLocation'

const TechnicalDevelopement = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFF5EC] to-[#FDEAB2] w-full pb-32  ">
      <TD />
      <TDProjects />
      <TDServiceLocation />
    </div>
  )
}

export default TechnicalDevelopement