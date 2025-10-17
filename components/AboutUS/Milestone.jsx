import Image from 'next/image'
import React from 'react'

const Milestone = () => {
  return (
    <>
    
    <div className='flex justify-center items-center gap-10 flex-col my-20'>
    <div
          className="border-[2px] rounded-[44px] w-[450px] h-[60px] text-center py-1 font-semibold text-[25px] border-[#FFFFFF4D]"
          style={{
            background:
              "linear-gradient(261.45deg, rgba(255, 255, 255, 0.63) 37.39%, rgba(219, 213, 255, 0.63) 106.65%)",
              boxShadow: "0px 2.96px 5.03px 0px #00000040"

          }}
        >
          <p className="gradient-text-about text-[30px]">
            View Our Milestones
          </p>
        </div>
        <div className='mt-20'>
            <Image src="/milestone.svg" alt="milestone" width={1000} height={1000} className='w-[900px] h-[300px] object-cover' />
        </div>
    </div>
    </>
  )
}

export default Milestone