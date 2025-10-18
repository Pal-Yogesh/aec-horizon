import React from 'react'
import TD from './DigitalM/DM'
import TDProjects from './DigitalM/DMProjects'
import TDServiceLocation from './DigitalM/DMServiceLocation'

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