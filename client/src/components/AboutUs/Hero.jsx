import React from 'react'

const Hero = () => {
  return (
    <div className='Hero w-full text-white'>
      <div className=' container mx-auto hidden lg:block'>
       <div className='flex flex-col gap-3 '>
       <h1 className='lg:text-[44px] lg:font-bold xl:w-[45%] lg:w-[55%]'>A Legacy of Service and Structure</h1>
       <p className='text-[20px] font-normal xl:w-[45%] lg:w-[65%]'>The Nigeria Immigration Service (NIS) originated in 1958 from the Nigeria Police Force and was officially established as a distinct department in 1963. Its evolution reflects a legacy of structured migration control, professionalism, and national service</p>
       </div>
      </div>
      <div className='flex flex-col gap-3 lg:hidden text-center'>
       <h1 className='text-[28px] font-bold '>A Legacy of Service and Structure</h1>
       <p className='text-[20px] font-normal '>Founded in 1963, the Nigeria Immigration Service has evolved from its roots in the Police Force to lead structured migration and border control nationwide.</p>
       </div>
    </div>
  )
}

export default Hero