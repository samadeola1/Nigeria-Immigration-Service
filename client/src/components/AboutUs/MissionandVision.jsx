import React from 'react'
import { mission } from '../../db/misson'
import MissionCard from '../reuseable/MissionCard'
const MissionandVision = () => {
  return (
    <div className='w-full bg-white pb-[80px] lg:py-[80px] text-black'>
      <div className='w-11/12 container mx-auto flex flex-col gap-6'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='lg:text-[44px] md:text-[35px] text-[28px] font-bold px-5'>Our Mission and Vision</h1>
          <p className='text-[14px] md:text-[20px] font-normal lg:w-[72%]'>Guided by purpose and driven by service, our mission and vision define our commitment to secure, efficient, and people-focused immigration management</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:flex-row gap-[25px]  bg-white lg:text-left text-center'>
        {
        mission.map((item)=> (
            <div key={item.id}>
                  <MissionCard content={item} />
            </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default MissionandVision