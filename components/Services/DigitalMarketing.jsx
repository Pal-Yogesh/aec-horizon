import React from 'react'
import DM from './DigitalMarketing/DM'
import DMProjects from './DigitalMarketing/DMProjects'
import DMServiceLocation from './DigitalMarketing/DMServiceLocation'

const DigitalMarketing = () => {
  return (
    <div className="bg-gradient-to-b from-[#D5CBF0] to-[#E3DDFF] w-full pb-32  ">
      <DM />
      <DMProjects />
      <DMServiceLocation />
    </div>
  )
}

export default DigitalMarketing