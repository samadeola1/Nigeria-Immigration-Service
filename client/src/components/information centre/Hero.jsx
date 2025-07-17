import React from 'react'
import img from '../../images/image 252.svg'

const Hero = () => {
  return (
    <div className='w-full info'>
        <div className=' container mx-auto'>
        <div className=' flex flex-col items-center text-center lg:text-left lg:items-start   '>
       <div className=' flex flex-col gap-[6px] lg:w-[70%] '>
         <h1 className='font-bold text-white lg:text-[60px] text-[28px] lg:leading-20'>Overstay <span className='text-[#00AA55] lg:text-white'>Amnesty</span> and Immigration Update</h1>
         <p className='text-[16px] lg:text-[24px] font-normal xl:w-[84%]  text-white'>Find out if you qualify for visa regularization, get key immigration updates, 
and access verified guidance—all in one place </p>
       </div>
          <div className='mt-4 '>
        <button className='bg-[#00AA55] hover:bg-green-700 transition-colors duration-200 px-[24px] py-[14px] rounded-md text-[18px] text-white font-semibold '>Check Eligibility</button>
       </div>
       </div>
     </div>
    </div>
  )
}

export default Hero