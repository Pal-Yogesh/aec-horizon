import React from 'react'
import DM from './DigitalM/DM'
import DMProjects from './DigitalM/DMProjects'
import DMServiceLocation from './DigitalM/DMServiceLocation'

const DigitalMarketing = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFF5EC] to-[#FDEAB2] w-full pb-32  ">
      <DM />
      <DMProjects />
      <DMServiceLocation />
    </div>
  )
}

export default DigitalMarketing