import React from 'react'
import TBD from './TBD/TBD'
import TBDProjects from './TBD/TBDProjects'
import TBDServiceLocation from './TBD/TBDServiceLocation'

const TechnicalDevelopement = () => {
  return (
    <div className="bg-gradient-to-b from-[#D5CBF0] to-[#E3DDFF] w-full pb-32  ">
      <TBD />
      <TBDProjects />
      <TBDServiceLocation />
    </div>
  )
}

export default TechnicalDevelopement