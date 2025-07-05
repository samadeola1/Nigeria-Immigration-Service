import React from 'react'
import { visa } from '../../db/misson'
import VisaCard from '../reuseable/VisaCard'

const VisaCategories = () => {
  return (
    <div className='lg:bg-[#DDEFE6] bg-gray-300 w-full py-29'>
      <div className='w-11/12 mx-auto container flex flex-col gap-[60px]'>
        <div className='text-center xl:px-[121px] flex flex-col gap-[18px]'>
          <h1 className='text-[28px] lg:text-[44px] font-semibold px-10 lg:font-bold text-[#212121]'>Nigeria Visa Categories</h1>
          <p className='text-[16px] lg:text-[20px] px-5 md:px-10 font-normal text-[#474747]'>Discover the visa type that fits your journey—whether it’s a short visit, temporary stay, or a permanent move. Explore your options below.</p>
        </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-[40px]  text-center'>
        {
        visa.map((item)=> (
            <div key={item.id}>
                  <VisaCard content={item}/>
            </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default VisaCategories